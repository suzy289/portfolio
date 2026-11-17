/**
 * Données du portfolio - Centralisées pour faciliter les modifications
 */

// Informations personnelles
export const PERSONAL_INFO = {
  name: "Suzy Noumbissi",
  role: "Designer UI/UX, Développeuse Web & Analyste de données",
  tagline: "Je transforme vos idées en solutions digitales performantes et esthétiques",
  description: `Designer UI/UX, développeuse web et analyste de données, j'accompagne un projet de l'analyse des besoins jusqu'à la mise en production : maquettage, interfaces et développement. Diplômée en génie logiciel, je conçois des sites, applications et jeux pour des entreprises au Cameroun et à l'international.`,
  location: "Yaoundé, Cameroun",
  email: "suzy.noumbissi@gmail.com",
  phone: "+237 677 259 325", // Numéro mis à jour
  socials: {
    github: "https://github.com/suzy289",
    linkedin: "https://linkedin.com/in/votre-profil",
    whatsapp: "https://wa.me/237677259325?text=Bonjour%20!%20Je%20souhaite%20discuter%20sur%20WhatsApp%20avec%20vous.",
  },
};

// Points clés de la Hero Section
export const HERO_HIGHLIGHTS = [
  {
    icon: "🎨",
    text: "Design UI/UX moderne et centré utilisateur",
  },
  {
    icon: "💻",
    text: "Développement web avec les technologies les plus récentes",
  },
  {
    icon: "📊",
    text: "Analyse et optimisation des systèmes d'information",
  },
  {
    icon: "🚀",
    text: "Solutions complètes de la conception au déploiement",
  },
];

