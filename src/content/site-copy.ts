export type LanguageCode = "es" | "en" | "de";

export type NavLinkCopy = {
  label: string;
  href: string;
};

export type HeroMediaCopy = {
  eyebrow: string;
  title: string;
  methodEyebrow: string;
  method: string;
  statValue: string;
  statCopy: string;
};

export type HeroCopy = {
  eyebrow: string;
  title: string;
  description: string;
  chips: string[];
  note: string;
  primaryCta: string;
  secondaryCta: string;
  media: HeroMediaCopy;
};

export type CredibilityCopy = {
  eyebrow: string;
  title: string;
  pillars: string[];
};

export type MallorcaClusterCopy = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  areas: string[];
  audienceLabel: string;
  audience: string;
};

export type MallorcaFocusCopy = {
  eyebrow: string;
  title: string;
  areasLabel: string;
  clusters: MallorcaClusterCopy[];
};

export type InvestorProfileCopy = {
  title: string;
  body: string;
};

export type InvestorCopy = {
  eyebrow: string;
  title: string;
  profiles: InvestorProfileCopy[];
};

export type SellerFormCopy = {
  name: string;
  email: string;
  phone: string;
  zone: string;
  propertyType: string;
  commercialization: string;
  message: string;
  placeholders: {
    name: string;
    email: string;
    phone: string;
    zone: string;
    message: string;
  };
  selectPlaceholder: string;
  propertyTypeOptions: string[];
  commercializationOptions: string[];
  submitLabel: string;
};

export type SellerIntakeCopy = {
  eyebrow: string;
  title: string;
  body: string;
  trustBadgeText: string;
  form: SellerFormCopy;
};

export type DataLabSignalCopy = {
  eyebrow: string;
  title: string;
  body?: string;
};

export type DataLabCopy = {
  eyebrow: string;
  title: string;
  lead: DataLabSignalCopy;
  signals: DataLabSignalCopy[];
};

export type ContactDetailCopy = {
  label: string;
  value: string;
  href?: string;
};

export type ContactCopy = {
  eyebrow: string;
  title: string;
  body: string;
  trustBadgeText: string;
  detailsTitle: string;
  details: ContactDetailCopy[];
};

export type FinalCtaCopy = {
  eyebrow: string;
  title: string;
  body: string;
  primaryCta: string;
  secondaryCta: string;
};

export type FooterColumnCopy = {
  title: string;
  links: NavLinkCopy[];
};

export type FooterCopy = {
  summary: string;
  columns: FooterColumnCopy[];
  copyright: string;
};

export type NavbarCopy = {
  links: NavLinkCopy[];
  ctaLabel: string;
};

export type SiteCopy = {
  navbar: NavbarCopy;
  hero: HeroCopy;
  credibility: CredibilityCopy;
  mallorcaFocus: MallorcaFocusCopy;
  investors: InvestorCopy;
  sellerIntake: SellerIntakeCopy;
  dataLab: DataLabCopy;
  contact: ContactCopy;
  finalCta: FinalCtaCopy;
  footer: FooterCopy;
  trustBadgeText: string;
};

