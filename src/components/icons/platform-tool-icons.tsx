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
    <g transform="scale(1.2) translate(-2, -2)">{children}</g>
  </svg>
);

export const UserAccessIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path
      fillRule="evenodd"
      d="M8 10a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1H7a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7ZM2 4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Z"
      clipRule="evenodd"
    />
  </IconWrapper>
);

export const OrgManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path
      fillRule="evenodd"
      d="M8 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H8Zm1 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9Zm4 0a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-2Zm-4 5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9Zm4 0a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2Z"
      clipRule="evenodd"
    />
  </IconWrapper>
);

export const StudyManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path
      fillRule="evenodd"
      d="M6 2a1 1 0 0 0-1 1v14a3 3 0 0 0 3 3h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6Zm2 6a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H9Z"
      clipRule="evenodd"
    />
  </IconWrapper>
);

export const SiteManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path
      fillRule="evenodd"
      d="M12 2a8 8 0 0 1 8 8c0 5.12-7.22 11.23-7.5 11.53a1 1 0 0 1-1 0C11.22 21.23 4 15.12 4 10a8 8 0 0 1 8-8Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
      clipRule="evenodd"
    />
  </IconWrapper>
);

export const SuppliesManagementIcon = ({
  className,
}: {
  className?: string;
}) => (
  <IconWrapper className={className}>
    <path
      fillRule="evenodd"
      d="m5.53 6.477 6-3.464a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .47.866v6.928a1 1 0 0 1-.47.866l-6 3.464a1 1 0 0 1-1 0l-6-3.464a1 1 0 0 1-.47-.866V7.343a1 1 0 0 1 .47-.866ZM7 8.232v5.536l5 2.887v-5.536L7 8.232Zm7 0v5.536l-3 1.732V9.964l3-1.732Z"
      clipRule="evenodd"
    />
  </IconWrapper>
);

export const SubjectManagementIcon = ({
  className,
}: {
  className?: string;
}) => (
  <IconWrapper className={className}>
    <path
      fillRule="evenodd"
      d="M10 2a3 3 0 0 0-3 3v1h1a1 1 0 0 1 0 2H7v1h1a1 1 0 0 1 0 2H7v1h1a1 1 0 0 1 0 2H7v1a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H9Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  </IconWrapper>
);

export const DataManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M12 6a7 7 0 0 0-7 7c0 2.394.99 4.633 2.68 6.096a1 1 0 0 0 1.347-1.484A5.043 5.043 0 0 1 7 13a5 5 0 0 1 5-5 5.006 5.006 0 0 1 5 5c0 1.631-.78 3.12-2.02 4.096a1 1 0 1 0 1.347 1.484C18.01 17.633 19 15.394 19 13a7 7 0 0 0-7-7Z" />
    <path d="M12 14.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
  </IconWrapper>
);

export const LabManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path
      fillRule="evenodd"
      d="M8.11 3.235A1 1 0 0 0 6.55 4.37L9.04 9.5H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2h-4.04l2.49-5.13a1 1 0 0 0-1.78-.86l-2.49 5.13H9.87L8.11 3.235ZM11 13a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm-3 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  </IconWrapper>
);

export const MedicalCodingIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path
      fillRule="evenodd"
      d="M9 2a1 1 0 0 0-1 1v1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h1V13a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v5h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2V3a1 1 0 0 0-1-1H9Zm4 11a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
    <path d="M5 20a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z" />
  </IconWrapper>
);

export const DataServicesIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <g fill="currentColor">
      <rect x="4" y="6" width="16" height="5" rx="1.5" />
      <rect x="4" y="13" width="16" height="5" rx="1.5" />
      <circle cx="7" cy="8.5" r="1" fill="white" />
      <circle cx="10" cy="8.5" r="1" fill="white" />
      <circle cx="7" cy="15.5" r="1" fill="white" />
      <circle cx="10" cy="15.5" r="1" fill="white" />
    </g>
  </IconWrapper>
);

export const DigitalLearningIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path
      fillRule="evenodd"
      d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Zm2 0v10h12V5H6Z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M10.82 7.502A1 1 0 0 1 12 8.323v7.354a1 1 0 0 1-1.18.927l-4.81-1.879A1 1 0 0 1 5 13.811V9.19a1 1 0 0 1 1.18-.927l4.81 1.88ZM7 9.878v3.244l3 1.17v-3.244l-3-1.17Z"
      clipRule="evenodd"
    />
  </IconWrapper>
);

export const HelpSupportIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path
      fillRule="evenodd"
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM8.94 8.718a3.174 3.174 0 0 1 5.378-1.571 1 1 0 1 0 1.54-1.28A5.132 5.132 0 0 0 9.8 6.556a5.174 5.174 0 0 0-5.22 6.113c.483.923 1.34 1.83 2.54 2.628.91.594 1.527 1.037 1.775 1.512.233.447.215.932.215 1.191a1 1 0 1 0 2 0v-.342c0-.532-.236-1.192-.7-1.841-1.143-1.6-2.97-2.6-3.465-3.1Z"
      clipRule="evenodd"
    />
    <path d="M12 17a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
  </IconWrapper>
);
