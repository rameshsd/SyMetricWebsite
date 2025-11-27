'use client';

import React from 'react';

const IconWrapper = ({ children, className, viewBox = "0 0 64 64" }: { children: React.ReactNode; className?: string, viewBox?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

const PrimaryFill = ({ children }: { children: React.ReactNode }) => (
    <g fill="hsl(var(--primary-foreground))" className="dark:fill-primary-foreground">
        {children}
    </g>
)

const AccentFill = ({ children }: { children: React.ReactNode }) => (
    <g fill="hsl(var(--primary))">
        {children}
    </g>
)

export const UserAccessIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className} viewBox="0 0 24 24">
        <PrimaryFill>
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </PrimaryFill>
        <AccentFill>
            <path d="M22.6 15.3c-1.3-1.3-3.1-2.1-5.1-2.1-2.2 0-4.2 1-5.6 2.6l1.4 1.4c1-1 2.4-1.6 3.9-1.6.5 0 1 .1 1.5.3l1.5-1.5c.3-.3.8-.3 1.1 0l1.3 1.3c.3.3.3.8 0 1.1l-1.5 1.5c.2.5.3 1 .3 1.5 0 1.5-.6 2.9-1.6 3.9l1.4 1.4c1.6-1.4 2.6-3.4 2.6-5.6-.1-2-.9-3.8-2.1-5.1zM19 19c0 .4-.1.7-.2 1l2.5 2.5c.3.3.3.8 0 1.1l-1.3 1.3c-.3.3-.8.3-1.1 0l-2.5-2.5c-.3.1-.6.2-1 .2-1.9 0-3.5-1.1-4.3-2.6l-1.4 1.4c1.4 1.6 3.4 2.6 5.6 2.6 2 0 3.8-.8 5.1-2.1 1.3-1.3 2.1-3.1 2.1-5.1s-.8-3.8-2.1-5.1l-1.4-1.4c-1.6 1.4-2.6 3.4-2.6 5.6z"/>
        </AccentFill>
    </IconWrapper>
);

export const OrgManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className} viewBox="0 0 24 24">
        <PrimaryFill>
             <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        </PrimaryFill>
        <AccentFill>
            <path d="M15.5 16.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm-1.4-3.5h-1.4v-1.4h1.4v1.4zm2.8 0h-1.4v-1.4h1.4v1.4zm0 2.8h-1.4v-1.4h1.4v1.4zm-2.8 0h-1.4v-1.4h1.4v1.4z"/>
        </AccentFill>
    </IconWrapper>
);

export const StudyManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className} viewBox="0 0 24 24">
        <PrimaryFill>
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6z"/>
        </PrimaryFill>
        <AccentFill>
            <circle cx="15.5" cy="15.5" r="3.5" />
            <path d="M14.79 14.08 13 16.35l-1.79-1.79-1.41 1.41L13 19.17l3.21-3.21z" fill="#030712" />
        </AccentFill>
    </IconWrapper>
);

export const SiteManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className} viewBox="0 0 24 24">
        <PrimaryFill>
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        </PrimaryFill>
        <AccentFill>
            <circle cx="12" cy="9" r="2.5" />
        </AccentFill>
    </IconWrapper>
);

export const SuppliesManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className} viewBox="0 0 24 24">
        <PrimaryFill>
            <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
        </PrimaryFill>
        <AccentFill>
            <circle cx="16" cy="15" r="4" />
            <path d="M15.41 13.59 14 15l-1.41-1.41L11.17 15l2.83 2.83L18.83 13l-1.42-1.41z" fill="#030712"/>
        </AccentFill>
    </IconWrapper>
);

export const SubjectManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className} viewBox="0 0 24 24">
        <PrimaryFill>
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </PrimaryFill>
        <AccentFill>
             <circle cx="18" cy="18" r="4" />
             <path d="m19.7 16.8-1.8 1.8-1.8-1.8-1.2 1.2 1.8 1.8-1.8 1.8 1.2 1.2 1.8-1.8 1.8 1.8 1.2-1.2-1.8-1.8 1.8-1.8z" fill="#030712"/>
        </AccentFill>
    </IconWrapper>
);

