
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
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const [activeSection, setActiveSection] = useState(secondaryNav?.[0]?.href || '');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide or show the header based on scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) { // 80 is main header height
        setIsHidden(true); 
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = currentScrollY;

      // Update active section based on scroll position
      if (secondaryNav) {
        const offset = (headerRef.current?.offsetHeight || 0) + 80 + 24; // main nav + this header + buffer
        
        const sectionPositions = secondaryNav.map(item => {
          const el = document.querySelector(item.href);
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
  }, [secondaryNav, activeSection]);
  
  const activeSectionLabel = secondaryNav?.find(item => item.href === activeSection)?.label || title;
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
          const yOffset = -((headerRef.current?.offsetHeight || 0) + 80);
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({top: y, behavior: 'smooth'});
      }
      setActiveSection(href);
      setMobileNavOpen(false);
  };

  return (
    <div
        ref={headerRef}
        className={cn(
            "sticky z-30 border-b bg-background/95 backdrop-blur-lg transition-transform duration-300",
            isHidden ? '-translate-y-full' : 'translate-y-0',
            // Sets top position based on main nav height
            "top-16" 
      )}>

        <div className="container">
            {/* Breadcrumb */}
            {breadcrumb && (
                <div className="pt-4 pb-2 text-sm text-muted-foreground">
                    <Link href={breadcrumb.href} className="hover:text-primary">
                        {breadcrumb.label}
                    </Link>
                </div>
            )}

            {/* Title */}
            <div className={cn("flex items-center justify-between", breadcrumb ? "pb-4" : "py-4")}>
                <h1 className="text-3xl font-bold">{title}</h1>
            </div>

            {/* Mobile Dropdown Nav */}
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

            {/* Desktop Nav */}
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
  );
}
