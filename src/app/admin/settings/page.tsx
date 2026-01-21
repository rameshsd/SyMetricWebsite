'use client';

import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const envExample = `
# Email configuration for contact forms
# This can be a Gmail account with an App Password, or another SMTP provider.
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
EMAIL_TO=recipient-email@example.com
`;

export default function SettingsPage() {
    return (
        <div className="space-y-8">
            <SectionTitle title="Settings" description="Configure application settings." />
            <Card>
                <CardHeader>
                    <CardTitle>Email Notifications</CardTitle>
                    <CardDescription>
                        To enable email notifications for the contact and demo request forms,
                        you need to configure SMTP settings on your server environment.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p>
                        Your application uses Nodemailer to send emails. For security reasons, credentials are not stored in the database.
                        Instead, you must set the following environment variables in your deployment environment (e.g., in a <code>.env.local</code> file at the root of your project).
                    </p>
                    <p>
                        If you are using Gmail, you will need to generate an "App Password". You can find instructions on how to do that in your Google Account security settings.
                    </p>
                    <div>
                        <h4 className="font-semibold mb-2">Environment Variables</h4>
                        <div className="p-4 bg-muted rounded-md text-sm text-muted-foreground font-mono whitespace-pre-wrap overflow-x-auto">
                            {envExample.trim()}
                        </div>
                    </div>
                     <p>
                        After setting these variables, you will need to restart your server for the changes to take effect.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
