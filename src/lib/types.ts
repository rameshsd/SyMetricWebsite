
import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  name: string;
  href: string;
  subItems?: NavItem[];
};

export type SolutionCapability = {
  id: string;
  title: string;
  description: string;
  imageId: string;
}

export type Solution = {
  id: string;
  name:string;
  slug: string;
  hero: {
    title: string;
    subtitle: string;
  };
  description: string;
  longDescription: string;
  icon: LucideIcon;
  image: string;
  capabilities?: SolutionCapability[];
  backgroundColor?: string;
};

export type Industry = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export type LeadershipMember = {
  id: string;
  name: string;
  role: string;
  bio: string[];
  imageId: string;
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
