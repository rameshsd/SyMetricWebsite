'use client';

import React from 'react';

const IconWrapper = ({ children, className, viewBox = "0 0 200 200" }: { children: React.ReactNode; className?: string, viewBox?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    className={className}
    aria-hidden="true"
    fill="none"
  >
    {children}
  </svg>
);

const primaryFill = "hsl(var(--primary))";
const accentFill = "hsl(var(--accent-foreground))";
const secondaryFill = "hsl(var(--secondary))";

export const UserAccessIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <rect fill={primaryFill} x="45" y="25" width="110" height="150" rx="12"/>
        <circle fill={secondaryFill} cx="100" cy="70" r="22"/>
        <path fill={secondaryFill} d="M100 100c-18.4 0-34 11-39 27.5a6 6 0 005.5 8.5h67a6 6 0 005.5-8.5c-5-16.5-20.6-27.5-39-27.5z"/>
    </IconWrapper>
);

export const OrgManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <rect fill={primaryFill} x="45" y="25" width="110" height="150" rx="12"/>
        <path fill={secondaryFill} d="M70 145V80a8 8 0 018-8h44a8 8 0 018 8v65h10v-85a8 8 0 00-8-8H68a8 8 0 00-8 8v85h10z"/>
        <rect fill={secondaryFill} x="82" y="90" width="12" height="12" rx="2"/>
        <rect fill={secondaryFill} x="106" y="90" width="12" height="12" rx="2"/>
        <rect fill={secondaryFill} x="82" y="114" width="12" height="12" rx="2"/>
        <rect fill={secondaryFill} x="106" y="114" width="12" height="12" rx="2"/>
    </IconWrapper>
);

export const StudyManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <rect fill={primaryFill} x="45" y="25" width="110" height="150" rx="12"/>
        <path fill={secondaryFill} d="M65 45h70v90H65z" clipRule="evenodd" transform="rotate(-10 100 90)"/>
        <rect fill={primaryFill} x="80" y="70" width="40" height="6" rx="3" transform="rotate(-10 100 73)"/>
        <rect fill={primaryFill} x="80" y="90" width="40" height="6" rx="3" transform="rotate(-10 100 93)"/>
        <rect fill={primaryFill} x="80" y="110" width="30" height="6" rx="3" transform="rotate(-10 95 113)"/>
    </IconWrapper>
);

export const SiteManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <rect fill={primaryFill} x="45" y="25" width="110" height="150" rx="12"/>
        <path fill={secondaryFill} d="M100 50c-22 0-40 18-40 40 0 25 40 60 40 60s40-35 40-60c0-22-18-40-40-40zm0 55a15 15 0 110-30 15 15 0 010 30z"/>
    </IconWrapper>
);

export const SuppliesManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <rect fill={primaryFill} x="45" y="25" width="110" height="150" rx="12"/>
        <rect fill={secondaryFill} x="60" y="80" width="80" height="60" rx="8"/>
        <path fill={secondaryFill} d="M100 45a30 30 0 00-30 30h60a30 30 0 00-30-30z"/>
    </IconWrapper>
);

export const SubjectManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <rect fill={primaryFill} x="45" y="25" width="110" height="150" rx="12"/>
        <circle fill={secondaryFill} cx="100" cy="70" r="22"/>
        <path fill={secondaryFill} d="M100 100c-18.4 0-34 11-39 27.5a6 6 0 005.5 8.5h67a6 6 0 005.5-8.5c-5-16.5-20.6-27.5-39-27.5z"/>
        <circle fill={primaryFill} cx="130" cy="125" r="20" />
        <path d="M123 125l5 6 9-12" stroke={secondaryFill} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    </IconWrapper>
);

export const DataManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <rect fill={primaryFill} x="45" y="25" width="110" height="150" rx="12"/>
        <path d="M70 65h60v20H70zm0 30h60v20H70zm0 30h60v20H70z" fill={secondaryFill}/>
        <circle cx="100" cy="60" r="30" fill={primaryFill}/>
        <path d="M88 60v12m12-12v12m12-6v6" stroke={secondaryFill} strokeWidth="6" strokeLinecap="round"/>
    </IconWrapper>
);

export const LabManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <rect fill={primaryFill} x="45" y="25" width="110" height="150" rx="12"/>
        <path fill={secondaryFill} d="M125 140H75a5 5 0 01-5-5l10-70a5 5 0 015-5h30a5 5 0 015 5l10 70a5 5 0 01-5 5z"/>
        <rect fill={primaryFill} x="75" y="120" width="50" height="10" rx="5"/>
        <circle fill={secondaryFill} cx="100" cy="90" r="4"/>
        <circle fill={secondaryFill} cx="110" cy="105" r="3"/>
        <circle fill={secondaryFill} cx="90" cy="100" r="2"/>
    </IconWrapper>
);

export const MedicalCodingIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <rect fill={primaryFill} x="45" y="25" width="110" height="150" rx="12"/>
        <path fill={secondaryFill} d="M60 40h80v100H60z" clipRule="evenodd" rx="8"/>
        <path fill={primaryFill} d="M75 55h50v8H75zm0 20h50v8H75zm0 20h30v8H75zm0 20h40v8H75z" clipRule="evenodd" rx="4"/>
    </IconWrapper>
);

export const DataServicesIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <rect fill={primaryFill} x="45" y="25" width="110" height="150" rx="12"/>
        <rect fill={secondaryFill} x="70" y="60" width="60" height="35" rx="8"/>
        <rect fill={secondaryFill} x="70" y="105" width="60" height="35" rx="8"/>
        <path d="M120 77.5H80m30-10v20" stroke={primaryFill} strokeWidth="6" strokeLinecap="round"/>
        <path d="M120 122.5H80m30-10v20" stroke={primaryFill} strokeWidth="6" strokeLinecap="round"/>
    </IconWrapper>
);

export const DigitalLearningIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <rect fill={primaryFill} x="45" y="25" width="110" height="150" rx="12"/>
        <rect x="60" y="60" width="80" height="60" rx="8" fill={secondaryFill}/>
        <path d="M80 140h40l-20-20z" fill={secondaryFill}/>
        <path d="M90 80l10 10 10-10" fill="none" stroke={primaryFill} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    </IconWrapper>
);

export const HelpSupportIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <rect fill={primaryFill} x="45" y="25" width="110" height="150" rx="12"/>
        <circle cx="100" cy="100" r="40" fill={secondaryFill}/>
        <path d="M85 90a15 15 0 0130 0c0 15-15 15-15 25" fill="none" stroke={primaryFill} strokeWidth="8" strokeLinecap="round"/>
        <circle cx="100" cy="130" r="4" fill={primaryFill}/>
    </IconWrapper>
);
