'use client';

import Link from 'next/link';
import { Logo } from '@/components/shared/logo';
import { Facebook, Youtube, Mail, MessageSquare, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

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
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      <div className="h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>
      <div className="container pt-16 pb-12">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-6 md:gap-x-8">
            {/* Logo and Contact info */}
            <div className="md:col-span-2">
                <div className="w-fit">
                    <Logo />
                </div>
                 <div className="mt-8 space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0"/>
                        <div>
                            <p className="text-gray-500">India</p>
                            <p className="font-semibold text-gray-300">+91-80-66655771 | 1-800-266-2208</p>
                            <Link href="#" className="text-sm text-primary underline hover:text-primary/80">Or see our complete list of local country numbers</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-gray-500"/>
                        <Link href="/contact" className="text-gray-300 hover:text-white">Contact us</Link>
                    </div>
                    <div className="flex items-center gap-3">
                        <MessageSquare className="h-5 w-5 text-gray-500"/>
                        <Link href="/contact" className="text-gray-300 hover:text-white">Chat now</Link>
                    </div>
                </div>
            </div>

            {/* Link Columns */}
            <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-3 gap-8">
                <FooterLinkColumn title="Quick links" links={quickLinks} />
                <FooterLinkColumn title="About SyMetric" links={aboutSyMetricLinks} />
                <FooterLinkColumn title="Site Information" links={siteInfoLinks} />
            </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="container">
        <div className="border-t border-gray-800 py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-gray-500">
                {isClient ? `Copyright © ${new Date().getFullYear()} SyMetric. All rights reserved.` : <span>&nbsp;</span>}
            </div>
            <div className="flex space-x-5">
                {socialLinks.map((link) => (
                  <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
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
