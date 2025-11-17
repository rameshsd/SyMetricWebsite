
'use client';

import { usePathname } from 'next/navigation';
import { AdminSidebar } from './sidebar';
import { AdminHeader } from './header';
import { Navbar } from '../layout/navbar';
import { Footer } from '../layout/footer';

export function AdminLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith('/admin');

  if (isAdminPage) {
    return (
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        <AdminSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <AdminHeader />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 p-8">
            {children}
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
