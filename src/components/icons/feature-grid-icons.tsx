'use client';

import * as React from 'react';

export type IconProps = { className?: string };

const RawSVG: React.FC<{ svg: string; className?: string }> = ({ svg, className }) => (
  <span
    className={className}
    style={{ display: 'inline-block', width: '32px', height: '32px' }}
    dangerouslySetInnerHTML={{
      __html: svg.replace('<svg', '<svg width="32" height="32" class="h-full w-full" stroke="currentColor"')
    }}
  />
);

const SVG_PROPS = `viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`;

export const IdentityAccessIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><path d="M12 3L5 6v5c0 5 3.5 9 7 10c3.5-1 7-5 7-10V6l-7-3z" /><circle cx="12" cy="11" r="2" fill="currentColor" stroke="none" /><path d="M12 13v2" /></svg>`} />
);
export const OrganizationIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><rect x="3" y="8" width="18" height="12" rx="2" /><path d="M7 8V4h10v4" /><path d="M10 14v2" /><path d="M14 14v2" /></svg>`} />
);
export const CustomerManagementIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><path d="M20 8v6" /><path d="M23 11h-6" /></svg>`} />
);
export const StudyIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><path d="M20,10h-.59a1,1,0,0,1-.94-.67v0a1,1,0,0,1,.2-1.14l.41-.41a1,1,0,0,0,0-1.42L17.66,4.93a1,1,0,0,0-1.42,0l-.41.41a1,1,0,0,1-1.14-.2h0A1,1,0,0,1,14,4.59V4a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1v.59a1,1,0,0,1-.67.94h0a1,1,0,0,1-1.14-.2l-.41-.41a1,1,0,0,0-1.42,0L4.93,6.34a1,1,0,0,0,0,1.42l.41.41a1,1,0,0,1,.2,1.14v0a1,1,0,0,1-.94.67H4a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h.59a1,1,0,0,1,.94.67v0a1,1,0,0,1-.2,1.14l-.41.41a1,1,0,0,0,0,1.42l1.41,1.41a1,1,0,0,0,1.42,0l.41-.41a1,1,0,0,1,1.14-.2h0a1,1,0,0,1,.67.94V20a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1v-.59a1,1,0,0,1,.67-.94h0a1,1,0,0,1,1.14.2l.41.41a1,1,0,0,0,1.42,0l1.41-1.41a1,1,0,0,0,0-1.42l-.41-.41a1,1,0,0,1-.2-1.14v0a1,1,0,0,1,.94-.67H20a1,1,0,0,0,1-1V11A1,1,0,0,0,20,10Z" /><circle cx="12" cy="12" r="3" fill="currentColor" stroke="none"/></svg>`} />
);
export const SiteIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><path d="M12 21c4-4 6-7 6-10a6 6 0 1 0-12 0c0 3 2 6 6 10z" /><circle cx="12" cy="11" r="2" fill="currentColor" stroke="none" /></svg>`} />
);
export const SuppliesIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><path d="M3 7l9-4l9 4v10l-9 4l-9-4z" /><path d="M3 7l9 4l9-4" /><path d="M12 11v10" /></svg>`} />
);
export const SubjectIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><path d="M5 21c1-4 4-6 7-6s6 2 7 6" /><circle cx="12" cy="7" r="4" /></svg>`} />
);
export const DataManagementIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><ellipse cx="12" cy="5" rx="7" ry="3" /><path d="M5 5v6c0 2 3 3 7 3s7-1 7-3V5" /><path d="M5 11v6c0 2 3 3 7 3s7-1 7-3v-6" /></svg>`} />
);
export const LabIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><path d="M10 2h4" /><path d="M9 2v3l-3 4v9a5 5 0 0 0 5 5h2a5 5 0 0 0 5-5v-9l-3-4V2" /><path d="M9 9h6" /></svg>`} />
);
export const MedicalCodingIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><path d="M7 2h7l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" /><path d="M13 2v6h6" /><path d="M9 14l-2 2l2 2" /><path d="M15 14l2 2l-2 2" /></svg>`} />
);
export const ReportsIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><path d="M8 6h8" /><path d="M8 10h4" /><path d="M10 18v-1a2 2 0 0 1 2-2h4" /><path d="M10 18a2 2 0 1 0-4 0" /><path d="M18 18a2 2 0 1 0-4 0" /><path d="M4 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" /></svg>`} />
);
export const DigitalLearningIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M12 2l7 3l-7 3l-7-3z" /><path d="M12 8v3" /><path d="M10 16v4" /><path d="M14 16v4" /><path d="M8 20h8" /></svg>`} />
);
export const DataServicesIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><rect x="3" y="4" width="18" height="6" rx="2" /><rect x="3" y="14" width="18" height="6" rx="2" /><circle cx="8" cy="17" r="1" fill="currentColor" stroke="none"/><circle cx="8" cy="7" r="1" fill="currentColor" stroke="none"/></svg>`} />
);
export const SampleManagementIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><path d="M5.5 21h13" /><path d="M12 3v12" /><path d="M12 21a3 3 0 0 0 3-3V9a3 3 0 0 0-6 0v9a3 3 0 0 0 3 3z" /><path d="M9 12h6" /></svg>`} />
);
export const LabelManagementIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /><path d="M12.5 7.5L16.5 11.5" /></svg>`} />
);
export const HelpSupportIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg ${SVG_PROPS}><circle cx="12" cy="12" r="10" /><path d="M9 9a3 3 0 1 1 5 2c-.9.5-1.5 1-1.5 2" /><path d="M12 17h.01" /></svg>`} />
);