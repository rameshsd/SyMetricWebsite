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
        <path d="M18 14H38V42H18z" strokeWidth="3" />
        <path d="M42 42V50" strokeWidth="3" />
        <path d="M14 42V50" strokeWidth="3" />
        <circle cx="28" cy="24" r="5" strokeWidth="3" />
        <path d="M22 34h12" strokeWidth="3" />
        <path d="M40 34l8 8" strokeWidth="3" />
        <path d="M48 34l-8 8" strokeWidth="3" />
    </IconWrapper>
);

export const OrgManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path d="M14 54V22l18-10 18 10v32H14z" strokeWidth="3"/>
        <path d="M22 28h8v8h-8z" strokeWidth="3"/>
        <path d="M34 28h8v8h-8z" strokeWidth="3"/>
        <path d="M22 40h8v8h-8z" strokeWidth="3"/>
        <path d="M34 40h8v8h-8z" strokeWidth="3"/>
    </IconWrapper>
);

export const StudyManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="32" cy="14" r="6" strokeWidth="3" />
    <circle cx="14" cy="28" r="6" strokeWidth="3" />
    <circle cx="50" cy="28" r="6" strokeWidth="3" />
    <circle cx="23" cy="48" r="6" strokeWidth="3" />
    <circle cx="41" cy="48" r="6" strokeWidth="3" />
    <path d="M32 20v14" strokeWidth="3" />
    <path d="M20 28h24" strokeWidth="3" />
    <path d="M28 32l-5 10" strokeWidth="3" />
    <path d="M36 32l5 10" strokeWidth="3" />
  </IconWrapper>
);

export const SiteManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path d="M18 54V20l14-8 14 8v34H18z" strokeWidth="3"/>
        <path d="M26 28h12" strokeWidth="3"/>
        <path d="M26 36h12" strokeWidth="3"/>
        <path d="M26 44h12" strokeWidth="3"/>
        <path d="M32 28V44" strokeWidth="3"/>
    </IconWrapper>
);

export const SuppliesManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <path d="M20 20L44 44" strokeWidth="3"/>
      <path d="M44 20L20 44" strokeWidth="3"/>
      <path d="M32 12 A 20 20 0 0 0 12 32" strokeWidth="3"/>
      <path d="M32 52 A 20 20 0 0 0 52 32" strokeWidth="3"/>
    </IconWrapper>
);

export const SubjectManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="32" cy="18" r="6" strokeWidth="3" />
    <circle cx="16" cy="38" r="5" strokeWidth="3" />
    <circle cx="48" cy="38" r="5" strokeWidth="3" />
    <path d="M44 30 C40 34, 24 34, 20 30" strokeWidth="3" />
    <path d="M24 48 C22 50, 10 50, 8 48" strokeWidth="3" />
    <path d="M56 48 C54 50, 42 50, 40 48" strokeWidth="3" />
  </IconWrapper>
);

export const DataManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M18 42V52H46V42" strokeWidth="3" />
    <path d="M10 26V36H26V26" strokeWidth="3" />
    <path d="M38 26V36H54V26" strokeWidth="3" />
    <path d="M32 12V26" strokeWidth="3" />
    <path d="M22 26h20" strokeWidth="3" />
    <path d="M18 36h28" strokeWidth="3" />
    <circle cx="32" cy="16" r="4" fill="currentColor" strokeWidth="0" />
  </IconWrapper>
);

export const LabManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path d="M24 58 L 40 58" strokeWidth="3"/>
        <path d="M32 58 L 32 44" strokeWidth="3"/>
        <path d="M22 44 L 42 44" strokeWidth="3"/>
        <path d="M22 24 L 22 14 L 42 14 L 42 24" strokeWidth="3"/>
        <path d="M52 29L42 20" strokeWidth="3"/>
        <path d="M42 20L42 14" strokeWidth="3"/>
    </IconWrapper>
);

export const MedicalCodingIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <rect x="12" y="14" width="40" height="36" rx="4" strokeWidth="3" />
    <path d="M28 26V42" strokeWidth="3" />
    <path d="M36 26V42" strokeWidth="3" />
    <path d="M22 34H42" strokeWidth="3" />
  </IconWrapper>
);

export const DataServicesIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M44 24C44 17 38 11 32 11C26 11 20 17 20 24C12 24 8 32 8 38C8 44 14 50 20 50H44C50 50 56 44 56 38C56 32 50 24 44 24Z" strokeWidth="3" />
    <circle cx="20" cy="50" r="3" strokeWidth="3" />
    <circle cx="32" cy="50" r="3" strokeWidth="3" />
    <circle cx="44" cy="50" r="3" strokeWidth="3" />
    <path d="M20 47V38" strokeWidth="3" />
  </IconWrapper>
);

export const DigitalLearningIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <path d="M10 28L32 16L54 28L32 40L10 28Z" strokeWidth="3" />
      <path d="M54 28V44" strokeWidth="3" />
      <path d="M10 44L32 56L54 44" strokeWidth="3" />
      <path d="M18 24L18 40" strokeWidth="3" />
      <path d="M24 50C24 50 28 48 32 48C36 48 40 50 40 50" strokeWidth="3" />
    </IconWrapper>
);

export const HelpSupportIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="32" cy="32" r="24" strokeWidth="3" />
    <path d="M24 26 C24 20 32 20 32 26 C32 32 24 32 24 38" strokeWidth="3" />
    <circle cx="24" cy="44" r="1" strokeWidth="3" />
  </IconWrapper>
);
