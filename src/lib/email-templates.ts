'use client';

interface EmailDetails {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    organization?: string;
    message?: string;
    type: 'contact' | 'demo';
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

export function generateAdminNotificationHtml(details: EmailDetails): string {
    const title = details.type === 'contact' ? 'New Contact Form Submission' : 'New Demo Request';
    
    let detailsHtml = '<table class="details-table">';
    detailsHtml += `<tr><td>Name:</td><td>${details.name}</td></tr>`;
    detailsHtml += `<tr><td>Email:</td><td><a href="mailto:${details.email}">${details.email}</a></td></tr>`;
    if (details.phone) detailsHtml += `<tr><td>Phone:</td><td>${details.phone}</td></tr>`;
    if (details.company) detailsHtml += `<tr><td>Company:</td><td>${details.company}</td></tr>`;
    if (details.organization) detailsHtml += `<tr><td>Organization:</td><td>${details.organization}</td></tr>`;
    if (details.message) detailsHtml += `<tr><td>Message:</td><td>${details.message}</td></tr>`;
    detailsHtml += '</table>';
    
    const body = `
        <p>A new submission has been received through the website.</p>
        ${detailsHtml}
    `;

    return baseTemplate(title, body);
}


export function generateUserAcknowledgementHtml(details: EmailDetails): string {
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

function generateSubmissionSummary(details: EmailDetails): string {
    let summaryHtml = '<table class="details-table">';
    summaryHtml += `<tr><td>Name:</td><td>${details.name}</td></tr>`;
    if (details.company) summaryHtml += `<tr><td>Company:</td><td>${details.company}</td></tr>`;
    if (details.organization) summaryHtml += `<tr><td>Organization:</td><td>${details.organization}</td></tr>`;
    if (details.message) summaryHtml += `<tr><td>Message:</td><td>${details.message}</td></tr>`;
    summaryHtml += '</table>';
    return summaryHtml;
}
