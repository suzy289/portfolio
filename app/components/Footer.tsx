import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO, NAV_LINKS } from "@/app/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-white py-12 px-4 overflow-hidden">
      {/* Formes SVG décoratives visibles dans tout le footer */}
      <svg className="pointer-events-none select-none absolute top-0 left-0 w-full z-0 opacity-40" height="100" width="100%" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 50 Q360 0 720 50 T1440 50" stroke="#fff" strokeWidth="2" fill="none" opacity="0.15" />
        <path d="M0 80 Q480 20 960 80 T1440 80" stroke="#ff4500" strokeWidth="2" fill="none" opacity="0.18" />
      </svg>
      <svg className="pointer-events-none select-none absolute bottom-0 left-0 w-full z-0 opacity-40" height="120" width="100%" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="200" cy="100" rx="180" ry="40" fill="#fff" fillOpacity="0.08" />
        <ellipse cx="1240" cy="80" rx="160" ry="30" fill="#fff" fillOpacity="0.06" />
        <ellipse cx="700" cy="110" rx="300" ry="25" fill="#fff" fillOpacity="0.04" />
        <path d="M0 60 Q360 120 720 60 T1440 60" stroke="#ff4500" strokeWidth="2" fill="none" opacity="0.22" />
      </svg>
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo SDV */}
          <div className="flex items-center mb-8 md:mb-0">
            <img src="/logos/sdv-logo.svg" alt="Logo SDV" className="w-16 h-16 object-contain mr-4" />
          </div>
          {/* À propos */}
          <div>
            <h3 className="font-bold text-xl mb-4">{PERSONAL_INFO.name}</h3>
            <p className="text-sm text-gray-400 mb-2">
              Développeuse Web • Designer • Analyste SI
            </p>
            <p className="text-sm text-gray-400">
              Créatrice de solutions digitales sur mesure pour entreprises et
              entrepreneurs.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>{PERSONAL_INFO.email}</p>
              <p>{PERSONAL_INFO.phone}</p>
              <p>{PERSONAL_INFO.location}</p>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className="font-semibold mb-4">Réseaux Sociaux</h4>
            <div className="flex gap-4">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400 relative z-10">
          <p>
            © {currentYear} {PERSONAL_INFO.name} - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
