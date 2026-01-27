/**
 * Données du portfolio - Centralisées pour faciliter les modifications
 */

// Informations personnelles
export const PERSONAL_INFO = {
  name: "Suzy Noumbissi",
  role: "Développeuse Web, Designer & Analyste SI",
  tagline: "Je transforme vos idées en solutions digitales performantes et esthétiques",
  description: `Passionnée par la création d'expériences digitales exceptionnelles, je combine développement web, design UI/UX et analyse de systèmes d'information pour créer des solutions qui font la différence. De la conception à la mise en production, j'accompagne entreprises et entrepreneurs dans leur transformation numérique.`,
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
    type: "Jeu Web",
    description:
      "Version web interactive et multijoueur du célèbre jeu de société Ludo. Une expérience ludique directement dans le navigateur.",
    technologies: ["React", "Game Logic", "CSS Modules"],
    image: "/images/projects/ludo.jpg",
    liveUrl: "https://ludo-frontend-nine.vercel.app/",
    githubUrl: null,
    highlights: [
      "Logique de jeu temps réel",
      "Interface interactive",
      "Multijoueur",
      "Animations fluides",
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
