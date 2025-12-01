'use client';

import Link from 'next/link';
import {
  LayoutDashboard,
  GanttChartSquare,
  File,
  Edit,
  TrendingUp,
  Settings,
  Calendar,
  Mail,
  MessageSquare,
  Users
} from 'lucide-react';
import { Logo } from '../shared/logo';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const mainNav = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Analytics', href: '/admin/analytics', icon: GanttChartSquare },
  { name: 'Sales', href: '/admin/sales', icon: TrendingUp },
];

const contentNav = [
  { name: 'Pages', href: '/admin/pages', icon: File },
  { name: 'Content Editor', href: '/admin/content', icon: Edit },
];

const toolsNav = [
    { name: 'Calendar', href: '/admin/calendar', icon: Calendar },
    { name: 'Mail', href: '/admin/mail', icon: Mail },
    { name: 'Chat', href: '/admin/chat', icon: MessageSquare },
]

const managementNav = [
    { name: 'Users', href: '/admin/users', icon: Users },
]

const NavLink = ({ href, icon: Icon, name }: { href: string; icon: React.ElementType; name: string;}) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
         <li>
            <Link
                href={href}
                className={cn(
                'flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700',
                isActive ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-white' : ''
                )}
            >
                <Icon className="w-5 h-5 mr-3" />
                <span>{name}</span>
            </Link>
        </li>
    )
}

const NavGroup = ({ title, items }: { title: string; items: { name: string; href: string; icon: React.ElementType }[] }) => (
    <div className="mb-6">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">{title}</h3>
        <ul>
            {items.map((item) => (
                <NavLink key={item.name} {...item} />
            ))}
        </ul>
    </div>
)


export function Sidebar() {
  return (
    <aside className="w-64 flex-shrink-0 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex flex-col p-4 border-r border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-center py-4">
        <Logo />
      </div>
      <nav className="flex-1 overflow-y-auto">
        <NavGroup title="Main" items={mainNav} />
        <NavGroup title="Content" items={contentNav} />
        <NavGroup title="Tools" items={toolsNav} />
        <NavGroup title="Management" items={managementNav} />
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
