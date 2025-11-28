

import type { LucideIcon } from 'lucide-react';
import type { Timestamp, DocumentReference } from 'firebase/firestore'
import type { User } from 'firebase/auth'


export type NavItem = {
  name: string;
  href: string;
  description?: string;
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
  linkedin?: string;
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
  role: string;
  company: string;
  avatarId: string;
  story: string;
};

export type SuccessStory = {
    id: string;
    logoId: string;
    title: string;
    description: string;
    linkText: string;
    linkUrl: string;
}

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
};

export type LatestNewsItem = {
  id: number;
  title: string;
  description: string;
  link: string;
  imageId: string;
  main?: boolean;
};

export type CustomerSuccessStory = {
  id: number;
  quote: string;
  author: string;
  handle: string;
  avatarId: string;
  badge?: string;
  date: string;
  link: string;
  company: string;
};

export type ResearchIntegrateAnalyzeFeature = {
    title: string;
    description: string;
    icon: LucideIcon;
    link?: string;
}

export type WhyChooseUsFeature = {
  id: string;
  title: string;
  description: string;
  imageId: string;
};

export type CompanyInfo = {
  facts: {
    founded: string;
    employees: string;
    countries: string;
    customers: string;
  }
}

export type UnlockPotentialItem = {
  id: number;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  imageId: string;
};

export type UseCase = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};
    
export type JobOpening = {
  id: string;
  title: string;
  department: string;
  location: string;
  shortDescription: string;
  fullDescription: string;
};

export type CompanyValue = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type EmployeeBenefit = {
  title: string;
  description: string;
};

export type CommunityLeaderSlide = {
  title: string;
  description: string;
  links: { text: string; href: string }[];
};

export type FeaturedTopic = {
  id: string;
  title: string;
  imageId: string;
};

export type CommunityPost = {
    id: string;
    authorId: string;
    author: {
        name: string;
        role: string;
    }
    title: string;
    content: string;
    createdAt: string | Date | Timestamp;
    category: string;
    views: number;
    comments: number;
    likes: number;
};

export type WelcomeLink = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type TopAuthor = {
  id: string;
  name: string;
  avatarId: string;
  kudos: number;
  sapLogo?: string;
  imageUrl: string;
};
    
export interface UserHookResult {
  user: User | null;
  isUserLoading: boolean;
}
    
export interface WithId<T> {
  id: string;
  [key: string]: T;
}
    
export interface UseCollectionResult<T> {
  data: WithId<T>[] | null;
  isLoading: boolean;
  error: Error | null;
}
    
export interface UseDocResult<T> {
  data: WithId<T> | null;
  isLoading: boolean;
  error: Error | null;
}
    
export interface UseCollectionOptions {
  where?: [string, '==', any];
}
    
export interface UseDocOptions {
  docId: string;
}
    
export type FirestoreHookResult<T> =
  | UseCollectionResult<T>
  | UseDocResult<T>;
