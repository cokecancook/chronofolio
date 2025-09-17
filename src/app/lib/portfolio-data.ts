export type PortfolioItem = {
  id: string;
  title: string;
  subtitle: string;
  categories: string[];
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
    id: "beauty-luz",
    title: "Beauty Luz",
    subtitle: "Branding",
    categories: ["Branding"],
    year: "2017",
    mainImage: {
      src: "/images/portfolio/beauty-luz/bea-00.jpg",
      width: 1556,
      height: 992,
      hint: "logo on corporate laser background",
    },
    description: "Proyecto de identidad corporativa para el centro de estética BeautyLUZ. Se desarrolló la marca y sus aplicaciones a diversas piezas, tanto gráficas (flyers) como de señalética y rotulación del local. Esto incluyó el diseño de vinilos para el escaparate, la banderola exterior y la persiana metálica.",
    gallery: [
      {
      src: "/images/portfolio/beauty-luz/bea-01.jpg",
        width: 1556,
        height: 992,
        hint: "services flyer",
      },
    ],
  },
  {
    id: "ayuda-a-la-ciencia",
    title: "Ayuda a la Ciencia",
    subtitle: "Branding & UI/UX",
    categories: ["Branding", "Web Design"],
    year: "2016",
    mainImage: {
      src: "/images/portfolio/ayuda-a-la-ciencia/aci-00.jpg",
      width: 1556,
      height: 992,
      hint: "logo on website on ipad",
    },
    description: "Proyecto de branding y diseño web para 'Ayuda a la Ciencia', una plataforma online dedicada a conectar a voluntarios con estudios científicos que necesitan participantes. El objetivo principal fue crear una experiencia de usuario intuitiva y amigable, con un portal accesible y claro. El trabajo abarcó desde la creación del logotipo y la identidad corporativa hasta el diseño de la interfaz de la página web.",
    gallery: [
      {
        src: "/images/portfolio/ayuda-a-la-ciencia/aci-01.jpg",
        width: 1556,
        height: 992,
        hint: "responsive website on multiple devices",
      },
      {
        src: "/images/portfolio/ayuda-a-la-ciencia/aci-02.jpg",
        width: 1556,
        height: 992,
        hint: "horizontal negative full logo on gradient background",
      },
      {
        src: "/images/portfolio/ayuda-a-la-ciencia/aci-03.jpg",
        width: 1556,
        height: 992,
        hint: "positive full logo",
      },
    ],
  },
  {
    id: "cokecancook",
    title: "cokecancook",
    subtitle: "Branding Personal",
    categories: ["Branding"],
    year: "2015",
    mainImage: {
      src: "/images/portfolio/cokecancook/cok-00.jpg",
      width: 1556,
      height: 992,
      hint: "horizontal negative logo mockup on stone wall",
    },
    description: "La identidad visual para 'cokecancook' (2015) nace de un juego de palabras: la sonoridad del nombre ('Coke can cook') se fusiona con el concepto de 'cocinar' ideas y diseños. Este principio se materializa en el logotipo, que utiliza una sartén y huevos fritos como elementos centrales para crear una imagen simpática y memorable. A partir de ahí, se desarrolló un sistema visual completo para uso digital e impreso, incluyendo tarjetas de visita, plantillas y recursos para redes sociales, logrando una marca coherente, con mucha personalidad y fácil de recordar.",
    gallery: [
      {
      src: "/images/portfolio/cokecancook/cok-01.jpg",
        width: 1556,
        height: 992,
        hint: "horizontal negative logo on striped dark background",
      },
      {
      src: "/images/portfolio/cokecancook/cok-02.jpg",
        width: 1556,
        height: 992,
        hint: "full logo on striped white background",
      },
      {
      src: "/images/portfolio/cokecancook/cok-03.jpg",
        width: 1556,
        height: 992,
        hint: "favicon on striped white background",
      },
      {
      src: "/images/portfolio/cokecancook/cok-04.jpg",
        width: 1556,
        height: 992,
        hint: "favicon pattern on dark background",
      },
    ],
  },
  {
    id: "atria-jobs",
    title: "Atria Jobs",
    subtitle: "Branding & UI/UX",
    categories: ["Branding", "Web Design"],
    year: "2014",
    mainImage: {
      src: "/images/portfolio/atria-jobs/atr-00.jpg",
      width: 1333,
      height: 1333,
      hint: "favicon",
    },
    description: "Proyecto de identidad corporativa y diseño web para 'Atria', una consultora de recruitment internacional especializada en el sector sanitario y científico. El objetivo principal fue desarrollar una imagen de marca profesional y una plataforma online funcional para la captación de talento. El trabajo abarcó desde la creación del logotipo y la identidad visual hasta el diseño de la página web, plantillas para redes sociales y otros materiales corporativos.",
    gallery: [
      {
      src: "/images/portfolio/atria-jobs/atr-01.jpg",
        width: 1556,
        height: 992,
        hint: "negative sketch logo",
      },
      {
      src: "/images/portfolio/atria-jobs/atr-02.jpg",
        width: 1556,
        height: 992,
        hint: "favicon transparent over gradient background",
      },
      {
      src: "/images/portfolio/atria-jobs/atr-03.jpg",
        width: 1556,
        height: 992,
        hint: "responsive panel on multiple devices",
      },
    ],
  },
  {
    id: "bangarang",
    title: "Bangarang",
    subtitle: "Branding",
    categories: ["Branding"],
    year: "2013",
    mainImage: {
      src: "/images/portfolio/bangarang/ban-00.jpg",
      width: 1556,
      height: 992,
      hint: "brand marquee on wood wall",
    },
    description: "Para Bangarang se desarrolló un proyecto integral de branding y diseño de identidad visual. El proceso cubrió desde la creación del logotipo hasta su aplicación en papelería (tarjetas, flyers) y en elementos físicos del local, como vinilos y el toldo principal, logrando una imagen de marca coherente y unificada.",
    gallery: [
      {
      src: "/images/portfolio/bangarang/ban-01.jpg",
        width: 1556,
        height: 992,
        hint: "logo construction angles",
      },
      {
      src: "/images/portfolio/bangarang/ban-02.jpg",
        width: 1556,
        height: 992,
        hint: "brand icons",
      },
      {
      src: "/images/portfolio/bangarang/ban-03.jpg",
        width: 1556,
        height: 992,
        hint: "brand marquee",
      },
      {
      src: "/images/portfolio/bangarang/ban-04.jpg",
        width: 1556,
        height: 992,
        hint: "business card mockup",
      },
      {
      src: "/images/portfolio/bangarang/ban-05.jpg",
        width: 1556,
        height: 992,
        hint: "brand pattern poster mockup",
      },
    ],
  },
  {
    id: "el-metodo-havana-7",
    title: "El Método Havana 7",
    subtitle: "Campaña Publicitaria",
    categories: ["Branding", "Advertising"],
    year: "2011",
    mainImage: {
      src: "/images/portfolio/el-metodo-havana-7/elm-00.jpg",
      width: 1556,
      height: 992,
      hint: "logo perspective on dark background",
    },
    description: "Este proyecto es una campaña de branding y publicidad para el ron Havana Club 7 Años bajo el concepto 'El Método Havana', utilizando una paleta de colores oscuros, rojos y dorados para evocar calidad y exclusividad. Las piezas gráficas incluyen un logotipo, un cartel y tarjetas promocionales.",
    gallery: [
      {
      src: "/images/portfolio/el-metodo-havana-7/elm-01.jpg",
        width: 1556,
        height: 992,
        hint: "poster mockup",
      },
      {
      src: "/images/portfolio/el-metodo-havana-7/elm-02.jpg",
        width: 1556,
        height: 992,
        hint: "flyer mockup",
      },
    ],
  },
];
