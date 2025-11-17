
"use client";

import { cn } from "@/lib/utils";
import { ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type PageHeaderProps = {
  title: string;
  breadcrumb?: {
    href: string;
    label: string;
  };
  secondaryNav?: {
    label:string;
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
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const [activeSection, setActiveSection] = useState(secondaryNav?.[0]?.href || '');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);
      
      if (currentScrollY > 80) {
        if (currentScrollY > lastScrollY.current) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;

      // Active section highlighting
      if (secondaryNav) {
        let currentSection = '';
        for (const navItem of secondaryNav) {
          const element = document.querySelector(navItem.href);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              currentSection = navItem.href;
              break;
            }
          }
        }
        if (currentSection && currentSection !== activeSection) {
          setActiveSection(currentSection);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [secondaryNav, activeSection]);
  
  const currentActiveItem = secondaryNav?.find(item => item.href === activeSection) || secondaryNav?.[0];

  return (
    <div
      className={cn(
        "sticky top-16 z-30 bg-background/95 backdrop-blur-lg border-b transition-transform duration-300",
        isScrolled && "shadow-sm",
        isHidden ? '-translate-y-full' : 'translate-y-0'
      )}
    >
      <div className="container">
        {breadcrumb && (
          <div className="pt-3 flex items-center text-sm">
            <Link href={breadcrumb.href} className="flex items-center gap-1 text-muted-foreground hover:text-primary">
              <ChevronDown className="h-4 w-4" />
              {breadcrumb.label}
            </Link>
          </div>
        )}
        
        {secondaryNav && currentActiveItem && (
          <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2 pt-2">
             <h2 className="text-xl font-bold text-foreground whitespace-nowrap">
                <Link href={currentActiveItem.href} className="hover:text-primary">{currentActiveItem.label}</Link>
            </h2>
            <nav className="flex items-center gap-x-6 flex-wrap" aria-label="Secondary">
              {secondaryNav.filter(item => item.href !== activeSection).map((tab, index) => (
                <div key={tab.label} className="flex items-center space-x-6">
                    {index > 0 && <span className="text-muted-foreground/50">|</span>}
                    <Link
                      href={tab.href}
                      className="whitespace-nowrap text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      {tab.label}
                    </Link>
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
