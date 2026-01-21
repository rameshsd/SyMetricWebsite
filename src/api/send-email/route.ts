
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { firebaseConfig } from '@/firebase/config';

// --- Rate Limiting Store ---
const rateLimitStore = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_COUNT = 10; // 10 requests per minute

function getClientIp(request: Request): string {
    const xff = request.headers.get('x-forwarded-for');
    if (xff) {
        return xff.split(',')[0].trim();
    }
    // Fallback for environments where x-forwarded-for is not present
    return request.headers.get('host') || 'unknown'; 
}

// --- Email Templating Logic ---

interface EmailDetails {
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
    organization?: string;
    message?: string;
    type: 'contact' | 'demo' | 'direct';
    to?: string;
    subject?: string;
    modulesOfInterest?: string[];
}

const syMetricLogoUrl = "https://symetricsystems.com/wp-content/uploads/2021/05/symetric.png";

const emailStyles = `
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; background-color: #f4f4f7; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #e0e0e0;}
    .header { background-color: #ffffff; padding: 24px; text-align: center; border-bottom: 1px solid #eeeeee; }
    .logo { max-width: 150px; }
    .content { padding: 32px; }
    .content h1 { color: #221266; font-size: 24px; margin: 0 0 16px; }
    .content p { color: #555555; line-height: 1.6; margin: 0 0 16px; }
    .details-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; background-color: #f9f9f9; border-radius: 4px; border: 1px solid #eeeeee; }
    .details-table td { padding: 12px 16px; border-bottom: 1px solid #eeeeee; }
    .details-table tr:last-child td { border-bottom: none; }
    .details-table td:first-child { font-weight: bold; color: #333; width: 120px; }
    .footer { background-color: #f4f4f7; padding: 24px; text-align: center; font-size: 12px; color: #888888; }
`;

const baseTemplate = (title: string, body: string) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>${emailStyles}</style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="${syMetricLogoUrl}" alt="SyMetric Logo" class="logo">
        </div>
        <div class="content">
            <h1>${title}</h1>
            ${body}
        </div>
        <div class="footer">
            &copy; ${new Date().getFullYear()} SyMetric SE. All rights reserved.<br>
            Bengaluru, India
        </div>
    </div>
