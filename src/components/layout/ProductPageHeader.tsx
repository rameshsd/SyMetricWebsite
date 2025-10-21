
"use client";

import { cn } from "@/lib/utils";
import { ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const secondaryNav = [
    { label: "Overview", href: "#" },
    { label: "Products", dropdown: true },
    { label: "Solutions", dropdown: true },
    { label: "Pricing", href: "#" },
    { label: "Use cases", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Resources", dropdown: true },
]

type ProductPageHeaderProps = {
  productName: string;
};

export function ProductPageHeader({ productName }: ProductPageHeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "sticky top-16 z-40 bg-background/80 backdrop-blur-lg border-b",
        isScrolled && "shadow-sm"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
            <div className="flex items-center text-sm text-muted-foreground mb-2">
                <ChevronRight className="h-4 w-4 transform rotate-180" />
                <Link href="/solutions" className="hover:text-primary">
                  All products
                </Link>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-foreground">{productName}</h1>
            </div>
        </div>
        
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {secondaryNav.map((tab) =>
                tab.dropdown ? (
                <DropdownMenu key={tab.label}>
                    <DropdownMenuTrigger asChild>
                        <button className="flex items-center gap-1 whitespace-nowrap py-3 px-1 border-b-2 border-transparent text-muted-foreground hover:text-foreground hover:border-border font-medium text-sm">
                            {tab.label} <ChevronDown className="h-4 w-4" />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Item 1</DropdownMenuItem>
                        <DropdownMenuItem>Item 2</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                ) : (
                <Link
                    key={tab.label}
                    href={tab.href!}
                    className={cn(
                        pathname === tab.href || (tab.label === 'Overview' && pathname.startsWith('/solutions'))
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

