
'use client';

import * as React from 'react';

export type IconProps = { className?: string };

// Utility to inject raw SVG exactly as provided
const RawSVG: React.FC<{ svg: string; className?: string }> = ({ svg, className }) => (
  <span
    className={className}
    style={{ display: 'inline-block', width: '64px', height: '64px' }}
    dangerouslySetInnerHTML={{
      __html: svg.replace('<svg', '<svg width="64" height="64"')
    }}
  />
);

// 1. Identity & Access Management
export const IdentityAccessIcon: React.FC<IconProps> = ({ className }) => (
    <RawSVG
    className={className}
    svg={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="22" r="10" /><path d="M20 46c0-8 24-8 24 0" /><circle cx="46" cy="46" r="8" /><path d="M42 46l2.5 3 5.5-6" /></svg>`}
  />
);

// 2. Organization Management
export const OrganizationIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={'<svg fill="#b31fd1" viewBox="-10 -10 120.00 120.00" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="#b31fd1" stroke-width="1" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.6"></g><g id="SVGRepo_iconCarrier"> <g id="jackhammer"></g> <g id="drilling_machine"></g> <g id="hammer"></g> <g id="measuring_tape"></g> <g id="wrench"></g> <g id="saw"></g> <g id="building"> <g> <path d="M35,37h6c0.6,0,1-0.4,1-1v-6c0-0.6-0.4-1-1-1h-6c-0.6,0-1,0.4-1,1v6C34,36.6,34.4,37,35,37z M36,31h4v4h-4V31z"></path> <path d="M47,37h6c0.6,0,1-0.4,1-1v-6c0-0.6-0.4-1-1-1h-6c-0.6,0-1,0.4-1,1v6C46,36.6,46.4,37,47,37z M48,31h4v4h-4V31z"></path> <path d="M59,37h6c0.6,0,1-0.4,1-1v-6c0-0.6-0.4-1-1-1h-6c-0.6,0-1,0.4-1,1v6C58,36.6,58.4,37,59,37z M60,31h4v4h-4V31z"></path> <path d="M35,48h6c0.6,0,1-0.4,1-1v-6c0-0.6-0.4-1-1-1h-6c-0.6,0-1,0.4-1,1v6C34,47.6,34.4,48,35,48z M36,42h4v4h-4V42z"></path> <path d="M47,48h6c0.6,0,1-0.4,1-1v-6c0-0.6-0.4-1-1-1h-6c-0.6,0-1,0.4-1,1v6C46,47.6,46.4,48,47,48z M48,42h4v4h-4V42z"></path> <path d="M59,48h6c0.6,0,1-0.4,1-1v-6c0-0.6-0.4-1-1-1h-6c-0.6,0-1,0.4-1,1v6C58,47.6,58.4,48,59,48z M60,42h4v4h-4V42z"></path> <path d="M35,59h6c0.6,0,1-0.4,1-1v-6c0-0.6-0.4-1-1-1h-6c-0.6,0-1,0.4-1,1v6C34,58.6,34.4,59,35,59z M36,53h4v4h-4V53z"></path> <path d="M47,59h6c0.6,0,1-0.4,1-1v-6c0-0.6-0.4-1-1-1h-6c-0.6,0-1,0.4-1,1v6C46,58.6,46.4,59,47,59z M48,53h4v4h-4V53z"></path> <path d="M59,59h6c0.6,0,1-0.4,1-1v-6c0-0.6-0.4-1-1-1h-6c-0.6,0-1,0.4-1,1v6C58,58.6,58.4,59,59,59z M60,53h4v4h-4V53z"></path> <path d="M94,42v-3h1c0.6,0,1-0.4,1-1v-4c0-0.6-0.4-1-1-1h-1.4l-3.7-6.5C89.7,26.2,89.4,26,89,26H71v-1h1c0.6,0,1-0.4,1-1v-4 c0-0.6-0.4-1-1-1h-1.7L50.5,7.1c-0.3-0.2-0.7-0.2-1,0L29.7,19H28c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h1v1H11 c-0.4,0-0.7,0.2-0.9,0.5L6.4,33H5c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h1v3v42v3H5c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h90 c0.6,0,1-0.4,1-1v-4c0-0.6-0.4-1-1-1h-1v-3V42z M82,83v-5h4v5H82z M92,43v5h-4v-5H92z M86,64v5h-4v-5H86z M82,62v-5h4v5H82z M88,64h4v5h-4V64z M88,62v-5h4v5H88z M88,55v-5h4v5H88z M86,55h-4v-5h4V55z M82,71h4v5h-4V71z M88,71h4v5h-4V71z M86,48h-4v-5h4 V48z M88,78h4v5h-4V78z M94,37h-1H71v-2h23V37z M88.4,28l2.9,5H71v-5H88.4z M50,9.2L66.4,19H33.6L50,9.2z M29,21h42v2h-1H30h-1V21 z M69,25v9v4v49H59V64c0-0.6-0.4-1-1-1H42c-0.6,0-1,0.4-1,1v23H31V38v-4v-9H69z M57,87H43V65h14V87z M11.6,28H29v5H8.7L11.6,28z M6,35h23v2H7H6V35z M18,43v5h-4v-5H18z M8,83v-5h4v5H8z M14,62v-5h4v5H14z M18,64v5h-4v-5H18z M12,62H8v-5h4V62z M12,64v5H8v-5 H12z M12,71v5H8v-5H12z M14,71h4v5h-4V71z M18,55h-4v-5h4V55z M12,55H8v-5h4V55z M14,78h4v5h-4V78z M12,48H8v-5h4V48z M8,85h11 c0.6,0,1-0.4,1-1V42c0-0.6-0.4-1-1-1H8v-2h21v48H8V85z M94,91H6v-2h1h23h12h16h12h23h1V91z M71,87V39h21v2H81c-0.6,0-1,0.4-1,1v42 c0,0.6,0.4,1,1,1h11v2H71z"></path> </g> </g> <g id="wall"></g> <g id="crane"></g> <g id="barrier_sign"></g> <g id="concept"></g> <g id="shovel"></g> <g id="architecture"></g> <g id="safety_helmet"></g> <g id="worker"></g> <g id="teamwork"></g> <g id="roller_brush"></g> <g id="designs"></g> <g id="trolley"></g> <g id="pick_axe"></g> </g></svg>'}
  />
);

// 2. Study Management
export const StudyIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg fill="#000000" viewBox="0 0 24 24" id="settings" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><circle id="secondary" cx="12" cy="12" r="3" style="fill: none; stroke: #ffffff; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></circle><path id="primary" d="M20,10h-.59a1,1,0,0,1-.94-.67v0a1,1,0,0,1,.2-1.14l.41-.41a1,1,0,0,0,0-1.42L17.66,4.93a1,1,0,0,0-1.42,0l-.41.41a1,1,0,0,1-1.14.2h0A1,1,0,0,1,14,4.59V4a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1v.59a1,1,0,0,1-.67.94h0a1,1,0,0,1-1.14-.2l-.41-.41a1,1,0,0,0-1.42,0L4.93,6.34a1,1,0,0,0,0,1.42l.41.41a1,1,0,0,1,.2,1.14v0a1,1,0,0,1-.94.67H4a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h.59a1,1,0,0,1,.94.67v0a1,1,0,0,1-.2,1.14l-.41.41a1,1,0,0,0,0,1.42l1.41,1.41a1,1,0,0,0,1.42,0l.41-.41a1,1,0,0,1,1.14-.2h0a1,1,0,0,1,.67.94V20a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1v-.59a1,1,0,0,1,.67-.94h0a1,1,0,0,1,1.14.2l.41.41a1,1,0,0,0,1.42,0l1.41-1.41a1,1,0,0,0,0-1.42l-.41-.41a1,1,0,0,1-.2-1.14v0a1,1,0,0,1,.94-.67H20a1,1,0,0,0,1-1V11A1,1,0,0,0,20,10Z" style="fill: none; stroke: #bc10b6; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></g></svg>`}
  />
);

