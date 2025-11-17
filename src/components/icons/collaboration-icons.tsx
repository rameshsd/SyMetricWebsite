
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
  <IconWrapper className={className} viewBox="0 0 50 50">
    <path fill="#007bff" d="M10 10h30v30H10z" />
    <path fill="#fff" d="M20 21h10v2H20z" />
    <circle cx="25" cy="18" r="3" fill="#fff" />
    <path fill="#fff" d="M21 25h8v8h-8z" />
  </IconWrapper>
);

export const OrganizationIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className} viewBox="0 0 64 64">
    <rect x="25" y="28" width="14" height="26" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="15" y="10" width="34" height="44" rx="2" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 19H31" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 25H31" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M40 19H41" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M40 25H41" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M40 31H41" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M40 37H41" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M40 43H41" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </IconWrapper>
);

export const StudyIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className} viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="6" stroke="hsl(var(--primary))" strokeWidth="2.5"/>
    <circle cx="16" cy="18" r="4" stroke="hsl(var(--primary))" strokeWidth="2.5"/>
    <circle cx="48" cy="18" r="4" stroke="hsl(var(--primary))" strokeWidth="2.5"/>
    <circle cx="16" cy="46" r="4" stroke="hsl(var(--primary))" strokeWidth="2.5"/>
    <circle cx="48" cy="46" r="4" stroke="hsl(var(--primary))" strokeWidth="2.5"/>
    <circle cx="32" cy="12" r="3" stroke="hsl(var(--primary))" strokeWidth="2.5"/>
    <circle cx="32" cy="52" r="3" stroke="hsl(var(--primary))" strokeWidth="2.5"/>
    <path d="M32 26V15" stroke="hsl(var(--accent))" strokeWidth="2"/>
    <path d="M32 49V38" stroke="hsl(var(--accent))" strokeWidth="2"/>
    <path d="M44.5 44.5L37.5 37.5" stroke="hsl(var(--accent))" strokeWidth="2"/>
    <path d="M19.5 44.5L26.5 37.5" stroke="hsl(var(--accent))" strokeWidth="2"/>
    <path d="M19.5 19.5L26.5 26.5" stroke="hsl(var(--accent))" strokeWidth="2"/>
    <path d="M44.5 19.5L37.5 26.5" stroke="hsl(var(--accent))" strokeWidth="2"/>
  </IconWrapper>
);

export const SiteIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className} viewBox="0 0 50 50">
        <path fill="#6f42c1" d="M10 15h30v20H10z" />
        <path fill="#fff" d="M13 18h5v5h-5zM22 18h6v5h-6zM32 18h5v5h-5zM13 27h5v5h-5zM22 27h6v5h-6zM32 27h5v5h-5z" />
        <path fill="red" d="M24 20h2v3h3v2h-3v3h-2v-3h-3v-2h3z" />
  </IconWrapper>
);

export const SuppliesIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className} viewBox="0 0 50 50">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: 'rgb(255,0,255)', stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: 'rgb(0,255,255)', stopOpacity: 1}} />
      </linearGradient>
    </defs>
    <path d="M20 15 a10 10 0 0 1 20 0 l-10 15 z" fill="url(#grad1)" />
    <circle cx="30" cy="30" r="8" fill="#ccc" />
  </IconWrapper>
);

export const SubjectIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className} viewBox="0 0 50 50">
    <circle cx="25" cy="18" r="5" fill="#007bff" />
    <path d="M15 35 q10 -15 20 0" stroke="#007bff" fill="none" strokeWidth="2" />
    <circle cx="15" cy="20" r="4" fill="#0056b3" />
    <path d="M8 35 q7 -10 14 0" stroke="#0056b3" fill="none" strokeWidth="2" />
    <circle cx="35" cy="20" r="4" fill="#0056b3" />
    <path d="M28 35 q7 -10 14 0" stroke="#0056b3" fill="none" strokeWidth="2" />
  </IconWrapper>
);

export const DataManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className} viewBox="0 0 50 50">
      <path fill="#17a2b8" d="M12 10h26v30H12z" />
      <path fill="#fff" d="M17 15h16v3H17zM17 22h16v3H17zM17 29h16v3H17z" />
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
  <IconWrapper className={className} viewBox="0 0 50 50">
      <path fill="#007bff" d="M10 15h20v15H10z" />
      <path fill="#fff" d="M12 17h2v2h-2z" />
      <path fill="#fff" d="M25 18h2v10h-2z" />
      <circle cx="18" cy="28" r="1.5" fill="#fff" />
      <circle cx="22" cy="28" r="1.5" fill="#fff" />
      <circle cx="26" cy="28" r="1.5" fill="#fff" />
      <circle cx="30" cy="28" r="1.5" fill="#fff" />
  </IconWrapper>
);

export const HelpIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="32" cy="32" r="18" stroke="hsl(var(--primary))" strokeWidth="2.5"/>
    <path d="M26 28C26 24.6863 28.6863 22 32 22C35.3137 22 38 24.6863 38 28C38 30.148 36.7877 31.9834 35 32.9101V33" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="32" cy="39" r="1.5" fill="hsl(var(--accent))"/>
  </IconWrapper>
);
