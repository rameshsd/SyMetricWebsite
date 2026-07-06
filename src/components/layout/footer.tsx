'use client';

import Link from 'next/link';
import { Logo } from '@/components/shared/logo';
import { Facebook, Youtube, MessageSquare, Linkedin, Twitter, ChevronUp } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '../ui/button';

const aboutLinks = [
  { name: 'Our Vision', href: '/about' },
  { name: 'News', href: '/news' },
  { name: 'Careers', href: '/careers' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Use', href: '/terms-of-use' },
];

const solutionsLinks = [
  { name: 'IRT/IWRS', href: '/solutions/irt-iwrs' },
  { name: 'EDC', href: '/solutions/edc' },
  { name: 'CTM', href: '/solutions/ctm' },
];

const servicesLinks = [
  { name: 'Data Management', href: '/services/clinical-data-management' },
  { name: 'Project Management', href: '/services/project-management' },
  { name: 'Data Migration', href: '/services/data-migration' },
  { name: 'Training', href: '/services/training' },
  { name: 'Support', href: '/services/support' },
];

const contactAddress = [
  'Achiral Systems Pvt. Ltd.',
  'No. 51, Kodihalli Main Road',
  'HAL 2nd Stage',
  'Bengaluru – 560008, India',
];

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/symetric-systems-private-limited' },
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'Youtube', icon: Youtube, href: 'https://www.youtube.com' },
];

