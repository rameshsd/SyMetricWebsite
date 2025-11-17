
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
    <path d="M25 54.5H19C17.3431 54.5 16 53.1569 16 51.5V12.5C16 10.8431 17.3431 9.5 19 9.5H45C46.6569 9.5 48 10.8431 48 12.5V30" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="32" cy="22.5" r="5" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M41 33.5C41 37.9183 37.0899 41.5 32.5 41.5C27.9101 41.5 24 37.9183 24 33.5C24 29.0817 27.9101 25.5 32.5 25.5" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M37 42.5L41.3333 47.5L51 36.5" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </IconWrapper>
);

export const OrganizationIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
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
  <IconWrapper className={className}>
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
  <IconWrapper className={className}>
    <path d="M14 54V24H50V54" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 54H54" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 54V40H42V54" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="22" y="16" width="20" height="8" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 16V10" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 10H36" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 32H26" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M38 32H42" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </IconWrapper>
);

export const SuppliesIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M44 20C44 24.4183 40.4183 28 36 28C31.5817 28 28 24.4183 28 20C28 15.5817 31.5817 12 36 12C40.4183 12 44 15.5817 44 20Z" stroke="hsl(var(--primary))" strokeWidth="2.5"/>
    <path d="M22.2871 45.7129L18.7513 42.1771C16.8029 40.2287 16.8029 37.1081 18.7513 35.1597L35.1597 18.7513C37.1081 16.8029 40.2287 16.8029 42.1771 18.7513L45.7129 22.2871C47.6613 24.2355 47.6613 27.3561 45.7129 29.3045L29.3045 45.7129C27.3561 47.6613 24.2355 47.6613 22.2871 45.7129Z" stroke="hsl(var(--primary))" strokeWidth="2.5"/>
    <path d="M25 33L40 18" stroke="hsl(var(--accent))" strokeWidth="2"/>
  </IconWrapper>
);

export const SubjectIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="32" cy="21" r="5" stroke="hsl(var(--primary))" strokeWidth="2.5"/>
    <path d="M42 34C42 28.4772 37.5228 24 32 24C26.4772 24 22 28.4772 22 34" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="18" cy="28" r="4" stroke="hsl(var(--accent))" strokeWidth="2.5"/>
    <path d="M25 39C25 34.5817 21.866 31 18 31C14.134 31 11 34.5817 11 39" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="46" cy="28" r="4" stroke="hsl(var(--accent))" strokeWidth="2.5"/>
    <path d="M53 39C53 34.5817 49.866 31 46 31C42.134 31 39 34.5817 39 39" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round"/>
  </IconWrapper>
);

export const DataManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M24 54H20C18.8954 54 18 53.1046 18 52V42C18 40.8954 18.8954 40 20 40H24" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M40 54H44C45.1046 54 46 53.1046 46 52V42C46 40.8954 45.1046 40 44 40H40" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round"/>
    <rect x="24" y="40" width="16" height="14" rx="2" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M32 40V30" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M42 22H22" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M32 30C35.3137 30 38 27.3137 38 24C38 20.6863 35.3137 18 32 18C28.6863 18 26 20.6863 26 24C26 27.3137 28.6863 30 32 30Z" stroke="hsl(var(--accent))" strokeWidth="2.5"/>
    <path d="M32 21V27" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M29 24H35" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round"/>
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
    <rect x="14" y="14" width="36" height="22" rx="2" stroke="hsl(var(--primary))" strokeWidth="2.5"/>
    <path d="M24 14V11C24 9.89543 24.8954 9 26 9H38C39.1046 9 40 9.89543 40 11V14" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 36V40" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="23" cy="46" r="3" stroke="hsl(var(--accent))" strokeWidth="2.5"/>
    <circle cx="32" cy="46" r="3" stroke="hsl(var(--accent))" strokeWidth="2.5"/>
    <circle cx="41" cy="46" r="3" stroke="hsl(var(--accent))" strokeWidth="2.5"/>
  </IconWrapper>
);

export const HelpIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="32" cy="32" r="18" stroke="hsl(var(--primary))" strokeWidth="2.5"/>
    <path d="M26 28C26 24.6863 28.6863 22 32 22C35.3137 22 38 24.6863 38 28C38 30.148 36.7877 31.9834 35 32.9101V33" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="32" cy="39" r="1.5" fill="hsl(var(--accent))"/>
  </IconWrapper>
);
