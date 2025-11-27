'use client';

import React from 'react';

const IconWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => (
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
        <path fillRule="evenodd" d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z" clipRule="evenodd"/>
    </IconWrapper>
);

export const OrgManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path fillRule="evenodd" d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Zm8 2.5a.5.5 0 0 0-1 0V7h-2v.5a.5.5 0 0 0 1 0V8h.5a.5.5 0 0 0 0-1H9v-.5a.5.5 0 0 0-1 0V7h-.5a.5.5 0 0 0 0 1H8v.5a.5.5 0 0 0 1 0V8h.5a.5.5 0 0 0 0-1H9v-.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H7v.5a.5.5 0 0 0 1 0V8h.5a.5.5 0 0 0 0-1H8v-.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H7v.5a.5.5 0 0 0 1 0V8h.5a.5.5 0 0 0 0-1H8V6.5Zm5.5 2a.5.5 0 0 0 0-1H14v.5a.5.5 0 0 0 1 0V7h.5a.5.5 0 0 0 0-1H15v-.5a.5.5 0 0 0-1 0V6h-.5a.5.5 0 0 0 0 1H14v.5a.5.5 0 0 0 1 0V7h.5a.5.5 0 0 0 0-1H15V5.5a.5.5 0 0 0-1 0V6h-2v.5a.5.5 0 0 0 1 0V6h.5a.5.5 0 0 0 0-1H12V4.5a.5.5 0 0 0-1 0V5h-.5a.5.5 0 0 0 0 1H11v.5a.5.5 0 0 0 1 0V5h.5a.5.5 0 0 0 0-1H12V3.5a.5.5 0 0 0-1 0V4H8.5a.5.5 0 0 0 0 1H9v.5a.5.5 0 0 0 1 0V4h.5a.5.5 0 0 0 0-1H10V2.5ZM8.5 11a.5.5 0 0 0 0-1H8v.5a.5.5 0 0 0 1 0V10h.5a.5.5 0 0 0 0-1H9v-.5a.5.5 0 0 0-1 0V9H6.5a.5.5 0 0 0 0 1H7v.5a.5.5 0 0 0 1 0V10h.5a.5.5 0 0 0 0-1H8V8.5Zm5.5 2a.5.5 0 0 0 0-1H14v.5a.5.5 0 0 0 1 0V12h.5a.5.5 0 0 0 0-1H15v-.5a.5.5 0 0 0-1 0V11h-.5a.5.5 0 0 0 0 1H14v.5a.5.5 0 0 0 1 0V12h.5a.5.5 0 0 0 0-1H15v-.5a.5.5 0 0 0-1 0v.5h-2v-.5a.5.5 0 0 0-1 0v.5h-.5a.5.5 0 0 0 0 1H11v.5a.5.5 0 0 0 1 0v-.5h.5a.5.5 0 0 0 0 1H12v.5a.5.5 0 0 0 1 0v-.5h2.5Zm-5.5 5a.5.5 0 0 0 0-1H8v.5a.5.5 0 0 0 1 0V17h.5a.5.5 0 0 0 0-1H9v-.5a.5.5 0 0 0-1 0V16H6.5a.5.5 0 0 0 0 1H7v.5a.5.5 0 0 0 1 0V17h.5a.5.5 0 0 0 0-1H8v-.5Zm5.5 2a.5.5 0 0 0 0-1H14v.5a.5.5 0 0 0 1 0V19h.5a.5.5 0 0 0 0-1H15v-.5a.5.5 0 0 0-1 0V18h-.5a.5.5 0 0 0 0 1H14v.5a.5.5 0 0 0 1 0V19h.5a.5.5 0 0 0 0-1H15v-.5a.5.5 0 0 0-1 0v.5h-2v-.5a.5.5 0 0 0-1 0v.5h-.5a.5.5 0 0 0 0 1H11v.5a.5.5 0 0 0 1 0v-.5h.5a.5.5 0 0 0 0 1H12v.5a.5.5 0 0 0 1 0v-.5h2.5Z" clipRule="evenodd"/>
    </IconWrapper>
);

export const StudyManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path fillRule="evenodd" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6Zm1.5 5.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Z" clipRule="evenodd"/>
    </IconWrapper>
);

export const SiteManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd"/>
    </IconWrapper>
);

export const SuppliesManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path fillRule="evenodd" d="M20 6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6ZM4 12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2Zm14 6H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z" clipRule="evenodd"/>
    </IconWrapper>
);

export const SubjectManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path d="M15 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-3 1a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"/>
        <path fillRule="evenodd" d="M12 20a1 1 0 0 1-1-1v-2.5a4.5 4.5 0 0 1 2-4 1 1 0 0 1 1.414.054 5.5 5.5 0 0 1 3.536 2.146 1 1 0 0 1-.95 1.446H17a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-2Zm-6-4.5A4.5 4.5 0 0 1 10.5 11h.054a1 1 0 0 1 .95 1.446A5.5 5.5 0 0 1 8 17.586a1 1 0 0 1-.95-1.446H7a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2.5Z" clipRule="evenodd"/>
    </IconWrapper>
);

export const DataManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path fillRule="evenodd" d="M4 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z" clipRule="evenodd"/>
    </IconWrapper>
);

export const LabManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path fillRule="evenodd" d="M13.43 3.322a1 1 0 0 1 .632 1.25l-4 11a1 1 0 0 1-1.85-.67l2-5.5H8.5a1 1 0 0 1 0-2h2.03l-2-5.5a1 1 0 0 1 1.25-.632l.632.227ZM5 21a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z" clipRule="evenodd"/>
    </IconWrapper>
);

export const MedicalCodingIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path fillRule="evenodd" d="M10 2a1 1 0 0 1 1 1v1h2V3a1 1 0 1 1 2 0v1h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V3a1 1 0 1 1 2 0v1h1V3a1 1 0 0 1 1-1Zm.5 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z" clipRule="evenodd"/>
    </IconWrapper>
);

export const DataServicesIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path fillRule="evenodd" d="M3 8a3 3 0 0 1 3-3h12a3 3 0 1 1 0 6H6a3 3 0 0 1-3-3Zm3 10a3 3 0 0 0 0 6h12a3 3 0 1 0 0-6H6Z" clipRule="evenodd"/>
    </IconWrapper>
);

export const DigitalLearningIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path fillRule="evenodd" d="M5 4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5Zm1.707 5.293a1 1 0 0 1 0 1.414l-1 1a1 1 0 0 1-1.414-1.414l1-1a1 1 0 0 1 1.414 0Zm2.586-2.586a1 1 0 0 1 1.414 0l1 1a1 1 0 0 1-1.414 1.414l-1-1a1 1 0 0 1 0-1.414Zm8.414 7.586a1 1 0 0 1 0-1.414l1-1a1 1 0 1 1 1.414 1.414l-1 1a1 1 0 0 1-1.414 0Zm-2.586 2.586a1 1 0 0 1-1.414 0l-1-1a1 1 0 1 1 1.414-1.414l1 1a1 1 0 0 1 0 1.414Z" clipRule="evenodd"/>
    </IconWrapper>
);

export const HelpSupportIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path fillRule="evenodd" d="M18 10a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-2 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" clipRule="evenodd"/>
    </IconWrapper>
);
