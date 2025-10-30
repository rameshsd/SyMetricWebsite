'use client';

import Link from 'next/link';
import { Logo } from '@/components/shared/logo';
import { Facebook, Youtube, Mail, MessageSquare, Globe, ArrowUp, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { useState, useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const quickLinks = [
  { name: 'SyMetric Trust Center', href: '#' },
  { name: 'Find a solution', href: '/solutions' },
  { name: 'Industries', href: '/industries' },
  { name: 'Find a partner', href: '#' },
  { name: 'Trials and demos', href: '#' },
  { name: 'Find services', href: '#' },
];

const trendingLinks = [
  { name: 'SyMetric TechEd', href: '#' },
  { name: 'SyMetric Business Suite', href: '#' },
  { name: 'SyMetric Business Data Cloud', href: '#' },
  { name: 'SyMetric Business AI', href: '#' },
  { name: 'Sustainability', href: '#' },
  { name: 'Partner ecosystem', href: '#' },
];

const aboutSyMetricLinks = [
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

const FooterLinkColumn = ({ title, links }: { title: string; links: { name: string; href: string }[] }) => (
    <div>
        <h3 className="text-sm font-bold text-foreground tracking-wide">{title}</h3>
        <ul className="mt-4 space-y-2">
            {links.map((link) => (
            <li key={link.name}>
                <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                {link.name}
                </Link>
            </li>
            ))}
        </ul>
    </div>
);


export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if(isClient) {
      setYear(new Date().getFullYear());
    }
  }, [isClient]);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container">
        <div className="flex justify-end items-center my-8">
            <Button variant="ghost" size="icon" onClick={scrollToTop} className="text-muted-foreground hover:text-primary">
                <ArrowUp className="h-5 w-5" />
                <span className="sr-only">Back to top</span>
            </Button>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden md:block">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-8">
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
                    <FooterLinkColumn title="Quick links" links={quickLinks} />
                    <FooterLinkColumn title="Trending" links={trendingLinks} />
                    <FooterLinkColumn title="About SyMetric" links={aboutSyMetricLinks} />
                    <FooterLinkColumn title="Site Information" links={siteInfoLinks} />
                </div>
            </div>
        </div>


        {/* Mobile Accordion */}
        <div className="md:hidden">
            <div className="mb-8">
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

            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="quick-links">
                    <AccordionTrigger>
                        <div className="flex items-center gap-4">
                            <ChevronRight className="h-4 w-4" />
                            <span>Quick links</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className="space-y-2 pl-8">
                        {quickLinks.map((link) => (
                            <li key={link.name}><Link href={link.href} className="text-muted-foreground hover:text-primary">{link.name}</Link></li>
                        ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="trending">
                    <AccordionTrigger>
                         <div className="flex items-center gap-4">
                            <ChevronRight className="h-4 w-4" />
                            <span>Trending</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className="space-y-2 pl-8">
                        {trendingLinks.map((link) => (
                            <li key={link.name}><Link href={link.href} className="text-muted-foreground hover:text-primary">{link.name}</Link></li>
                        ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="about-symetric">
                    <AccordionTrigger>
                         <div className="flex items-center gap-4">
                            <ChevronRight className="h-4 w-4" />
                            <span>About SyMetric</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className="space-y-2 pl-8">
                        {aboutSyMetricLinks.map((link) => (
                            <li key={link.name}><Link href={link.href} className="text-muted-foreground hover:text-primary">{link.name}</Link></li>
                        ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="site-information">
                    <AccordionTrigger>
                         <div className="flex items-center gap-4">
                            <ChevronRight className="h-4 w-4" />
                            <span>Site Information</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className="space-y-2 pl-8">
                        {siteInfoLinks.map((link) => (
                            <li key={link.name}><Link href={link.href} className="text-muted-foreground hover:text-primary">{link.name}</Link></li>
                        ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>

        <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">&copy; {isClient ? year : new Date().getFullYear()} SyMetric SE or a SyMetric affiliate company. All rights reserved.</p>
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
    </footer>
  );
}
