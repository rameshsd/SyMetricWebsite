
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { firebaseConfig } from '@/firebase/config';
import { generateAdminNotificationHtml, generateUserAcknowledgementHtml } from '@/lib/email-templates';

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

    const emailDetails = await request.json();
    const { email, name, type } = emailDetails;

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


    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ message: 'Failed to send email. Check SMTP credentials.', error: errorMessage }, { status: 500 });
  }
}
