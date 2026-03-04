'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Cookie } from 'lucide-react';
import Link from 'next/link';

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem('cookie_consent');
    if (consent !== 'true') {
      // Use a timeout to delay the banner appearance slightly
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Set consent in localStorage
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="container mx-auto max-w-4xl p-4 bg-background/90 backdrop-blur-sm shadow-2xl animate-fade-in-up">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div className="text-sm">
              <h3 className="font-semibold">We use cookies</h3>
              <p className="text-muted-foreground">
                This website uses cookies to enhance your browsing experience and analyze site traffic. By clicking "Accept", you consent to our use of cookies. Read our{' '}
                <Link href="/privacy-policy" className="underline text-primary hover:text-primary/80">
                  Privacy Policy
                </Link>
                {' '}for more details.
              </p>
            </div>
          </div>
          <Button onClick={handleAccept} className="w-full sm:w-auto flex-shrink-0">
            Accept
          </Button>
        </div>
      </Card>
    </div>
  );
}
