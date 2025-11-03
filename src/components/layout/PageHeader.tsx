
"use client";

import { cn } from "@/lib/utils";
import { ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

type PageHeaderProps = {
  title: string;
  breadcrumb?: {
    href: string;
    label: string;
  };
  secondaryNav?: {
    label: string;
    href: string;
  }[];
  showTitle?: boolean;
};

export function PageHeader({
  title,
  breadcrumb,
  secondaryNav,
  showTitle = true,
}: PageHeaderProps) {
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
      <div className="container">
        {showTitle && (
          <div className="py-4">
            {breadcrumb && (
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
                <ChevronRight className="h-4 w-4 mx-1" />
                <Link href={breadcrumb.href} className="hover:text-primary">
                  {breadcrumb.label}
                </Link>
              </div>
            )}
            <h1 className="text-2xl font-bold text-foreground">{title}</h1>
          </div>
        )}
        {!showTitle && breadcrumb && (
            <div className="py-3 flex items-center justify-between">
                <div className="flex items-center text-sm">
                    <Link href={breadcrumb.href} className="flex items-center gap-1 text-muted-foreground hover:text-primary">
                        <ChevronDown className="h-4 w-4" />
                        {breadcrumb.label}
                    </Link>
                    <ChevronRight className="h-4 w-4 text-muted-foreground mx-1" />
                    <span className="font-semibold text-foreground">{title}</span>
                </div>
            </div>
        )}
        {secondaryNav && (
          <div className="overflow-x-auto scrollbar-hide">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {secondaryNav.map((tab) => (
                <Link
                  key={tab.label}
                  href={tab.href}
                  className={cn(
                    "whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                  )}
                >
                  {tab.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