// 3. Site Management
export const SiteIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg fill="#9f1cce" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" stroke="#9f1cce"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M502.857,146.286H365.714V9.143c0-5.047-4.096-9.143-9.143-9.143H155.429c-5.047,0-9.143,4.096-9.143,9.143v137.143H9.143 c-5.047,0-9.143,4.096-9.143,9.143v347.429C0,507.904,4.096,512,9.143,512h146.286h64h73.143h64h146.286 c5.047,0,9.143-4.096,9.143-9.143V155.429C512,150.382,507.904,146.286,502.857,146.286z M146.286,493.714h-128V164.571h128 V493.714z M283.429,493.714h-54.857v-73.143h54.857V493.714z M347.429,155.429v338.286h-45.714v-73.143H320v-18.286h-27.429 h-73.143H192v18.286h18.286v73.143h-45.714V155.429V18.286h182.857V155.429z M493.714,493.714h-128V164.571h128V493.714z"></path> </g> </g> <g> <g> <path d="M118.857,182.857H45.714c-5.047,0-9.143,4.096-9.143,9.143v36.571c0,5.047,4.096,9.143,9.143,9.143h73.143 c5.047,0,9.143-4.096,9.143-9.143V192C128,186.953,123.904,182.857,118.857,182.857z M73.143,219.429H54.857v-18.286h18.286 V219.429z M109.714,219.429H91.429v-18.286h18.286V219.429z"></path> </g> </g> <g> <g> <path d="M118.857,256H45.714c-5.047,0-9.143,4.096-9.143,9.143v36.571c0,5.047,4.096,9.143,9.143,9.143h73.143 c5.047,0,9.143-4.096,9.143-9.143v-36.571C128,260.096,123.904,256,118.857,256z M73.143,292.571H54.857v-18.286h18.286V292.571z M109.714,292.571H91.429v-18.286h18.286V292.571z"></path> </g> </g> <g> <g> <path d="M118.857,329.143H45.714c-5.047,0-9.143,4.096-9.143,9.143v36.571c0,5.047,4.096,9.143,9.143,9.143h73.143 c5.047,0,9.143-4.096,9.143-9.143v-36.571C128,333.239,123.904,329.143,118.857,329.143z M73.143,365.714H54.857v-18.286h18.286 V365.714z M109.714,365.714H91.429v-18.286h18.286V365.714z"></path> </g> </g> <g> <g> <path d="M466.286,182.857h-73.143c-5.047,0-9.143,4.096-9.143,9.143v36.571c0,5.047,4.096,9.143,9.143,9.143h73.143 c5.047,0,9.143-4.096,9.143-9.143V192C475.429,186.953,471.333,182.857,466.286,182.857z M420.571,219.429h-18.286v-18.286h18.286 V219.429z M457.143,219.429h-18.286v-18.286h18.286V219.429z"></path> </g> </g> <g> <g> <path d="M466.286,256h-73.143c-5.047,0-9.143,4.096-9.143,9.143v36.571c0,5.047,4.096,9.143,9.143,9.143h73.143 c5.047,0,9.143-4.096,9.143-9.143v-36.571C475.429,260.096,471.333,256,466.286,256z M420.571,292.571h-18.286v-18.286h18.286 V292.571z M457.143,292.571h-18.286v-18.286h18.286V292.571z"></path> </g> </g> <g> <g> <path d="M466.286,329.143h-73.143c-5.047,0-9.143,4.096-9.143,9.143v36.571c0,5.047,4.096,9.143,9.143,9.143h73.143 c5.047,0,9.143-4.096,9.143-9.143v-36.571C475.429,333.239,471.333,329.143,466.286,329.143z M420.571,365.714h-18.286v-18.286 h18.286V365.714z M457.143,365.714h-18.286v-18.286h18.286V365.714z"></path> </g> </g> <g> <g> <path d="M310.857,73.143h-27.429V45.714c0-5.047-4.096-9.143-9.143-9.143h-36.571c-5.047,0-9.143,4.096-9.143,9.143v27.429 h-27.429c-5.047,0-9.143,4.096-9.143,9.143v36.571c0,5.047,4.096,9.143,9.143,9.143h27.429v27.429 c0,5.047,4.096,9.143,9.143,9.143h36.571c5.047,0,9.143-4.096,9.143-9.143V128h27.429c5.047,0,9.143-4.096,9.143-9.143V82.286 C320,77.239,315.904,73.143,310.857,73.143z M301.714,109.714h-27.429c-5.047,0-9.143,4.096-9.143,9.143v27.429h-18.286v-27.429 c0-5.047-4.096-9.143-9.143-9.143h-27.429V91.429h27.429c5.047,0,9.143-4.096,9.143-9.143V54.857h18.286v27.429 c0,5.047,4.096,9.143,9.143,9.143h27.429V109.714z"></path> </g> </g> <g> <g> <path d="M237.714,182.857h-36.571c-5.047,0-9.143,4.096-9.143,9.143v36.571c0,5.047,4.096,9.143,9.143,9.143h36.571 c5.047,0,9.143-4.096,9.143-9.143V192C246.857,186.953,242.761,182.857,237.714,182.857z M228.571,219.429h-18.286v-18.286h18.286 V219.429z"></path> </g> </g> <g> <g> <path d="M310.857,182.857h-36.571c-5.047,0-9.143,4.096-9.143,9.143v36.571c0,5.047,4.096,9.143,9.143,9.143h36.571 c5.047,0,9.143-4.096,9.143-9.143V192C320,186.953,315.904,182.857,310.857,182.857z M301.714,219.429h-18.286v-18.286h18.286 V219.429z"></path> </g> </g> <g> <g> <path d="M237.714,256h-36.571c-5.047,0-9.143,4.096-9.143,9.143v36.571c0,5.047,4.096,9.143,9.143,9.143h36.571 c5.047,0,9.143-4.096,9.143-9.143v-36.571C246.857,260.096,242.761,256,237.714,256z M228.571,292.571h-18.286v-18.286h18.286 V292.571z"></path> </g> </g> <g> <g> <path d="M310.857,256h-36.571c-5.047,0-9.143,4.096-9.143,9.143v36.571c0,5.047,4.096,9.143,9.143,9.143h36.571 c5.047,0,9.143-4.096,9.143-9.143v-36.571C320,260.096,315.904,256,310.857,256z M301.714,292.571h-18.286v-18.286h18.286V292.571 z"></path> </g> </g> <g> <g> <path d="M237.714,329.143h-36.571c-5.047,0-9.143,4.096-9.143,9.143v36.571c0,5.047,4.096,9.143,9.143,9.143h36.571 c5.047,0,9.143-4.096,9.143-9.143v-36.571C246.857,333.239,242.761,329.143,237.714,329.143z M228.571,365.714h-18.286v-18.286 h18.286V365.714z"></path> </g> </g> <g> <g> <path d="M310.857,329.143h-36.571c-5.047,0-9.143,4.096-9.143,9.143v36.571c0,5.047,4.096,9.143,9.143,9.143h36.571 c5.047,0,9.143-4.096,9.143-9.143v-36.571C320,333.239,315.904,329.143,310.857,329.143z M301.714,365.714h-18.286v-18.286h18.286 V365.714z"></path> </g> </g> <g> <g> <rect x="36.571" y="402.286" width="18.286" height="18.286"></rect> </g> </g> <g> <g> <rect x="73.143" y="402.286" width="18.286" height="18.286"></rect> </g> </g> <g> <g> <rect x="109.714" y="402.286" width="18.286" height="18.286"></rect> </g> </g> <g> <g> <rect x="384" y="402.286" width="18.286" height="18.286"></rect> </g> </g> <g> <g> <rect x="420.571" y="402.286" width="18.286" height="18.286"></rect> </g> </g> <g> <g> <rect x="457.143" y="402.286" width="18.286" height="18.286"></rect> </g> </g> </g></svg>`}
  />
);

