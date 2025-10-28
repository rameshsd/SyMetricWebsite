

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
    { label: "Applications", dropdown: true, items: [] as { id: string; name: string; slug: string }[] },
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
  const [isScrolled, setIsScrolled] = useState(false);
  const isSolutionsPage = pathname === '/solutions';

  const applicationsNav = secondaryNav.map(item => {
    if (item.dropdown && item.label === "Applications") {
      return {
        ...item,
        items: solutions.map(s => ({id: s.id, name: s.name, slug: s.slug}))
      };
    }
    return item;
  });


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
        
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {applicationsNav.map((tab) =>
                tab.dropdown ? (
                <DropdownMenu key={tab.label}>
                    <DropdownMenuTrigger asChild>
                        <button className="flex items-center gap-1 whitespace-nowrap py-3 px-1 border-b-2 border-transparent text-muted-foreground hover:text-foreground hover:border-border font-medium text-sm">
                            {tab.label} <ChevronDown className="h-4 w-4" />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {tab.items && tab.items.length > 0 ? (
                        tab.items.map(item => (
                          <DropdownMenuItem key={item.id} asChild>
                            <Link href={item.slug === 'clinical-trial-platform' ? '/solutions/clinical-trial-platform' : `/solutions/${item.slug}`}>{item.name}</Link>
                          </DropdownMenuItem>
                        ))
                      ) : (
                        <>
                          <DropdownMenuItem>Item 1</DropdownMenuItem>
                          <DropdownMenuItem>Item 2</DropdownMenuItem>
                        </>
                      )}
                    </DropdownMenuContent>
                </DropdownMenu>
                ) : (
                <Link
                    key={tab.label}
                    href={tab.href!}
                    className={cn(
                        (isSolutionsPage || pathname.endsWith(productName.toLowerCase().replace(/ /g, '-'))) && tab.label === 'Overview'
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
