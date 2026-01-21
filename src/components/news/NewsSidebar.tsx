'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

// Based on the provided image design
const sidebarLinkGroups = [
    {
        title: 'News Help',
        links: [
            { name: 'Purchases and downloads' },
            { name: 'Order history', isBold: true },
            { name: 'Download, install or activate Office' },
            { name: 'Returns & exchanges' },
            { name: 'Find tax invoices' },
            { name: 'Pre-orders' },
            { name: 'Find downloads and product keys' },
            { name: 'Track your order' },
        ]
    },
    {
        links: [
            { name: 'Guest checkout' },
            { name: 'Manage your billing' },
            { name: 'Help with purchases' },
            { name: 'Gift cards and account balance' },
        ]
    }
];

export function NewsSidebar() {
    const pathname = usePathname();

    return (
        <aside className="hidden md:block w-full md:w-64 flex-shrink-0">
            {sidebarLinkGroups.map((group, groupIndex) => (
                <div key={groupIndex} className={groupIndex > 0 ? 'mt-6' : ''}>
                    {group.title && <h2 className="text-xl font-semibold mb-4 text-foreground">{group.title}</h2>}
                    <nav className="flex flex-col gap-1 border-l pl-4">
                        {group.links.map((link) => (
                            <Link
                                key={link.name}
                                href="#"
                                className={cn(
                                    'py-1 text-sm text-muted-foreground hover:text-primary transition-colors',
                                    link.isBold && 'font-bold text-foreground',
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            ))}
        </aside>
    );
}