// 4. Clinical Supplies (exact SVG)
export const SuppliesIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg fill="#a73bb5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#a73bb5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M18.9,3.1a2.8,2.8,0,0,0-4,0L4,13.9a2.8,2.8,0,0,0,0,4L10,24a2.8,2.8,0,0,0,4,0L24.9,13.1a2.8,2.8,0,0,0,0-4Zm-6,6L11,11l-2,2,4,4,2-2,2-2Zm-1.6,9.2-4-4,9.8-9.8,4,4Z"></path></g></svg>`} />
);

// 5. Subject Management (exact SVG)
export const SubjectIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG className={className} svg={`<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 4a5 5 0 1 1-10 0 5 5 0 0 1 10 0zm0 1.5a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0z" fill="#00ff41" class="fill-000000"></path><path d="M12.5 9h-1a.5.5 0 0 0-.5.5v.06a6.94 6.94 0 0 0 4 6.36V18a2 2 0 0 1 2 2v6h-1v-6a1 1 0 0 0-1-1v-2.08a8.38 8.38 0 0 1-5.1-7.56L10 17H8v1a2 2 0 0 1-2 2v6H5v-6a1 1 0 0 0-1-1v-2.08A8.38 8.38 0 0 1 .91 8.36L1 9.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V9.94a6.94 6.94 0 0 0-4-6.36V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v.58a8.38 8.38 0 0 1 5.1 7.56L18 13h2V9.5a.5.5 0 0 0-.5-.5zM7 9.94v.06H2.06a6.94 6.94 0 0 0 4-6.36v.06H7a1 1 0 0 1-1 1v5.24zM16.94 3.64A6.94 6.94 0 0 0 11 9.94v.06h4.94v-.06a6.94 6.94 0 0 0-4-6.36v.06a1 1 0 0 1-1-1V3.28a1 1 0 0 1 .36-1.36z" fill="#00ff41" class="fill-000000"></path><path d="M25 4a5 5 0 1 1-10 0 5 5 0 0 1 10 0zm0 1.5a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0z" fill="#00ff41" class="fill-000000"></path><path d="M29 13v-3.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.06a6.94 6.94 0 0 0-4 6.36V18a2 2 0 0 1-2 2v6h1v-6a1 1 0 0 0 1-1v-2.08a8.38 8.38 0 0 1 5.1-7.56L24 10h2V8.5a.5.5 0 0 0 .5-.5h6a.5.5 0 0 0 .5.5v.06a6.94 6.94 0 0 0-4-6.36V3a1 1 0 0 1-1-1h-6a1 1 0 0 1-1 1v.58a8.38 8.38 0 0 1-5.1 7.56L15 13h-2v-3.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V10a2 2 0 0 1-2-2V2h1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2h1v6a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V8.5a.5.5 0 0 0-.5-.5H29zm-4 .06V9.94h4.94v.06a6.94 6.94 0 0 0-4-6.36v.06H25a1 1 0 0 1-1 1v5.24zm-8.06-6.36A6.94 6.94 0 0 0 11 9.94v.06h4.94v-.06a6.94 6.94 0 0 0-4-6.36v.06a1 1 0 0 1-1-1V3.28a1 1 0 0 1 .36-1.36z" fill="#00ff41" class="fill-000000"></path></g></svg>`} />
);

