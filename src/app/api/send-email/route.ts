import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email, name, message, organization, phone, company, type } = await request.json();

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_TO } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !EMAIL_TO) {
        console.error("Missing SMTP environment variables");
        return NextResponse.json({ message: "Server is not configured to send emails." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
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
      from: `"SyMetric Website" <${SMTP_USER}>`,
      to: EMAIL_TO,
      subject: subject,
      html: htmlBody,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ message: 'Failed to send email', error: errorMessage }, { status: 500 });
  }
}
