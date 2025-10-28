
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, User, Globe, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navItems, solutions } from '@/lib/data';
import { Logo } from '@/components/shared/logo';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from 'react';
import type { NavItem as NavItemType } from '@/lib/types';


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


const MobileNavLink = ({ item, closeMobileMenu }: { item: NavItemType, closeMobileMenu: () => void }) => {
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
  const pathname = usePathname();

  const productsSubitem = navItems.find(item => item.name === 'Products and Services')?.subItems?.find(sub => sub.name === 'Products');
  const servicesSubitem = navItems.find(item => item.name === 'Products and Services')?.subItems?.find(sub => sub.name === 'Services');
  
  const productComponents = productsSubitem?.subItems?.map(subItem => {
    const solution = solutions.find(s => s.slug === subItem.href.split('/').pop());
    return {
      title: subItem.name,
      href: subItem.href,
      description: solution?.description || ''
    }
  }) || [];

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
          
          <NavigationMenu className="hidden md:flex ml-10">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.name === 'Products and Services' ? (
                    <>
                      <NavigationMenuTrigger className={cn(pathname.startsWith(item.href) && 'text-primary')}>{item.name}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid grid-cols-2 gap-4 p-4 md:w-[600px] lg:w-[700px]">
                            <div className="col-span-1">
                                <h3 className="font-bold text-sm text-muted-foreground px-3 py-2">{productsSubitem?.name}</h3>
                                <ul className="grid gap-1">
                                    {productComponents.map((component) => (
                                        <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                        >
                                        {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-span-1">
                                 <h3 className="font-bold text-sm text-muted-foreground px-3 py-2">{servicesSubitem?.name}</h3>
                                 <ul className="grid gap-1">
                                    {servicesSubitem?.subItems?.map((subItem) => (
                                         <ListItem
                                            key={subItem.name}
                                            title={subItem.name}
                                            href={subItem.href}
                                        >
                                            {subItem.description}
                                        </ListItem>
                                    ))}
                                 </ul>
                            </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href} passHref asChild>
                      <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), pathname === item.href && 'text-primary')}>
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

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
