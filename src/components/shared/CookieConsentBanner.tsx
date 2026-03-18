'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given or rejected
    const consent = localStorage.getItem('cookie_consent');
    if (consent !== 'true' && consent !== 'false') {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie_consent', 'false');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-left md:flex-grow">
            <h3 className="font-semibold text-foreground">Help Us Improve Our Website with Cookies</h3>
            <p className="text-muted-foreground mt-1">
              We use cookies and process data from your device to analyze website performance, personalize ad content, and improve your experience. Your consent includes data transfers outside of the country you're located, for example the United States. View{' '}
              <Link href="/privacy-policy" className="underline hover:text-primary">
                Cookie Settings
              </Link>
              {' '}for more information.
            </p>
          </div>
          <div className="flex gap-2 flex-shrink-0 w-full md:w-auto">
            <Button onClick={handleAccept} variant="secondary" className="w-full md:w-auto">
              Accept
            </Button>
            <Button onClick={handleReject} variant="outline" className="w-full md:w-auto">
              Reject
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
