
'use client';

// React SVG Icons matching screenshot style
// Stroke: 2.5, rounded, using currentColor so you can theme via Tailwind (e.g. text-fuchsia-400)

import * as React from 'react';

// Shared base icon wrapper
export type IconProps = {
  className?: string;
};

type InternalIconProps = IconProps & {
  children: React.ReactNode;
};

const Icon: React.FC<InternalIconProps> = ({ children, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

// 1. Identity & Access Management (User + Check)
export const IdentityAccessIcon: React.FC<IconProps> = ({ className }) => (
  <Icon className={className}>
    <circle cx={32} cy={22} r={10} />
    <path d="M20 46c0-8 24-8 24 0" />
    <circle cx={46} cy={46} r={8} />
    <path d="M42 46l2.5 3 5.5-6" />
  </Icon>
);

// 2. Organization Management (Building)
export const OrganizationIcon: React.FC<IconProps> = ({ className }) => (
  <Icon className={className}>
    <rect x={18} y={14} width={28} height={36} rx={2} />
    <path d="M26 22h4M34 22h4M26 30h4M34 30h4M26 38h4M34 38h4" />
  </Icon>
);

// 3. Study Management (Connected Nodes)
export const StudyIcon: React.FC<IconProps> = ({ className }) => (
  <Icon className={className}>
    <circle cx={32} cy={16} r={6} />
    <circle cx={16} cy={28} r={6} />
    <circle cx={48} cy={28} r={6} />
    <circle cx={24} cy={46} r={6} />
    <circle cx={40} cy={46} r={6} />
    <path d="M32 22v6M22 28h20M28 32l-4 8M36 32l4 8" />
  </Icon>
);

// 4. Site Management (Hospital)
export const SiteIcon: React.FC<IconProps> = ({ className }) => (
  <Icon className={className}>
    <rect x={18} y={20} width={28} height={30} rx={2} />
    <path d="M32 12v8" />
    <path d="M26 16h12" />
    <rect x={28} y={32} width={8} height={8} />
  </Icon>
);

// 5. Clinical Supplies (Capsule + Pill)
export const SuppliesIcon: React.FC<IconProps> = ({ className }) => (
  <Icon className={className}>
    {/* Capsule */}
    <path d="M20 24l12-12a8 8 0 0 1 11 11L31 35" />
    {/* Round pill */}
    <circle cx={44} cy={40} r={6} />
  </Icon>
);

// 6. Subject Management (3 Users)
export const SubjectIcon: React.FC<IconProps> = ({ className }) => (
  <Icon className={className}>
    {/* Center user */}
    <circle cx={32} cy={20} r={8} />
    <path d="M18 50c0-10 28-10 28 0" />
    {/* Left & right users */}
    <circle cx={16} cy={30} r={6} />
    <circle cx={48} cy={30} r={6} />
    <path d="M10 50c0-6 12-6 12 0" />
    <path d="M42 50c0-6 12-6 12 0" />
  </Icon>
);

// 7. Data Management (Hierarchy)
export const DataManagementIcon: React.FC<IconProps> = ({ className }) => (
  <Icon className={className}>
    <rect x={10} y={12} width={14} height={10} rx={2} />
    <rect x={40} y={12} width={14} height={10} rx={2} />
    <rect x={25} y={42} width={14} height={10} rx={2} />
    <path d="M17 22v10h30V22" />
    <path d="M32 32v10" />
  </Icon>
);

// 8. Lab Management (Microscope – simplified but in style)
export const LabIcon: React.FC<IconProps> = ({ className }) => (
  <Icon className={className}>
    <path d="M24 16v14l4 6h12l4-6V16" />
    <path d="M28 30h16" />
    <path d="M18 50h28" />
  </Icon>
);

// 9. Medical Coding (Shield + Cross)
export const MedicalCodingIcon: React.FC<IconProps> = ({ className }) => (
  <Icon className={className}>
    <path d="M32 10l18 8v14c0 14-10 22-18 24-8-2-18-10-18-24V18z" />
    <path d="M28 26h8" />
    <path d="M32 22v8" />
  </Icon>
);

// 10. Data Services (Cloud + Nodes)
export const DataServicesIcon: React.FC<IconProps> = ({ className }) => (
  <Icon className={className}>
    <path d="M22 34a10 10 0 1 1 20 0 8 8 0 1 1-4 15H26a8 8 0 1 1-4-15" />
    <circle cx={22} cy={50} r={3} />
    <circle cx={32} cy={50} r={3} />
    <circle cx={42} cy={50} r={3} />
  </Icon>
);

// 11. Digital Learning (Graduation Cap)
export const DigitalLearningIcon: React.FC<IconProps> = ({ className }) => (
  <Icon className={className}>
    <path d="M10 26l22-10 22 10-22 10z" />
    <path d="M32 36v14" />
    <circle cx={44} cy={32} r={2} />
    <path d="M44 34v8" />
  </Icon>
);

// 12. Help & Support (Circle + ?)
export const HelpSupportIcon: React.FC<IconProps> = ({ className }) => (
  <Icon className={className}>
    <circle cx={32} cy={32} r={24} />
    <path d="M28 24c0-6 8-6 8 0 0 6-8 6-8 12" />
    <circle cx={32} cy={46} r={2} />
  </Icon>
);
