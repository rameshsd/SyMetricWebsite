import React from 'react';

const IconWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

// This file is now unused as the diagram has been converted to a static SVG.
// The icons are kept here in case they are needed for other purposes.

export const RealWorldEvidenceIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </IconWrapper>
);

export const TrialDirectoriesIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
  </IconWrapper>
);

export const ClinicalTrialsDataIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="M12 18v-6" />
    <path d="M9 15h6" />
  </IconWrapper>
);

export const DataRepositoriesIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14a9 3 0 0 0 18 0V5" />
    <path d="M3 12a9 3 0 0 0 18 0" />
  </IconWrapper>
);

export const PublicDomainDataIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M9 12v- princípios" />
    <path d="m15 12-3-3-3 3" />
    <path d="M9 3v2" />
    <path d="M15 3v2" />
    <path d="M21 9h-2" />
    <path d="M21 15h-2" />
    <path d="M15 21v-2" />
    <path d="M9 21v-2" />
    <path d="M3 15h2" />
    <path d="M3 9h2" />
  </IconWrapper>
);

export const EHR_EMR_Icon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h8" />
    <path d="M10 9H8" />
    <path d="M10 13H8" />
    <path d="M10 17H8" />
  </IconWrapper>
);

export const UsersIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </IconWrapper>
);

export const PillIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
        <path d="m8.5 8.5 7 7" />
    </IconWrapper>
);
