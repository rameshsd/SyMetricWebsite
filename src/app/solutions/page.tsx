
'use client';

import { solutions } from '@/lib/data';
import { ProductPageHeader } from '@/components/layout/ProductPageHeader';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Rocket, Shuffle, Database, ClipboardList, TrendingUp, Shield, Activity, Clock } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const pillars = [
    {
        icon: (props: any) => (
            <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 6L20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="7" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
            </svg>
        ),
        title: 'Accelerate',
        description: 'clinical trials with streamlined and transparent time-to-market solutions'
    },
    {
        icon: (props: any) => (
             <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                <rect x="2" y="2" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
                <rect x="18" y="2" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
                <rect x="2" y="18" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
                <rect x="18" y="18" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
                <path d="M9 7V4" stroke="currentColor" strokeWidth="2"/>
                <path d="M15 7V4" stroke="currentColor" strokeWidth="2"/>
                <path d="M9 20V17" stroke="currentColor" strokeWidth="2"/>
                <path d/