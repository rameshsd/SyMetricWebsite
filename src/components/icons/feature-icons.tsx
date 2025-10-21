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
    <path d="M12 2.69l.346.666L19.5 17.5h-15L8.654 3.356z" />
    <path d="M12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
    <path d="M12 12.5v5" />
    <path d="M12 17.5h-2.5" />
    <path d="M12 17.5h2.5" />
  </IconWrapper>
);

export const FinancialManagementIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M16 8h-6a2 2 0 100 4h4a2 2 0 110 4H8" />
    <path d="M12 18V6" />
  </IconWrapper>
);

export const SpendManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
        <path d="M8 12h8" />
    </IconWrapper>
);

export const SupplyChainIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M14 16.5V14a2 2 0 00-2-2h-4a2 2 0 00-2 2v2.5" />
    <path d="M20 12H4" />
    <path d="M4 12v6a2 2 0 002 2h12a2 2 0 002-2v-6" />
    <path d="M16 5.5V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v1.5" />
  </IconWrapper>
);

export const HumanCapitalIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <path d="M20 8v6" />
    <path d="M23 11h-6" />
  </IconWrapper>
);

export const CustomerExperienceIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <path d="M12 12s-4-3-4-5a4 4 0 018 0c0 2-4 5-4 5z" />
    <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path d="M12 12v9" />
  </IconWrapper>
);