// Settings Icon (exact SVG)
export const DataManagementIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg width="64px" height="64px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_30_165)">
<path d="M16 27C15.4473 27 15 26.5522 15 26V20C15 19.4478 15.4473 19 16 19C16.5527 19 17 19.4478 17 20V26C17 26.5522 16.5527 27 16 27Z" fill="#888888"/>
<path d="M24 27C23.4473 27 23 26.5522 23 26V24H9V26C9 26.5522 8.55273 27 8 27C7.44727 27 7 26.5522 7 26V23C7 22.4478 7.44727 22 8 22H24C24.5527 22 25 22.4478 25 23V26C25 26.5522 24.5527 27 24 27Z" fill="#888888"/>
<path d="M24 21H7C3.69141 21 1 18.3086 1 15C1 11.6914 3.69141 9 7 9C7.01855 9 7.03711 9 7.05469 9C7.55371 4.50635 11.375 1 16 1C19.8584 1 23.2471 3.43805 24.4951 7.01709C28.125 7.27203 31 10.3066 31 14C31 17.8599 27.8594 21 24 21ZM7 11C4.79395 11 3 12.7944 3 15C3 17.2056 4.79395 19 7 19H24C26.7568 19 29 16.7568 29 14C29 11.2432 26.7568 9 24 9C23.9531 8.99756 23.9121 9 23.8711 9.00244C23.373 9.06445 22.9053 8.74365 22.7812 8.25586C21.7236 4.1958 19.168 3 16 3C12.1406 3 9 6.14014 9 10V10.1001C9 10.4028 8.8623 10.6895 8.627 10.8794C8.39062 11.0688 8.08105 11.1406 7.78516 11.0771C7.55371 11.0259 7.28906 11 7 11Z" fill="#dc20df"/>
<path d="M16 31C14.3457 31 13 29.6543 13 28C13 26.3457 14.3457 25 16 25C17.6543 25 19 26.3457 19 28C19 29.6543 17.6543 31 16 31ZM16 27C15.4482 27 15 27.4487 15 28C15 28.5513 15.4482 29 16 29C16.5518 29 17 28.5513 17 28C17 27.4487 16.5518 27 16 27Z" fill="#ffffff"/>
<path d="M24 31C22.3457 31 21 29.6543 21 28C21 26.3457 22.3457 25 24 25C25.6543 25 27 26.3457 27 28C27 29.6543 25.6543 31 24 31ZM24 27C23.4482 27 23 27.4487 23 28C23 28.5513 23.4482 29 24 29C24.5518 29 25 28.5513 25 28C25 27.4487 24.5518 27 24 27Z" fill="#ffffff"/>
<path d="M8 31C6.3457 31 5 29.6543 5 28C5 26.3457 6.3457 25 8 25C9.6543 25 11 26.3457 11 28C11 29.6543 9.6543 31 8 31ZM8 27C7.44824 27 7 27.4487 7 28C7 28.5513 7.44824 29 8 29C8.55176 29 9 28.5513 9 28C9 27.4487 8.55176 27 8 27Z" fill="#ffffff"/>
</g>
<defs>
<clipPath id="clip0_30_165">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>`}
  />
);

// 9. Medical Coding (Shield + Cross)
export const MedicalCodingIcon: React.FC<IconProps> = ({ className }) => (
    <RawSVG
    className={className}
    svg={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M32 10l18 8v14c0 14-10 22-18 24-8-2-18-10-18-24V18z" /><path d="M28 26h8" /><path d="M32 22v8" /></svg>`}
  />
);

