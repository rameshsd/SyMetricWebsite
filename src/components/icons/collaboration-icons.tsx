
'use client';

import React from 'react';

const IconWrapper = ({ children, className, viewBox = "0 0 24 24" }: { children: React.ReactNode; className?: string, viewBox?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const IdentityIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </IconWrapper>
);

export const OrganizationIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M9 3v18" />
    <path d="M15 3v18" />
    <path d="M3 9h18" />
    <path d="M3 15h18" />
  </IconWrapper>
);

export const StudyIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v16a2 2 0 0 1-2 2H6.5a2.5 2.5 0 0 1 0-5H20" />
  </IconWrapper>
);

export const SiteIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 7h6" />
        <path d="M9 12h6" />
        <path d="M9 17h2" />
    </IconWrapper>
);

export const SuppliesIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </IconWrapper>
);

export const SubjectIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="12" cy="8" r="4" />
    <path d="M18.5 21a8 8 0 1 0-13 0" />
  </IconWrapper>
);

export const DataManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
     <ellipse cx="12" cy="5" rx="9" ry="3" />
     <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
     <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </IconWrapper>
);

export const LabIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h-5c-1.4 0-2.5-1.1-2.5-2.5V2" />
    <path d="M8.5 2h7" />
    <path d="M14.5 16h-5" />
  </IconWrapper>
);

export const MedicalCodingIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 10h20" />
    <path d="M9 16v-4" />
    <path d="M15 16v-4" />
  </IconWrapper>
);

export const DataServicesIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M12 18v-6" />
      <path d="m9 15 3 3 3-3" />
    </IconWrapper>
);

export const DigitalLearningIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
  </IconWrapper>
);

export const HelpIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" />
  </IconWrapper>
);
