
import React from 'react';

const IconWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

export const TimelineIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="3" />
    <polyline points="32,18 32,32 44,38" stroke="currentColor" strokeWidth="3" />
    <path d="M22,12 L12,22" />
    <path d="M12,22 L18,22" />
    <path d="M12,22 L12,28" />
  </IconWrapper>
);

export const FdaSubmissionIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M40 56V8a4 4 0 0 0-4-4H16a4 4 0 0 0-4 4v48l8-6 8 6 8-6 8 6z" stroke="currentColor" strokeWidth="3" />
    <line x1="22" y1="22" x2="38" y2="22" stroke="currentColor" strokeWidth="3" />
    <line x1="22" y1="30" x2="38" y2="30" stroke="currentColor" strokeWidth="3" />
    <line x1="22" y1="38" x2="30" y2="38" stroke="currentColor" strokeWidth="3" />
  </IconWrapper>
);

export const LightbulbIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M32 54C22.059 54 14 45.941 14 36c0-7.25 4.439-13.518 10.875-16.125" stroke="currentColor" strokeWidth="3" />
    <path d="M32 10c9.941 0 18 8.059 18 18 0 7.25-4.439 13.518-10.875 16.125" stroke="currentColor" strokeWidth="3" />
    <path d="M32 54V44h-4v-4h8v4h-4" stroke="currentColor" strokeWidth="3" />
    <path d="M24 58h16" stroke="currentColor" strokeWidth="3" />
    <path d="M32 20a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" stroke="currentColor" strokeWidth="3" fill="currentColor" />
  </IconWrapper>
);

export const EfficiencyIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M24 44a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke="currentColor" strokeWidth="3" />
    <path d="M44 36a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke="currentColor" strokeWidth="3" />
    <path d="M30 36l-3-3m-3 3l3-3m11 3l-3-3m-3 3l3-3" stroke="currentColor" strokeWidth="3" />
    <path d="M4 32h12M48 32h12" stroke="currentColor" strokeWidth="3" />
  </IconWrapper>
);
