
'use client';

import React from 'react';

// A wrapper for consistent SVG styling
const IconWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

// Individual Icon Components based on the provided design

export const IdentityIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path stroke="hsl(var(--primary))" strokeWidth="2" d="M20 5v46a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H23a3 3 0 0 0-3 3Z" />
    <path stroke="hsl(var(--accent))" strokeLinecap="round" strokeWidth="2" d="M28 20h8m-8 6h12m-12 6h6" />
    <path fill="hsl(var(--primary))" d="M42.3 22.2c.4-.4.4-1 0-1.4l-9.9-9.9a1 1 0 0 0-1.4 0l-9.9 9.9c-.4.4-.4 1 0 1.4l9.9 9.9c.4.4 1 .4 1.4 0l9.9-9.9Z" />
    <circle cx="32" cy="16" r="4" stroke="hsl(var(--accent))" strokeWidth="2" />
    <path d="M44 44a10 10 0 0 0-24 0" stroke="hsl(var(--accent))" strokeWidth="2" />
    <path fill="hsl(var(--accent))" stroke="#fff" strokeWidth="2" d="M46 47a6 6 0 1 0-12 0 6 6 0 0 0 12 0Z" />
    <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m38 47 2 2 4-4" />
  </IconWrapper>
);

export const OrganizationIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path stroke="hsl(var(--primary))" strokeLinejoin="round" strokeWidth="2" d="M24 54V20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v34m-16-8h16" />
    <path fill="hsl(var(--accent))" stroke="hsl(var(--primary))" strokeWidth="2" d="M16 54h32v4H16z" />
    <path stroke="hsl(var(--primary))" strokeLinecap="round" strokeWidth="2" d="M29 25h-1v2h1zm6 0h-1v2h1zm-6 6h-1v2h1zm6 0h-1v2h1zm-6 6h-1v2h1zm6 0h-1v2h1z" />
  </IconWrapper>
);

export const StudyIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="32" cy="32" r="8" stroke="hsl(var(--primary))" strokeWidth="2" />
    <circle cx="12" cy="20" r="5" stroke="hsl(var(--accent))" strokeWidth="2" />
    <circle cx="20" cy="50" r="6" stroke="hsl(var(--accent))" strokeWidth="2" />
    <circle cx="50" cy="14" r="4" stroke="hsl(var(--accent))" strokeWidth="2" />
    <circle cx="52" cy="48" r="7" stroke="hsl(var(--accent))" strokeWidth="2" />
    <path stroke="hsl(var(--primary))" strokeOpacity="0.5" strokeWidth="2" d="m25 36-3 8m18-28-11 8M17 23l9 6m15 15-7-6" />
  </IconWrapper>
);

export const SiteIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path stroke="hsl(var(--primary))" strokeWidth="2" d="M22 54V24a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v30" />
    <path fill="hsl(var(--accent))" stroke="hsl(var(--primary))" strokeWidth="2" d="M16 54h32v4H16z" />
    <path stroke="hsl(var(--primary))" strokeLinecap="round" strokeWidth="2" d="M28 29h-2v2h2zm8 0h-2v2h2zm-8 6h-2v2h2zm8 0h-2v2h2zm-8 6h-2v2h2zm8 0h-2v2h2zM30 18v-4m-4 4h8" />
    <path stroke="hsl(var(--accent))" strokeWidth="2" d="M12 24h10m20 0h10" />
  </IconWrapper>
);

export const SuppliesIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path stroke="hsl(var(--primary))" strokeLinecap="round" strokeWidth="2" d="m33 11 18 18" />
    <path fill="hsl(var(--accent))" stroke="hsl(var(--primary))" strokeWidth="2" d="M49 15a18.38 18.38 0 0 0-26-26l-7 7a18.38 18.38 0 0 0 26 26z" />
    <path fill="hsl(var(--accent))" stroke="hsl(var(--primary))" strokeWidth="2" d="M41 53a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
    <path stroke="hsl(var(--primary))" strokeWidth="2" d="M26 48a10 10 0 0 0 15-15" />
  </IconWrapper>
);

export const SubjectIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M32 33a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm14-3a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-28 0a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke="hsl(var(--accent))" strokeWidth="2" />
    <path d="M42 35c0 5-4 7-10 7s-10-2-10-7m28 1c0 3-2 4-6 4s-6-1-6-4M10 36c0 3 2 4 6 4s6-1 6-4" stroke="hsl(var(--primary))" strokeLinecap="round" strokeWidth="2" />
  </IconWrapper>
);

