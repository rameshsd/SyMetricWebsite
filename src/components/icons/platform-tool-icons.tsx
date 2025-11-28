
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
    <path d="M14 2H38V50H14z" strokeWidth="2.5" />
    <path d="M46 38V62L38 56L30 62L22 56L14 62V38" strokeWidth="2.5" />
    <circle cx="26" cy="18" r="4" strokeWidth="2.5" />
    <path d="M20 28H32" strokeWidth="2.5" />
    <path d="M20 36H32" strokeWidth="2.5" />
  </IconWrapper>
);

export const OrgManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M12 52H52V56H12z" strokeWidth="2.5" />
    <path d="M18 8H46V52H18z" strokeWidth="2.5" />
    <path d="M24 16H30V22H24zM34 16H40V22H34z" strokeWidth="2.5" />
    <path d="M24 28H30V34H24zM34 28H40V34H34z" strokeWidth="2.5" />
    <path d="M24 40H30V46H24zM34 40H40V46H34z" strokeWidth="2.5" />
  </IconWrapper>
);

export const StudyManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="32" cy="16" r="5" strokeWidth="2.5" />
    <circle cx="16" cy="28" r="5" strokeWidth="2.5" />
    <circle cx="48" cy="28" r="5" strokeWidth="2.5" />
    <circle cx="32" cy="40" r="5" strokeWidth="2.5" />
    <circle cx="16" cy="52" r="5" strokeWidth="2.5" />
    <circle cx="48" cy="52" r="5" strokeWidth="2.5" />
    <path d="M32 21V35" strokeWidth="2.5" />
    <path d="M28 32L19 30" strokeWidth="2.5" />
    <path d="M36 32L45 30" strokeWidth="2.5" />
    <path d="M16 33V47" strokeWidth="2.5" />
    <path d="M48 33V47" strokeWidth="2.5" />
  </IconWrapper>
);

export const SiteManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M20 6H44V60H20z" strokeWidth="2.5" />
    <path d="M26 14H38" strokeWidth="2.5" />
    <path d="M26 22H38" strokeWidth="2.5" />
    <path d="M26 30H38" strokeWidth="2.5" />
    <path d="M26 38H38" strokeWidth="2.5" />
    <path d="M26 46H38" strokeWidth="2.5" />
    <path d="M32 26V34" strokeWidth="2.5" />
    <path d="M28 30H36" strokeWidth="2.5" />
    <path d="M8 60H56" strokeWidth="2.5" />
  </IconWrapper>
);

export const SuppliesManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M20,32 A12,12 0 1,1 44,32" strokeWidth="2.5" />
    <path d="M20,32 L44,32" strokeWidth="2.5" />
    <path d="M12 20L52 44" strokeWidth="2.5" />
  </IconWrapper>
);

export const SubjectManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="32" cy="16" r="6" strokeWidth="2.5" />
    <path d="M44 32 C44 25, 20 25, 20 32" strokeWidth="2.5" />
    <circle cx="16" cy="38" r="5" strokeWidth="2.5" />
    <path d="M24 50 C24 45, 8 45, 8 50" strokeWidth="2.5" />
    <circle cx="48" cy="38" r="5" strokeWidth="2.5" />
    <path d="M56 50 C56 45, 40 45, 40 50" strokeWidth="2.5" />
  </IconWrapper>
);

export const DataManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M18 40V56H46V40" strokeWidth="2.5" />
    <path d="M10 24V40H26V24" strokeWidth="2.5" />
    <path d="M38 24V40H54V24" strokeWidth="2.5" />
    <path d="M32 8L32 24" strokeWidth="2.5" />
    <path d="M32 16L22 24" strokeWidth="2.5" />
    <path d="M32 16L42 24" strokeWidth="2.5" />
    <circle cx="32" cy="12" r="4" strokeWidth="2.5" />
  </IconWrapper>
);

export const LabManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M24 58L32 58" strokeWidth="2.5" />
    <path d="M28 58L28 44" strokeWidth="2.5" />
    <path d="M20 44L36 44" strokeWidth="2.5" />
    <path d="M20 30L20 20L36 20L36 30" strokeWidth="2.5" />
    <path d="M44 25L36 25" strokeWidth="2.5" />
    <path d="M44 14L44 8L50 8" strokeWidth="2.5" />
    <path d="M28 20L28 10L44 10" strokeWidth="2.5" />
  </IconWrapper>
);

export const MedicalCodingIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <rect x="8" y="12" width="48" height="36" rx="4" strokeWidth="2.5" />
    <path d="M8 52H56" strokeWidth="2.5" />
    <path d="M24 52V58H40V52" strokeWidth="2.5" />
    <path d="M32 24V36" strokeWidth="2.5" />
    <path d="M26 30H38" strokeWidth="2.5" />
  </IconWrapper>
);

export const DataServicesIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M44 24C44 17 38 11 32 11C26 11 20 17 20 24C12 24 8 32 8 38C8 44 14 50 20 50H44C50 50 56 44 56 38C56 32 50 24 44 24Z" strokeWidth="2.5" />
    <circle cx="20" cy="50" r="3" strokeWidth="2.5" />
    <circle cx="32" cy="50" r="3" strokeWidth="2.5" />
    <circle cx="44" cy="50" r="3" strokeWidth="2.5" />
    <path d="M20 47V38" strokeWidth="2.5" />
  </IconWrapper>
);

export const DigitalLearningIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M10 28L32 16L54 28L32 40L10 28Z" strokeWidth="2.5" />
    <path d="M54 28V44" strokeWidth="2.5" />
    <path d="M10 44L32 56L54 44" strokeWidth="2.5" />
    <path d="M18 24L18 40" strokeWidth="2.5" />
    <path d="M24 50C24 50 28 48 32 48C36 48 40 50 40 50" strokeWidth="2.5" />
  </IconWrapper>
);

export const HelpSupportIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="32" cy="32" r="24" strokeWidth="2.5" />
    <path d="M24 26 C24 20 32 20 32 26 C32 32 24 32 24 38" strokeWidth="2.5" />
    <circle cx="24" cy="44" r="1" strokeWidth="2.5" />
  </IconWrapper>
);
