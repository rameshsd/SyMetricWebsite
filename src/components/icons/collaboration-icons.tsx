'use client';

import React from 'react';

const IconWrapper = ({ children, className, viewBox = "0 0 24 24" }: { children: React.ReactNode; className?: string, viewBox?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const IdentityIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className} viewBox="0 0 64 64">
    <path d="M32,32c-6.6,0-12-5.4-12-12s5.4-12,12-12,12,5.4,12,12S38.6,32,32,32Z M32,13.3c-3.7,0-6.7,3-6.7,6.7s3,6.7,6.7,6.7,6.7-3,6.7-6.7S35.7,13.3,32,13.3Z" />
    <path d="M50.7,56c-2.4-7.4-8.8-12.9-16.6-13.3H29.9c-7.8,0.4-14.2,5.9-16.6,13.3H5.3v2.7h53.3V56H50.7Z" />
  </IconWrapper>
);

export const OrganizationIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className} viewBox="0 0 64 64">
        <path d="M56,5.3H8A2.7,2.7,0,0,0,5.3,8V56a2.7,2.7,0,0,0,2.7,2.7H56A2.7,2.7,0,0,0,58.7,56V8A2.7,2.7,0,0,0,56,5.3Zm-24,48H10.7V34.7H32Zm0-21.3H10.7V10.7H32ZM53.3,53.3H37.3V34.7h16Zm0-21.3H37.3V10.7h16Z" />
    </IconWrapper>
);

export const StudyIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className} viewBox="0 0 64 64">
    <path d="M50.7 5.3H13.3a8 8 0 0 0-8 8V56a2.7 2.7 0 0 0 4.6 2.1l7.4-6a2.7 2.7 0 0 1 1.7-.6h29a2.7 2.7 0 0 0 2.7-2.7V8a2.7 2.7 0 0 0-2.7-2.7ZM37.3 40h-16a2.7 2.7 0 0 1 0-5.3h16a2.7 2.7 0 0 1 0 5.3Zm5.4-13.3h-24a2.7 2.7 0 0 1 0-5.4h24a2.7 2.7 0 0 1 0 5.4Z"/>
  </IconWrapper>
);

export const SiteIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className} viewBox="0 0 64 64">
      <path d="M48,5.3H16A5.34,5.34,0,0,0,10.7,10.7V53.3A5.34,5.34,0,0,0,16,58.7H48A5.34,5.34,0,0,0,53.3,53.3V10.7A5.34,5.34,0,0,0,48,5.3ZM32,21.3a5.3,5.3,0,1,1,5.3-5.3A5.3,5.3,0,0,1,32,21.3Zm10.7,26.7c0,5.9-10.7,13.3-10.7,13.3s-10.7-7.4-10.7-13.3a10.7,10.7,0,1,1,21.4,0Z"/>
    </IconWrapper>
);

export const SuppliesIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className} viewBox="0 0 64 64">
    <path d="M56,13.3H8a2.7,2.7,0,0,0-2.7,2.7V50.7A2.7,2.7,0,0,0,8,53.3H56a2.7,2.7,0,0,0,2.7-2.7V16A2.7,2.7,0,0,0,56,13.3ZM42.7,24,32,34.7,21.3,24,18.7,26.7l13.3,13.3,13.3-13.3Z"/>
    <path d="M48,5.3H16a2.7,2.7,0,0,0-2.7,2.7v5.3h37.3V8a2.7,2.7,0,0,0-2.7-2.7Z"/>
  </IconWrapper>
);

export const SubjectIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className} viewBox="0 0 64 64">
    <circle cx="32" cy="18.7" r="8"/>
    <path d="M42.7,32H21.3A10.68,10.68,0,0,0,10.7,42.7V58.7h42.7V42.7A10.68,10.68,0,0,0,42.7,32Z"/>
  </IconWrapper>
);

export const DataManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className} viewBox="0 0 64 64">
     <path d="M32,5.3C16.2,5.3,5.3,12.5,5.3,21.3S16.2,37.3,32,37.3,58.7,30.1,58.7,21.3,47.8,5.3,32,5.3Zm0,26.7A10.7,10.7,0,1,1,42.7,21.3,10.68,10.68,0,0,1,32,32Z"/>
     <path d="M5.3,32c0,8.8,10.9,16,26.7,16s26.7-7.2,26.7-16S47.8,16,32,16,5.3,23.2,5.3,32Zm26.7,10.7A10.7,10.7,0,1,1,42.7,32,10.68,10.68,0,0,1,32,42.7Z"/>
     <path d="M5.3,42.7c0,8.8,10.9,16,26.7,16s26.7-7.2,26.7-16S47.8,26.7,32,26.7,5.3,33.9,5.3,42.7Zm26.7,10.6A10.7,10.7,0,1,1,42.7,42.7,10.68,10.68,0,0,1,32,53.3Z"/>
  </IconWrapper>
);

export const LabIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className} viewBox="0 0 64 64">
    <path d="M48,5.3H16a2.7,2.7,0,0,0-2.7,2.7V42.7a13.3,13.3,0,1,0,26.6,0V8a2.7,2.7,0,0,0-2.7-2.7Zm-5.3,40a8,8,0,1,1-16,0V10.7H42.7Z"/>
  </IconWrapper>
);

export const MedicalCodingIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className} viewBox="0 0 64 64">
    <path d="M50.7,5.3H13.3A2.7,2.7,0,0,0,10.7,8V56a2.7,2.7,0,0,0,2.7,2.7H50.7A2.7,2.7,0,0,0,53.3,56V8A2.7,2.7,0,0,0,50.7,5.3ZM26.7,48H21.3V37.3h5.3Zm10.6,0H32V37.3h5.3Zm10.7,0H42.7V37.3h5.3Z"/>
  </IconWrapper>
);

export const DataServicesIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className} viewBox="0 0 64 64">
      <path d="M48,5.3H16A5.34,5.34,0,0,0,10.7,10.7V53.3A5.34,5.34,0,0,0,16,58.7H48A5.34,5.34,0,0,0,53.3,53.3V10.7A5.34,5.34,0,0,0,48,5.3Zm-5.3,42.7H21.3a2.7,2.7,0,0,1,0-5.3H42.7a2.7,2.7,0,0,1,0,5.3Zm0-10.7H21.3a2.7,2.7,0,0,1,0-5.3H42.7a2.7,2.7,0,0,1,0,5.3Zm0-10.6H21.3a2.7,2.7,0,0,1,0-5.4H42.7a2.7,2.7,0,0,1,0,5.4Z"/>
    </IconWrapper>
);

export const DigitalLearningIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className} viewBox="0 0 64 64">
      <path d="M56,5.3H8a8,8,0,0,0-8,8V40a8,8,0,0,0,8,8H24v5.3H16a2.7,2.7,0,1,0,0,5.4H48a2.7,2_7,0,1,0,0-5.4H40V48H56a8,8,0,0,0,8-8V13.3a8,8,0,0,0-8-8Zm-24,8L45.3,24,32,34.7,18.7,24Z"/>
  </IconWrapper>
);

export const HelpIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className} viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
    </IconWrapper>
);
