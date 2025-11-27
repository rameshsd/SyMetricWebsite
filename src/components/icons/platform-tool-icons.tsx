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
   1. User Access Icon
   Person + small lock = access/permissions
----------------------------------------------------------*/
export const UserAccessIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))" />

    {/* User */}
    <circle cx="90" cy="70" r="24" fill={fg} />
    <path
      d="M60 140 C60 115, 120 115, 120 140 Z"
      fill={fg}
    />

    {/* Lock */}
    <rect x="120" y="115" width="32" height="28" rx="6" fill={fg} />
    <path
      d="M136 110 C130 110,130 115,130 120 H144 C144 115,144 110,138 110 Z"
      fill={fg}
    />
    <circle cx="136" cy="128" r="3" fill="hsl(var(--primary))" />
  </IconWrapper>
);

/* ---------------------------------------------------------
   2. Organization Management Icon
   Company building with windows
----------------------------------------------------------*/
export const OrgManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))" />

    {/* Building */}
    <rect x="60" y="55" width="80" height="95" rx="6" fill={fg} />
    {/* Windows */}
    <rect x="70" y="65" width="15" height="15" fill="hsl(var(--primary))" />
    <rect x="95" y="65" width="15" height="15" fill="hsl(var(--primary))" />
    <rect x="120" y="65" width="15" height="15" fill="hsl(var(--primary))" />

    <rect x="70" y="90" width="15" height="15" fill="hsl(var(--primary))" />
    <rect x="95" y="90" width="15" height="15" fill="hsl(var(--primary))" />
    <rect x="120" y="90" width="15" height="15" fill="hsl(var(--primary))" />

    {/* Door */}
    <rect x="92" y="110" width="16" height="40" fill="hsl(var(--primary))" />
  </IconWrapper>
);

/* ---------------------------------------------------------
   3. Study Management Icon
   Open book = study
----------------------------------------------------------*/
export const StudyManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))" />

    {/* Open book */}
    <path
      d="M55 70
         Q80 60, 100 70
         Q120 60, 145 70
         V140
         Q120 130,100 140
         Q80 130,55 140
         Z"
      fill={fg}
    />

    {/* Left page lines */}
    <path
      d="M70 85 H95
         M70 100 H95"
      stroke="hsl(var(--primary))"
      strokeWidth="4"
      strokeLinecap="round"
    />

    {/* Right page lines */}
    <path
      d="M105 85 H130
         M105 100 H130"
      stroke="hsl(var(--primary))"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </IconWrapper>
);

/* ---------------------------------------------------------
   4. Site Management Icon
   Map pin on base = site/location
----------------------------------------------------------*/
export const SiteManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))" />

    {/* Pin */}
    <path
      d="M100 55
         C83 55,70 68,70 85
         C70 105,100 135,100 135
         C100 135,130 105,130 85
         C130 68,117 55,100 55Z"
      fill={fg}
    />
    <circle cx="100" cy="85" r="12" fill="hsl(var(--primary))" />

    {/* Base */}
    <ellipse cx="100" cy="150" rx="40" ry="10" fill={fg} />
  </IconWrapper>
);

/* ---------------------------------------------------------
   5. Supplies Management Icon
   Shipping box with flaps
----------------------------------------------------------*/
export const SuppliesManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))" />

    {/* Box body */}
    <rect x="55" y="80" width="90" height="70" rx="6" fill={fg} />

    {/* Top flaps */}
    <path
      d="M55 80 L100 60 L145 80 Z"
      fill={fg}
    />
    <path
      d="M100 60 V150"
      stroke="hsl(var(--primary))"
      strokeWidth="4"
      strokeLinecap="round"
    />

    {/* Label */}
    <rect x="70" y="100" width="20" height="12" fill="hsl(var(--primary))" />
  </IconWrapper>
);

/* ---------------------------------------------------------
   6. Subject Management Icon
   Multiple users = multiple subjects
----------------------------------------------------------*/
export const SubjectManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))" />

    {/* Center user */}
    <circle cx="100" cy="70" r="22" fill={fg} />
    <path
      d="M75 130 C75 110,125 110,125 130 Z"
      fill={fg}
    />

    {/* Left user (smaller) */}
    <circle cx="70" cy="80" r="14" fill={fg} opacity="0.9" />
    <path
      d="M52 125 C52 112,88 112,88 125 Z"
      fill={fg}
      opacity="0.9"
    />

    {/* Right user (smaller) */}
    <circle cx="130" cy="80" r="14" fill={fg} opacity="0.9" />
    <path
      d="M112 125 C112 112,148 112,148 125 Z"
      fill={fg}
      opacity="0.9"
    />
  </IconWrapper>
);

