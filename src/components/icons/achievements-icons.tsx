
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
    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="3"/>
    <polyline points="32,18 32,32 44,38" stroke="currentColor" strokeWidth="3"/>
    <path d="M22,12 L12,22" stroke="currentColor" strokeWidth="3"/>
    <path d="M12,22 L18,22" stroke="currentColor" strokeWidth="3"/>
    <path d="M12,22 L12,28" stroke="currentColor" strokeWidth="3"/>
  </IconWrapper>
);

export const FdaSubmissionIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <rect x="8" y="4" width="48" height="56" rx="4" stroke="currentColor" strokeWidth="3"/>
    <circle cx="24" cy="20" r="5" stroke="currentColor" strokeWidth="3"/>
    <path d="M16,34 h16 M16,42 h24 M16,50 h20" stroke="currentColor" strokeWidth="3"/>
    <path d="M48,32 l8,4 l-8,4" stroke="currentColor" strokeWidth="3" fill="none"/>
  </IconWrapper>
);

export const LightbulbIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M32,44 C40,44 44,40 44,32 C44,24 38,18 32,18 C26,18 20,24 20,32 C20,40 24,44 32,44 Z" stroke="currentColor" strokeWidth="3"/>
    <line x1="32" y1="44" x2="32" y2="52" stroke="currentColor" strokeWidth="3"/>
    <line x1="26" y1="58" x2="38" y2="58" stroke="currentColor" strokeWidth="3"/>
    <line x1="10" y1="32" x2="18" y2="32" stroke="currentColor" strokeWidth="3"/>
    <line x1="46" y1="32" x2="54" y2="32" stroke="currentColor" strokeWidth="3"/>
    <line x1="22" y1="22" x2="27" y2="27" stroke="currentColor" strokeWidth="3"/>
    <line x1="37" y1="37" x2="42" y2="42" stroke="currentColor" strokeWidth="3-transparent"/>
    <line x1="42" y1="22" x2="37" y2="27" stroke="currentColor" strokeWidth="3"/>
  </IconWrapper>
);

export const EfficiencyIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M22,48 C16,48 10,42 10,36 C10,30 14,24 20,22" stroke="currentColor" strokeWidth="3"/>
    <path d="M42,48 C48,48 54,42 54,36 C54,30 50,24 44,22" stroke="currentColor" strokeWidth="3"/>
    <path d="M22,48 H42" stroke="currentColor" strokeWidth="3"/>
    <path d="M32,12 C36,16 36,22 32,26 C28,22 28,16 32,12 Z" stroke="currentColor" fill="currentColor" strokeWidth="3"/>
  </IconWrapper>
);
