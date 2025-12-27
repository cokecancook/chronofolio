import { PortfolioItem, PORTFOLIO_CATEGORIES } from './data/types';
import projectsData from './data/projects.json';

export type { PortfolioItem, PortfolioImage, PortfolioLink, PortfolioCategory } from './data/types';
export { PORTFOLIO_CATEGORIES } from './data/types';

export const portfolioCategories = [...PORTFOLIO_CATEGORIES];
export const portfolioData = projectsData as PortfolioItem[];
