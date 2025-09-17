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
  link?: {
    url: string;
    name: string;
  };
  gallery: {
    src: string;
    width: number;
    height: number;
    hint: string;
  }[];
};

export const portfolioCategories = ["Todos", "Branding", "Diseño Gráfico", "Diseño Web", "Logo", "Packaging", "Publicitario", "Editorial", "Ilustración"];

export const portfolioData: PortfolioItem[] = [
  {
    id: "watchdrop",
    title: "Watchdrop",
    subtitle: "Presentation",
    categories: ["Graphic Design"],
    year: "2021",
    mainImage: {
      src: "/images/portfolio/watchdrop/wat-00.jpg",
      width: 1600,
      height: 900,
      hint: "cover",
    },
    description: "Presentación web para la casa de subastas de relojes 'Watchdrop'.",
    link: {
      url: "/content/portfolio/watchdrop/index.html",
      name: "Ver presentación"
    },
    gallery: [
      {
      src: "/images/portfolio/watchdrop/wat-01.jpg",
        width: 1600,
        height: 1600,
        hint: "image slide",
      },
      {
      src: "/images/portfolio/watchdrop/wat-02.jpg",
        width: 1600,
        height: 1600,
        hint: "mockup slide",
      },
    ],
  },
  {
    id: "maseuropa",
    title: "maseuropa",
    subtitle: "Branding",
    categories: ["Branding"],
    year: "2017",
    mainImage: {
      src: "/images/portfolio/maseuropa/mas-00.jpg",
      width: 1600,
      height: 900,
      hint: "corporate bus",
    },
    description: "",
    gallery: [
      {
      src: "/images/portfolio/maseuropa/mas-01.jpg",
        width: 1556,
        height: 992,
        hint: "mascot ad screenshot",
      },
      {
      src: "/images/portfolio/maseuropa/mas-02.jpg",
        width: 1640,
        height: 620,
        hint: "facebook cover",
      },
      {
      src: "/images/portfolio/maseuropa/mas-03.jpg",
        width: 1556,
        height: 992,
        hint: "stationery mockup",
      },
    ],
  },
  {
    id: "beauty-luz",
    title: "Beauty Luz",
    subtitle: "Branding",
    categories: ["Logo", "Branding"],
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
    id: "tamara-falco-preysler",
    title: "Tamara Falcó Preysler",
    subtitle: "Logo",
    categories: ["Logo"],
    year: "2017",
    mainImage: {
      src: "/images/portfolio/tamara-falco-preysler/tfp-00.jpg",
      width: 1600,
      height: 900,
      hint: "logo on corporate laser background",
    },
    description: "Proyecto de identidad corporativa para el centro de estética BeautyLUZ. Se desarrolló la marca y sus aplicaciones a diversas piezas, tanto gráficas (flyers) como de señalética y rotulación del local. Esto incluyó el diseño de vinilos para el escaparate, la banderola exterior y la persiana metálica.",
    gallery: [
      {
      src: "/images/portfolio/tamara-falco-preysler/tfp-01.jpg",
        width: 1600,
        height: 900,
        hint: "services flyer",
      },
      {
      src: "/images/portfolio/tamara-falco-preysler/tfp-02.jpg",
        width: 1600,
        height: 900,
        hint: "services flyer",
      },
    ],
  },
  {
    id: "centro-porsche-valencia",
    title: "Centro Porsche Valencia",
    subtitle: "Diseño Gráfico",
    categories: ["Diseño Gráfico"],
    year: "2016",
    mainImage: {
      src: "/images/portfolio/porsche-valencia/por-00.jpg",
      width: 1556,
      height: 992,
      hint: "folder mockup",
    },
    description: "Diseño de carpeta de bienvenida y satisfacción post-venta, siguiendo estrictamente las directrices de la identidad visual de Porsche para entregar documentación de forma exclusiva. También diseñé e instalé las firmas de correo electrónico corporativas para todo el equipo, asegurando una comunicación de marca coherente y profesional en todos los puntos de contacto con el cliente.",
    gallery: [
      {
        src: "/images/portfolio/porsche-valencia/por-01.jpg",
        width: 1556,
        height: 992,
        hint: "folder mockup open",
      },
      {
        src: "/images/portfolio/porsche-valencia/por-02.jpg",
        width: 1556,
        height: 992,
        hint: "coaster mockup",
      },
    ],
  },
  {
    id: "shoot-the-twin",
    title: "Shoot The Twin",
    subtitle: "Logo",
    categories: ["Logo"],
    year: "2016",
    mainImage: {
      src: "/images/portfolio/shoot-the-twin/sho-00.jpg",
      width: 1556,
      height: 992,
      hint: "jacket",
    },
    description: "Diseño de logotipo que contrasta un estilo retro con uno minimalista. La identidad principal se presenta en un logotipo de emblema circular con una tipografía de inspiración Art Déco, que le otorga una estética vintage y elaborada. A partir de este, se extrae un isotipo secundario, una abstracción minimalista que reduce el logo a sus elementos esenciales —un círculo y dos líneas, 'shoot the twin'—, creando una figura icónica y memorable que evoca a una persona. Esta versátil identidad visual funciona tanto en un sobrio blanco y negro como en una paleta de colores más moderna y suave, con tonos pastel como el verde menta y el lila.",
    gallery: [
      {
      src: "/images/portfolio/shoot-the-twin/sho-01.jpg",
        width: 1556,
        height: 992,
        hint: "negative logo on dark background",
      },
      {
      src: "/images/portfolio/shoot-the-twin/sho-02.jpg",
        width: 1556,
        height: 992,
        hint: "color variation favicon",
      },
      {
      src: "/images/portfolio/shoot-the-twin/sho-03.jpg",
        width: 1556,
        height: 992,
        hint: "baseball t-shirt",
      },
      {
      src: "/images/portfolio/shoot-the-twin/sho-04.jpg",
        width: 1556,
        height: 992,
        hint: "cap",
      },
      {
      src: "/images/portfolio/shoot-the-twin/sho-05.jpg",
        width: 1556,
        height: 992,
        hint: "t-shirt tag mockup",
      },
      {
      src: "/images/portfolio/shoot-the-twin/sho-06.jpg",
        width: 1556,
        height: 992,
        hint: "polo",
      },
    ],
  },
  {
    id: "ayuda-a-la-ciencia",
    title: "Ayuda a la Ciencia",
    subtitle: "Branding & UI/UX",
    categories: ["Logo", "Branding", "Diseño Web"],
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
    id: "miguel-vizcaino",
    title: "Miguel Vizcaíno",
    subtitle: "Logo",
    categories: ["Logo"],
    year: "2015",
    mainImage: {
      src: "/images/portfolio/miguel-vizcaino/mig-00.jpg",
      width: 1556,
      height: 992,
      hint: "logo",
    },
    description: "Diseño de logotipo para el diseñador de moda Miguel Vizcaino, definido por un enfoque minimalista, geométrico y sofisticado, utilizando una tipografía de palo seco, muy fina y expandida, que aporta un carácter moderno y exclusivo. El sistema de marca incluye tanto el logotipo con el nombre completo como un monograma circular que fusiona las iniciales 'M' y 'V'. Al aplicarse sobre la fotografía de moda, de estilo que actúa como una firma sutil que complementa la dirección de arte sin restarle protagonismo a las prendas.",
    gallery: [
      {
      src: "/images/portfolio/miguel-vizcaino/mig-01.jpg",
        width: 1556,
        height: 992,
        hint: "logo construction",
      },
      {
      src: "/images/portfolio/miguel-vizcaino/mig-02.jpg",
        width: 1556,
        height: 992,
        hint: "line monogram",
      },
      {
      src: "/images/portfolio/miguel-vizcaino/mig-03.jpg",
        width: 1556,
        height: 992,
        hint: "monogram with logo",
      },
      {
      src: "/images/portfolio/miguel-vizcaino/mig-04.jpg",
        width: 1556,
        height: 992,
        hint: "billboard with logo and model",
      },
      {
      src: "/images/portfolio/miguel-vizcaino/mig-05.jpg",
        width: 1556,
        height: 992,
        hint: "billboard with logo and model",
      },
    ],
  },
  {
    id: "ruiz-de-la-prada-arquitectos",
    title: "Ruiz de la Prada Arquitectos",
    subtitle: "Branding",
    categories: ["Logo", "Branding"],
    year: "2015",
    mainImage: {
      src: "/images/portfolio/ruiz-de-la-prada-arquitectos/rdp-00.jpg",
      width: 1556,
      height: 992,
      hint: "logo",
    },
    description: "Desarrollo de identidad corporativa para el grupo Ruiz de la Prada, que integra sus tres áreas de negocio: Arquitectura, Construcción y Paisajismo. El diseño se articula en torno a un logotipo tipográfico con una estructura modular y de bloque, que evoca solidez y un carácter arquitectónico. La clave del sistema es un código de colores (magenta, gris y verde) que identifica y diferencia a cada una de las divisiones. La identidad, que incluye también un monograma para aplicaciones abreviadas, se aplica en piezas como tarjetas de visita transparentes que refuerzan la imagen de una empresa moderna e innovadora.",
    gallery: [
      {
      src: "/images/portfolio/ruiz-de-la-prada-arquitectos/rdp-01.jpg",
        width: 1556,
        height: 992,
        hint: "logo construction",
      },
      {
      src: "/images/portfolio/ruiz-de-la-prada-arquitectos/rdp-02.jpg",
        width: 1556,
        height: 992,
        hint: "line monogram",
      },
    ],
  },
  {
    id: "nepher",
    title: "Nepher",
    subtitle: "Branding",
    categories: ["Logo", "Branding"],
    year: "2015",
    mainImage: {
      src: "/images/portfolio/nepher/nep-00.jpg",
      width: 1556,
      height: 992,
      hint: "logo on corporate background",
    },
    description: "Desarrollo de identidad de marca integral para Nepher, una empresa del sector de la belleza y el bienestar que opera bajo el lema 'Salud, Belleza & Armonía'. El concepto visual se inspira en la delicadeza, la transformación y la naturaleza, utilizando la metáfora del diente de león y una paleta de colores suaves y elegantes para transmitir calma y sofisticación. El logotipo, minimalista, junto con la identidad visual, se aplica de forma coherente a través de un amplio abanico de soportes, incluyendo tarjetas de visita, bonos de regalo, tarjetas de fidelización y papelería corporativa, construyendo una imagen de marca profesional, serena y cohesionada.",
    gallery: [
      {
      src: "/images/portfolio/nepher/nep-01.jpg",
        width: 1556,
        height: 992,
        hint: "secondary logo on corporate background",
      },
      {
      src: "/images/portfolio/nepher/nep-02.jpg",
        width: 1556,
        height: 992,
        hint: "negative logo on corporate background",
      },
      {
      src: "/images/portfolio/nepher/nep-03.jpg",
        width: 1556,
        height: 992,
        hint: "business cards mockup",
      },
      {
      src: "/images/portfolio/nepher/nep-04.jpg",
        width: 1556,
        height: 992,
        hint: "street sign logo mockup",
      },
      {
      src: "/images/portfolio/nepher/nep-05.jpg",
        width: 1556,
        height: 992,
        hint: "brochure mockup",
      },
      {
      src: "/images/portfolio/nepher/nep-05.jpg",
        width: 1556,
        height: 992,
        hint: "notepad mockup",
      },
      {
      src: "/images/portfolio/nepher/nep-05.jpg",
        width: 1556,
        height: 992,
        hint: "flyers mockup",
      },
    ],
  },
  {
    id: "cokecancook",
    title: "cokecancook",
    subtitle: "Branding Personal",
    categories: ["Logo", "Branding"],
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
    categories: ["Logo", "Branding", "Diseño Web"],
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
    id: "siami",
    title: "Siami",
    subtitle: "Logo",
    categories: ["Logo"],
    year: "2014",
    mainImage: {
      src: "/images/portfolio/siami/sia-00.jpg",
      width: 1333,
      height: 1333,
      hint: "negative horizontal logo on dark background",
    },
    description: "Diseño de logotipo para Siami, una empresa especializada en sistemas audiovisuales. El concepto se centra en un isotipo, con formato de icono de aplicación, donde la letra 'S' está formada por la silueta de un cable con sus conectores, representando de manera directa y conceptual la actividad de la empresa. Este símbolo se acompaña de una tipografía fina y geométrica que refuerza el carácter tecnológico y moderno de la marca, logrando una identidad limpia y alineada con su sector.",
    gallery: [
      {
      src: "/images/portfolio/siami/sia-01.jpg",
        width: 1556,
        height: 992,
        hint: "logo",
      },
      {
      src: "/images/portfolio/siami/sia-02.jpg",
        width: 1556,
        height: 992,
        hint: "negative logo close-up",
      },
    ],
  },
  {
    id: "valencia-fashion-week",
    title: "Valencia Fashion Week",
    subtitle: "Branding",
    categories: ["Logo", "Branding"],
    year: "2014",
    mainImage: {
      src: "/images/portfolio/valencia-fashion-week/vfw-00.jpg",
      width: 1333,
      height: 1333,
      hint: "poster mockup",
    },
    description: "Identidad gráfica y comunicación visual desarrollada para la XV edición de la Valencia Fashion Week, junto con NIL Comunicación, bajo el lema #descaradamentjóvenes. El concepto se materializa en una  estética vibrante, fresca y enérgica, que emplea una paleta de colores llamativa. La identidad se aplicó de forma integral a la gran variedad de soportes que un evento de esta magnitud requiere, incluyendo cartelería, programas de actividades, invitaciones, y múltiples tipos de acreditaciones (prensa, backstage), asegurando una experiencia visual coherente y llena de energía.",
    gallery: [
      {
      src: "/images/portfolio/valencia-fashion-week/vfw-01.jpg",
        width: 1556,
        height: 992,
        hint: "billboard mockup",
      },
      {
      src: "/images/portfolio/valencia-fashion-week/vfw-02.jpg",
        width: 1556,
        height: 992,
        hint: "stationery mockup",
      },
      {
      src: "/images/portfolio/valencia-fashion-week/vfw-03.jpg",
        width: 1556,
        height: 992,
        hint: "flyer close-up",
      },
      {
      src: "/images/portfolio/valencia-fashion-week/vfw-04.jpg",
        width: 1556,
        height: 992,
        hint: "wall vinlys",
      },
      {
      src: "/images/portfolio/valencia-fashion-week/vfw-05.jpg",
        width: 1556,
        height: 992,
        hint: "wall vinyls and flyers",
      },
      {
      src: "/images/portfolio/valencia-fashion-week/vfw-06.jpg",
        width: 1556,
        height: 992,
        hint: "wall vinlys and outside sign",
      },
    ],
  },
  {
    id: "imz",
    title: "Instituto Médico Zahrawi",
    subtitle: "Branding",
    categories: ["Logo", "Branding"],
    year: "2014",
    mainImage: {
      src: "/images/portfolio/imz/imz-00.jpg",
      width: 1333,
      height: 1333,
      hint: "logo",
    },
    description: "Desarrollo de identidad corporativa completa para el 'Instituto Médico Zahrawi'. El diseño busca proyectar profesionalismo, confianza y cuidado, utilizando un logotipo que combina una tipografía serif con un símbolo de dos arcos verdes que evocan la forma de un ojo, sugiriendo visión, precisión y bienestar. La identidad visual, que incluye una versión compacta del monograma 'IMZ', se aplica de manera consistente a través de un amplio abanico de piezas, desde la papelería corporativa hasta material publicitario y aplicaciones digitales, asegurando una imagen de marca sólida, coherente y fácilmente reconocible.",
    gallery: [
      {
      src: "/images/portfolio/imz/imz-01.jpg",
        width: 1556,
        height: 992,
        hint: "business card mockup",
      },
      {
      src: "/images/portfolio/imz/imz-02.jpg",
        width: 1556,
        height: 992,
        hint: "stationery mockup",
      },
      {
      src: "/images/portfolio/imz/imz-03.jpg",
        width: 1556,
        height: 992,
        hint: "poster mockup",
      },
      {
      src: "/images/portfolio/imz/imz-04.jpg",
        width: 1556,
        height: 992,
        hint: "logo 3d mockup on wood wall",
      },
    ],
  },
  {
    id: "gold-k",
    title: "Gold K",
    subtitle: "Logo & Packaging",
    categories: ["Logo", "Packaging"],
    year: "2013",
    mainImage: {
      src: "/images/portfolio/gold-k/gol-00.jpg",
      width: 1556,
      height: 992,
      hint: "brand marquee on wood wall",
    },
    description: "Branding y packaging para Gold K, cava de alta gama con de virutas de oro de 24 quilates en su interior. El diseño está enfocado en comunicar lujo, exclusividad y calidad premium, utilizando una paleta de colores elegante de negro y dorado, y un logotipo que incorpora una corona como símbolo de estatus. Se presentan dos variantes del producto, 'Reserva Especial' y 'Premium', diferenciadas por el color de la cápsula (dorada y negra, respectivamente), pero unificadas bajo una misma identidad visual sofisticada que resalta el carácter opulento de la bebida.",
    gallery: [
      {
      src: "/images/portfolio/gold-k/gol-01.jpg",
        width: 1556,
        height: 992,
        hint: "logo construction angles",
      },
      {
      src: "/images/portfolio/gold-k/gol-02.jpg",
        width: 1556,
        height: 992,
        hint: "brand icons",
      },
      {
      src: "/images/portfolio/gold-k/gol-03.jpg",
        width: 1556,
        height: 992,
        hint: "brand marquee",
      },
      {
      src: "/images/portfolio/gold-k/gol-04.jpg",
        width: 1556,
        height: 992,
        hint: "business card mockup",
      },
      {
      src: "/images/portfolio/gold-k/gol-05.jpg",
        width: 1556,
        height: 992,
        hint: "brand pattern poster mockup",
      },
      {
      src: "/images/portfolio/gold-k/gol-06.jpg",
        width: 1556,
        height: 992,
        hint: "brand pattern poster mockup",
      },
      {
      src: "/images/portfolio/gold-k/gol-07.jpg",
        width: 1556,
        height: 992,
        hint: "brand pattern poster mockup",
      },
      {
      src: "/images/portfolio/gold-k/gol-08.jpg",
        width: 1556,
        height: 992,
        hint: "brand pattern poster mockup",
      },
      {
      src: "/images/portfolio/gold-k/gol-09.jpg",
        width: 1556,
        height: 992,
        hint: "brand pattern poster mockup",
      },
    ],
  },
  {
    id: "bangarang",
    title: "Bangarang",
    subtitle: "Branding",
    categories: ["Logo", "Branding"],
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
    id: "fanaticos",
    title: "Fanáticos",
    subtitle: "Packaging",
    categories: ["Packaging"],
    year: "2012",
    mainImage: {
      src: "/images/portfolio/fanaticos/fan-00.jpg",
      width: 1556,
      height: 992,
      hint: "CD case cover mockup",
    },
    description: "Diseño gráfico para el álbum 'Bichos Raros' de la banda Fanáticos. El concepto visual interpreta el título del disco mediante la creación de figuras simétricas y lineales que asemejan insectos o criaturas abstractas. La estética se define por un minimalismo técnico, utilizando un fondo negro sobre el que destacan ilustraciones con un efecto estereoscópico o anaglifo (líneas rojas y cian). Este lenguaje de diseño se aplica de forma coherente a todas las piezas del álbum: la portada, el libreto interior con créditos y letras, y la galleta del CD, conformando una identidad visual coherente y distintiva.",
    gallery: [
      {
      src: "/images/portfolio/fanaticos/fan-01.jpg",
        width: 1556,
        height: 992,
        hint: "cover and CD mockup",
      },
      {
      src: "/images/portfolio/fanaticos/fan-02.jpg",
        width: 1556,
        height: 992,
        hint: "CD and booklet mockup",
      },
      {
      src: "/images/portfolio/fanaticos/fan-03.jpg",
        width: 1556,
        height: 992,
        hint: "booklet mockup",
      },
      {
      src: "/images/portfolio/fanaticos/fan-04.jpg",
        width: 1556,
        height: 992,
        hint: "cover design",
      },
      {
      src: "/images/portfolio/fanaticos/fan-05.jpg",
        width: 1556,
        height: 992,
        hint: "cover artwork",
      },
    ],
  },
  {
    id: "hannah",
    title: "Hannah",
    subtitle: "Logo Design",
    categories: ["Logo"],
    year: "2012",
    mainImage: {
      src: "/images/portfolio/hannah/han-00.jpg",
      width: 1556,
      height: 992,
      hint: "logo color animated gif",
    },
    description: "Diseño de logotipo para marca personal. El elemento central es un monograma que fusiona las letras 'H' y 'N' dentro de un círculo, utilizando un estilo de línea fina y geométrica para crear un símbolo moderno y equilibrado. Este enfoque lineal se refleja en la tipografía personalizada del nombre, aportando coherencia visual. La paleta de colores, que combina el blanco y negro con un acento de verde menta, aporta un toque de frescura, resultando en una identidad visual limpia, personal y versátil, adaptable a formatos animados para uso digital.",
    gallery: [
      {
      src: "/images/portfolio/hannah/han-01.gif",
        width: 1556,
        height: 992,
        hint: "logo",
      },
    ],
  },
  {
    id: "el-metodo-havana-7",
    title: "El Método Havana 7",
    subtitle: "Campaña Publicitaria",
    categories: ["Logo", "Publicitario"],
    year: "2011",
    mainImage: {
      src: "/images/portfolio/el-metodo-havana-7/elm-00.jpg",
      width: 1556,
      height: 992,
      hint: "logo perspective on dark background",
    },
    description: "Branding y campaña de publicidad para el ron Havana Club 7 Años bajo el concepto 'El Método Havana', utilizando una paleta de colores oscuros, rojos y dorados para evocar calidad y exclusividad. Las piezas gráficas incluyen un logotipo, un cartel y tarjetas promocionales.",
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
  {
    id: "granja-vectorial",
    title: "Granja Vectorial",
    subtitle: "Illustration",
    categories: ["Ilustración"],
    year: "2010",
    mainImage: {
      src: "/images/portfolio/granja-vectorial/gra-01.jpg",
      width: 1556,
      height: 992,
      hint: "bird illustration",
    },
    description: "Este proyecto es una serie de ilustraciones digitales que presentan un bestiario de criaturas estilizadas con un lenguaje visual común. El estilo gráfico se basa en la técnica 'low-poly', construyendo los personajes (tortugas, una serpiente, un insecto) a partir de formas geométricas y polígonos de colores planos y vibrantes. Esta estética vectorial y facetada, combinada con fondos de colores intensos y degradados, crea un universo visual donde cada ilustración explora el diseño de personajes con una identidad gráfica distintiva y minimalista.",
    gallery: [
      {
      src: "/images/portfolio/granja-vectorial/gra-02.jpg",
        width: 1556,
        height: 992,
        hint: "turtles illustration",
      },
      {
      src: "/images/portfolio/granja-vectorial/gra-03.jpg",
        width: 1556,
        height: 992,
        hint: "snake illustration",
      },
      {
      src: "/images/portfolio/granja-vectorial/gra-04.jpg",
        width: 1556,
        height: 992,
        hint: "fly illustration",
      },
      {
      src: "/images/portfolio/granja-vectorial/gra-05.jpg",
        width: 1556,
        height: 992,
        hint: "crocodile illustration",
      },
      {
      src: "/images/portfolio/granja-vectorial/gra-06.jpg",
        width: 1556,
        height: 992,
        hint: "dog illustration",
      },
      {
      src: "/images/portfolio/granja-vectorial/gra-07.jpg",
        width: 1556,
        height: 992,
        hint: "monkey illustration",
      },
      {
      src: "/images/portfolio/granja-vectorial/gra-08.jpg",
        width: 1556,
        height: 992,
        hint: "koala illustration",
      },
      {
      src: "/images/portfolio/granja-vectorial/gra-09.jpg",
        width: 1556,
        height: 992,
        hint: "pig illustration",
      },
      {
      src: "/images/portfolio/granja-vectorial/gra-10.jpg",
        width: 1556,
        height: 992,
        hint: "frog illustration",
      },
    ],
  },
  {
    id: "galeria9",
    title: "galería9",
    subtitle: "Dirección de Arte",
    categories: ["Editorial", "Publicitario"],
    year: "2008",
    mainImage: {
      src: "/images/portfolio/galeria9/gal-00.jpg",
      width: 1556,
      height: 992,
      hint: "logo perspective on dark background",
    },
    description: "",
    gallery: [
      {
      src: "/images/portfolio/galeria9/gal-01.jpg",
        width: 1556,
        height: 992,
        hint: "poster mockup",
      },
      {
      src: "/images/portfolio/galeria9/gal-02.jpg",
        width: 1556,
        height: 992,
        hint: "flyer mockup",
      },
    ],
  },];
