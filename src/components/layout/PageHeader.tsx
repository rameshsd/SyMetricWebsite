"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


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
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);
      
      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY.current) {
          setIsHidden(true); 
        } else {
          setIsHidden(false);
        }
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;

      if (secondaryNav) {
        let currentSectionId = '';
        for (const navItem of secondaryNav) {
          const element = document.querySelector(navItem.href);
          if (element) {
            const rect = element.getBoundingClientRect();
            const offset = 80; // Adjusted offset for sticky header
            if (rect.top <= offset && rect.bottom >= offset) {
              currentSectionId = navItem.href;
              break;
            }
          }
        }
        
        if (!currentSectionId) {
             let closest = {id: '', distance: Infinity};
             for (const navItem of secondaryNav) {
                const element = document.querySelector(navItem.href);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const distance = Math.abs(rect.top - 80);
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
  
  const activeSectionLabel = secondaryNav?.find(item => item.href === activeSection)?.label || 'Overview';
  
  return (
    <>
      {/* Mobile Header */}
       <div className="md:hidden sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b">
         {secondaryNav && secondaryNav.length > 0 ? (
            <DropdownMenu open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center justify-between w-full p-4 text-left">
                  <div>
                    <h1 className="text-lg font-bold">{title}</h1>
                    <p className="text-sm text-muted-foreground">{activeSectionLabel}</p>
                  </div>
                  <ChevronDown className={cn("h-5 w-5 transition-transform", mobileNavOpen && "rotate-180")} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[calc(100vw-2rem)]">
                {secondaryNav.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(item.href);
                        if (element) {
                            const yOffset = -80; // height of the sticky header
                            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                            window.scrollTo({top: y, behavior: 'smooth'});
                        }
                        setActiveSection(item.href);
                        setMobileNavOpen(false);
                      }}
                      className={cn(activeSection === item.href && "font-bold text-primary")}
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
         ) : (
            <div className="container py-4">
                 {breadcrumb && (
                    <Link href={breadcrumb.href} className="flex items-center text-sm text-muted-foreground hover:text-primary mb-2">
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        {breadcrumb.label}
                    </Link>
                )}
                <h1 className="text-3xl font-bold">{title}</h1>
            </div>
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
                {showTitle &&
                  <h2 className="text-xl font-bold text-foreground whitespace-nowrap py-3">
                      {title}
                  </h2>
                }
                {secondaryNav && showTitle && (
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
                        const element = document.querySelector(tab.href);
                        if (element) {
                            const yOffset = -80;
                            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                            window.scrollTo({top: y, behavior: 'smooth'});
                        }
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