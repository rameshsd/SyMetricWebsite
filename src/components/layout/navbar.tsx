
'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Search, User, Globe, ChevronRight, ChevronLeft, LogOut, MessageSquare, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navItems } from '@/lib/data';
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
import { useUser, useAuth } from '@/firebase';
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
import { searchableData } from '@/lib/search-data';


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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
  const auth = useAuth();
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleSignOut = async () => {
    if (auth) {
      await auth.signOut();
      router.push('/');
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
    const isAdmin = user.email === 'rameshdodamani22@gmail.com';
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-10 w-10">
              {user.photoURL && <AvatarImage src={user.photoURL} alt={user.displayName || ''} />}
              <AvatarFallback>
                {user.displayName ? user.displayName.charAt(0).toUpperCase() : (user.email ? user.email.charAt(0).toUpperCase() : 'U')}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user.displayName || 'User'}</p>
              {user.email && <p className="text-xs leading-none text-muted-foreground">{user.email}</p>}
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {isAdmin && (
            <DropdownMenuItem asChild>
              <Link href="/admin">
                <Shield className="mr-2 h-4 w-4" />
                <span>Admin</span>
              </Link>
            </DropdownMenuItem>
          )}
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
            <span className="sr-only">Login</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Welcome</DialogTitle>
          <DialogDescription>Sign in or create an account to join the community.</DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <EmailPasswordForm onLoginSuccess={handleLoginSuccess} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

function SearchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void; }) {
  const [query, setQuery] = React.useState('');
  const router = useRouter();

  const results = React.useMemo(() => {
    if (!query) return [];
    return searchableData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 7);
  }, [query]);

  const handleSelect = (href: string) => {
    router.push(href);
    onOpenChange(false);
  };

  React.useEffect(() => {
    if (!open) {
      setTimeout(() => setQuery(''), 100);
    }
  }, [open]);


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl p-0 top-1/4">
        <DialogHeader className="sr-only">
            <DialogTitle>Search Site</DialogTitle>
            <DialogDescription>Search for products, solutions, news, and more across the entire site.</DialogDescription>
        </DialogHeader>
        <div className="flex items-center p-4 border-b">
          <Search className="h-5 w-5 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, solutions, news..."
            className="border-0 shadow-none focus-visible:ring-0 text-base h-auto"
          />
        </div>
        {query && (
          <div className="p-4 max-h-[400px] overflow-y-auto">
            {results.length > 0 ? (
              <ul className="space-y-1">
                {results.map(item => (
                  <li key={item.href}>
                    <button
                      onClick={() => handleSelect(item.href)}
                      className="w-full text-left p-3 rounded-md hover:bg-accent"
                    >
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-muted-foreground py-4">No results found.</p>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [mobileSubmenuStack, setMobileSubmenuStack] = React.useState<{items: NavItemType[], title: string}[]>([]);
  const [mounted, setMounted] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  
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
                    {item.name === 'Products' && item.subItems ? (
                        <>
                        <NavigationMenuTrigger className={cn(pathname.startsWith('/solutions') && 'data-[state=closed]:text-primary')}>
                            Products
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]">
                                {item.subItems && item.subItems.length > 0 && (
                                    <>
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                    href={item.subItems[0].href!}
                                                >
                                                    <div className="mb-2 mt-4 text-lg font-bold">
                                                        {item.subItems[0].name}
                                                    </div>
                                                    <p className="text-sm leading-tight text-muted-foreground">
                                                        {item.subItems[0].description}
                                                    </p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                        <li className="px-3 pt-2 text-sm font-semibold text-foreground">Solutions</li>
                                        {item.subItems.slice(1).map((component) => (
                                            <ListItem
                                                key={component.name}
                                                title={component.name}
                                                href={component.href!}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </>
                                )}
                            </ul>
                        </NavigationMenuContent>
                        </>
                    ) : item.name === 'Services' && item.subItems ? (
                        <>
                            <NavigationMenuTrigger className={cn(pathname.startsWith('/services') && 'data-[state=closed]:text-primary')}>
                                Services
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {(item.subItems || []).map((component) => (
                                        <ListItem
                                            key={component.name}
                                            title={component.name}
                                            href={component.href!}
                                        >
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </>
                    ) : (
                        item.href && <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), item.href && pathname.startsWith(item.href) && 'text-primary')}>
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
            <div className="hidden md:flex items-center gap-x-1">
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                </Button>
                <UserNav />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Globe className="h-5 w-5" />
                        <span className="sr-only">Language</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Global / English</DropdownMenuItem>
                    <DropdownMenuItem>India / English</DropdownMenuItem>
                    <DropdownMenuItem>Deutschland / Deutsch</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
            </div>
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
                                <UserNav />
                                <Button variant="ghost" size="icon"><Globe className="h-5 w-5" /></Button>
                            </div>
                            <div className="flex items-center">
                                <Button variant="ghost" size="icon" className="relative">
                                    <Menu className="h-6 w-6" />
                                    <span className="absolute bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                                </Button>
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
        <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
      </div>
    </header>
  );
}
