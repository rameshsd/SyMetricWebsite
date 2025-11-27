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

export const UserAccessIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <circle cx="100" cy="100" r="80" stroke="hsl(var(--primary))" strokeWidth="20" fill="white" />
      <circle cx="100" cy="70" r="25" stroke="hsl(var(--primary))" strokeWidth="18" fill="none" />
      <path d="M60 140 C60 110, 140 110, 140 140" 
        stroke="hsl(var(--primary))"
        strokeWidth="18"
        strokeLinecap="round"
        fill="none"
      />
    </IconWrapper>
  );
  
export const OrgManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <circle cx="100" cy="100" r="80" stroke="hsl(var(--primary))" strokeWidth="20" fill="white" />
      <rect x="65" y="60" width="70" height="80" rx="6"
        stroke="hsl(var(--primary))" strokeWidth="18" fill="none" />
      <line x1="100" y1="60" x2="100" y2="140" stroke="hsl(var(--primary))" strokeWidth="18" />
      <line x1="65" y1="100" x2="135" y2="100" stroke="hsl(var(--primary))" strokeWidth="18" />
    </IconWrapper>
  );
  
export const StudyManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <circle cx="100" cy="100" r="80" stroke="hsl(var(--primary))" strokeWidth="20" fill="white" />
      <path d="M60 70 Q80 60, 100 70 Q120 60, 140 70 V135 Q120 125,100 135 Q80 125,60 135 Z"
        stroke="hsl(var(--primary))"
        strokeWidth="18"
        fill="none"
        strokeLinejoin="round"
      />
    </IconWrapper>
  );
  
export const SiteManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <circle cx="100" cy="100" r="80" stroke="hsl(var(--primary))" strokeWidth="20" fill="white" />
      <path
        d="M100 55 C82 55,68 70,68 88 C68 115,100 145,100 145 C100 145,132 115,132 88 C132 70,118 55,100 55 Z"
        stroke="hsl(var(--primary))"
        strokeWidth="18"
        fill="none"
        strokeLinejoin="round"
      />
      <circle cx="100" cy="88" r="12" stroke="hsl(var(--primary))" strokeWidth="18" fill="none" />
    </IconWrapper>
  );
  
export const SuppliesManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <circle cx="100" cy="100" r="80" stroke="hsl(var(--primary))" strokeWidth="20" fill="white" />
      <rect x="60" y="85" width="80" height="60" rx="8"
        stroke="hsl(var(--primary))" strokeWidth="18" fill="none" />
      <path d="M60 85 L100 60 L140 85" stroke="hsl(var(--primary))" strokeWidth="18" fill="none" strokeLinecap="round" />
    </IconWrapper>
  );
  
export const SubjectManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <circle cx="100" cy="100" r="80" stroke="hsl(var(--primary))" strokeWidth="20" fill="white" />
      <circle cx="100" cy="70" r="22" stroke="hsl(var(--primary))" strokeWidth="18" fill="none" />
      <path d="M75 130 C75 108,125 108,125 130" stroke="hsl(var(--primary))" strokeWidth="18" fill="none" strokeLinecap="round" />
      <circle cx="65" cy="90" r="14" stroke="hsl(var(--primary))" strokeWidth="14" fill="none" />
      <path d="M50 125 C50 110,80 110,80 125" stroke="hsl(var(--primary))" strokeWidth="14" fill="none" strokeLinecap="round"/>
      <circle cx="135" cy="90" r="14" stroke="hsl(var(--primary))" strokeWidth="14" fill="none" />
      <path d="M120 125 C120 110,150 110,150 125" stroke="hsl(var(--primary))" strokeWidth="14" fill="none" strokeLinecap="round" />
    </IconWrapper>
  );
  
export const DataManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <circle cx="100" cy="100" r="80" stroke="hsl(var(--primary))" strokeWidth="20" fill="white" />
      <ellipse cx="100" cy="75" rx="55" ry="18"
        stroke="hsl(var(--primary))" strokeWidth="18" fill="none" />
      <path d="M45 75 V125" stroke="hsl(var(--primary))" strokeWidth="18" fill="none" />
      <path d="M155 75 V125" stroke="hsl(var(--primary))" strokeWidth="18" fill="none" />
      <ellipse cx="100" cy="125" rx="55" ry="18"
        stroke="hsl(var(--primary))" strokeWidth="18" fill="none" />
    </IconWrapper>
  );
  
export const LabManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <circle cx="100" cy="100" r="80" stroke="hsl(var(--primary))" strokeWidth="20" fill="white" />
      <path
        d="M85 55 H115 V70 L135 120 C138 130,125 145,100 145 C75 145,62 130,65 120 L85 70 Z"
        stroke="hsl(var(--primary))"
        strokeWidth="18"
        fill="none"
        strokeLinejoin="round"
      />
    </IconWrapper>
  );
  
export const MedicalCodingIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <circle cx="100" cy="100" r="80" stroke="hsl(var(--primary))" strokeWidth="20" fill="white" />
      <rect x="60" y="55" width="80" height="90" rx="10"
        stroke="hsl(var(--primary))" strokeWidth="18" fill="none" />
      <path d="M100 70 V95 M87 82.5 H113"
        stroke="hsl(var(--primary))"
        strokeWidth="18"
        strokeLinecap="round"
      />
    </IconWrapper>
  );
  
export const DataServicesIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <circle cx="100" cy="100" r="80" stroke="hsl(var(--primary))" strokeWidth="20" fill="white" />
      <rect x="55" y="60" width="90" height="30" rx="8"
        stroke="hsl(var(--primary))" strokeWidth="18" fill="none" />
      <rect x="55" y="105" width="90" height="30" rx="8"
        stroke="hsl(var(--primary))" strokeWidth="18" fill="none" />
    </IconWrapper>
  );
  
export const DigitalLearningIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <circle cx="100" cy="100" r="80" stroke="hsl(var(--primary))" strokeWidth="20" fill="white" />
      <rect x="55" y="70" width="90" height="60" rx="8"
        stroke="hsl(var(--primary))" strokeWidth="18" fill="none" />
      <path d="M95 85 L125 100 L95 115 Z"
        stroke="hsl(var(--primary))"
        strokeWidth="18"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconWrapper>
  );
  
export const HelpSupportIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <circle cx="100" cy="100" r="80" stroke="hsl(var(--primary))" strokeWidth="20" fill="white" />
      <path
        d="M70 70 H130 C140 70,145 80,145 90 V110 C145 120,140 130,130 130 H100 L80 145 V130 H70 C60 130,55 120,55 110 V90 C55 80,60 70,70 70 Z"
        stroke="hsl(var(--primary))"
        strokeWidth="18"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M100 90 C100 80, 115 80, 115 95 C115 105, 100 105, 100 115"
        stroke="hsl(var(--primary))"
        strokeWidth="18"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="100" cy="128" r="0" stroke="hsl(var(--primary))" strokeWidth="10"/>
    </IconWrapper>
  );
  