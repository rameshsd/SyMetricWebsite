'use client';

import React from 'react';

const IconWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

const fg = "#FFFFFF";

/* ---------------------------------------------------------
   1. User Access Icon   (Corrected head + body proportions)
----------------------------------------------------------*/
export const UserAccessIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))" />
    <circle cx="100" cy="70" r="30" fill={fg} />
    <path d="M50 160 C50 115, 150 115, 150 160 Z" fill={fg} />
  </IconWrapper>
);

/* ---------------------------------------------------------
   2. Organization Management Icon  (Fixed building shape)
----------------------------------------------------------*/
export const OrgManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))" />
    <rect x="60" y="70" width="80" height="80" rx="6" fill={fg} />
    <rect x="85" y="45" width="30" height="20" rx="4" fill={fg} />
  </IconWrapper>
);

/* ---------------------------------------------------------
   3. Study Management (Corrected folder + corner shape)
----------------------------------------------------------*/
export const StudyManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))" />
    <path d="M55 150V60H115L145 90V150Z" fill={fg} />
    <path
      d="M115 60V90H145"
      stroke="hsl(var(--primary))"
      strokeWidth="10"
      strokeLinecap="round"
      fill="none"
    />
  </IconWrapper>
);

/* ---------------------------------------------------------
   4. Site Management Icon  (Centered location diamond)
----------------------------------------------------------*/
export const SiteManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))" />
    <path d="M100 45L155 100L100 165L45 100Z" fill={fg} />
    <circle cx="100" cy="100" r="22" fill="hsl(var(--primary))" />
  </IconWrapper>
);

/* ---------------------------------------------------------
   5. Supplies Management Icon (Correct lid arc)
----------------------------------------------------------*/
export const SuppliesManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))" />
    <rect x="50" y="85" width="100" height="65" rx="10" fill={fg} />
    <path
      d="M70 85V65C70 45,130 45,130 65V85"
      fill="none"
      stroke={fg}
      strokeWidth="12"
      strokeLinecap="round"
    />
  </IconWrapper>
);

/* ---------------------------------------------------------
   6. Subject Management Icon (Correct tick shape)
----------------------------------------------------------*/
export const SubjectManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))" />
    <circle cx="100" cy="70" r="30" fill={fg} />
    <path d="M50 160 C50 115,150 115,150 160Z" fill={fg} />
    <path
      d="M120 125L140 145L170 110"
      stroke={fg}
      strokeWidth="12"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </IconWrapper>
);

/* ---------------------------------------------------------
   7. Data Management Icon  (Correct database stack)
----------------------------------------------------------*/
export const DataManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))" />
    <ellipse cx="100" cy="85" rx="60" ry="20" fill={fg} />
    <ellipse cx="100" cy="115" rx="60" ry="20" fill={fg} />
    <ellipse cx="100" cy="145" rx="60" ry="20" fill={fg} />
  </IconWrapper>
);

/* ---------------------------------------------------------
   8. Lab Management Icon  (Correct flask shape)
----------------------------------------------------------*/
export const LabManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))" />
    <path d="M75 150H125L110 60H90Z" fill={fg} />
    <circle cx="100" cy="105" r="10" fill="hsl(var(--primary))" />
  </IconWrapper>
);

/* ---------------------------------------------------------
   9. Medical Coding Icon (Correct document spacing)
----------------------------------------------------------*/
export const MedicalCodingIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))" />
    <rect x="60" y="50" width="80" height="100" rx="10" fill={fg} />
    <rect x="75" y="70" width="50" height="8" rx="4" fill="hsl(var(--primary))" />
    <rect x="75" y="95" width="50" height="8" rx="4" fill="hsl(var(--primary))" />
    <rect x="75" y="120" width="30" height="8" rx="4" fill="hsl(var(--primary))" />
  </IconWrapper>
);

/* ---------------------------------------------------------
   10. Data Services Icon (Correct server blocks)
----------------------------------------------------------*/
export const DataServicesIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))" />
    <rect x="50" y="60" width="100" height="35" rx="8" fill={fg} />
    <rect x="50" y="105" width="100" height="35" rx="8" fill={fg} />
  </IconWrapper>
);

/* ---------------------------------------------------------
   11. Digital Learning Icon (Perfect laptop style)
----------------------------------------------------------*/
export const DigitalLearningIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))" />
    <rect x="50" y="60" width="100" height="80" rx="6" fill={fg} />
    <path d="M100 85L120 100L100 115" stroke="hsl(var(--primary))" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </IconWrapper>
);

/* ---------------------------------------------------------
   12. Help & Support Icon (Balanced symbol)
----------------------------------------------------------*/
export const HelpSupportIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))" />
    <path d="M70 95A30 30 0 0 1 130 95A25 25 0 0 0 70 95Z" fill={fg} />
    <line x1="100" y1="40" x2="100" y2="160" stroke={fg} strokeWidth="15" strokeLinecap="round" />
    <line x1="50" y1="100" x2="150" y2="100" stroke={fg} strokeWidth="15" strokeLinecap="round" />
  </IconWrapper>
);