const siteCopyEs: SiteCopy = {
  navbar: {
    links: [
      { label: "Mallorca", href: "#mallorca-focus" },
      { label: "Inversores", href: "#inversores" },
      { label: "Propietarios", href: "#propietarios" },
      { label: "Data Lab", href: "#data-lab" },
      { label: "Contacto", href: "#contacto" },
    ],
    ctaLabel: "Solicitar evaluación confidencial",
  },
  hero: {
    eyebrow: "Palma · Suroeste de Mallorca · Capital premium",
    title: "Anclora Private Estates para Palma y el suroeste de Mallorca.",
    description:
      "Anclora Private Estates está diseñada para propietarios, compradores e inversores nacionales e internacionales que valoran criterio, microzona, confidencialidad y el respaldo operativo de eXp Group Spain.",
    chips: ["Lectura territorial", "Confidencialidad", "Capital internacional"],
    note:
      "Una puerta pública premium que combina narrativa editorial, inteligencia de microzona y ejecución comercial más precisa que la agencia residencial estándar.",
    primaryCta: "Abrir evaluación privada",
    secondaryCta: "Explorar foco territorial",
    media: {
      eyebrow: "Private Preview",
      title: "Palma, Son Vida, Portals, Bendinat y microzonas donde el relato correcto cambia el valor percibido del activo.",
      methodEyebrow: "Method",
      method:
        "No competimos por volumen. Competimos por lectura de mercado, acceso selectivo y arquitectura comercial afinada para operaciones premium.",
      statValue: "01",
      statCopy:
        "El posicionamiento correcto del activo empieza antes del portal, y muchas veces antes incluso de la venta.",
    },
  },
  credibility: {
    eyebrow: "Credibilidad",
    title: "Por qué confiar en una propuesta premium que no necesita aparentar volumen.",
    pillars: [
      "Agente independiente con respaldo de eXp Group Spain.",
      "Más de 25 años de trayectoria tecnológica aplicados a una operativa inmobiliaria mejor estructurada.",
      "Inteligencia territorial, procesos optimizados y red selectiva como diferencia real frente a la agencia tradicional.",
    ],
  },
  mallorcaFocus: {
    eyebrow: "Mallorca Focus",
    title: "Mallorca no se lee como una lista plana de zonas, sino como un sistema de microzonas.",
    areasLabel: "Áreas",
    clusters: [
      {
        id: "palma-hillside-core",
        eyebrow: "Palma & Hillside Core",
        title: "Capital, altura residencial y acceso institucional.",
        body:
          "Palma, Son Vida, Cala Major, San Agustín y Cas Català concentran una mezcla muy particular de capital local, demanda internacional y activos donde el relato urbano y la privacidad pesan tanto como la ubicación.",
        areas: ["Palma", "Son Vida", "Cala Major", "San Agustín", "Cas Català"],
        audienceLabel: "Audience",
        audience:
          "Comprador patrimonial que prioriza capital, colegios, servicios y logística diaria.",
      },
      {
        id: "calvia-coastal-premium",
        eyebrow: "Calvià Coastal Premium",
        title: "Costa consolidada con lectura de lifestyle y liquidez.",
        body:
          "Illetas, Bendinat, Portals, Costa d'en Blanes y Punta Negra funcionan como un sistema donde mar, marina, privacidad y servicios premium se convierten en señales clave de valor.",
        areas: ["Illetas", "Bendinat", "Portals", "Costa d'en Blanes", "Punta Negra"],
        audienceLabel: "Audience",
        audience:
          "Comprador internacional y family office orientado a costa prime y continuidad relacional.",
      },
      {
        id: "southwest-lifestyle-capital-preservation",
        eyebrow: "Southwest Lifestyle & Capital Preservation",
        title: "Entrada premium con lifestyle, rentabilidad y timing.",
        body:
          "Palmanova, Paguera y Costa de la Calma permiten leer un tramo más flexible del mercado premium, donde lifestyle, ticket de entrada y velocidad comercial necesitan criterio fino por microzona.",
        areas: ["Palmanova", "Paguera", "Costa de la Calma"],
        audienceLabel: "Audience",
        audience:
          "Inversor híbrido que busca equilibrio entre uso propio, demanda y conservación patrimonial.",
      },
      {
        id: "heritage-serra-character",
        eyebrow: "Heritage & Serra Character",
        title: "Interior con carácter, paisaje y singularidad residencial.",
        body:
          "Puerto de Andratx, Andratx, Esporles y Valldemossa forman un clúster donde la lectura cambia: patrimonio, paisaje, privacidad y narrativa residencial pesan más que la mera proximidad a la costa.",
        areas: ["Puerto de Andratx", "Andratx", "Esporles", "Valldemossa"],
        audienceLabel: "Audience",
        audience:
          "Comprador UHNW relacional que valora singularidad, silencio y activos con relato duradero.",
      },
    ],
  },
  investors: {
    eyebrow: "Inversores",
    title: "Inversores nacionales e internacionales que necesitan menos ruido y más criterio.",
    profiles: [
      {
        title: "Inversor patrimonial nacional",
        body:
          "Busca activos sólidos, protección de valor y criterio territorial para no depender de ruido comercial ni de escaparates genéricos.",
      },
      {
        title: "International lifestyle investor",
        body:
          "Prioriza microzona, privacidad, marina, colegios, conectividad y capacidad de ejecutar con confianza en un entorno premium transfronterizo.",
      },
      {
        title: "Comprador UHNW relacional",
        body:
          "No entra por catálogo, sino por confianza, acceso, timing y capacidad de activar la red adecuada alrededor de una operación singular.",
      },
    ],
  },
  sellerIntake: {
    eyebrow: "Propietarios",
    title: "Captación selectiva para activos que necesitan más que exposición masiva.",
    body:
      "Si estás valorando vender en Palma o el suroeste de Mallorca, podemos estudiar tu activo desde la microzona, la narrativa comercial y el timing correcto, con un enfoque premium y confidencial.",
    trustBadgeText: "Respaldo internacional y confianza operativa a través de eXp Group Spain.",
    form: {
      name: "Nombre",
      email: "Email",
      phone: "Teléfono",
      zone: "Zona del inmueble",
      propertyType: "Tipo de propiedad",
      commercialization: "Preferencia de comercialización",
      message: "Mensaje",
      placeholders: {
        name: "Tu nombre",
        email: "nombre@dominio.com",
        phone: "+34 ...",
        zone: "Son Vida, Portals, Andratx...",
        message: "Cuéntanos el contexto del activo y qué necesitas resolver.",
      },
      selectPlaceholder: "Selecciona una opción",
      propertyTypeOptions: ["Villa", "Ático", "Apartamento premium", "Finca"],
      commercializationOptions: [
        "Evaluación confidencial",
        "Venta en exclusiva",
        "Venta selectiva sin portal masivo",
      ],
      submitLabel: "Solicitar evaluación confidencial",
    },
  },
  dataLab: {
    eyebrow: "Anclora Data Lab",
    title: "Señales territoriales para leer mejor el mercado premium.",
    lead: {
      eyebrow: "Signal 01",
      title:
        "La escasez de producto prime bien posicionado favorece decisiones más selectivas y menos reactivas.",
      body:
        "En Palma y el suroeste, la combinación de oferta limitada, demanda internacional persistente y sensibilidad creciente al producto turnkey refuerza el valor de los activos bien preparados y bien narrados.",
    },
    signals: [
      {
        eyebrow: "Signal 02",
        title: "La microzona importa más que la etiqueta general del municipio.",
      },
      {
        eyebrow: "Signal 03",
        title: "La preparación del activo condiciona la velocidad y la calidad de la operación.",
      },
    ],
  },
  contact: {
    eyebrow: "Contacto",
    title: "Abramos una conversación privada.",
    body:
      "Si estás valorando vender, invertir o explorar una oportunidad patrimonial en Palma o el suroeste de Mallorca, podemos estudiar tu caso con criterio, confidencialidad y enfoque premium.",
    trustBadgeText: "Respaldo internacional y confianza operativa a través de eXp Group Spain.",
    detailsTitle: "Contact details",
    details: [
      { label: "Email", value: "contacto@anclora.com", href: "mailto:contacto@anclora.com" },
      { label: "Teléfono", value: "+34 000 000 000", href: "tel:+34000000000" },
      { label: "Ubicación", value: "Palma de Mallorca · Islas Baleares" },
    ],
  },
  finalCta: {
    eyebrow: "Private conversation",
    title: "El siguiente paso no es ver más ruido. Es abrir la conversación adecuada.",
    body:
      "Palma y el suroeste de Mallorca exigen criterio territorial, confidencialidad y una ejecución comercial más precisa. Si estás valorando vender, comprar o explorar una oportunidad patrimonial, podemos estudiar tu caso de forma privada.",
    primaryCta: "Iniciar evaluación privada",
    secondaryCta: "Abrir conversación privada",
  },
  footer: {
    summary:
      "Firma inmobiliaria premium orientada a Palma y el suroeste de Mallorca, con criterio territorial, acceso selectivo y una ejecución comercial más precisa.",
    columns: [
      {
        title: "Contacto",
        links: [
          { label: "Abrir conversación privada", href: "#contacto" },
          { label: "Solicitar evaluación", href: "#propietarios" },
        ],
      },
      {
        title: "Mallorca",
        links: [
          { label: "Palma & Son Vida", href: "#mallorca-focus" },
          { label: "Portals & Bendinat", href: "#mallorca-focus" },
        ],
      },
      {
        title: "Acceso selectivo",
        links: [
          { label: "Data Lab", href: "#data-lab" },
          { label: "Partners", href: "#contacto" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacidad", href: "#contacto" },
          { label: "Aviso legal", href: "#contacto" },
        ],
      },
    ],
    copyright: "© 2026 Anclora Private Estates. Todos los derechos reservados.",
  },
  trustBadgeText: "Respaldo internacional y confianza operativa a través de eXp Group Spain.",
};

export const siteCopyByLanguage = {
  es: siteCopyEs,
  en: structuredClone(siteCopyEs),
  de: structuredClone(siteCopyEs),
} satisfies Record<LanguageCode, SiteCopy>;
