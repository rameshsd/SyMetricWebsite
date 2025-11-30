
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type SecondaryNavItem = {
    label: string;
    href?: string;
    dropdown?: boolean;
    items?: { id: string; name: string; slug: string }[];
}

const secondaryNavTemplate: SecondaryNavItem[] = [
    { label: "Overview", href: "/solutions" },
    { label: "Applications", dropdown: true, items: [] },
    { label: "Pricing", href: "#" },
]

type ProductPageHeaderProps = {
  productName: string;
  solutions: {
    id: string;
    name: string;
    slug: string;
  }[];
};

export function ProductPageHeader({ productName, solutions }: ProductPageHeaderProps) {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const isSolutionsPage = pathname === '/solutions';

  const secondaryNav = secondaryNavTemplate.map(item => {
    if (item.dropdown && item.label === "Applications") {
      return { ...item, items: solutions };
    }
    return item;
  });

  React.useEffect(() => {
    const handleScroll = () => {
      if (isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll, true);
  }, [isDropdownOpen]);

  return (
    <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-lg border-b shadow-sm relative overflow-visible">
      <div className="container">
        <div className="py-4">
            <div className="flex items-center text-sm text-muted-foreground mb-2">
                <Link href="/solutions" className="hover:text-primary flex items-center">
                  <ChevronRight className="h-4 w-4 transform rotate-180" />
                  All products
                </Link>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-foreground">{productName}</h1>
            </div>
        </div>
        
        <nav className="-mb-px flex space-x-8 relative z-50" aria-label="Tabs">
            {secondaryNav.map((tab) =>
                tab.dropdown ? (
                <DropdownMenu key={tab.label} open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
                    <DropdownMenuTrigger asChild>
                        <button className="flex items-center gap-1 whitespace-nowrap py-3 px-1 border-b-2 border-transparent text-muted-foreground hover:text-foreground hover:border-border font-medium text-sm">
                            {tab.label} <ChevronDown className="h-4 w-4" />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="z-[9999]">
                      {tab.items && tab.items.length > 0 ? (
                        tab.items.map(item => (
                          <DropdownMenuItem key={item.id} asChild>
                            <Link href={item.slug === 'clinical-trial-platform' ? '/solutions/clinical-trial-platform' : `/solutions/${item.slug}`}>{item.name}</Link>
                          </DropdownMenuItem>
                        ))
                      ) : (
                        <DropdownMenuItem>No applications found</DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                </DropdownMenu>
                ) : (
                <Link
                    key={tab.label}
                    href={tab.href!}
                    className={cn(
                        (isSolutionsPage && tab.label === 'Overview')
                        ? "border-primary text-primary"
                        : "border-transparent text-muted-foreground hover:text-foreground hover:border-border",
                        "whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm"
                    )}
                >
                    {tab.label}
                </Link>
                )
            )}
        </nav>
      </div>
    </div>
  );
}
