import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  name: string;
  href: string;
  subItems?: NavItem[];
};

export type Solution = {
  id: string;
  name:string;
  slug: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  image: string;
};

export type Industry = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export type LeadershipMember = {
  name: string;
  role: string;
  image: string;
};

export type Resource = {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
};

export type Customer = {
  name: string;
  logo: string;
  story: string;
  link: string;
};

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  bio: string;
};

export type FeatureGridItem = {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
  linkText: string;
};
