'use client';

import Link from 'next/link';
import { Logo } from '@/components/shared/logo';
import { Facebook, Youtube, Mail, MessageSquare, Globe, ChevronRight, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

const quickLinks = [
  { name: 'Solutions', href: '/solutions' },
  { name: 'Industries', href: '/industries' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Careers', href: '/careers'},
];

const aboutSyMetricLinks = [
  { name: 'Company information', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'News and press', href: '/news' },
  { name: 'Events', href: '/news' },
  { name: 'Customer stories', href: '/' },
  { name: 'Newsletter', href: '/contact' },
];

const siteInfoLinks = [
  { name: 'Privacy', href: '/privacy-policy' },
  { name: 'Terms of use', href: '/terms-of-use' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com' },
  { name: 'Youtube', icon: Youtube, href: 'https://www.youtube.com' },
  { name: 'Mail', icon: Mail, href: 'mailto:info@symetricsystems.com' },
];

const FooterLinkColumn = ({ title, links }: { title: string; links: { name: string; href: string }[] }) => (
    <div>
        <h3 className="text-sm font-bold text-white tracking-wider uppercase">{title}</h3>
        <ul className="mt-4 space-y-3">
            {links.map((link) => (
            <li key={link.name}>
                <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                {link.name}
                </Link>
            </li>
            ))}
        </ul>
    </div>
);


export function Footer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      <div className="container pt-16 pb-0 md:pb-12">
        {/* Desktop Footer */}
        <div className="hidden md:grid grid-cols-1 gap-y-12 md:grid-cols-5 md:gap-x-8">
            <div className="md:col-span-2">
                <div className="w-fit">
                    <Logo />
                </div>
                 <div className="mt-8 space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0"/>
                        <div>
                            <p className="text-gray-500">India</p>
                            <p className="font-semibold text-gray-300">+91-80-41135402</p>
                            <Link href="#" className="text-sm text-primary underline hover:text-primary/80">Or see our complete list of local country numbers</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-gray-500"/>
                        <Link href="/contact" className="text-gray-300 hover:text-white">Contact us</Link>
                    </div>
                    <div className="flex items-center gap-3">
                        <MessageSquare className="h-5 w-5 text-gray-500"/>
                         <span className="text-gray-500">Chat Unavailable</span>
                    </div>
                </div>
            </div>

            <FooterLinkColumn title="Quick links" links={quickLinks} />
            <FooterLinkColumn title="About SyMetric" links={aboutSyMetricLinks} />
            <FooterLinkColumn title="Site information" links={siteInfoLinks} />
        </div>

        {/* Mobile Footer */}
        <div className="md:hidden">
            <div className="w-fit mb-8">
              <Logo />
            </div>
            <div className="space-y-4 mb-8">
                 <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0"/>
                    <div>
                        <p className="text-gray-500">India</p>
                        <p className="font-semibold text-gray-300">+91-80-41135402</p>
                        <Link href="#" className="text-sm text-primary underline hover:text-primary/80">Or see our complete list of local country numbers</Link>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-500"/>
                    <Link href="/contact" className="text-gray-300 hover:text-white">Contact us</Link>
                </div>
                <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-gray-500"/>
                    <span className="text-gray-500">Chat Unavailable</span>
                </div>
            </div>

            <Accordion type="multiple" className="w-full">
                <AccordionItem value="quick-links" className="border-b border-gray-800">
                    <AccordionTrigger className="py-4 text-base font-semibold text-gray-300 hover:text-white hover:no-underline [&>svg]:text-white">
                        Quick links
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className="pt-2 pl-4 space-y-3">
                           {quickLinks.map((link) => (
                            <li key={link.name}><Link href={link.href} className="text-sm text-gray-400 hover:text-white">{link.name}</Link></li>
                           ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="about" className="border-b border-gray-800">
                    <AccordionTrigger className="py-4 text-base font-semibold text-gray-300 hover:text-white hover:no-underline [&>svg]:text-white">
                        About SyMetric
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className="pt-2 pl-4 space-y-3">
                           {aboutSyMetricLinks.map((link) => (
                            <li key={link.name}><Link href={link.href} className="text-sm text-gray-400 hover:text-white">{link.name}</Link></li>
                           ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="site-info" className="border-b-0">
                    <AccordionTrigger className="py-4 text-base font-semibold text-gray-300 hover:text-white hover:no-underline [&>svg]:text-white">
                        Site information
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className="pt-2 pl-4 space-y-3">
                           {siteInfoLinks.map((link) => (
                            <li key={link.name}><Link href={link.href} className="text-sm text-gray-400 hover:text-white">{link.name}</Link></li>
                           ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="container">
        <div className="pt-8 pb-6 md:py-6 md:border-t border-gray-800 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-gray-500">
                {isClient ? `Copyright © ${new Date().getFullYear()} SyMetric. All rights reserved.` : <span>&nbsp;</span>}
            </div>
            <div className="flex space-x-2">
                {socialLinks.map((link) => (
                  <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white bg-gray-800 hover:bg-gray-700 p-2 rounded-md">
                    <link.icon className="h-5 w-5" />
                    <span className="sr-only">{link.name}</span>
                  </a>
                ))}
            </div>
        </div>
      </div>
    </footer>
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <Button size="icon" className="h-14 w-14 rounded-full shadow-lg">
            <MessageSquare className="h-7 w-7"/>
        </Button>
    </div>
    </>
  );
}
