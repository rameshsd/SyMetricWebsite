
'use client';
import { cn } from '@/lib/utils';
import React from 'react';

const IconWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("h-6 w-6", className)}
  >
    {children}
  </svg>
);

export const DesktopIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
    </IconWrapper>
);

export const PhoneIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
    </IconWrapper>
);

export const XboxIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path d="M6.5 5.5c-3.1 3-3.1 8.2 0 11.3l2-2c-1.9-1.8-1.9-4.8 0-6.6l-2-2.8z" />
        <path d="M17.5 5.5c3.1 3 3.1 8.2 0 11.3l-2-2c1.9-1.8 1.9-4.8 0-6.6l2-2.8z" />
        <path d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" />
    </IconWrapper>
);
