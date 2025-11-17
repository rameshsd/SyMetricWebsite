
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import {
  LayoutDashboard,
  Users,
  Settings,
  ShieldCheck,
  BarChart2,
  LifeBuoy,
  Building,
  FileText,
  Minus,
  Plus,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Logo } from '../shared/logo';

const menuItems = [
  {
    name: 'Manage Studies',
    icon: LayoutDashboard,
    href: '/admin/studies',
    expandable: true
  },
  {
    name: 'Manage Organizations',
    icon: Building,
    href: '/admin/organizations',
    expandable: true
  },
  {
    name: 'Global Data Manager',
    icon: FileText,
    href: '#',
    expandable: true
  },
  {
    name: 'User Administration',
    icon: Users,
    href: '/admin/users',
    subItems: [
        { name: 'Manage Roles', href: '/admin/roles' },
        { name: 'Manage Users', href: '/admin/users' },
    ]
  },
  {
    name: 'Security and Compliance',
    icon: ShieldCheck,
    href: '/admin/security',
    expandable: true
  },
  {
    name: 'Reports',
    icon: BarChart2,
    href: '/admin/reports',
  },
  {
    name: 'Help and Support',
    icon: LifeBuoy,
    href: '/admin/support',
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex flex-col w-64 bg-gray-800 text-white shrink-0">
      <div className="flex items-center justify-center h-16 border-b border-gray-700">
        <Logo />
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1">
        <Accordion type="multiple" defaultValue={['User Administration']} className="w-full">
        {menuItems.map((item) => {
            if (item.subItems) {
                return (
                    <AccordionItem value={item.name} key={item.name} className="border-b-0">
                        <AccordionTrigger className="hover:no-underline hover:bg-gray-700 rounded-md text-white/80 [&[data-state=open]>div>#plus]:hidden [&[data-state=closed]>div>#minus]:hidden">
                           <div className="flex items-center justify-between w-full">
                             <div className="flex items-center">
                               <item.icon className="mr-3 h-5 w-5" />
                               {item.name}
                             </div>
                             <div>
                                <Plus id="plus" className="h-4 w-4" />
                                <Minus id="minus" className="h-4 w-4" />
                             </div>
                           </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-4">
                            <ul>
                            {item.subItems.map(subItem => (
                                <li key={subItem.name}>
                                     <Link
                                        href={subItem.href}
                                        className={cn(
                                        'flex items-center p-2 my-1 text-sm rounded-md transition-colors',
                                        pathname === subItem.href
                                            ? 'bg-blue-600 text-white'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                        )}
                                    >
                                        <div className="w-5 mr-3 flex justify-center">
                                            <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                                        </div>
                                        {subItem.name}
                                    </Link>
                                </li>
                            ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                )
            }
            return (
                <Link
                key={item.name}
                href={item.href}
                className={cn(
                    'flex items-center p-2 text-sm rounded-md transition-colors justify-between',
                    pathname === item.href
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                )}
                >
                    <div className="flex items-center">
                        <item.icon className="mr-3 h-5 w-5" />
                        {item.name}
                    </div>
                    {item.expandable && <Plus className="h-4 w-4" />}
                </Link>
            )
        })}
        </Accordion>
      </nav>
    </div>
  );
}