/* ---------------------------------------------------------
   7. Data Management Icon
   Stacked database cylinders
----------------------------------------------------------*/
export const DataManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))" />

    {/* Top layer */}
    <ellipse cx="100" cy="75" rx="55" ry="18" fill={fg} />
    {/* Middle layer */}
    <path
      d="M45 75 V100
         C45 110,155 110,155 100
         V75"
      fill={fg}
    />
    <ellipse cx="100" cy="100" rx="55" ry="18" fill={fg} />

    {/* Bottom layer */}
    <path
      d="M45 100 V125
         C45 135,155 135,155 125
         V100"
      fill={fg}
    />
    <ellipse cx="100" cy="125" rx="55" ry="18" fill={fg} />
  </IconWrapper>
);

/* ---------------------------------------------------------
   8. Lab Management Icon
   Flask = lab
----------------------------------------------------------*/
export const LabManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))" />

    {/* Flask */}
    <path
      d="M85 55 H115
         V70
         L130 120
         C132 130,125 145,100 145
         C75 145,68 130,70 120
         L85 70 Z"
      fill={fg}
    />
    {/* Liquid */}
    <path
      d="M80 120
         C88 115,112 115,120 120
         C118 135,82 135,80 120Z"
      fill="hsl(var(--primary))"
      opacity="0.9"
    />
  </IconWrapper>
);

/* ---------------------------------------------------------
   9. Medical Coding Icon
   Document + medical cross + code brackets
----------------------------------------------------------*/
export const MedicalCodingIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))" />

    {/* Document */}
    <rect x="60" y="45" width="80" height="100" rx="10" fill={fg} />

    {/* Medical cross */}
    <path
      d="M95 65 H105
         V72 H112
         V82 H105
         V89 H95
         V82 H88
         V72 H95 Z"
      fill="hsl(var(--primary))"
    />

    {/* Code brackets */}
    <path
      d="M78 105 L70 110 L78 115"
      fill="none"
      stroke="hsl(var(--primary))"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M122 105 L130 110 L122 115"
      fill="none"
      stroke="hsl(var(--primary))"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconWrapper>
);

/* ---------------------------------------------------------
   10. Data Services Icon
   Server stacks with indicators
----------------------------------------------------------*/
export const DataServicesIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))" />

    {/* Top server */}
    <rect x="50" y="60" width="100" height="30" rx="8" fill={fg} />
    <circle cx="60" cy="75" r="3" fill="hsl(var(--primary))" />
    <circle cx="70" cy="75" r="3" fill="hsl(var(--primary))" />
    <rect x="90" y="70" width="45" height="6" rx="3" fill="hsl(var(--primary))" />

    {/* Bottom server */}
    <rect x="50" y="105" width="100" height="30" rx="8" fill={fg} />
    <circle cx="60" cy="120" r="3" fill="hsl(var(--primary))" />
    <circle cx="70" cy="120" r="3" fill="hsl(var(--primary))" />
    <rect x="90" y="115" width="45" height="6" rx="3" fill="hsl(var(--primary))" />
  </IconWrapper>
);

/* ---------------------------------------------------------
   11. Digital Learning Icon
   Monitor + play button
----------------------------------------------------------*/
export const DigitalLearningIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))" />

    {/* Monitor */}
    <rect x="50" y="55" width="100" height="70" rx="8" fill={fg} />
    <rect x="80" y="130" width="40" height="8" rx="4" fill={fg} />

    {/* Play button */}
    <path
      d="M95 75 L120 100 L95 125 Z"
      fill="hsl(var(--primary))"
    />
  </IconWrapper>
);

/* ---------------------------------------------------------
   12. Help & Support Icon
   Speech bubble + question mark
----------------------------------------------------------*/
export const HelpSupportIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))" />

    {/* Speech bubble */}
    <path
      d="M60 70
         H140
         C150 70,155 80,155 90
         V115
         C155 125,150 135,140 135
         H90
         L75 145
         V135
         H60
         C50 135,45 125,45 115
         V90
         C45 80,50 70,60 70Z"
      fill={fg}
    />

    {/* Question mark */}
    <path
      d="M95 90
         C95 82,105 80,110 80
         C120 80,125 85,125 92
         C125 98,122 101,117 104
         C112 107,110 109,110 114"
      fill="none"
      stroke="hsl(var(--primary))"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <circle cx="110" cy="124" r="4" fill="hsl(var(--primary))" />
  </IconWrapper>
);
