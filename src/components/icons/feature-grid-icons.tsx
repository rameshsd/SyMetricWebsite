
'use client';

import * as React from 'react';

export type IconProps = { className?: string };

const RawSVG: React.FC<{ svg: string; className?: string }> = ({ svg, className }) => (
  <span
    className={className}
    style={{ display: 'inline-block' }}
    dangerouslySetInnerHTML={{
      __html: svg.replace('<svg', '<svg class="h-full w-full" stroke="currentColor"')
    }}
  />
);

const SVG_PROPS = `viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`;

export const IdentityAccessIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><path d="M12 2L5 5v5c0 5.5 3.5 10 7 10s7-4.5 7-10V5l-7-3z" /><circle cx="12" cy="10" r="3" /></svg>`} />
);
export const OrganizationIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><path d="M3 21h18" /><rect x="3" y="9" width="18" height="12" rx="2" /><path d="M7 9V5a2 2 0 012-2h6a2 2 0 012 2v4" /><path d="M12 3v6" /></svg>`} />
);
export const CustomerManagementIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><path d="M20 8v6" /><path d="M23 11h-6" /></svg>`} />
);
export const StudyIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg>`} />
);
export const SiteIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><path d="M21.174 6.812a1 1 0 00-1.265.513L16.023 15.5l-3.235-6.38a1 1 0 00-1.71.866l4 8a1 1 0 001.38.582l5-2.5a1 1 0 00.582-1.38z" /><path d="M8 10a1 1 0 00-1.012.988l-1.5 10A1 1 0 006.5 22H14a1 1 0 00.988-1.012l-1.5-10A1 1 0 0012.5 10H8z" /></svg>`} />
);
export const SuppliesIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" /><line x1="7" y1="7" x2="7" y2="7" /></svg>`} />
);
export const SubjectIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" /><circle cx="12" cy="10" r="3" /><circle cx="12" cy="12" r="10" /></svg>`} />
);
export const DataManagementIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>`} />
);
export const LabIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><path d="M10 2h4" /><path d="M9 2v3l-3 4v9a5 5 0 0 0 5 5h2a5 5 0 0 0 5-5v-9l-3-4V2" /><path d="M9 9h6" /></svg>`} />
);
export const MedicalCodingIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="M9 16.5l-2-2.5 2-2.5" /><path d="M15 16.5l2-2.5-2-2.5" /></svg>`} />
);
export const ReportsIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><path d="M8 6h8" /><path d="M8 10h4" /><path d="M10 18v-1a2 2 0 0 1 2-2h4" /><path d="M10 18a2 2 0 1 0-4 0" /><path d="M18 18a2 2 0 1 0-4 0" /><path d="M4 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" /></svg>`} />
);
export const DigitalLearningIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><path d="M22 10v6" /><path d="M2 10v6" /><path d="M12 2v14" /><path d="M5.2 4.1C3.1 5.3 2 7.5 2 10c0 2.6 1.1 4.7 3.2 5.9" /><path d="M18.8 4.1C20.9 5.3 22 7.5 22 10c0 2.6-1.1 4.7-3.2 5.9" /><path d="M12 22a7 7 0 00-7-7" /><path d="M12 22a7 7 0 017-7" /></svg>`} />
);
export const DataServicesIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><path d="M14 2a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h8z" /><line x1="6" y1="6" x2="18" y2="6" /><line x1="16" y1="10" x2="12" y2="10" /><line x1="10" y1="14" x2="12" y2="14" /><line x1="6" y1="18" x2="18" y2="18" /></svg>`} />
);
export const SampleManagementIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M9 12h6" /><path d="M12 9v6" /></svg>`} />
);
export const LabelManagementIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>`} />
);
export const HelpSupportIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>`} />
);
