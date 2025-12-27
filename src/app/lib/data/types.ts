/**
 * Represents an image in the portfolio, including dimensions and AI hints.
 */
export type PortfolioImage = {
  src: string;
  width: number;
  height: number;
  /** Description for accessibility and AI context */
  hint: string;
};

/**
 * Represents an external link associated with a portfolio project.
 */
export type PortfolioLink = {
  url: string;
  name: string;
};

/**
 * Valid categories for portfolio items.
 */
export const PORTFOLIO_CATEGORIES = [
  "Todos",
  "Branding",
  "Diseño Gráfico",
  "Diseño App",
  "Diseño Web",
  "Logo",
  "Packaging",
  "Publicitario",
  "Editorial",
  "Ilustración"
] as const;

/**
 * Type inferred from the PORTFOLIO_CATEGORIES constant.
 */
export type PortfolioCategory = (typeof PORTFOLIO_CATEGORIES)[number];

/**
 * The core data structure for a portfolio project.
 */
export type PortfolioItem = {
  /** Unique identifier for the project */
  id: string;
  /** Primary title of the project */
  title: string;
  /** Short descriptive subtitle */
  subtitle: string;
  /** List of categories this project belongs to */
  categories: string[]; // Keeping as string[] to allow flexible matching but could be PortfolioCategory[]
  /** Year of creation or completion */
  year: string;
  /** Primary cover image for the project card */
  mainImage: PortfolioImage;
  /** Full technical or artistic description */
  description: string;
  /** Optional external link (e.g., prototype or live site) */
  link?: PortfolioLink;
  /** Additional images for the project modal carousel */
  gallery: PortfolioImage[];
};
