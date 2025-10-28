
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, User, Globe, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navItems } from '@/lib/data';
import { Logo } from '@/components/shared/logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from '@/components/ui/dropdown-menu';
import type { NavItem } from '@/lib/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const NavLink = ({ item, closeMobileMenu }: { item: NavItem, closeMobileMenu: () => void }) => {
  const pathname = usePathname();

  if (item.subItems) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary px-3 py-2 flex items-center gap-1',
              pathname.startsWith(item.href) ? 'text-primary' : 'text-foreground/60'
            )}
          >
            {item.name}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64">
          {item.subItems.map((subItem) => (
             subItem.subItems ? (
                <DropdownMenuSub key={subItem.name}>
                  <DropdownMenuSubTrigger>
                    {subItem.name}
                    <ChevronRight className="ml-auto h-4 w-4" />
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      {subItem.subItems.map((nestedItem) => (
                        <DropdownMenuItem key={nestedItem.name} asChild>
                          <Link href={nestedItem.href}>{nestedItem.name}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
             ) : (
                <DropdownMenuItem key={subItem.name} asChild>
                  <Link href={subItem.href}>{subItem.name}</Link>
                </DropdownMenuItem>
             )
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        'text-sm font-medium transition-colors hover:text-primary',
        pathname === item.href ? 'text-primary' : 'text-foreground/60'
      )}
    >
      {item.name}
    </Link>
  );
};

const MobileNavLink = ({ item, closeMobileMenu }: { item: NavItem, closeMobileMenu: () => void }) => {
  const pathname = usePathname();

  if (item.subItems) {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={item.name} className="border-b-0">
          <AccordionTrigger
            className={cn(
              "flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
              pathname.startsWith(item.href) ? 'bg-accent text-accent-foreground' : 'text-foreground'
            )}
          >
            {item.name}
          </AccordionTrigger>
          <AccordionContent className="pb-0 pl-4">
            {item.subItems.map((subItem) => (
              <MobileNavLink key={subItem.name} item={subItem} closeMobileMenu={closeMobileMenu} />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={closeMobileMenu}
      className={cn(
        'block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
        pathname === item.href ? 'bg-accent text-accent-foreground' : 'text-foreground'
      )}
    >
      {item.name}
    </Link>
  );
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 border-b',
        isScrolled ? 'bg-card/95 backdrop-blur-lg' : 'bg-background'
      )}
    >
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-2 ml-10">
            {navItems.map((item) => (
              <NavLink key={item.name} item={item} closeMobileMenu={closeMobileMenu} />
            ))}
          </nav>
          <div className="hidden md:flex flex-1 items-center justify-end space-x-2">
             <Link href="#" className="text-sm font-medium text-foreground/60 hover:text-primary pr-4">
                Explore SyMetric
            </Link>
            <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
            </Button>
             <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Language</span>
            </Button>
          </div>
          <div className="flex items-center md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-card p-0">
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between p-4 border-b">
                    <Logo />
                    <SheetTrigger asChild>
                       <Button variant="ghost" size="icon">
                          <X className="h-6 w-6" />
                          <span className="sr-only">Close menu</span>
                        </Button>
                    </SheetTrigger>
                  </div>
                  <nav className="flex-1 space-y-1 p-4">
                    {navItems.map((item) => (
                      <MobileNavLink key={item.name} item={item} closeMobileMenu={closeMobileMenu} />
                    ))}
                  </nav>
                   <div className="mt-auto p-4 border-t space-y-4">
                     <Link href="#" className="block text-base font-medium text-foreground hover:text-primary">
                        Explore SyMetric
                    </Link>
                     <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="w-auto h-auto p-0">
                            <Search className="h-6 w-6" />
                            <span className="sr-only">Search</span>
                        </Button>
                        <Button variant="ghost" size="icon" className="w-auto h-auto p-0">
                            <User className="h-6 w-6" />
                            <span className="sr-only">Account</span>
                        </Button>
                         <Button variant="ghost" size="icon" className="w-auto h-auto p-0">
                            <Globe className="h-6 w-6" />
                            <span className="sr-only">Language</span>
                        </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

    