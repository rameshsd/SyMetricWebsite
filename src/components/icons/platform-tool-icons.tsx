'use client';

import React from 'react';

const IconWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    className={className}
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

export const UserAccessIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path d="M29 18H15c-1.1 0-2 .9-2 2v28c0 1.1.9 2 2 2h22c1.1 0 2-.9 2 2V34" />
        <circle cx="27" cy="27" r="4" />
        <path d="M21 35h12" />
        <circle cx="44" cy="44" r="8" />
        <path d="M40 44l3 3 5-5" />
    </IconWrapper>
);

export const OrgManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path d="M18 54V22l14-8 14 8v32H18z" />
        <rect x="23" y="27" width="6" height="6" />
        <rect x="35" y="27" width="6" height="6" />
        <rect x="23" y="39" width="6" height="6" />
        <rect x="35" y="39" width="6" height="6" />
    </IconWrapper>
);

export const StudyManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <circle cx="32" cy="21" r="5" />
        <circle cx="17" cy="39" r="5" />
        <circle cx="47" cy="39" r="5" />
        <path d="M32 26v8" />
        <path d="M20.5 36.5l8-3.5" />
        <path d="M43.5 36.5l-8-3.5" />
    </IconWrapper>
);

export const SiteManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <rect x="18" y="14" width="28" height="40" rx="2" />
        <rect x="24" y="22" width="6" height="6" />
        <rect x="34" y="22" width="6" height="6" />
        <rect x="24" y="32" width="6" height="6" />
        <rect x="34" y="32" width="6" height="6" />
        <rect x="24" y="42" width="6" height="6" />
        <rect x="34" y="42" width="6" height="6" />
        <path d="M32 14v-4" />
        <path d="M26 10h12" />
        <path d="M38 14V8h-2" />
    </IconWrapper>
);

export const SuppliesManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <path d="M32 12a14.14 14.14 0 0 0-14.14 14.14h28.28A14.14 14.14 0 0 0 32 12z" />
      <path d="M17.86 37.86a14.14 14.14 0 0 0 28.28 0H17.86z" />
      <path d="M16 32l32-16" />
    </IconWrapper>
);

export const SubjectManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <circle cx="20" cy="24" r="4" />
        <path d="M16 32h8" />
        <circle cx="36" cy="24" r="4" />
        <path d="M32 32h8" />
        <circle cx="52" cy="24" r="4" />
        <path d="M48 32h8" />
    </IconWrapper>
);

export const DataManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path d="M23 26h-8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2z" />
        <path d="M49 26h-8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2z" />
        <path d="M36 44h-8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2z" />
        <path d="M19 26v-4c0-2.2 1.8-4 4-4h4" />
        <path d="M45 26v-4c0-2.2-1.8-4-4-4h-4" />
        <path d="M32 44V31" />
        <circle cx="32" cy="12" r="3" />
    </IconWrapper>
);

export const LabManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path d="M50 42H32l-6 12h-8l-6-12H4" />
        <path d="M44 42V18a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v24" />
        <path d="M32 42V24a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v18" />
        <circle cx="28" cy="10" r="3" />
    </IconWrapper>
);

export const MedicalCodingIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <rect x="14" y="14" width="36" height="36" rx="2" />
        <path d="M32 24v16" />
        <path d="M24 32h16" />
    </IconWrapper>
);

export const DataServicesIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path d="M22 42c-5.52 0-10-4.48-10-10s4.48-10 10-10" />
        <path d="M42 22c5.52 0 10 4.48 10 10s-4.48 10-10 10" />
        <path d="M22 32h20" />
        <path d="M32 22v20" />
        <path d="M24 16h16a4 4 0 0 1 4 4v10" />
    </IconWrapper>
);

export const DigitalLearningIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path d="M12 40V22a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18" />
        <path d="M18 52h28" />
        <path d="M32 40v12" />
        <path d="M24 18l8-6 8 6" />
        <path d="M32 12v-4" />
    </IconWrapper>
);

export const HelpSupportIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <circle cx="32" cy="32" r="22" />
        <path d="M26 26c0-6 12-6 12 0 0 4-6 4-6 9" />
        <circle cx="26" cy="44" r="1" fill="currentColor" stroke="none" />
    </IconWrapper>
);
