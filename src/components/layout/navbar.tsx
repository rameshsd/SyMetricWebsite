
"use client";

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, User, Globe, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';
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
import type { NavItem as NavItemType } from '@/lib/types';
import { Input } from '../ui/input';


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
              "flex w-full items-center justify-between rounded-md py-3 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground hover:no-underline",
              pathname.startsWith(item.href) ? 'text-primary' : 'text-foreground'
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
        'flex items-center justify-between border-b w-full rounded-none py-3 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
        pathname === item.href ? 'text-primary' : 'text-foreground'
      )}
    >
      {item.name}
      <ChevronRight className="h-5 w-5" />
    </Link>
  );
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const productsAndServicesItem = navItems.find(item => item.name === 'Products and Services');
  const productsSubitem = productsAndServicesItem?.subItems?.find(sub => sub.name === 'Products');
  const servicesSubitem = productsAndServicesItem?.subItems?.find(sub => sub.name === 'Services');
  
  const productComponents = productsSubitem?.subItems?.map(subItem => {
    const solution = solutions.find(s => {
      const solutionSlug = subItem.href.split('/').pop();
      return s.slug === solutionSlug || (s.slug === 'clinical-trial-platform' && solutionSlug === 'clinical-trial-platform');
    });
    return {
      title: subItem.name,
      href: subItem.href,
      description: solution?.description || ''
    }
  }) || [];

  React.useEffect(() => {
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
      <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center md:hidden flex-1">
            <div className="mr-auto">
              <Logo />
            </div>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full max-w-sm bg-card p-0 flex flex-col">
                  <SheetHeader className="p-4 border-b">
                    <SheetTitle className="sr-only">Main Menu</SheetTitle>
                    <SheetDescription className="sr-only">Site navigation menu.</SheetDescription>
                    <div className="flex items-center justify-between">
                      <Logo />
                       <SheetTrigger asChild>
                         <Button variant="ghost" size="icon">
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close menu</span>
                          </Button>
                      </SheetTrigger>
                    </div>
                  </SheetHeader>
                  <div className="p-4">
                    <div className="relative">
                      <Input placeholder="Search" className="h-12 text-base pl-4 pr-10 border-2 focus-visible:ring-primary" />
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
                    </div>
                  </div>
                  <nav className="flex-1 space-y-1 px-4">
                    {navItems.map((item) => (
                      <MobileNavLink key={item.name} item={item} closeMobileMenu={closeMobileMenu} />
                    ))}
                  </nav>
                  <div className="p-4 mt-auto">
                    <Button className="w-full h-12 text-lg" asChild>
                        <Link href="#">Explore SyMetric</Link>
                    </Button>
                  </div>
              </SheetContent>
            </Sheet>
          </div>
          
          <div className="hidden md:flex items-center">
            <Logo />
          </div>
          
          <NavigationMenu className="hidden md:flex ml-10">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.name === 'Products and Services' && productsAndServicesItem ? (
                    <>
                      <NavigationMenuTrigger className={cn(pathname.startsWith(item.href) && 'text-primary')}>
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid grid-cols-2 gap-4 p-4 md:w-[600px] lg:w-[700px]">
                            <div className="col-span-1">
                                {productsSubitem && (
                                  <Link href={productsSubitem.href} className="font-bold text-sm text-muted-foreground px-3 py-2 hover:text-primary transition-colors">
                                    <h3>{productsSubitem.name}</h3>
                                  </Link>
                                )}
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
                                 {servicesSubitem && (
                                    <Link href={servicesSubitem.href} className="font-bold text-sm text-muted-foreground px-3 py-2 hover:text-primary transition-colors">
                                      <h3>{servicesSubitem.name}</h3>
                                    </Link>
                                 )}
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
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink active={pathname === item.href} className={cn(navigationMenuTriggerStyle())}>
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden md:flex flex-1 items-center justify-end space-x-2">
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
      </div>
    </header>
  );
}

    