export const DataManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className} viewBox="0 0 24 24">
        <PrimaryFill>
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-4h2v4zm4 0h-2v-7h2v7zm4 0h-2V7h2v10z"/>
        </PrimaryFill>
        <AccentFill>
            <circle cx="17" cy="17" r="4" />
            <path d="m16.29 15.58-1.41 1.41-1.41-1.41-1.42 1.42 1.41 1.41-1.41 1.41 1.42 1.42 1.41-1.41 1.41 1.41 1.42-1.42-1.41-1.41 1.41-1.41z" fill="#030712" />
        </AccentFill>
    </IconWrapper>
);

export const LabManagementIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className} viewBox="0 0 24 24">
        <PrimaryFill>
            <path d="M19.5 2h-15C3.12 2 2 3.12 2 4.5v15C2 20.88 3.12 22 4.5 22h15c1.38 0 2.5-1.12 2.5-2.5v-15C22 3.12 20.88 2 19.5 2zM9 18H6v-5h3v5zm4 0h-3v-3h3v3zm0-5h-3v-2h3v2zm4 5h-3v-5h3v5z"/>
        </PrimaryFill>
        <AccentFill>
            <circle cx="17" cy="8" r="3" />
            <path d="M16.53 7.06 15.12 8.47l-1.06-1.06-.71.71 1.06 1.06-1.06 1.06.71.71 1.06-1.06 1.41 1.41.71-.71-1.41-1.41 1.41-1.41z" fill="#030712" />
        </AccentFill>
    </IconWrapper>
);

export const MedicalCodingIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className} viewBox="0 0 24 24">
        <PrimaryFill>
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H8v-2h6v2zm0-4H8v-2h6v2zm4-4H8V7h10v2z"/>
        </PrimaryFill>
        <AccentFill>
            <circle cx="17" cy="17" r="4" />
            <path d="M16.29 15.58-1.41 1.41-1.41-1.41-1.42 1.42 1.41 1.41-1.41 1.41 1.42 1.42 1.41-1.41 1.41 1.41 1.42-1.42-1.41-1.41 1.41-1.41z" fill="#030712" />
        </AccentFill>
    </IconWrapper>
);

export const DataServicesIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className} viewBox="0 0 24 24">
        <PrimaryFill>
            <path d="M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm0 6H5v-4h14v4zm0-16H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 6H5V5h14v4z"/>
        </PrimaryFill>
        <AccentFill>
            <circle cx="18" cy="8" r="3" />
            <path d="m17.29 6.58-1.41 1.41-1.41-1.41-1.42 1.42 1.41 1.41-1.41 1.41 1.42 1.42 1.41-1.41 1.41 1.41 1.42-1.42-1.41-1.41 1.41-1.41z" fill="#030712"/>
        </AccentFill>
    </IconWrapper>
);

export const DigitalLearningIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className} viewBox="0 0 24 24">
        <PrimaryFill>
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 18V6h16v12H4z"/>
        </PrimaryFill>
        <AccentFill>
            <path d="M14 10.5V8.41l1.29-1.29.71.71-2 2-2-2 .71-.71L14 8.41V10.5h-1V7h5v3.5zM12 12.5H7V11h5v1.5zm-5 2h10v-1.5H7V13z"/>
             <circle cx="18" cy="16" r="3" />
            <path d="M17.53 15.06 16.12 16.47l-1.06-1.06-.71.71 1.06 1.06-1.06 1.06.71.71 1.06-1.06 1.41 1.41.71-.71-1.41-1.41 1.41-1.41z" fill="#030712"/>
        </AccentFill>
    </IconWrapper>
);

export const HelpSupportIcon = ({ className }: { className?: string }) => (
    <IconWrapper className={className} viewBox="0 0 24 24">
        <PrimaryFill>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </PrimaryFill>
        <AccentFill>
            <path d="M20.29 8.71 19 7.41l-2.29 2.29-1.41-1.41L17.59 6 16 4.41l-1.41 1.41-2.29-2.29-1.29 1.29L13.59 7 12 8.59l-1.59-1.59-1.29-1.29-2.29 2.29L5.41 6 4 7.41l2.29 2.29-2.29 2.29 1.41 1.41 2.29-2.29 1.59 1.59L8 15.41l1.41 1.41 2.59-2.59 2.59 2.59 1.41-1.41L14.41 14l1.59-1.59 2.29 2.29 1.41-1.41-2.29-2.29L20.29 8.71z"/>
        </AccentFill>
    </IconWrapper>
);