</body>
</html>
`;

function generateSubmissionSummary(details: EmailDetails): string {
    let summaryHtml = '<table class="details-table">';
    if (details.name) summaryHtml += `<tr><td>Name:</td><td>${details.name}</td></tr>`;
    if (details.company) summaryHtml += `<tr><td>Company:</td><td>${details.company}</td></tr>`;
    if (details.organization) summaryHtml += `<tr><td>Organization:</td><td>${details.organization}</td></tr>`;
    if (details.modulesOfInterest && details.modulesOfInterest.length > 0) {
        summaryHtml += `<tr><td>Modules of Interest:</td><td>${details.modulesOfInterest.join(', ')}</td></tr>`;
    }
    if (details.message) summaryHtml += `<tr><td>Message:</td><td>${details.message}</td></tr>`;
    summaryHtml += '</table>';
    return summaryHtml;
}

function generateAdminNotificationHtml(details: EmailDetails): string {
    const title = details.type === 'contact' ? 'New Contact Form Submission' : 'New Demo Request';
    
    let detailsHtml = '<table class="details-table">';
    if (details.name) detailsHtml += `<tr><td>Name:</td><td>${details.name}</td></tr>`;
    if (details.email) detailsHtml += `<tr><td>Email:</td><td><a href="mailto:${details.email}">${details.email}</a></td></tr>`;
    if (details.phone) detailsHtml += `<tr><td>Phone:</td><td>${details.phone}</td></tr>`;
    if (details.company) detailsHtml += `<tr><td>Company:</td><td>${details.company}</td></tr>`;
    if (details.organization) detailsHtml += `<tr><td>Organization:</td><td>${details.organization}</td></tr>`;
    if (details.message) detailsHtml += `<tr><td>Message:</td><td>${details.message}</td></tr>`;
    if (details.modulesOfInterest && details.modulesOfInterest.length > 0) {
        detailsHtml += `<tr><td>Modules of Interest:</td><td>${details.modulesOfInterest.join(', ')}</td></tr>`;
    }
    detailsHtml += '</table>';
    
    const body = `
        <p>A new submission has been received through the website.</p>
        ${detailsHtml}
    `;

    return baseTemplate(title, body);
}

function generateUserAcknowledgementHtml(details: EmailDetails): string {
    const title = "Thank you for your inquiry!";
    const body = `
        <p>Hello ${details.name},</p>
        <p>We have successfully received your request and our team will be in touch with you shortly. Thank you for your interest in SyMetric.</p>
        <p>For your reference, here are the details you submitted:</p>
        ${generateSubmissionSummary(details)}
        <p>Best regards,<br>The SyMetric Team</p>
    `;
    return baseTemplate(title, body);
}

// --- End of Email Templating Logic ---

if (!getApps().length) {
  try {
    initializeApp(firebaseConfig);
  } catch (e) {
    console.error("Firebase initialization error in API route", e);
  }
}
const firestore = getFirestore();

async function getSmtpConfig() {
  try {
    const configDocRef = doc(firestore, 'configuration', 'smtp');
    const configDoc = await getDoc(configDocRef);
    if (!configDoc.exists()) {
      console.error("SMTP configuration not found in Firestore at /configuration/smtp.");
      return null;
    }
    return configDoc.data();
  } catch (error) {
    console.error("Error fetching SMTP configuration from Firestore:", error);
    return null;
  }
}

export async function POST(request: Request) {
  // --- Rate Limiting Logic ---
  const ip = getClientIp(request);
  const now = Date.now();
  const timestamps = rateLimitStore.get(ip) || [];

  const recentTimestamps = timestamps.filter(ts => now - ts < RATE_LIMIT_WINDOW_MS);

  if (recentTimestamps.length >= RATE_LIMIT_COUNT) {
    return NextResponse.json({ message: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  rateLimitStore.set(ip, [...recentTimestamps, now]);
  // --- End of Rate Limiting Logic ---
  
  try {
    const smtpConfig = await getSmtpConfig();

    if (!smtpConfig) {
        return NextResponse.json({ message: "Server is not configured to send emails. Please set SMTP configuration in the admin settings panel." }, { status: 500 });
    }

    const emailDetails: EmailDetails = await request.json();
    const { type } = emailDetails;
    const { smtpHost, smtpPort, smtpUser, smtpPass, emailTo } = smtpConfig as any;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || (type !== 'direct' && !emailTo)) {
        return NextResponse.json({ message: "SMTP configuration is incomplete. Please check all fields in the admin settings panel." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: Number(smtpPort) === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });
    
    if (type === 'direct') {
        const { to, subject, message } = emailDetails;
        if (!to || !subject || !message) {
            return NextResponse.json({ message: "Missing fields for direct email." }, { status: 400 });
        }
        const directMailOptions = {
            from: `"SyMetric Admin" <${smtpUser}>`,
            to: to,
            subject: subject,
            html: baseTemplate(subject, `<p>${message.replace(/\n/g, '<br>')}</p>`),
        };
        await transporter.sendMail(directMailOptions);
    } else {
        const { name, email } = emailDetails;
        if (!name || !email) {
            return NextResponse.json({ message: "Missing name or email for form submission." }, { status: 400 });
        }

        // 1. Send notification to admin
        const adminMailOptions = {
          from: `"SyMetric Website" <${smtpUser}>`,
          to: emailTo,
          subject: type === 'contact' ? `New Contact Form Submission from ${name}` : `New Demo Request from ${name}`,
          html: generateAdminNotificationHtml(emailDetails),
        };
        await transporter.sendMail(adminMailOptions);

        // 2. Send acknowledgment to user
        const userMailOptions = {
          from: `"SyMetric Systems" <${smtpUser}>`,
          to: email,
          subject: 'We have received your request',
          html: generateUserAcknowledgementHtml(emailDetails),
        };
        await transporter.sendMail(userMailOptions);
    }

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error("Email sending error:", error);
    
    let userMessage = 'Failed to send email. Please verify your SMTP credentials and ensure your email provider allows connections from this application.';
    if (error.code === 'EAUTH') userMessage = 'SMTP Authentication failed. Please verify your email and password/app password are correct in the admin settings.';
    else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') userMessage = 'Could not connect to the SMTP server. Please verify the SMTP Host and Port.';
    else if (error.code === 'EENVELOPE') userMessage = 'Email addresses might be invalid. Please check the recipient email and the sender configuration.';

    return NextResponse.json({ message: userMessage, error: error.message || 'An unknown error occurred' }, { status: 500 });
  }
}
