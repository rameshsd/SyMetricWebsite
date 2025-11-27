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
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const UserAccessIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path d="M16.5,8.5c0,2.48-2.02,4.5-4.5,4.5s-4.5-2.02-4.5-4.5c0-2.48,2.02-4.5,4.5-4.5S16.5,6.02,16.5,8.5z M12,6 c-1.38,0-2.5,1.12-2.5,2.5S10.62,11,12,11s2.5-1.12,2.5-2.5S13.38,6,12,6z"/>
        <path d="M12,14c-3.31,0-6,2.69-6,6v2h12v-2C18,16.69,15.31,14,12,14z M8.18,18.06C8.8,16.83,10.29,16,12,16s3.2,0.83,3.82,2.06 L8.18,18.06z"/>
        <path d="M20,10.38V4h- período8v16h10.19C21.39,18.3,22,16.27,22,14C22,12.42,21.3,11.01,20,10.38z M18,18h-6v-2h6V18z M18,14h-6v-2h6V14z"/>
    </IconWrapper>
);

export const OrgManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </IconWrapper>
);

export const StudyManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path d="M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M12,18H6v-2h6V18z M18,14H6v-2h12V14z M18,10H6V8h12V10z"/>
    </IconWrapper>
);

export const SiteManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path d="M12,2C8.13,2,5,5.13,5,9c0,5.25,7,13,7,13s7-7.75,7-13C19,5.13,15.87,2,12,2z M12,11.5c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5S13.38,11.5,12,11.5z"/>
    </IconWrapper>
);

export const SuppliesManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path d="M20,8h-3V4h-2v4h-4V4H9v4H6C4.9,8,4,8.9,4,10v10c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V10C22,8.9,21.1,8,20,8z M16,16h-3v3h-2v-3H8v-2h3v-3h2v3h3V16z"/>
    </IconWrapper>
);

export const SubjectManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path d="M12,12c2.21,0,4-1.79,4-4s-1.79-4-4-4S8,5.79,8,8S9.79,12,12,12z M12,14c-2.67,0-8,1.34-8,4v2h16v-2 C20,15.34,14.67,14,12,14z"/>
    </IconWrapper>
);

export const DataManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path d="M12,3C7.03,3,3,4.79,3,7v10c0,2.21,4.03,4,9,4s9-1.79,9-4V7C21,4.79,16.97,3,12,3z M12,18.5 c-3.87,0-7-1.34-7-3v-1.45c1.47,1.01,4.05,1.8,7,1.8s5.53-0.79,7-1.8v1.45C19,17.16,15.87,18.5,12,18.5z M12,13.5 c-3.87,0-7-1.34-7-3V9.05C6.47,9.84,9.05,10.63,12,10.63s5.53-0.79,7-1.58V10.5C19,12.16,15.87,13.5,12,13.5z M12,8.5 c-3.87,0-7-1.34-7-3s3.13-3,7-3s7,1.34,7,3S15.87,8.5,12,8.5z"/>
    </IconWrapper>
);

export const LabManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path d="M7.83,4.06c0.51-1.36,1.94-2.28,3.47-2.04c1.64,0.25,2.94,1.43,3.38,2.99l1.45,4.99H6.38L7.83,4.06z M20.94,19.23 c0.33-0.91-0.12-1.92-1-2.22l-6.38-2.21l-1.45,4.99h6.88L20.94,19.23z M15.25,22l-4.14-1.43L9.66,24.7l4.14,1.43 C14.71,26.43,15.54,25.9,15.79,25.04L15.25,22z M4.94,17.02l-1-2.22C3.62,13.9,4.07,12.89,5,12.6l6.38-2.21l1.45,4.99H5.94 L4.94,17.02z"/>
    </IconWrapper>
);

export const MedicalCodingIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z M12,18H8v-2h4V18z M16,14H8v-2h8V14z M13,9V3.5L18.5,9H13z"/>
    </IconWrapper>
);

export const DataServicesIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path d="M22,13h-4v4h4V13z M22,6h-4v4h4V6z M2,17h16v-4H2V17z M2,10v4h16v-4H2z M2,6v4h16V6H2z"/>
    </IconWrapper>
);

export const DigitalLearningIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path d="M20,18c1.1,0,2-0.9,2-2V6c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6v10c0,1.1,0.9,2,2,2H0v2h24v-2H20z M4,6h16v10H4V6z"/>
    </IconWrapper>
);

export const HelpSupportIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path d="M21,3H3C1.9,3,1,3.9,1,5v12c0,1.1,0.9,2,2,2h5v4l4-4h7c1.1,0,2-0.9,2-2V5C23,3.9,22.1,3,21,3z M12,15 c-2.76,0-5-2.24-5-5s2.24-5,5-5s5,2.24,5,5S14.76,15,12,15z"/>
    </IconWrapper>
);