export const DataManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path stroke="hsl(var(--primary))" strokeWidth="2" d="M22 54v-8m20 8v-8M32 32v-8m-14 0h28" />
    <path d="M22 46a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H22Z" stroke="hsl(var(--primary))" strokeWidth="2" />
    <path d="M12 24a4 4 0 0 1 4-4h8" stroke="hsl(var(--primary))" strokeWidth="2" />
    <path d="M52 24a4 4 0 0 0-4-4h-8" stroke="hsl(var(--primary))" strokeWidth="2" />
    <path d="M42 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-2.6 0-.8-.8m-1.2 1.6.8.8m-1.2-1.6.8-.8m-1.2 1.6-.8.8m1.2 1.2.8-.8m-1.6-1.2-.8.8m1.6 1.2-.8-.8m1.6-1.2.8.8M39 13v-1m0 7v-1m3-3h1m-7 0h1" stroke="hsl(var(--accent))" strokeLinecap="round" strokeWidth="2" />
  </IconWrapper>
);

export const LabIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M52 54H20a2 2 0 0 1-2-2V20" stroke="hsl(var(--primary))" strokeWidth="2" />
    <path d="M38 12a4 4 0 0 0-4-4H22" stroke="hsl(var(--primary))" strokeWidth="2" />
    <path d="m20 18-8 8" stroke="hsl(var(--primary))" strokeWidth="2" />
    <path stroke="hsl(var(--primary))" strokeWidth="2" d="M18 20v-6h6" />
    <path stroke="hsl(var(--accent))" strokeWidth="2" d="M26 36h16m-24 8h24" />
    <circle cx="36" cy="46" r="10" stroke="hsl(var(--accent))" strokeWidth="2" />
    <circle cx="36" cy="46" r="3" fill="hsl(var(--accent))" />
  </IconWrapper>
);

export const MedicalCodingIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <rect x="12" y="12" width="40" height="30" rx="3" stroke="hsl(var(--primary))" strokeWidth="2" />
    <path stroke="hsl(var(--primary))" strokeLinecap="round" strokeWidth="2" d="M24 54h16" />
    <path stroke="hsl(var(--primary))" strokeLinecap="round" strokeWidth="2" d="M32 42v12" />
    <circle cx="32" cy="27" r="8" fill="hsl(var(--accent))" stroke="hsl(var(--primary))" strokeWidth="2" />
    <path stroke="#fff" strokeLinecap="round" strokeWidth="2" d="M32 23v8m-4-4h8" />
  </IconWrapper>
);

export const DataServicesIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M44 32c0-8-5-12-12-12s-12 4-12 12" stroke="hsl(var(--primary))" strokeWidth="2" />
    <path d="M21 44H5a2 2 0 0 1-2-2V34a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Zm21 0h-8a2 2 0 0 1-2-2V34a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Zm14 0h-8a2 2 0 0 1-2-2V34a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z" stroke="hsl(var(--accent))" strokeWidth="2" />
  </IconWrapper>
);

export const DigitalLearningIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M16 20v-4l16-6 16 6v4" stroke="hsl(var(--accent))" strokeWidth="2" />
    <path d="M32 20v28" stroke="hsl(var(--accent))" strokeWidth="2" />
    <path d="M12 28h40" stroke="hsl(var(--accent))" strokeWidth="2" />
    <path d="m16 20 16 6 16-6" stroke="hsl(var(--accent))" strokeWidth="2" />
    <circle cx="22" cy="40" r="3" stroke="hsl(var(--primary))" strokeWidth="2" />
    <circle cx="32" cy="40" r="3" stroke="hsl(var(--primary))" strokeWidth="2" />
    <circle cx="42" cy="40" r="3" stroke="hsl(var(--primary))" strokeWidth="2" />
  </IconWrapper>
);

export const HelpIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="32" cy="32" r="26" stroke="hsl(var(--primary))" strokeWidth="2" />
    <path d="M25 24c0-6 5-8 7-8s7 2 7 8c0 4-5 5-5 5" stroke="hsl(var(--accent))" strokeLinecap="round" strokeWidth="2" />
    <circle cx="32" cy="42" r="2" fill="hsl(var(--accent))" />
  </IconWrapper>
);
