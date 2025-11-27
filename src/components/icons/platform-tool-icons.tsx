'use client';

import React from 'react';

const IconWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    className={className}
    aria-hidden="true"
    fill="none"
    stroke="hsl(var(--primary))"
    strokeWidth="12"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

export const UserAccessIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="60" r="30" />
    <path d="M50 180v-20a40 40 0 0 1 40-40h20a40 40 0 0 1 40 40v20" />
  </IconWrapper>
);

export const OrgManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <rect x="40" y="90" width="50" height="90" rx="6" />
    <rect x="110" y="50" width="50" height="130" rx="6" />
    <path d="M40 90l60-40 60 40" />
  </IconWrapper>
);

export const StudyManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M50 40h70a20 20 0 0 1 20 20v110H70a20 20 0 0 1-20-20V40z" />
    <path d="M140 60h30v110h-30" />
  </IconWrapper>
);

export const SiteManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M100 20c-40 0-70 30-70 70 0 50 70 100 70 100s70-50 70-100c0-40-30-70-70-70z" />
    <circle cx="100" cy="90" r="25" />
  </IconWrapper>
);

export const SuppliesManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M30 70l70-30 70 30v90l-70 30-70-30V70z" />
    <path d="M100 40v150" />
    <path d="M30 70l70 30 70-30" />
  </IconWrapper>
);

export const SubjectManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="70" cy="60" r="30" />
    <circle cx="130" cy="60" r="30" />
    <path d="M40 180v-30a30 30 0 0 1 30-30" />
    <path d="M160 180v-30a30 30 0 0 0-30-30" />
  </IconWrapper>
);

export const DataManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <ellipse cx="100" cy="50" rx="70" ry="25" />
    <path d="M30 50v50c0 13.8 31.34 25 70 25s70-11.2 70-25V50" />
    <path d="M30 100v50c0 13.8 31.34 25 70 25s70-11.2 70-25v-50" />
  </IconWrapper>
);

export const LabManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M80 20h40" />
    <path d="M80 20v60l-40 70a40 40 0 0 0 35 50h50a40 40 0 0 0 35-50l-40-70V20" />
  </IconWrapper>
);

export const MedicalCodingIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M50 20h70l40 40v120H50z" />
    <path d="M120 20v40h40" />
    <path d="M100 90v60" />
    <path d="M80 120h40" />
  </IconWrapper>
);

export const DataServicesIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <rect x="30" y="40" width="140" height="40" rx="5" />
    <rect x="30" y="120" width="140" height="40" rx="5" />
    <circle cx="55" cy="60" r="5" />
    <circle cx="55" cy="140" r="5" />
  </IconWrapper>
);

export const DigitalLearningIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <rect x="30" y="40" width="140" height="90" rx="5" />
    <path d="M20 150h160" />
    <polygon points="90,75 125,95 90,115" />
  </IconWrapper>
);

export const HelpSupportIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="80" />
    <path d="M75 80a25 25 0 1 1 50 0c0 15-25 15-25 40" />
    <circle cx="100" cy="150" r="5" fill="hsl(var(--primary))" stroke="none" />
  </IconWrapper>
);
