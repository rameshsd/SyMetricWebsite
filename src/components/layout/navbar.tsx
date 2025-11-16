
'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Search, User, Globe, ChevronRight, ChevronLeft, LogOut, MessageSquare } from 'lucide-react';
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
import { useUser, useAuth, initiateGoogleSignIn } from '@/firebase';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { EmailPasswordForm } from '@/components/auth/EmailPasswordForm';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';


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
      <div className="flex flex-col">
        <span>{item.name}</span>
      </div>
      {item.subItems && item.subItems.length > 0 && <ChevronRight className="h-5 w-5" />}
    </Link>
  );
};

function UserNav() {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleSignOut = async () => {
    if (auth) {
      await auth.signOut();
      router.push('/');
    }
  };

  const handleGoogleSignIn = async () => {
    if (auth) {
      try {
        await initiateGoogleSignIn(auth);
        setIsDialogOpen(false);
        router.push('/community');
      } catch (error) {
        console.error("Google Sign-in failed:", error);
      }
    }
  };

  const handleLoginSuccess = () => {
    setIsDialogOpen(false);
    router.push('/community');
  };

  if (isUserLoading) {
    return <div className="h-10 w-10 rounded-full bg-muted animate-pulse" />;
  }

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-10 w-10">
              {user.photoURL && <AvatarImage src={user.photoURL} alt={user.displayName || ''} />}
              <AvatarFallback>
                {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
              </AvatarFallback>
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
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
          <span className="sr-only">Account</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Welcome</DialogTitle>
          <DialogDescription>Sign in or create an account to join the community.</DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <Button variant="outline" className="w-full" onClick={handleGoogleSignIn}>
            <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 23.4 172.9 61.9l-76.2 64.5C308.6 102.3 279.2 88 248 88c-73.2 0-132.3 59.2-132.3 132.3s59.1 132.3 132.3 132.3c76.9 0 111.2-51.8 115.7-77.9H248v-62h239.5c.3 12.7.6 24.9.6 37.8z"></path></svg>
            Sign in with Google
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <EmailPasswordForm onLoginSuccess={handleLoginSuccess} />
        </div>
      </DialogContent>
    </Dialog>
  );
}


export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isHidden, setIsHidden] = React.useState(false);
  const lastScrollY = React.useRef(0);

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
        'sticky top-0 z-50 w-full transition-transform duration-300 border-b bg-secondary',
        isHidden ? '-translate-y-full' : 'translate-y-0'
      )}
    >
      <div className="container flex h-16 items-center">
        <div className="mr-6 hidden md:flex">
          <Logo />
        </div>
        
        <div className="flex items-center md:hidden flex-1 justify-between">
            <Logo />
             <div className="flex items-center">
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
                        <SheetHeader className="p-2 border-b flex flex-row justify-between items-center h-16">
                            <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                           <div className="flex items-center gap-2">
                             <Button variant="ghost" size="icon"><MessageSquare className="h-5 w-5" /></Button>
                             <UserNav />
                             <Button variant="ghost" size="icon"><Globe className="h-5 w-5" /></Button>
                           </div>
                           <div className="flex items-center">
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="relative">
                                    <Menu className="h-6 w-6" />
                                    <span className="absolute bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                                </Button>
                            </SheetTrigger>
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

        <div className="hidden md:flex items-center gap-x-1 ml-auto">
            <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
            </Button>
            <UserNav />
            <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Language</span>
            </Button>
        </div>
      </div>
    </header>
  );
}

    
