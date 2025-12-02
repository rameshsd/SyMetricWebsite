
"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

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
    <>
      {/* Mobile Header - Always visible on mobile, not sticky */}
      <div className="container md:hidden py-4 border-b">
        {breadcrumb && (
          <Link href={breadcrumb.href} className="flex items-center text-sm text-muted-foreground hover:text-primary mb-2">
            <ChevronLeft className="h-4 w-4 mr-1" />
            {breadcrumb.label}
          </Link>
        )}
        <h1 className="text-3xl font-bold">{title}</h1>
        {secondaryNav && (
            <nav className="grid grid-cols-2 gap-x-6 gap-y-2 mt-4">
                {secondaryNav.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className={cn(
                            "text-muted-foreground border-l-2 pl-3 py-1 text-sm font-medium",
                            activeSection === item.href ? "border-primary text-primary" : "border-border"
                        )}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        )}
      </div>

      {/* Desktop Header - Sticky */}
      <div
        className={cn(
          "sticky top-16 z-30 bg-background/95 backdrop-blur-lg border-b transition-transform duration-300 hidden md:block",
          isScrolled && "shadow-sm",
          isHidden ? '-translate-y-full' : 'translate-y-0'
        )}
      >
        <div className="container">
          <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2 py-3">
             <h2 className="text-xl font-bold text-foreground whitespace-nowrap">
                {showTitle ? title : currentActiveItem?.label}
            </h2>
            {secondaryNav && (
              <nav className="flex items-center gap-x-6 flex-wrap" aria-label="Secondary">
                {secondaryNav.map((tab, index) => (
                  <div key={tab.label} className="flex items-center space-x-6">
                      {index > 0 && <span className="text-muted-foreground/50">|</span>}
                      <Link
                        href={tab.href}
                        className={cn(
                            "whitespace-nowrap text-sm font-medium transition-colors",
                            activeSection === tab.href ? "text-primary font-bold" : "text-muted-foreground hover:text-primary"
                        )}
                      >
                        {tab.label}
                      </Link>
                  </div>
                ))}
              </nav>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
