
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
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
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
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


const MobileNavLink = ({ item, closeMobileMenu, onSubmenu }: { item: NavItemType, closeMobileMenu: () => void, onSubmenu: (items: NavItemType[], title: string) => void }) => {
  const pathname = usePathname();
  const isActive = item.href && pathname.startsWith(item.href);

  return (
    <div
      onClick={() => {
        if (item.subItems) {
          onSubmenu(item.subItems, item.name);
        } else {
          closeMobileMenu();
        }
      }}
      className={cn(
        'flex items-center justify-between border-b w-full rounded-none py-3 text-lg font-medium transition-colors text-foreground hover:text-primary cursor-pointer',
        isActive && 'text-primary'
      )}
    >
      <Link href={item.href || '#'} className="flex flex-col">
        <span>{item.name}</span>
        {item.description && <span className="text-sm font-normal text-muted-foreground">{item.description}</span>}
      </Link>
      {item.subItems && <ChevronRight className="h-5 w-5" />}
    </div>
  );
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [mobileSubmenu, setMobileSubmenu] = React.useState<{items: NavItemType[], title: string} | null>(null);

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
  });

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setTimeout(() => setMobileSubmenu(null), 300);
  };
  
  const handleBack = () => {
    setMobileSubmenu(null);
  };

  const menuContent = mobileSubmenu ? mobileSubmenu.items : navItems;


  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 border-b',
        isScrolled ? 'bg-card/95 backdrop-blur-lg' : 'bg-background'
      )}
    >
      <div className="container flex h-16 items-center">
        <div className="mr-auto hidden md:flex">
          <Logo />
        </div>
        
        <div className="flex items-center md:hidden flex-1 justify-between">
            <Logo />
             <div className="flex items-center">
                <Button variant="ghost" size="icon">
                    <User className="h-6 w-6" />
                    <span className="sr-only">Account</span>
                </Button>
                <Button variant="ghost" size="icon">
                    <Globe className="h-6 w-6" />
                    <span className="sr-only">Language</span>
                </Button>
                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
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
                    <SheetContent side="right" className="w-full max-w-sm bg-card p-0 flex flex-col" onInteractOutside={(e) => { if(isMobileMenuOpen) e.preventDefault()}}>
                        <SheetHeader className="p-4 border-b">
                          <SheetTitle className="sr-only">Main Menu</SheetTitle>
                          <SheetDescription className="sr-only">Site navigation menu</SheetDescription>
                          <div className="relative">
                            <Input placeholder="Search" className="h-12 text-base pl-4 pr-10 border-2 focus-visible:ring-primary" />
                            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
                          </div>
                        </SheetHeader>
                        {mobileSubmenu && (
                            <div className="p-4 border-b">
                                <Button variant="ghost" onClick={handleBack} className="flex items-center text-lg font-bold p-0 h-auto">
                                    <ChevronLeft className="h-6 w-6 mr-2" />
                                    {mobileSubmenu.title}
                                </Button>
                            </div>
                        )}
                        <nav className="flex-1 space-y-1 px-4 overflow-y-auto">
                          {(menuContent || []).map((item) => (
                            <MobileNavLink key={item.name} item={item} closeMobileMenu={closeMobileMenu} onSubmenu={setMobileSubmenu} />
                          ))}
                        </nav>
                        <div className="p-4 mt-auto border-t">
                          <Button className="w-full h-14 text-lg justify-between bg-primary hover:bg-primary/90" asChild>
                              <Link href="#">
                                  Explore SyMetric
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
                  {item.name === 'Products and Services' && productsAndServicesItem ? (
                      <>
                      <NavigationMenuTrigger className={cn(pathname.startsWith(item.href) && 'data-[state=closed]:text-primary')}>
                          {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                          <div className="grid grid-cols-2 gap-4 p-4 md:w-[600px] lg:w-[700px]">
                              <div className="col-span-1">
                                  {productsSubitem && (
                                  <h3 className="font-bold text-sm text-muted-foreground px-3 py-2">
                                      {productsSubitem.name}
                                  </h3>
                                  )}
                                  <ul className="grid gap-1">
                                      {productComponents && productComponents.map((component) => (
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
                                      <h3 className="font-bold text-sm text-muted-foreground px-3 py-2">
                                          {servicesSubitem.name}
                                      </h3>
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
                      <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname.startsWith(item.href)}>
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  )}
                  </NavigationMenuItem>
              ))}
              </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center gap-x-0 ml-auto">
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
