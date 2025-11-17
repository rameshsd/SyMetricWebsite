
'use client';

import React from 'react';

// A wrapper for consistent SVG styling
const IconWrapper = ({ children, className, viewBox = "0 0 64 64" }: { children: React.ReactNode; className?: string, viewBox?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    fill="none"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const IdentityIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className} viewBox="0 0 64 64">
    <path d="M32 34.6667C37.8914 34.6667 42.6667 39.4419 42.6667 45.3333V48H21.3333V45.3333C21.3333 39.4419 26.1086 34.6667 32 34.6667Z" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 34.6667C29.0556 34.6667 26.6667 32.2778 26.6667 29.3333C26.6667 26.3889 29.0556 24 32 24C34.9444 24 37.3333 26.3889 37.3333 29.3333C37.3333 32.2778 34.9444 34.6667 32 34.6667Z" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="12" y="12" width="40" height="40" rx="3" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </IconWrapper>
);

export const OrganizationIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className} viewBox="0 0 64 64">
    <rect x="15" y="10" width="34" height="44" rx="2" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M25 28H39V54H25V28Z" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 19H31" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 25H31" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </IconWrapper>
);

export const StudyIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className} viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="6" stroke="hsl(var(--primary))" strokeWidth="2.5"/>
    <circle cx="16" cy="18" r="4" stroke="hsl(var(--primary))" strokeWidth="2.5"/>
    <circle cx="48" cy="18" r="4" stroke="hsl(var(--primary))" strokeWidth="2.5"/>
    <circle cx="16" cy="46" r="4" stroke="hsl(var(--primary))" strokeWidth="2.5"/>
    <circle cx="48" cy="46" r="4" stroke="hsl(var(--primary))" strokeWidth="2.5"/>
    <path d="M32 26V15" stroke="hsl(var(--accent))" strokeWidth="2"/>
    <path d="M32 49V38" stroke="hsl(var(--accent))" strokeWidth="2"/>
    <path d="M44.5 44.5L37.5 37.5" stroke="hsl(var(--accent))" strokeWidth="2"/>
    <path d="M19.5 44.5L26.5 37.5" stroke="hsl(var(--accent))" strokeWidth="2"/>
    <path d="M19.5 19.5L26.5 26.5" stroke="hsl(var(--accent))" strokeWidth="2"/>
    <path d="M44.5 19.5L37.5 26.5" stroke="hsl(var(--accent))" strokeWidth="2"/>
  </IconWrapper>
);

export const SiteIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className} viewBox="0 0 64 64">
        <path d="M50 42H14C12.8954 42 12 41.1046 12 40V22C12 20.8954 12.8954 20 14 20H50C51.1046 20 52 20.8954 52 22V40C52 41.1046 51.1046 42 50 42Z" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M18 20V42" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 20V42" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M40 20V42" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M46 20V42" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 26V36" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M27 31H37" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </IconWrapper>
);

export const SuppliesIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className} viewBox="0 0 64 64">
    <path d="M50 34H14V22C14 20.8954 14.8954 20 16 20H48C49.1046 20 50 20.8954 50 22V34Z" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 34H52L50 50H14L12 34Z" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 26H28" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M24 42H40" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round"/>
  </IconWrapper>
);

export const SubjectIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className} viewBox="0 0 64 64">
    <path d="M21.3333 45.3333V42.6667C21.3333 36.7753 26.1086 32 32 32C37.8914 32 42.6667 36.7753 42.6667 42.6667V45.3333" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="32" cy="24" r="5.33333" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M49.3333 50.6667V48C49.3333 44.3181 46.3482 41.3333 42.6667 41.3333H38.6667" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.6667 50.6667V48C14.6667 44.3181 17.6518 41.3333 21.3333 41.3333H25.3333" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="44" cy="21.3333" r="4" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="20" cy="21.3333" r="4" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </IconWrapper>
);

export const DataManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className} viewBox="0 0 64 64">
      <ellipse cx="32" cy="22" rx="18" ry="8" stroke="hsl(var(--primary))" strokeWidth="2.5"/>
      <path d="M14 30C14 34.4183 22.0589 38 32 38C41.9411 38 50 34.4183 50 30" stroke="hsl(var(--accent))" strokeWidth="2.5"/>
      <path d="M14 38C14 42.4183 22.0589 46 32 46C41.9411 46 50 42.4183 50 38" stroke="hsl(var(--accent))" strokeWidth="2.5"/>
      <path d="M14 22V46C14 50.4183 22.0589 54 32 54C41.9411 54 50 50.4183 50 46V22" stroke="hsl(var(--primary))" strokeWidth="2.5"/>
  </IconWrapper>
);

export const LabIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M51 46H15C13.8954 46 13 45.1046 13 44V12" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 12H39" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30 12V8" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 21L13 29" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="33" y="19" width="12" height="12" rx="2" transform="rotate(45 33 19)" stroke="hsl(var(--accent))" strokeWidth="2.5"/>
  </IconWrapper>
);

export const MedicalCodingIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <rect x="12" y="12" width="40" height="30" rx="3" stroke="hsl(var(--primary))" strokeWidth="2.5" />
    <path stroke="hsl(var(--primary))" strokeLinecap="round" strokeWidth="2.5" d="M24 54h16" />
    <path stroke="hsl(var(--primary))" strokeLinecap="round" strokeWidth="2.5" d="M32 42v12" />
    <path d="M28 27H36" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M32 23V31" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" />
  </IconWrapper>
);

export const DataServicesIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
     <path d="M47 38C47 29.7157 40.2843 23 32 23C23.7157 23 17 29.7157 17 38" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="20" cy="44" r="3" stroke="hsl(var(--accent))" strokeWidth="2.5"/>
    <circle cx="32" cy="44" r="3" stroke="hsl(var(--accent))" strokeWidth="2.5"/>
    <circle cx="44" cy="44" r="3" stroke="hsl(var(--accent))" strokeWidth="2.5"/>
  </IconWrapper>
);

export const DigitalLearningIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
      <path d="M12 38V16C12 14.8954 12.8954 14 14 14H42C43.1046 14 44 14.8954 44 16V38" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M52 46H8" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M28 34H36" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round"/>
  </IconWrapper>
);

export const HelpIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="32" cy="32" r="18" stroke="hsl(var(--primary))" strokeWidth="2.5"/>
    <path d="M26 28C26 24.6863 28.6863 22 32 22C35.3137 22 38 24.6863 38 28C38 30.148 36.7877 31.9834 35 32.9101V33" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="32" cy="39" r="1.5" fill="hsl(var(--accent))"/>
  </IconWrapper>
);

    