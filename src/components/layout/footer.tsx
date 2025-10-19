import Link from 'next/link';
import { solutions } from '@/lib/data';
import { Logo } from '@/components/shared/logo';
import { Github, Linkedin, Twitter } from 'lucide-react';

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '#' },
  { name: 'Press', href: '#' },
  { name: 'Privacy Policy', href: '#' },
];

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2">
            <Logo />
            <p className="mt-4 text-muted-foreground text-sm max-w-xs">
              Transforming Clinical Research Through Technology.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Solutions</h3>
            <ul className="mt-4 space-y-2">
              {solutions.slice(0,5).map((solution) => (
                <li key={solution.id}>
                  <Link href={`/solutions/${solution.slug}`} className="text-sm text-muted-foreground hover:text-primary">
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>info@symetric.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Innovation Drive, Tech Park, CA 94043</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} SyMetric Systems. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-muted-foreground hover:text-primary">
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
