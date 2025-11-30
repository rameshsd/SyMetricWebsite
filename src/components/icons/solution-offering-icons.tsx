
"use client";
import React from 'react';

const IconWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

export const RandomizationIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path d="M16 3h5v5" />
        <path d="M4 20L21 3" />
        <path d="M21 16v5h-5" />
        <path d="M15 15l6 6" />
        <path d="M4 4l7 7" />
    </IconWrapper>
);

export const SubjectManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
    </IconWrapper>
);

export const SitesManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <path d="M12 21V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v13" />
        <path d="M22 21V4a2 2 0 0 0-2-2H10" />
        <path d="M12 12h4" />
        <path d="M12 16h4" />
        <path d="M8 12h-2" />
        <path d="M8 16h-2" />
    </IconWrapper>
);

export const ClinicalSuppliesIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <circle cx="9" cy="9" r="7" />
        <circle cx="15" cy="15" r="7" />
    </IconWrapper>
);
