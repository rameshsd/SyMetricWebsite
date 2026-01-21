
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { firebaseConfig } from '@/firebase/config';

// Initialize Firebase client SDK to read settings from Firestore
// This approach is used to meet the user requirement of a UI-only configuration.
// WARNING: This means the API route needs read access to the configuration document in Firestore.
// The firestore.rules have been updated to allow public read access to this specific document,
// which is a security risk. Use environment variables for production environments.
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
  try {
    const smtpConfig = await getSmtpConfig();

    if (!smtpConfig) {
        return NextResponse.json({ message: "Server is not configured to send emails. Please set SMTP configuration in the admin settings panel." }, { status: 500 });
    }

    const { email, name, message, organization, phone, company, type } = await request.json();

    const { smtpHost, smtpPort, smtpUser, smtpPass, emailTo } = smtpConfig as any;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !emailTo) {
        return NextResponse.json({ message: "SMTP configuration is incomplete. Please check all fields in the admin settings panel." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: Number(smtpPort) === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    let subject = '';
    let htmlBody = '';

    if (type === 'contact') {
        subject = `New Contact Form Submission from ${name}`;
        htmlBody = `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Organization:</strong> ${organization}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile:</strong> ${phone}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `;
    } else if (type === 'demo') {
        subject = `New Demo Request from ${name}`;
        htmlBody = `
            <h3>New Demo Request</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
        `;
    } else {
        return NextResponse.json({ message: "Invalid form type." }, { status: 400 });
    }

    const mailOptions = {
      from: `"SyMetric Website" <${smtpUser}>`,
      to: emailTo,
      subject: subject,
      html: htmlBody,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ message: 'Failed to send email. Check SMTP credentials.', error: errorMessage }, { status: 500 });
  }
}
