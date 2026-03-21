
"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
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
  const [activeSection, setActiveSection] = useState('');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Measure the height of the header content to create a placeholder
  useEffect(() => {
    const headerElement = headerRef.current;
    if (headerElement) {
      const resizeObserver = new ResizeObserver(() => {
        setHeaderHeight(headerElement.offsetHeight);
      });
      resizeObserver.observe(headerElement);
      return () => resizeObserver.disconnect();
    }
  }, []);


  useEffect(() => {
    if (secondaryNav && secondaryNav.length > 0) {
      setActiveSection(secondaryNav[0].href);
    }
  }, [secondaryNav]);

  useEffect(() => {
    const handleScroll = () => {
      if (secondaryNav) {
        const offset = headerHeight + 64 + 24; 
        
        const sectionPositions = secondaryNav.map(item => {
          const el = item.href.length > 1 ? document.querySelector(item.href) : null;
          return { id: item.href, top: el ? el.getBoundingClientRect().top + window.scrollY : -Infinity };
        });

        const currentSection = sectionPositions.reduce((prev, curr) => {
            if (curr.top <= window.scrollY + offset && curr.top > (prev.top > -Infinity ? prev.top : -Infinity)) {
              return curr;
            }
            return prev;
        }, { id: '', top: -Infinity });

        if (currentSection.id && currentSection.id !== activeSection) {
          setActiveSection(currentSection.id);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [secondaryNav, activeSection, headerHeight]);
  
  const activeSectionLabel = secondaryNav?.find(item => item.href === activeSection)?.label || title;
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.length <= 1) {
        e.preventDefault();
        setMobileNavOpen(false);
        return;
      }
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
          const yOffset = -(headerHeight + 64);
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({top: y, behavior: 'smooth'});
      }
      setActiveSection(href);
      setMobileNavOpen(false);
  };

  return (
    <div style={{ height: headerHeight > 0 ? `${headerHeight}px` : 'auto' }}>
      <div
          ref={headerRef}
          className={cn(
              "sticky w-full z-30 border-b bg-background/95 backdrop-blur-lg",
              "top-16" 
        )}>

          <div className="container">
              {breadcrumb && (
                  <div className="pt-4 pb-2 text-sm text-muted-foreground">
                      <Link href={breadcrumb.href} className="hover:text-primary">
                          {breadcrumb.label}
                      </Link>
                  </div>
              )}

              <div className={cn("flex items-center justify-between", breadcrumb ? "pb-4" : "py-4", !showTitle && "hidden")}>
                  <h1 className="text-3xl font-bold">{title}</h1>
              </div>

              <div className="md:hidden">
                  {secondaryNav && secondaryNav.length > 0 && (
                  <DropdownMenu open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
                  <DropdownMenuTrigger asChild>
                      <button className="flex items-center justify-between w-full pb-3 text-left">
                          <span className="text-lg font-semibold text-primary">{activeSectionLabel}</span>
                          <ChevronDown className={cn("h-5 w-5 text-primary transition-transform", mobileNavOpen && "rotate-180")} />
                      </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-[calc(100vw-2rem)]">
                      {secondaryNav.map((item) => (
                      <DropdownMenuItem key={item.label} asChild>
                          <Link
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className={cn("font-medium", activeSection === item.href && "text-primary")}
                          >
                          {item.label}
                          </Link>
                      </DropdownMenuItem>
                      ))}
                  </DropdownMenuContent>
                  </DropdownMenu>
                  )}
              </div>

              {secondaryNav && (
                  <nav className="hidden md:flex items-center gap-x-8 -mb-px" aria-label="Secondary">
                      {secondaryNav.map((tab) => (
                      <Link
                          key={tab.label}
                          href={tab.href}
                          onClick={(e) => handleNavClick(e, tab.href)}
                          className={cn(
                              "relative whitespace-nowrap py-3 text-sm font-medium transition-colors border-b-2",
                              activeSection === tab.href ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                          )}
                      >
                          {tab.label}
                      </Link>
                      ))}
                  </nav>
              )}
          </div>
      </div>
    </div>
  );
}
