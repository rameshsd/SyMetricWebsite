import React from 'react';

const IconWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

export const CloudErpIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </IconWrapper>
);

export const FinancialManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M12 2v20" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </IconWrapper>
);

export const SpendManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 15h.01" />
      <path d="M11 15h.01" />
    </IconWrapper>
);

export const SupplyChainIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M2 17a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5" />
    <path d="M7 17a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" />
    <path d="M15 7h2a2 2 0 0 1 2 2v5" />
    <path d="m15 12-3-3 3-3" />
  </IconWrapper>
);

export const HumanCapitalIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <line x1="19" x2="19" y1="8" y2="14" />
    <line x1="22" x2="16" y1="11" y2="11" />
  </IconWrapper>
);

export const CustomerExperienceIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
    <path d="M18 9h2a2 2 0 0 1 2 2v10l-4-4H12a2 2 0 0 1-2-2V13a2 2 0 0 1 2-2h2Z" />
  </IconWrapper>
);
