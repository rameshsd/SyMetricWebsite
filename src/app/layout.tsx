import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase';
import { AdminLayoutWrapper } from '@/components/admin/AdminLayoutWrapper';

export const metadata: Metadata = {
  title: 'SyMetric - Transforming Clinical Research with Technology',
  description: 'SyMetric empowers researchers, CROs, and sponsors with end-to-end digital solutions for modern clinical research.',
  keywords: 'Clinical Trials, eTMF, eCRF, Digital Research Platform, Clinical Research, Healthcare Technology, Life Sciences',
  icons: {
    icon: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth overflow-x-hidden scroll-mt-32">
      <body>
        <FirebaseClientProvider>
          <AdminLayoutWrapper>{children}</AdminLayoutWrapper>
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