export function Footer() {
  const [isClient, setIsClient] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const logoImage = PlaceHolderImages.find(p => p.id === 'symetric-logo');

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative bg-[#070b13] text-zinc-400 border-t border-zinc-900 overflow-hidden py-16">
        {/* Large Faded Logo Watermark */}
        <div
          className="absolute right-0 bottom-0 h-[280px] w-[280px] md:h-[450px] md:w-[450px] opacity-[0.05] pointer-events-none select-none bg-contain bg-no-repeat bg-right-bottom translate-x-8 translate-y-8"
          style={{
            backgroundImage: `url(${logoImage?.imageUrl || 'https://symetricsystems.com/wp-content/uploads/2021/05/symetric.png'})`,
            filter: 'brightness(0) invert(1)'
          }}
        />

        <div className="container relative z-10">
          {/* Desktop Footer Grid */}
          <div className="hidden md:grid grid-cols-12 gap-8 items-start">
            {/* Logo and Contact column */}
            <div className="col-span-3 flex flex-col items-start space-y-6">
              <Logo className="brightness-0 invert opacity-90 hover:opacity-100 transition-all duration-300" />

              {/* Social icons row */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 hover:text-white transition-colors duration-300"
                    >
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{link.name}</span>
                    </a>
                  );
                })}
              </div>

              {/* Email and Phone */}
              <div className="text-sm text-zinc-400 space-y-1 font-medium">
                <p>Email: <a href="mailto:info@symetricsystems.com" className="text-zinc-300 hover:text-[#bc10b6] transition-colors">info@symetricsystems.com</a></p>
                <p>Phone: <a href="tel:+918041135402" className="text-zinc-300 hover:text-[#bc10b6] transition-colors">+91 (80) 41135402</a></p>
              </div>
            </div>

            {/* About Us column */}
            <div className="col-span-2 flex flex-col md:items-center">
              <div className="flex flex-col items-start">
                <h3 className="font-semibold text-base text-white border-b-2 border-[#bc10b6] pb-1 mb-4 inline-block w-fit">
                  About Us
                </h3>
                <ul className="space-y-3 text-sm">
                  {aboutLinks.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="hover:text-white transition-colors duration-300">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Our Solutions column */}
            <div className="col-span-2 flex flex-col md:items-center">
              <div className="flex flex-col items-start">
                <h3 className="font-semibold text-base text-white border-b-2 border-[#bc10b6] pb-1 mb-4 inline-block w-fit">
                  Our Solutions
                </h3>
                <ul className="space-y-3 text-sm">
                  {solutionsLinks.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="hover:text-white transition-colors duration-300">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Our Services column */}
            <div className="col-span-2 flex flex-col md:items-center">
              <div className="flex flex-col items-start">
                <h3 className="font-semibold text-base text-white border-b-2 border-[#bc10b6] pb-1 mb-4 inline-block w-fit">
                  Our Services
                </h3>
                <ul className="space-y-3 text-sm">
                  {servicesLinks.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="hover:text-white transition-colors duration-300">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Us column */}
            <div className="col-span-3 flex flex-col md:items-center">
              <div className="flex flex-col items-start">
                <h3 className="font-semibold text-base text-white border-b-2 border-[#bc10b6] pb-1 mb-4 inline-block w-fit">
                  Contact Us
                </h3>
                <ul className="space-y-2 text-sm text-zinc-300 font-medium">
                  {contactAddress.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Footer Stack */}
          <div className="md:hidden flex flex-col space-y-8">
            <div className="flex flex-col items-start space-y-6">
              <Logo className="brightness-0 invert opacity-90 hover:opacity-100 transition-all duration-300" />

              <div className="flex items-center space-x-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 hover:text-white transition-colors duration-300"
                    >
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{link.name}</span>
                    </a>
                  );
                })}
              </div>

              <div className="text-sm text-zinc-400 space-y-1 font-medium">
                <p>Email: <a href="mailto:info@symetricsystems.com" className="text-zinc-300 hover:text-[#bc10b6] transition-colors">info@symetricsystems.com</a></p>
                <p>Phone: <a href="tel:+918041135402" className="text-zinc-300 hover:text-[#bc10b6] transition-colors">+91 (80) 41135402</a></p>
              </div>
            </div>

            <Accordion type="multiple" className="w-full">
              <AccordionItem value="about" className="border-b border-zinc-800">
                <AccordionTrigger className="py-4 text-base font-semibold text-zinc-300 hover:text-white hover:no-underline [&>svg]:text-white">
                  About Us
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="pt-2 pl-4 space-y-3">
                    {aboutLinks.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className="text-sm text-zinc-400 hover:text-white">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="solutions" className="border-b border-zinc-800">
                <AccordionTrigger className="py-4 text-base font-semibold text-zinc-300 hover:text-white hover:no-underline [&>svg]:text-white">
                  Our Solutions
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="pt-2 pl-4 space-y-3">
                    {solutionsLinks.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className="text-sm text-zinc-400 hover:text-white">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="services" className="border-b border-zinc-800">
                <AccordionTrigger className="py-4 text-base font-semibold text-zinc-300 hover:text-white hover:no-underline [&>svg]:text-white">
                  Our Services
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="pt-2 pl-4 space-y-3">
                    {servicesLinks.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className="text-sm text-zinc-400 hover:text-white">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="flex flex-col items-start pt-4">
              <h3 className="font-semibold text-base text-white border-b-2 border-[#bc10b6] pb-1 mb-4 inline-block w-fit">
                Contact Us
              </h3>
              <ul className="space-y-2 text-sm text-zinc-300 font-medium">
                {contactAddress.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col items-center space-y-2 text-center">
            <p className="text-xs text-zinc-500">
              For any DPDP related queries contact SyMetric&apos;s team through Official mail i&apos;d:{' '}
              <a href="mailto:info@symetricsystems.com" className="text-zinc-400 hover:text-white transition-colors">
                info@symetricsystems.com
              </a>
            </p>
            <div className="text-xs text-zinc-500">
              {isClient ? `Copyright ©${new Date().getFullYear()} SyMetric. All rights reserved` : <span>&nbsp;</span>}
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top green scroll button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#8bc34a] hover:bg-[#7cb342] text-white shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Back to Top"
        >
          <ChevronUp className="h-6 w-6" strokeWidth={2.5} />
        </button>
      )}

    </>
  );
}
