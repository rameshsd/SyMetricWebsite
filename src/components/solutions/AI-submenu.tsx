'use client';

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const submenuItems = [
    { label: 'AI solutions', href: '#' },
    { label: 'AI business resources', href: '#' },
    { label: 'Trustworthy AI', href: '#' },
    { label: 'News and insights', href: '#' },
    { label: 'AI in practice', href: '#' },
    { label: 'Customer stories', href: '#' },
    { label: 'FAQ', href: '#' }
];

export function AISubmenu() {
    const pathname = usePathname();

    return (
        <div className="bg-background border-b sticky top-16 z-40">
            <div className="container">
                <nav className="flex items-center justify-center -mb-px" aria-label="AI Submenu">
                    <div className="flex space-x-8 overflow-x-auto scrollbar-hide py-3">
                    {submenuItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "relative whitespace-nowrap text-sm font-medium transition-colors border-b-2",
                                pathname === item.href ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                    </div>
                </nav>
            </div>
        </div>
    );
}
