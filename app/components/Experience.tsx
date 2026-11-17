import React from "react";
import { CheckCircle2, Briefcase } from "lucide-react";
import { WORK_PROCESS } from "@/app/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 px-4 bg-[#101828] overflow-hidden">
      {/* Demi-cercle haut gauche */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#FF4500]/20"
        style={{ clipPath: 'ellipse(60% 50% at 50% 50%)' }}
      />
      {/* Demi-cercle bas droite */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#FF4500]/20"
        style={{ clipPath: 'ellipse(60% 50% at 50% 50%)' }}
      />
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Expérience & Parcours Professionnel
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Une approche méthodique pour transformer vos idées en solutions digitales
        </p>

        {/* Expérience principale */}
        <div className="bg-[#101828] rounded-xl shadow-lg p-8 mb-12 max-w-4xl mx-auto border border-[#FF4500] text-white">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <Briefcase size={32} className="text-indigo-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Designer UI/UX, Développeuse Web & Analyste de données
              </h3>
              <p className="text-gray-600 mb-4">ULIF SARL · Umdeny SARL · Koryx SARL · Freelance</p>
            </div>
          </div>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-1" />
              <span>Partie visible du site et de l&apos;application d&apos;éducation financière ulif.app, au sein d&apos;ULIF SARL</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-1" />
              <span>Site de commercialisation du GAB Mobile Wallet pour Umdeny SARL</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-1" />
              <span>Sites et formulaires : J &amp; J Consulting, Hans Lens, Global Alpha Hunt, Kazimo, Meriaz, DAYIPTV</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-1" />
              <span>Jeux en ligne Deux Dés et Ludo pour Afriksolution, et e-commerce La Puol</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-1" />
              <span>Maquettes Figma (Klassa, Mobile Wallet, ULIF) et affiches sur Photoshop</span>
            </li>
          </ul>

          <div className="border-t pt-6">
            <h4 className="font-semibold mb-3">Domaines d&apos;intervention :</h4>
            <div className="flex flex-wrap gap-2">
              {["Fintech", "Éducation financière", "E-commerce", "Jeux web", "Cabinets & PME", "Créateurs"].map(
                (domain, idx) => (
                  <span
                    key={idx}
                    className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {domain}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Processus de travail */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">
            Comment je travaille avec vous
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORK_PROCESS.map((process) => (
              <div
                key={process.step}
                className="bg-[#101828] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-[#FF4500] text-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {process.step}
                  </div>
                  <h4 className="font-bold text-lg">{process.title}</h4>
                </div>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Engagement qualité */}
        <div className="mt-12 bg-gray-700 rounded-xl p-8 text-white max-w-4xl mx-auto">
          <h4 className="text-xl font-bold mb-6 text-center">Engagement qualité</h4>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Communication transparente à chaque étape",
              "Respect des délais convenus",
              "Code propre et documenté",
              "Design responsive et optimisé",
              "Support technique inclus",
            ].map((engagement, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="flex-shrink-0" />
                <span className="text-sm">{engagement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
