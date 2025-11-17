
'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Home, Mail, Menu, Search, User, Bell, LifeBuoy } from 'lucide-react';

export function AdminHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-6 shrink-0">
      <div className="flex items-center">
        {/* Mobile menu button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 bg-gray-800 p-0">
            {/* You might want to import and reuse AdminSidebar content here */}
          </SheetContent>
        </Sheet>
        
        <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon"><Home className="h-5 w-5" /></Button>
            <Button variant="ghost" size="icon"><Mail className="h-5 w-5" /></Button>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost">Choose a Study</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Study A</DropdownMenuItem>
                    <DropdownMenuItem>Study B</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-500 dark:text-gray-400">Ujval K <br/> dbp.demol</span>
        <Button variant="ghost">SyMetric</Button>
        <Button variant="ghost" size="icon"><LifeBuoy className="h-5 w-5" /></Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="ghost" size="icon"><Bell className="h-5 w-5" /></Button>
      </div>
    </header>
  );
}
