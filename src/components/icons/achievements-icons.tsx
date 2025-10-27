
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
    <circle cx="32" cy="32" r="28" strokeWidth="3" />
    <path d="M32 18V32l10 6" strokeWidth="3" />
    <path d="M22 12 l-8 8" strokeWidth="3" />
    <path d="M14 20 h6 v-6" strokeWidth="3" />
  </IconWrapper>
);

export const FdaSubmissionIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M44 56V8a4 4 0 0 0-4-4H20a4 4 0 0 0-4 4v48l12-8z" strokeWidth="3" />
    <path d="M24 22h12" strokeWidth="3" />
    <path d="M24 30h12" strokeWidth="3" />
    <path d="M24 38h8" strokeWidth="3" />
  </IconWrapper>
);

export const LightbulbIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M32 46C23.163 46 16 38.837 16 30c0-8.837 7.163-16 16-16s16 7.163 16 16c0 8.837-7.163 16-16 16z" strokeWidth="3" />
    <path d="M32 14V6" strokeWidth="3" />
    <path d="M32 58v-8" strokeWidth="3" />
    <path d="M26 54h12" strokeWidth="3" />
    <path d="M23 23l-5-5" strokeWidth="3" />
    <path d="M45 45l-4-4" strokeWidth="3" />
    <path d="M41 23l4-5" strokeWidth="3" />
    <path d="M19 45l-4 4" strokeWidth="3" />
  </IconWrapper>
);

export const EfficiencyIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="32" cy="32" r="28" strokeWidth="3" />
    <circle cx="24" cy="28" r="6" strokeWidth="3" />
    <circle cx="40" cy="36" r="6" strokeWidth="3" />
    <path d="M24 34v10" strokeWidth="3" />
    <path d="M40 20v10" strokeWidth="3" />
    <path d="M20 44h8" strokeWidth="3" />
    <path d="M36 20h8" strokeWidth="3" />
  </IconWrapper>
);
