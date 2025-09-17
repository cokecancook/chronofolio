export type PortfolioItem = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  mainImage: {
    src: string;
    width: number;
    height: number;
    hint: string;
  };
  description: string;
  gallery: {
    src: string;
    width: number;
    height: number;
    hint: string;
  }[];
};

export const portfolioCategories = ["All", "Web Design", "App Development", "Branding"];

export const portfolioData: PortfolioItem[] = [
  {
    id: "project-nova",
    title: "Project Nova",
    subtitle: "SaaS Platform UI/UX",
    category: "Web Design",
    year: "2024",
    mainImage: {
      src: "https://picsum.photos/seed/nova1/800/600",
      width: 800,
      height: 600,
      hint: "abstract geometric",
    },
    description: "Project Nova is a complete redesign of a leading SaaS platform. The focus was on improving user workflow, creating a modern and intuitive interface, and building a scalable design system. We conducted extensive user research to inform our design decisions, resulting in a 40% increase in user satisfaction.",
    gallery: [
      {
        src: "https://picsum.photos/seed/nova2/800/600",
        width: 800,
        height: 600,
        hint: "wireframe layout",
      },
      {
        src: "https://picsum.photos/seed/nova3/800/600",
        width: 800,
        height: 600,
        hint: "person laptop",
      },
    ],
  },
  {
    id: "project-quantum",
    title: "Quantum",
    subtitle: "Mobile Banking App",
    category: "App Development",
    year: "2023",
    mainImage: {
      src: "https://picsum.photos/seed/quantum1/600/800",
      width: 600,
      height: 800,
      hint: "neon network",
    },
    description: "Quantum is a next-generation mobile banking application built from the ground up. It features biometric security, AI-powered financial insights, and a seamless, gamified user experience. The app was developed natively for both iOS and Android, ensuring optimal performance and platform integration.",
    gallery: [
      {
        src: "https://picsum.photos/seed/quantum2/800/600",
        width: 800,
        height: 600,
        hint: "app interface",
      },
      {
        src: "https://picsum.photos/seed/quantum3/800/600",
        width: 800,
        height: 600,
        hint: "flowchart logic",
      },
    ],
  },
  {
    id: "project-echo",
    title: "Echo",
    subtitle: "Branding & Identity",
    category: "Branding",
    year: "2023",
    mainImage: {
      src: "https://picsum.photos/seed/echo1/800/800",
      width: 800,
      height: 800,
      hint: "logo mockup",
    },
    description: "A complete branding and identity project for Echo, a sustainable audio equipment company. The identity reflects the brand's commitment to quality and nature, using an earthy color palette and minimalist typography. The project included logo design, packaging, and a comprehensive brand style guide.",
    gallery: [
      {
        src: "https://picsum.photos/seed/echo2/800/600",
        width: 800,
        height: 600,
        hint: "business cards",
      },
      {
        src: "https://picsum.photos/seed/echo3/800/600",
        width: 800,
        height: 600,
        hint: "mood board",
      },
    ],
  },
  {
    id: "project-zenith",
    title: "Zenith",
    subtitle: "E-commerce Website",
    category: "Web Design",
    year: "2022",
    mainImage: {
      src: "https://picsum.photos/seed/zenith1/800/500",
      width: 800,
      height: 500,
      hint: "mountain sunrise",
    },
    description: "Zenith is a high-end e-commerce platform for outdoor gear. The design is clean, adventurous, and focuses on large, immersive product photography. We built a custom Shopify theme that is both highly performant and easy for the client to manage.",
    gallery: [
      {
        src: "https://picsum.photos/seed/zenith2/800/600",
        width: 800,
        height: 600,
        hint: "website design",
      },
      {
        src: "https://picsum.photos/seed/zenith3/800/600",
        width: 800,
        height: 600,
        hint: "responsive design",
      },
    ],
  },
  {
    id: "project-fusion",
    title: "Fusion",
    subtitle: "Data Visualization Tool",
    category: "App Development",
    year: "2021",
    mainImage: {
      src: "https://picsum.photos/seed/fusion1/600/700",
      width: 600,
      height: 700,
      hint: "liquid art",
    },
    description: "Fusion is a web-based application that allows users to create stunning, interactive data visualizations with no code. Built with React and D3.js, it provides a drag-and-drop interface for connecting data sources and building complex dashboards.",
    gallery: [
      {
        src: "https://picsum.photos/seed/fusion2/800/600",
        width: 800,
        height: 600,
        hint: "user testing",
      },
      {
        src: "https://picsum.photos/seed/fusion3/800/600",
        width: 800,
        height: 600,
        hint: "dashboard ui",
      },
    ],
  },
  {
    id: "project-aura",
    title: "Aura",
    subtitle: "Wellness Brand Identity",
    category: "Branding",
    year: "2020",
    mainImage: {
      src: "https://picsum.photos/seed/aura1/700/700",
      width: 700,
      height: 700,
      hint: "pastel gradient",
    },
    description: "Brand identity for Aura, a wellness and self-care brand. The visual language is soft, calming, and aspirational, utilizing a pastel color palette, elegant serif fonts, and ethereal photography. The deliverables included a logo suite, packaging design, and social media templates.",
    gallery: [
      {
        src: "https://picsum.photos/seed/aura2/800/600",
        width: 800,
        height: 600,
        hint: "packaging design",
      },
      {
        src: "https://picsum.photos/seed/aura3/800/600",
        width: 800,
        height: 600,
        hint: "style guide",
      },
    ],
  },
];
