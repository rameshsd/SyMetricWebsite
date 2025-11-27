'use client';

import React from 'react';

const IconWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={className}
    aria-hidden="true"
    fill="currentColor"
  >
    {children}
  </svg>
);

export const UserAccessIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <path d="M256 277.333c-35.346 0-64-28.654-64-64s28.654-64 64-64 64 28.654 64 64-28.654 64-64 64zm106.667 128H149.333c-17.673 0-32-14.327-32-32v-21.333c0-35.346 28.654-64 64-64h85.333c35.346 0 64 28.654 64 64V373.333c0 17.673-14.327 32-32 32z" />
    </IconWrapper>
);

export const OrgManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M384 149.333V448H128V149.333L256 64l128 85.333zM256 32L0 202.667V480h512V202.667L256 32z" />
  </IconWrapper>
);

export const StudyManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M448 384h-32V128h32v256zM416 64H160a48 48 0 00-48 48v256h32V128a16 16 0 0116-16h240a16 16 0 0116 16v256h32V112a48 48 0 00-48-48zm-224-32H32v384h32V64h128V32z" />
  </IconWrapper>
);

export const SiteManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M256 32C167.641 32 96 103.641 96 192c0 70.063 83.131 201.323 148.423 279.136a16 16 0 0023.154 0C332.869 393.323 416 262.063 416 192c0-88.359-71.641-160-160-160zm0 224a64 64 0 110-128 64 64 0 010 128z" />
  </IconWrapper>
);

export const SuppliesManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M448 144v224a16 16 0 01-16 16H80a16 16 0 01-16-16V144l192-64 192 64zM256 93.094L116.906 144h278.188L256 93.094zM96 176v176h320V176H96z" />
  </IconWrapper>
);

export const SubjectManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M170.667 234.667c-35.346 0-64-28.654-64-64s28.654-64 64-64 64 28.654 64 64-28.654 64-64 64zm106.666 128H64v-21.333c0-35.346 28.654-64 64-64h85.333c35.346 0 64 28.654 64 64v21.333zM405.333 298.667c-35.346 0-64-28.654-64-64s28.654-64 64-64 64 28.654 64 64-28.654 64-64 64zM512 448h-213.333v-21.333c0-35.346 28.654-64 64-64h85.333c35.346 0 64 28.654 64 64V448z" />
  </IconWrapper>
);

export const DataManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M256 32C149.969 32 64 58.703 64 96v320c0 37.297 85.969 64 192 64s192-26.703 192-64V96c0-37.297-85.969-64-192-64zm0 96c-82.438 0-160 18.281-160 48v64c0 29.719 77.563 48 160 48s160-18.281 160-48v-64c0-29.719-77.563-48-160-48z" />
  </IconWrapper>
);

export const LabManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M444.333 416H67.667a32 32 0 01-28.16-48.16l133.333-256a32 32 0 0156.32 0l133.333 256A32 32 0 01444.333 416zM153.667 352h204.666L256 160 153.667 352z" />
  </IconWrapper>
);

export const MedicalCodingIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M112 80h208l80 80v272H112z" />
    <path d="M320 80v80h80z" fill="#ffffff" fillOpacity="0.2"/>
    <rect x="184" y="216" width="32" height="96" fill="#ffffff"/>
    <rect x="152" y="248" width="96" height="32" fill="#ffffff"/>
  </IconWrapper>
);

export const DataServicesIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <rect x="80" y="128" width="352" height="96" rx="24" />
    <rect x="80" y="256" width="352" height="96" rx="24" />
    <circle cx="128" cy="176" r="12" fill="#ffffff"/>
    <circle cx="160" cy="176" r="12" fill="#ffffff"/>
    <circle cx="128" cy="304" r="12" fill="#ffffff"/>
    <circle cx="160" cy="304" r="12" fill="#ffffff"/>
  </IconWrapper>
);

export const DigitalLearningIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M32 96h448v256H32V96zm416-32H64a32 32 0 00-32 32v256a32 32 0 0032 32h384a32 32 0 0032-32V96a32 32 0 00-32-32zM192 160v128l96-64-96-64z" />
  </IconWrapper>
);

export const HelpSupportIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M256 32C132.313 32 32 132.313 32 256s100.313 224 224 224 224-100.313 224-224S379.688 32 256 32zm0 384c-88.375 0-160-71.625-160-160s71.625-160 160-160 160 71.625 160 160-71.625 160-160 160z" />
    <path d="M256 128c-44.188 0-80 26.813-80 60 0 16.5 13.5 30 30 30s30-13.5 30-30c0-3.313 1.313-10 20-10s20 6.688 20 10c0 23.188-26.813 40-60 40-16.5 0-30 13.5-30 30v20h60v-20c0-16.5-13.5-30-30-30s-30 13.5-30 30v20c0 16.5 13.5 30 30 30h30v-80c0-44.188-35.813-80-80-80zM256 320a32 32 0 110-64 32 32 0 010 64z" />
  </IconWrapper>
);
