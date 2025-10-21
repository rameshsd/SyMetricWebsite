'use client';

import Link from 'next/link';
import { Logo } from '@/components/shared/logo';
import { Facebook, Youtube, Mail, MessageSquare, Globe, ArrowUp } from 'lucide-react';
import { Button } from '../ui/button';
import { ContactUsButton } from './ContactUsButton';
import { useState, useEffect } from 'react';

const quickLinks = [
  { name: 'SAP Trust Center', href: '#' },
  { name: 'Find a solution', href: '/solutions' },
  { name: 'Industries', href: '/industries' },
  { name: 'Find a partner', href: '#' },
  { name: 'Trials and demos', href: '#' },
  { name: 'Find services', href: '#' },
];

const trendingLinks = [
  { name: 'SAP TechEd', href: '#' },
  { name: 'SAP Business Suite', href: '#' },
  { name: 'SAP Business Data Cloud', href: '#' },
  { name: 'SAP Business AI', href: '#' },
  { name: 'Sustainability', href: '#' },
  { name: 'Partner ecosystem', href: '#' },
];

const aboutSAPLinks = [
  { name: 'Company information', href: '/about' },
  { name: 'Worldwide directory', href: '#' },
  { name: 'Investor Relations', href: '#' },
  { name: 'Careers', href: '#' },
  { name: 'News and press', href: '#' },
  { name: 'Events', href: '#' },
  { name: 'Customer stories', href: '#' },
  { name: 'Newsletter', href: '#' },
];

const siteInfoLinks = [
  { name: 'Privacy', href: '#' },
  { name: 'Terms of use', href: '#' },
  { name: 'Legal disclosure', href: '#' },
  { name: 'Copyright', href: '#' },
  { name: 'Trademark', href: '#' },
  { name: 'Cookie statement', href: '#' },
  { name: 'Cookie preferences', href: '#' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Youtube', icon: Youtube, href: '#' },
  { name: 'Mail', icon: Mail, href: '#' },
];

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-start mb-8">
            <div></div>
            <div className="flex items-center gap-4">
                 <Link href="#" className="text-muted-foreground hover:text-primary">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                </Link>
                 <Button variant="ghost" size="icon" onClick={scrollToTop} className="text-muted-foreground hover:text-primary">
                    <ArrowUp className="h-5 w-5" />
                    <span className="sr-only">Back to top</span>
                </Button>
            </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="col-span-2">
            <Logo />
            <div className="mt-8 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-muted-foreground mt-0.5"/>
                    <div>
                        <p className="text-muted-foreground">India</p>
                        <p className="font-semibold text-foreground">+91-80-66655771 | 1-800-266-2208</p>
                        <Link href="#" className="text-sm text-primary underline">Or see our complete list of local country numbers</Link>
                    </div>
                </div>
                 <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground"/>
                    <Link href="/contact" className="text-foreground hover:text-primary">Contact us</Link>
                </div>
                <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-muted-foreground"/>
                    <Link href="#" className="text-foreground hover:text-primary">Chat now</Link>
                </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground tracking-wide">Quick links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground tracking-wide">Trending</h3>
            <ul className="mt-4 space-y-2">
              {trendingLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
           <div>
            <h3 className="text-sm font-bold text-foreground tracking-wide">About SAP</h3>
            <ul className="mt-4 space-y-2">
              {aboutSAPLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
           <div>
            <h3 className="text-sm font-bold text-foreground tracking-wide">Site Information</h3>
            <ul className="mt-4 space-y-2">
              {siteInfoLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">&copy; {year} SAP SE or an SAP affiliate company. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-muted-foreground hover:text-primary bg-white p-2 rounded-md">
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <ContactUsButton />
    </footer>
  );
}
