'use client';

import * as React from 'react';

export type IconProps = { className?: string };

// Utility to inject raw SVG exactly as provided
const RawSVG: React.FC<{ svg: string; className?: string }> = ({ svg, className }) => (
  <span
    className={className}
    style={{ display: 'inline-block', width: '64px', height: '64px' }}
    dangerouslySetInnerHTML={{
      __html: svg.replace('<svg', '<svg width="64" height="64" class="h-full w-full"')
    }}
  />
);

// -----------------------------------------------------------
// 2. Study Management (DO NOT CHANGE – as you requested)
// -----------------------------------------------------------
export const StudyIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg fill="#000000" viewBox="0 0 24 24" id="settings" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><circle id="secondary" cx="12" cy="12" r="3" style="fill: none; stroke: #ffffff; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></circle><path id="primary" d="M20,10h-.59a1,1,0,0,1-.94-.67v0a1,1,0,0,1,.2-1.14l.41-.41a1,1,0,0,0,0-1.42L17.66,4.93a1,1,0,0,0-1.42,0l-.41.41a1,1,0,0,1-1.14-.2h0A1,1,0,0,1,14,4.59V4a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1v.59a1,1,0,0,1-.67.94h0a1,1,0,0,1-1.14-.2l-.41-.41a1,1,0,0,0-1.42,0L4.93,6.34a1,1,0,0,0,0,1.42l.41.41a1,1,0,0,1,.2,1.14v0a1,1,0,0,1-.94.67H4a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h.59a1,1,0,0,1,.94.67v0a1,1,0,0,1-.2,1.14l-.41.41a1,1,0,0,0,0,1.42l1.41,1.41a1,1,0,0,0,1.42,0l.41-.41a1,1,0,0,1,1.14-.2h0a1,1,0,0,1,.67.94V20a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1v-.59a1,1,0,0,1,.67-.94h0a1,1,0,0,1,1.14.2l.41.41a1,1,0,0,0,1.42,0l1.41-1.41a1,1,0,0,0,0-1.42l-.41-.41a1,1,0,0,1-.2-1.14v0a1,1,0,0,1,.94-.67H20a1,1,0,0,0,1-1V11A1,1,0,0,0,20,10Z" style="fill: none; stroke: #bc10b6; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></g></svg>`}
  />
);

// -----------------------------------------------------------
// 1. Identity & Access
// -----------------------------------------------------------
export const IdentityAccessIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="#bc10b6" d="M12 3L5 6v5c0 5 3.5 9 7 10c3.5-1 7-5 7-10V6l-7-3z" />
  <circle stroke="white" cx="12" cy="11" r="2" />
  <path stroke="white" d="M12 13v2" />
</svg>`}
  />
);

// -----------------------------------------------------------
// 2. Organization
// -----------------------------------------------------------
export const OrganizationIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect stroke="#bc10b6" x="3" y="8" width="18" height="12" rx="2" />
  <path stroke="#bc10b6" d="M7 8V4h10v4" />
  <path stroke="white" d="M10 14v2" />
  <path stroke="white" d="M14 14v2" />
</svg>`}
  />
);

// -----------------------------------------------------------
// 3. Site Management
// -----------------------------------------------------------
export const SiteIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="#bc10b6" d="M12 21c4-4 6-7 6-10a6 6 0 1 0-12 0c0 3 2 6 6 10z" />
  <circle stroke="white" cx="12" cy="11" r="2" />
</svg>`}
  />
);

// -----------------------------------------------------------
// 4. Clinical Supplies
// -----------------------------------------------------------
export const SuppliesIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="#bc10b6" d="M3 7l9-4l9 4v10l-9 4l-9-4z" />
  <path stroke="white" d="M3 7l9 4l9-4" />
  <path stroke="white" d="M12 11v10" />
</svg>`}
  />
);

// -----------------------------------------------------------
// 5. Subject Management
// -----------------------------------------------------------
export const SubjectIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle stroke="#bc10b6" cx="12" cy="7" r="4" />
  <path stroke="white" d="M5 21c1-4 4-6 7-6s6 2 7 6" />
</svg>`}
  />
);

// -----------------------------------------------------------
// 6. Data Management
// -----------------------------------------------------------
export const DataManagementIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <ellipse stroke="#bc10b6" cx="12" cy="5" rx="7" ry="3" />
  <path stroke="white" d="M5 5v6c0 2 3 3 7 3s7-1 7-3V5" />
  <path stroke="white" d="M5 11v6c0 2 3 3 7 3s7-1 7-3v-6" />
</svg>`}
  />
);

// -----------------------------------------------------------
// 7. Lab Management
// -----------------------------------------------------------
export const LabIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="#bc10b6" d="M10 2h4" />
  <path stroke="#bc10b6" d="M9 2v3l-3 4v9a5 5 0 0 0 5 5h2a5 5 0 0 0 5-5v-9l-3-4V2" />
  <path stroke="white" d="M9 9h6" />
</svg>`}
  />
);

// -----------------------------------------------------------
// 8. Medical Coding
// -----------------------------------------------------------
export const MedicalCodingIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="#bc10b6" d="M7 2h7l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
  <path stroke="#bc10b6" d="M13 2v6h6" />
  <path stroke="white" d="M9 14l-2 2l2 2" />
  <path stroke="white" d="M15 14l2 2l-2 2" />
</svg>`}
  />
);

// -----------------------------------------------------------
// 9. Data Services
// -----------------------------------------------------------
export const DataServicesIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect stroke="#bc10b6" x="3" y="4" width="18" height="6" rx="2" />
  <rect stroke="#bc10b6" x="3" y="14" width="18" height="6" rx="2" />
  <circle stroke="white" cx="8" cy="17" r="1" />
</svg>`}
  />
);

// -----------------------------------------------------------
// 10. Digital Learning
// -----------------------------------------------------------
export const DigitalLearningIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect stroke="#bc10b6" x="3" y="4" width="18" height="12" rx="2" />
  <path stroke="#bc10b6" d="M12 2l7 3l-7 3l-7-3z" />
  <path stroke="white" d="M12 8v3" />
  <path stroke="white" d="M10 16v4" />
  <path stroke="white" d="M14 16v4" />
  <path stroke="white" d="M8 20h8" />
</svg>`}
  />
);

// -----------------------------------------------------------
// 11. Help & Support
// -----------------------------------------------------------
export const HelpSupportIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle stroke="#bc10b6" cx="12" cy="12" r="10" />
  <path stroke="white" d="M9 9a3 3 0 1 1 5 2c-.9.5-1.5 1-1.5 2" />
  <path stroke="white" d="M12 17h.01" />
</svg>`}
  />
);
