'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Search, Globe, ChevronRight, ChevronLeft, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
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
import { auth, useUser } from '@/firebase';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';

const ListItem = React.forwardRef<
  HTMLDivElement,
  { title: string; href: string; children: React.ReactNode; className?: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li ref={ref} {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href || '#'}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-primary focus:text-primary",
            className
          )}
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
      <span>{item.name}</span>
      {item.subItems && item.subItems.length > 0 && <ChevronRight className="h-5 w-5" />}
    </Link>
  );
};

function UserNav() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      router.push('/');
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };


  if (isUserLoading) {
    return <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />;
  }

  if (user) {
    return (
       <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.photoURL || undefined} alt={user.displayName || user.email || ''} />
              <AvatarFallback>{user.email?.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user.displayName || 'User'}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleSignOut}>
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  )
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [mobileSubmenuStack, setMobileSubmenuStack] = React.useState<{items: NavItemType[], title: string}[]>([]);
  const [mounted, setMounted] = React.useState(false);
  
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isHidden, setIsHidden] = React.useState(false);
  const lastScrollY = React.useRef(0);


  React.useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) { // Scrolling down
        setIsHidden(true);
      } else { // Scrolling up
        setIsHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        'sticky top-0 z-50 w-full border-b bg-secondary transition-transform duration-300',
        mounted && isScrolled && "shadow-sm",
        mounted && isHidden ? '-translate-y-full' : 'translate-y-0'
      )}
    >
      <div className="container flex h-16 items-center">
        <div className="mr-6 hidden md:flex">
          <Logo />
        </div>
        
        <div className="flex items-center md:hidden flex-1">
            <Logo />
        </div>

        <div className="hidden md:flex items-center justify-start flex-1">
          <NavigationMenu>
              <NavigationMenuList>
              {(navItems || []).map((item) => (
                  <NavigationMenuItem key={item.name}>
                  {item.href === '/solutions' && productsAndServicesItem?.subItems ? (
                      <>
                      <NavigationMenuTrigger className={cn((pathname.startsWith('/solutions') || pathname.startsWith('/services')) && 'data-[state=closed]:text-primary')}>
                          {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                         <div className="grid md:w-[600px] lg:w-[700px] grid-cols-2 gap-x-8 p-6">
                            {productsSubItem && (
                                <div>
                                <h3 className="font-semibold text-lg text-foreground mb-3">
                                    <Link href={productsSubItem.href || '#'} className="hover:text-primary transition-colors">
                                    {productsSubItem.name}
                                    </Link>
                                </h3>
                                <ul className="grid gap-3">
                                    {(productComponents || []).map((component) => (
                                        <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href!}
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
                                    <Link href={servicesSubItem.href || '#'} className="hover:text-primary transition-colors">
                                    {servicesSubItem.name}
                                    </Link>
                                </h3>
                                <ul className="grid gap-3">
                                    {(serviceComponents || []).map((component) => (
                                        <ListItem
                                        key={component.name}
                                        title={component.name}
                                        href={component.href!}
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
                    <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), pathname.startsWith(item.href) && 'text-primary')}>
                      <Link href={item.href}>
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  )}
                  </NavigationMenuItem>
              ))}
              </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-x-1 ml-auto">
            {/* Desktop icons */}
            <div className="hidden md:flex items-center gap-x-1">
                <Button variant="ghost" size="icon">
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                </Button>
                <Button variant="ghost" size="icon">
                    <Globe className="h-5 w-5" />
                    <span className="sr-only">Language</span>
                </Button>
                 <UserNav />
            </div>

            {/* Mobile icons */}
            <div className="flex items-center md:hidden">
                <Sheet open={isMobileMenuOpen} onOpenChange={(open) => {
                  if (!open) {
                    closeMobileMenu();
                  } else {
                    setIsMobileMenuOpen(true);
                  }
                }}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full max-w-sm bg-card p-0 flex flex-col">
                       <SheetHeader className="p-2 border-b flex flex-row justify-between items-center h-16">
                            <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon"><MessageSquare className="h-5 w-5" /></Button>
                                <Button variant="ghost" size="icon"><Globe className="h-5 w-5" /></Button>
                            </div>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <X className="h-6 w-6" />
                                    <span className="sr-only">Close menu</span>
                                </Button>
                            </SheetTrigger>
                        </SheetHeader>
                        
                        <div className="p-4">
                            <div className="relative">
                                <Input placeholder="Search" className="h-12 text-base pl-4 pr-10 rounded-full border-2 focus-visible:ring-primary" />
                                <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            </div>
                        </div>

                        {currentSubmenu && (
                            <div className="p-4 border-b">
                                <Button variant="ghost" onClick={handleBack} className="flex items-center text-lg font-bold p-0 h-auto">
                                    <ChevronLeft className="h-6 w-6 mr-2" />
                                    {mobileSubmenuStack.length > 1 ? mobileSubmenuStack[mobileSubmenuStack.length-2].title : 'Main Menu'}
                                </Button>
                                {currentSubmenu.title && <h2 className="text-xl font-bold mt-2">{currentSubmenu.title}</h2>}
                            </div>
                        )}
                        <nav className="flex-1 space-y-1 px-4 overflow-y-auto">
                          {(menuContent || []).map((item) => (
                            <MobileNavLink key={item.name} item={item} closeMobileMenu={closeMobileMenu} onSubmenu={handleSubmenu} />
                          ))}
                        </nav>

                        <div className="p-4 mt-auto">
                            <Button className="w-full h-14 text-lg justify-between bg-primary hover:bg-primary/90" asChild>
                              <Link href="/solutions">
                                  Explore SyMetric
                                  <ChevronRight className="h-6 w-6" />
                              </Link>
                          </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