// 10. Data Services (Cloud + Nodes)
export const DataServicesIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 34a10 10 0 1 1 20 0 8 8 0 1 1-4 15H26a8 8 0 1 1-4-15" /><circle cx="22" cy="50" r="3" /><circle cx="32" cy="50" r="3" /><circle cx="42" cy="50" r="3" /></svg>`}
  />
);

// 11. Digital Learning (Graduation Cap)
export const DigitalLearningIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 26l22-10 22 10-22 10z" /><path d="M32 36v14" /><circle cx="44" cy="32" r="2" /><path d="M44 34v8" /></svg>`}
  />
);

// 12. Help & Support (Circle + ?)
export const HelpSupportIcon: React.FC<IconProps> = ({ className }) => (
  <RawSVG
    className={className}
    svg={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="32" r="24" /><path d="M28 24c0-6 8-6 8 0 0 6-8 6-8 12" /><circle cx="32" cy="46" r="2" /></svg>`}
  />
);

// Lab Icon
export const LabIcon: React.FC<IconProps> = ({ className }) => (
    <RawSVG
      className={className}
      svg={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M24 16v14l4 6h12l4-6" /><path d="M28 30h16" /><path d="M18 50h28" /></svg>`}
    />
);

export const IdentityAccessIcon: React.FC<IconProps> = ({ className }) => (
    <RawSVG
    className={className}
    svg={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="22" r="10" /><path d="M20 46c0-8 24-8 24 0" /><circle cx="46" cy="46" r="8" /><path d="M42 46l2.5 3 5.5-6" /></svg>`}
  />
);