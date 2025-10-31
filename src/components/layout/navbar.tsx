
"use client";

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, User, Globe, ChevronRight, ChevronLeft } from 'lucide-react';
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
import type { NavItem as NavItemType } from '@/lib/types';
import { Input } from '../ui/input';


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || '#'}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-primary focus:text-primary",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


const MobileNavLink = ({ item, closeMobileMenu, onSubmenu }: { item: NavItemType, closeMobileMenu: () => void, onSubmenu: (items: NavItemType[], title: string) => void }) => {
  const pathname = usePathname();
  const isActive = item.href && pathname.startsWith(item.href);

  const handleClick = (e: React.MouseEvent) => {
    if (item.subItems && item.subItems.length > 0) {
      e.preventDefault();
      onSubmenu(item.subItems, item.name);
    } else {
      closeMobileMenu();
    }
  };

  return (
    <Link
      href={item.href || '#'}
      onClick={handleClick}
      className={cn(
        'flex items-center justify-between border-b w-full rounded-none py-3 text-lg font-medium transition-colors text-foreground hover:text-primary',
        isActive && 'text-primary'
      )}
    >
      <div className="flex flex-col">
        <span>{item.name}</span>
        {item.description && <span className="text-sm font-normal text-muted-foreground">{item.description}</span>}
      </div>
      {item.subItems && item.subItems.length > 0 && <ChevronRight className="h-5 w-5" />}
    </Link>
  );
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [mobileSubmenuStack, setMobileSubmenuStack] = React.useState<{items: NavItemType[], title: string}[]>([]);
  
  const pathname = usePathname();

  const productsAndServicesItem = navItems.find(item => item.name === 'Products and Services');
  
  const productsSubItem = productsAndServicesItem?.subItems?.find(item => item.name === 'Products');
  const servicesSubItem = productsAndServicesItem?.subItems?.find(item => item.name === 'Services');

  const productComponents = productsSubItem?.subItems?.map(subItem => {
    const solution = solutions.find(s => {
      const solutionSlug = subItem.href.split('/').pop();
      return s.slug === solutionSlug || (s.slug === 'clinical-trial-platform' && solutionSlug === 'clinical-trial-platform');
    });
    return {
      title: subItem.name,
      href: subItem.href,
      description: solution?.description || ''
    }
  });
  
  const serviceComponents = servicesSubItem?.subItems;

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setTimeout(() => setMobileSubmenuStack([]), 300);
  };

  const handleSubmenu = (items: NavItemType[], title: string) => {
    setMobileSubmenuStack(prev => [...prev, { items, title }]);
  };
  
  const handleBack = () => {
    setMobileSubmenuStack(prev => prev.slice(0, -1));
  };

  const currentSubmenu = mobileSubmenuStack[mobileSubmenuStack.length - 1];
  const menuContent = currentSubmenu ? currentSubmenu.items : navItems;


  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 border-b',
        isScrolled ? 'bg-card/95 backdrop-blur-lg' : 'bg-background'
      )}
    >
      <div className="container flex h-16 items-center">
        <div className="mr-6 hidden md:flex">
          <Logo />
        </div>
        
        <div className="flex items-center md:hidden flex-1 justify-between">
            <Logo />
             <div className="flex items-center">
                <Button variant="ghost" size="icon">
                    <Search className="h-6 w-6" />
                    <span className="sr-only">Search</span>
                </Button>
                <Button variant="ghost" size="icon">
                    <User className="h-6 w-6" />
                    <span className="sr-only">Account</span>
                </Button>
                <Button variant="ghost" size="icon">
                    <Globe className="h-6 w-6" />
                    <span className="sr-only">Language</span>
                </Button>
                <Sheet open={isMobileMenuOpen} onOpenChange={(open) => {
                  if (!open) {
                    closeMobileMenu();
                  } else {
                    setIsMobileMenuOpen(true);
                  }
                }}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="relative">
                            <Menu className="h-6 w-6" />
                             <span className={cn(
                                "absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1 bg-primary rounded-full transition-transform duration-300",
                                isMobileMenuOpen ? "scale-x-100" : "scale-x-0"
                            )}></span>
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full max-w-sm bg-card p-0 flex flex-col">
                        <SheetHeader className="p-4 border-b">
                          <SheetTitle className="sr-only">Main Menu</SheetTitle>
                          <SheetDescription className="sr-only">Site navigation menu</SheetDescription>
                          <div className="relative">
                            <Input placeholder="Search" className="h-12 text-base pl-4 pr-10 border-2 focus-visible:ring-primary" />
                            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
                          </div>
                        </SheetHeader>
                        {currentSubmenu && (
                            <div className="p-4 border-b">
                                <Button variant="ghost" onClick={handleBack} className="flex items-center text-lg font-bold p-0 h-auto">
                                    <ChevronLeft className="h-6 w-6 mr-2" />
                                    {mobileSubmenuStack.length > 1 ? mobileSubmenuStack[mobileSubmenuStack.length-2].title : 'Main Menu'}
                                </Button>
                            </div>
                        )}
                        <nav className="flex-1 space-y-1 px-4 overflow-y-auto">
                          {(menuContent || []).map((item) => (
                            <MobileNavLink key={item.name} item={item} closeMobileMenu={closeMobileMenu} onSubmenu={handleSubmenu} />
                          ))}
                        </nav>
                        <div className="p-4 mt-auto border-t">
                          <Button className="w-full h-14 text-lg justify-between bg-primary hover:bg-primary/90" asChild>
                              <Link href="/contact">
                                  Contact Us
                                  <ChevronRight className="h-6 w-6" />
                              </Link>
                          </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <NavigationMenu>
              <NavigationMenuList>
              {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                  {item.name === 'Products and Services' && productsAndServicesItem?.subItems ? (
                      <>
                      <NavigationMenuTrigger className={cn((pathname.startsWith('/solutions') || pathname.startsWith('/services')) && 'data-[state=closed]:text-primary')}>
                          {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                         <div className="grid md:w-[600px] lg:w-[700px] grid-cols-2 gap-x-8 p-6">
                            {productsSubItem && (
                                <div>
                                <h3 className="font-semibold text-lg text-foreground mb-3">
                                    <Link href={productsSubItem.href} className="hover:text-primary transition-colors">
                                    {productsSubItem.name}
                                    </Link>
                                </h3>
                                <ul className="grid gap-3">
                                    {(productComponents || []).map((component) => (
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
                            )}
                            {servicesSubItem && (
                                <div>
                                <h3 className="font-semibold text-lg text-foreground mb-3">
                                    <Link href={servicesSubItem.href} className="hover:text-primary transition-colors">
                                    {servicesSubItem.name}
                                    </Link>
                                </h3>
                                <ul className="grid gap-3">
                                    {(serviceComponents || []).map((component) => (
                                        <ListItem
                                        key={component.name}
                                        title={component.name}
                                        href={component.href}
                                        >
                                        {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                                </div>
                            )}
                         </div>
                      </NavigationMenuContent>
                      </>
                  ) : (
                    <NavigationMenuLink asChild active={pathname.startsWith(item.href)}>
                        <Link href={item.href} className={navigationMenuTriggerStyle()}>
                            {item.name}
                        </Link>
                    </NavigationMenuLink>
                  )}
                  </NavigationMenuItem>
              ))}
              </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center gap-x-1 ml-auto">
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
