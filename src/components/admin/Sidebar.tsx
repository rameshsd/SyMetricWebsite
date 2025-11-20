
'use client';

import Link from 'next/link';
import {
  LayoutDashboard,
  Table,
  HelpCircle,
  Calendar,
  MessageSquare,
  Mail,
  Users,
  FileText,
  GanttChartSquare,
  Lock,
  Clock,
  Settings,
  Badge,
  File,
} from 'lucide-react';
import { Logo } from '../shared/logo';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const mainNav = [
  { name: 'Dashboards', href: '/admin', icon: LayoutDashboard },
  { name: 'Analytics', href: '/admin/analytics', icon: GanttChartSquare },
  { name: 'Pages', href: '/admin/pages', icon: File },
];

const appNav = [
  { name: 'All-In-One Table', href: '#', icon: Table },
  { name: 'Help Center', href: '#', icon: HelpCircle },
  { name: 'Calendar', href: '#', icon: Calendar, badge: 12 },
  { name: 'Chat', href: '#', icon: MessageSquare, badge: 16 },
  { name: 'Mailbox', href: '#', icon: Mail },
  { name: 'Social', href: '#', icon: Users },
  { name: 'WYSIWYG Editor', href: '#', icon: FileText },
  { name: 'Contacts', href: '#', icon: Users },
  { name: 'Scrumboard', href: '#', icon: GanttChartSquare, isNew: true },
];

const pageNav = [
    { name: 'Authentication', href: '#', icon: Lock },
    { name: 'Coming Soon', href: '#', icon: Clock },
]

export function Sidebar() {
    const pathname = usePathname();
  return (
    <aside className="w-64 flex-shrink-0 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex flex-col p-4 border-r border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-center py-4">
        <Logo />
      </div>
      <nav className="flex-1 overflow-y-auto">
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">Dashboards</h3>
          <ul>
            {mainNav.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700',
                    pathname === item.href ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-white' : ''
                  )}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">Apps</h3>
          <ul>
            {appNav.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    <div className="flex items-center">
                        <item.icon className="w-5 h-5 mr-3" />
                        <span>{item.name}</span>
                    </div>
                    {item.badge && <Badge className="bg-blue-500 text-white h-5 w-5 text-xs flex items-center justify-center p-0">{item.badge}</Badge>}
                    {item.isNew && <Badge variant="secondary" className="text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300">NEW</Badge>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">Pages</h3>
          <ul>
            {pageNav.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="pt-4 mt-auto border-t border-gray-200 dark:border-gray-700">
        <Link href="#" className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700">
            <Settings className="w-5 h-5 mr-3" />
            <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
}

    