// Navigation
export const NAV_LINKS = [
  { label: "Accueil", href: "#home" },
  { label: "À Propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets Web", href: "#projects" },
  { label: "Design Graphique", href: "#design" },
  { label: "Expérience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

// Compétences
export const SKILLS = [
  "Next.js",
  "Vue.js",
  "React.js",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Spring Boot",
  "PHP",
  "UML",
  "Merise",
  "Infographie",
  "Canva",
  "Photoshop",
  "VS Code",
  "Cursor",
  "Antigravity",
  "IntelliJ",
  "XAMPP",
  "tldraw",
  "Figma",
  "MySQL",
  "SQL Server",
];

// Projets Web
export const WEB_PROJECTS = [
  {
    id: 1,
    title: "Transfer & Exchange Services",
    type: "Fintech",
    description:
      "Hub financier et Premier Red Point UBA au Cameroun. Services de transfert d'argent, gestion de comptes UBA et solutions digitales bancaires.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "React"],
    image: "/images/projects/transfer-exchange.jpg",
    liveUrl: "https://transfer-exchange-services.vercel.app/",
    githubUrl: null, // À ajouter si disponible
    highlights: [
      "Premier Red Point UBA Cameroun",
      "Services financiers complets",
      "Interface utilisateur intuitive",
      "Intégration services bancaires",
    ],
  },
  {
    id: 2,
    title: "Meriaz",
    type: "Agence Digitale",
    description:
      "Partenaire technologique pour la transformation digitale des entreprises. Création de sites web, ERP, solutions SaaS et intégration d'IA.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    image: "/images/projects/meriaz.jpg",
    liveUrl: "https://meriaz-web.vercel.app/",
    githubUrl: null,
    highlights: [
      "Catalogue de services complet",
      "Présentation produits tech",
      "Design moderne et professionnel",
      "Performance optimisée",
    ],
  },
  {
    id: 3,
    title: "Kazimo",
    type: "Core Banking",
    description:
      "Plateforme de core banking modulaire pour la microfinance en Afrique. Gestion des clients, prêts, comptes et conformité COBAC.",
    technologies: ["Next.js", "TypeScript", "App Mobile", "API Integration"],
    image: "/images/projects/kazimo.jpg",
    liveUrl: "https://kazimo-web.vercel.app/",
    githubUrl: null,
    highlights: [
      "Solution Core Banking complète",
      "Conformité COBAC",
      "Tableaux de bord temps réel",
      "Architecture sécurisée",
    ],
  },
  {
    id: 4,
    title: "DAYIPTV",
    type: "Streaming Platform",
    description:
      "Plateforme de démonstration de projets web et d'intégration vidéo avancée.",
    technologies: ["Next.js", "React", "Video Streaming", "Payment Integration"],
    image: "/images/projects/daptv.jpg",
    liveUrl: "https://www.dayiptv.com/",
    githubUrl: null,
    highlights: [
      "Catalogue VOD étendu",
      "Fonctionnalités interactives et responsive",
      "Interface streaming fluide",
      "Interface utilisateur moderne",
    ],
  },
  {
    id: 5,
    title: "Portfolio Meriaz",
    type: "Portfolio Web",
    description:
      "Présentation de projets digitaux (Sites professionnels, ERP, IA) avec démonstrations interactives.",
    technologies: ["Next.js", "React Forms", "Tailwind CSS"],
    image: "/images/projects/meriaz-forms.jpg",
    liveUrl: "https://meriaz.com/",
    githubUrl: null,
    highlights: [
      "Formulaires interactifs",
      "Présentation des réalisations",
      "Parcours client optimisé",
      "Design épuré",
    ],
  },
  {
    id: 6,
    title: "Ludo Game",
    type: "Jeu · Afriksolution",
    description:
      "Jeu de Ludo en ligne développé pour Afriksolution, la même entreprise que Deux Dés, et proposé sur FunandPay. Partie multijoueur directement dans le navigateur.",
    technologies: ["React", "Game Logic", "CSS Modules"],
    image: "/images/projects/ludo.jpg",
    liveUrl: "https://ludo-frontend-nine.vercel.app/",
    githubUrl: null,
    highlights: [
      "Logique de jeu temps réel",
      "Interface interactive",
      "Multijoueur",
      "Réalisé pour Afriksolution",
    ],
  },
  {
    id: 7,
    title: "J & J Consulting",
    type: "Cabinet comptable",
    description:
      "Site du cabinet d'audit, de comptabilité et de conseil fiscal J & J Consulting SARL à Yaoundé. Présentation des services, prise de rendez-vous et demande de devis.",
    technologies: ["Next.js", "Tailwind CSS", "React"],
    image: "/images/projects/jj-consulting.jpg",
    liveUrl: "https://consulting-sarl-j-j.vercel.app/",
    githubUrl: null,
    highlights: [
      "Cabinet d'expertise comptable",
      "Prise de rendez-vous",
      "Présentation des services",
      "Devis en ligne",
    ],
  },
  {
    id: 8,
    title: "GAB Mobile Wallet",
    type: "Umdeny SARL",
    description:
      "Site vitrine du projet principal d'Umdeny SARL : la commercialisation du GAB Mobile Wallet, infrastructure de cash-in et cash-out en Afrique.",
    technologies: ["Next.js", "Tailwind CSS", "React"],
    image: "/images/projects/mobile-wallet.jpg",
    liveUrl: "https://site-mobile-wallet.vercel.app/",
    githubUrl: null,
    highlights: [
      "Commercialisation du GAB",
      "Mobile Money",
      "Offres franchise et SaaS",
      "Projet Umdeny SARL",
    ],
  },
  {
    id: 9,
    title: "Hans Lens",
    type: "Portfolio · Dubaï",
    description:
      "Portfolio d'un vidéaste, monteur et photographe basé à Dubaï. Présentation des réalisations, du showreel et des services de création de contenu.",
    technologies: ["Next.js", "Tailwind CSS", "React"],
    image: "/images/projects/ets-hans.jpg",
    liveUrl: "https://ets-hans.vercel.app/",
    githubUrl: null,
    highlights: [
      "Portfolio créateur de contenu",
      "Montage, photo et tournage",
      "Basé à Dubaï",
      "Showreel intégré",
    ],
  },
  {
    id: 10,
    title: "Global Alpha Hunt",
    type: "Trading · Dubaï",
    description:
      "Formulaire de l'entreprise Global Alpha Hunt, basée à Dubaï et spécialisée dans le trading et l'analyse des marchés financiers.",
    technologies: ["Next.js", "React Forms", "Tailwind CSS"],
    image: "",
    liveUrl: "https://rolack-trading.vercel.app/",
    githubUrl: null,
    highlights: [
      "Formulaire de contact",
      "Trading et analyse de marchés",
      "Entreprise basée à Dubaï",
      "Parcours de prise de contact",
    ],
  },
  {
    id: 11,
    title: "La Puol",
    type: "E-commerce · En cours",
    description:
      "Projet personnel en cours de développement : place de commerce pour les commerçants, acheteurs, revendeurs et consommateurs. Restaurants, boutiques, pharmacies et services, livrés à domicile.",
    technologies: ["Next.js", "E-commerce", "Tailwind CSS"],
    image: "/images/projects/la-puol.jpg",
    liveUrl: "https://la-puol.vercel.app/",
    githubUrl: null,
    highlights: [
      "Projet personnel",
      "Commerçants et consommateurs",
      "Plusieurs univers de vente",
      "En cours de développement",
    ],
  },
  {
    id: 12,
    title: "ulif.app",
    type: "Éducation financière",
    description:
      "Site et application d'éducation financière développés en équipe chez ULIF SARL. Réalisation de toute la partie visible, ainsi que des maquettes web et mobile sur Figma.",
    technologies: ["UI/UX", "Figma", "Front-end"],
    image: "/images/projects/ulif.jpg",
    liveUrl: "https://ulif.app/fr/",
    githubUrl: null,
    highlights: [
      "Travail en équipe chez ULIF SARL",
      "Toute la partie visible",
      "Formations et séminaires",
      "Maquettes Figma web et mobile",
    ],
  },
  {
    id: 13,
    title: "Deux Dés",
    type: "Jeu · Afriksolution",
    description:
      "Jeu des deux dés, jeu d'actualité en ligne développé pour Afriksolution et disponible sur FunandPay. Parties, scores et historique directement dans le navigateur.",
    technologies: ["React", "Game Logic", "CSS"],
    image: "/images/projects/deux-des.jpg",
    liveUrl: "https://deux-d-s.vercel.app/",
    githubUrl: null,
    highlights: [
      "Jeu en ligne Afriksolution",
      "Disponible sur FunandPay",
      "Deux dés et tours de jeu",
      "Historique de partie",
    ],
  },
  {
    id: 14,
    title: "Klassa",
    type: "E-learning",
    description:
      "Maquette mobile de Klassa, une application d'e-learning. Design réalisé sur Figma : accueil, onboarding et suivi de la progression des élèves.",
    technologies: ["Figma", "UI mobile", "E-learning"],
    image: "/images/projects/klassa.png",
    imageFit: "contain",
    liveUrl:
      "https://www.figma.com/design/jDZqPeFOdmARNCdFCw3YLW/Sans-titre?node-id=0-1&t=L0usI5sqK1jXqweL-1",
    githubUrl: null,
    highlights: [
      "Design mobile sur Figma",
      "Projet Klassa",
      "Interfaces mobile",
      "En cours",
    ],
  },
  {
    id: 15,
    title: "Maquette Mobile Wallet",
    type: "Maquette Figma",
    description:
      "Maquette du site Mobile Wallet réalisée sur Figma, en amont du site de commercialisation du GAB pour Umdeny SARL.",
    technologies: ["Figma", "UI/UX", "Web"],
    image: "/images/projects/mobile-wallet-maquette.png",
    imageFit: "contain",
    liveUrl:
      "https://www.figma.com/design/p5nC0dbv1amQVkue6tHjij/Suzy-Noumbissi-s-team-library?t=L0usI5sqK1jXqweL-1",
    githubUrl: null,
    highlights: [
      "Maquette Figma",
      "Site Mobile Wallet",
      "Projet Umdeny SARL",
      "Design d'interface",
    ],
  },
];

// Créations graphiques
export const GRAPHIC_DESIGNS = [
  {
    id: 1,
    title: "Nova Tech - Formation",
    category: "Flyer",
    image: "/flyers/nova-tech.jpg",
    description: "Affiche promotionnelle pour la première session de formation Nova Tech. Secrétariat bureautique, Conception graphique, Analyse logicielle.",
    canvaLink: "https://www.canva.com/design/DAG2U_PLC10/VA1FOkuPJKQreAIYKS25Mw/edit"
  },
  {
    id: 2,
    title: "Promotion Extension",
    category: "Flyer",
    image: "/flyers/ph-extension.jpg", 
    description: "Affiche de présentation de projet ou d'événement.",
    canvaLink: "https://www.canva.com/design/DAG78Ae-9CE/ezahV3orgmdS_KcL1KLX7w/edit"
  },
  {
    id: 3,
    title: "Logo Extension",
    category: "Logo",
    image: "/logos/logo-extension.jpg",
    description: "Conception de logo professionnel et identité visuelle.",
    canvaLink: "https://www.canva.com/design/DAGpOLMeGvY/_r0bRwnP8y_SskONOtWSJA/edit"
  },
  {
    id: 4,
    title: "Affiche Marketing",
    category: "Flyer",
    image: "/flyers/affiche-marketing.jpg",
    description: "Support visuel pour campagne de communication.",
    canvaLink: "https://www.canva.com/design/DAG2VH6K2n4/ZS8TEjyOXYU99uvh8bspow/edit"
  },
];

// Processus de travail
export const WORK_PROCESS = [
  {
    step: 1,
    title: "Premier Contact",
    description:
      "Discussion pour comprendre votre projet, vos objectifs et votre vision.",
  },
  {
    step: 2,
    title: "Analyse & Proposition",
    description:
      "Analyse des besoins du client et proposition de solution technique adaptée.",
  },
  {
    step: 3,
    title: "Design & Prototypage",
    description:
      "Création des maquettes et prototypes pour validation avant développement.",
  },
  {
    step: 4,
    title: "Développement",
    description:
      "Développement de votre solution avec points d'étape réguliers.",
  },
  {
    step: 5,
    title: "Tests & Ajustements",
    description:
      "Phase de tests et ajustements pour garantir une qualité optimale.",
  },
  {
    step: 6,
    title: "Livraison & Support",
    description:
      "Mise en ligne de votre projet et accompagnement post-livraison.",
  },
];

// Témoignages (optionnel)
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Jean D.",
    role: "Directeur Marketing",
    content:
      "Suzy a su comprendre nos besoins et créer un site qui dépasse nos attentes. Son professionnalisme et sa réactivité sont remarquables.",
    avatar: "/images/testimonials/avatar1.jpg",
  },
  // Ajouter d'autres témoignages ici
];
