
"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";

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

const INITIAL_VISIBLE_MOBILE_NAV = 4;

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
  const [mobileNavExpanded, setMobileNavExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);
      
      if (currentScrollY > 150) { // Start hide/show behavior after scrolling down a bit
        if (currentScrollY > lastScrollY.current) {
          setIsHidden(true); // Scrolling down
        } else {
          setIsHidden(false); // Scrolling up
        }
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;

      // Active section highlighting
      if (secondaryNav) {
        let currentSectionId = '';
        for (const navItem of secondaryNav) {
          const element = document.querySelector(navItem.href);
          if (element) {
            const rect = element.getBoundingClientRect();
            // A section is considered active if its top is within the top 150px of the viewport
            if (rect.top <= 150 && rect.bottom >= 150) {
              currentSectionId = navItem.href;
              break;
            }
          }
        }
        // If no section is in the sweet spot, find the one closest to the top
        if (!currentSectionId) {
             let closest = {id: '', distance: Infinity};
             for (const navItem of secondaryNav) {
                const element = document.querySelector(navItem.href);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const distance = Math.abs(rect.top - 150);
                    if (distance < closest.distance) {
                        closest = {id: navItem.href, distance: distance};
                    }
                }
             }
             currentSectionId = closest.id;
        }

        if (currentSectionId && currentSectionId !== activeSection) {
          setActiveSection(currentSectionId);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [secondaryNav, activeSection]);
  
  const visibleNavItems = mobileNavExpanded ? secondaryNav : secondaryNav?.slice(0, INITIAL_VISIBLE_MOBILE_NAV);
  
  return (
    <>
      {/* Mobile Header */}
      <div className="container md:hidden py-4 border-b">
        {breadcrumb && (
          <Link href={breadcrumb.href} className="flex items-center text-sm text-muted-foreground hover:text-primary mb-2">
            <ChevronLeft className="h-4 w-4 mr-1" />
            {breadcrumb.label}
          </Link>
        )}
        <h1 className="text-3xl font-bold">{title}</h1>
        {secondaryNav && (
          <>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-2 mt-4">
                {visibleNavItems && visibleNavItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                            setActiveSection(item.href);
                        }}
                        className={cn(
                            "text-muted-foreground border-l-2 pl-3 py-1 text-sm font-medium",
                            activeSection === item.href ? "border-primary text-primary" : "border-border"
                        )}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
            {secondaryNav.length > INITIAL_VISIBLE_MOBILE_NAV && (
              <Button 
                variant="link" 
                className="p-0 h-auto mt-4 text-primary"
                onClick={() => setMobileNavExpanded(!mobileNavExpanded)}
              >
                {mobileNavExpanded ? 'View Less' : 'View More'}
                {mobileNavExpanded ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
              </Button>
            )}
          </>
        )}
      </div>

      {/* Desktop Header */}
      <div
        className={cn(
          "sticky top-16 z-30 bg-background/95 backdrop-blur-lg border-b transition-transform duration-300 hidden md:block",
          isHidden ? '-translate-y-full' : 'translate-y-0'
        )}
      >
        <div className="container">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-x-6">
                <h2 className="text-xl font-bold text-foreground whitespace-nowrap py-3">
                    {title}
                </h2>
                {secondaryNav && (
                    <div className="border-l h-6"></div>
                )}
            </div>
          </div>
        </div>
         {secondaryNav && (
            <nav className="container flex items-center gap-x-6 -mt-2" aria-label="Secondary">
                {secondaryNav.map((tab) => (
                  <Link
                    key={tab.label}
                    href={tab.href}
                    onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(tab.href)?.scrollIntoView({ behavior: 'smooth' });
                        setActiveSection(tab.href);
                    }}
                    className={cn(
                        "relative whitespace-nowrap py-3 text-sm font-medium transition-colors",
                        activeSection === tab.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                    )}
                  >
                    {tab.label}
                    {activeSection === tab.href && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
                    )}
                  </Link>
                ))}
            </nav>
        )}
      </div>
    </>
  );
}
