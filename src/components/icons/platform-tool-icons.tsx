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

const foregroundColor = "#FFFFFF";

export const UserAccessIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))"/>
    <circle cx="100" cy="75" r="30" fill={foregroundColor}/>
    <path d="M50 160 C50 110, 150 110, 150 160 Z" fill={foregroundColor}/>
  </IconWrapper>
);

export const OrgManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))"/>
    <path d="M60 150 V 70 H 140 V 150 H 120 V 100 H 80 V 150 Z" fill={foregroundColor}/>
    <rect x="85" y="75" width="30" height="15" fill={foregroundColor}/>
  </IconWrapper>
);

export const StudyManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))"/>
    <path d="M140 150 H60 V50 H110 L140 80 Z" fill={foregroundColor}/>
    <path d="M105 50 V85 H140" fill="none" stroke="hsl(var(--primary))" strokeWidth="10"/>
  </IconWrapper>
);

export const SiteManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))"/>
    <path d="M100 40 L150 90 L100 160 L50 90 Z" fill={foregroundColor}/>
    <circle cx="100" cy="90" r="20" fill="hsl(var(--primary))"/>
  </IconWrapper>
);

export const SuppliesManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))"/>
    <rect x="50" y="80" width="100" height="70" rx="10" fill={foregroundColor}/>
    <path d="M70 80 V 60 C 70 40, 130 40, 130 60 V 80" fill="none" stroke={foregroundColor} strokeWidth="12" strokeLinecap="round"/>
  </IconWrapper>
);

export const SubjectManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))"/>
    <circle cx="100" cy="75" r="30" fill={foregroundColor}/>
    <path d="M50 160 C50 110, 150 110, 150 160 Z" fill={foregroundColor}/>
    <path d="M125 125 L140 145 L170 110" stroke={foregroundColor} strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </IconWrapper>
);

export const DataManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))"/>
    <ellipse cx="100" cy="100" rx="60" ry="20" fill={foregroundColor}/>
    <path d="M40 100 V140 C40 160, 160 160, 160 140 V100" fill="none" stroke={foregroundColor} strokeWidth="15"/>
    <path d="M40 100 C40 80, 160 80, 160 100" fill={foregroundColor}/>
  </IconWrapper>
);

export const LabManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))"/>
    <path d="M130 150 H70 L90 50 H110 Z" fill={foregroundColor}/>
    <rect x="80" y="60" width="40" height="10" fill="hsl(var(--primary))" />
    <circle cx="100" cy="100" r="8" fill="hsl(var(--primary))"/>
  </IconWrapper>
);

export const MedicalCodingIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))"/>
    <rect x="60" y="50" width="80" height="100" rx="10" fill={foregroundColor}/>
    <rect x="75" y="70" width="50" height="8" rx="4" fill="hsl(var(--primary))"/>
    <rect x="75" y="95" width="50" height="8" rx="4" fill="hsl(var(--primary))"/>
    <rect x="75" y="120" width="30" height="8" rx="4" fill="hsl(var(--primary))"/>
  </IconWrapper>
);

export const DataServicesIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))"/>
    <rect x="50" y="60" width="100" height="35" rx="8" fill={foregroundColor}/>
    <rect x="50" y="105" width="100" height="35" rx="8" fill={foregroundColor}/>
    <path d="M140 77.5 H60 M130 67.5 V 87.5" stroke="hsl(var(--primary))" strokeWidth="8" strokeLinecap="round"/>
    <path d="M140 122.5 H60 M130 112.5 V 132.5" stroke="hsl(var(--primary))" strokeWidth="8" strokeLinecap="round"/>
  </IconWrapper>
);

export const DigitalLearningIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))"/>
    <path d="M50 140 V60 H150 V140 Z" fill={foregroundColor}/>
    <path d="M70 140 V50 M130 140 V50" fill="none" stroke="hsl(var(--primary))" strokeWidth="10"/>
    <path d="M100 80 L120 100 L100 120" fill="none" stroke="hsl(var(--primary))" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
  </IconWrapper>
);

export const HelpSupportIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="100" cy="100" r="95" fill="hsl(var(--primary))"/>
    <path d="M70 90 A 40 40 0 0 1 130 90 A 30 30 0 0 0 70 90 Z" fill={foregroundColor}/>
    <path d="M100 40 V160 M50 100 H150" fill="none" stroke={foregroundColor} strokeWidth="15" strokeLinecap="round"/>
  </IconWrapper>
);
