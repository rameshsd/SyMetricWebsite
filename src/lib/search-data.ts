import { solutions, navItems } from './data';
import type { NavItem } from './types';

type SearchItem = {
  title: string;
  category: string;
  href: string;
};

const solutionItems: SearchItem[] = solutions.map(s => ({
  title: s.name,
  category: 'Solution',
  href: `/solutions/${s.slug}`,
}));

const allPages: SearchItem[] = [];
const processNavItems = (items: NavItem[]) => {
  items.forEach(item => {
    if (item.href) {
        // Avoid adding the parent dropdown trigger which has href but is not a real page
        if (item.name !== 'Products and Services' && item.href !== '#') {
             allPages.push({ title: item.name, category: 'Page', href: item.href });
        }
    }
    if (item.subItems) {
      processNavItems(item.subItems);
    }
  });
};

// Assuming navItems is the root array of navigation items
processNavItems(navItems);

// Combine and remove duplicates based on href
const combinedItems = [...solutionItems, ...allPages];
const uniqueSearchableData = Array.from(new Set(combinedItems.map(a => a.href)))
  .map(href => {
    return combinedItems.find(a => a.href === href)!
  });


export const searchableData: SearchItem[] = uniqueSearchableData;
