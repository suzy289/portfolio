import { MessageCircle, FileText, Code, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    number: 1,
    color: "primary",
    icon: <MessageCircle className="w-7 h-7 text-primary" />,
    title: "Prise de contact & compréhension",
    desc: "Vous nous expliquez votre activité, vos objectifs et vos contraintes. Nous posons les bonnes questions pour clarifier votre besoin.",
    bgIcon: "bg-primary-50",
    dot: "bg-primary",
  },
  {
    number: 2,
    color: "secondary",
    icon: <FileText className="w-7 h-7 text-secondary" />,
    title: "Présentation du projet",
    desc: "Nous vous envoyons une proposition détaillée avec périmètre, délais et budget, sans frais cachés.",
    bgIcon: "bg-secondary-50",
    dot: "bg-secondary",
  },
  {
    number: 3,
    color: "accent",
    icon: <Code className="w-7 h-7 text-accent" />,
    title: "Conception & développement",
    desc: "Nous concevons votre site, votre SaaS ou vos automatisations. Vous validez les maquettes, puis nous passons au développement.",
    bgIcon: "bg-accent-50",
    dot: "bg-accent",
  },
  {
    number: 4,
    color: "primary",
    icon: <Rocket className="w-7 h-7 text-primary" />,
    title: "Mise en ligne & accompagnement",
    desc: "Une fois la solution prête, nous vous accompagnons pour la prise en main, la formation et l'évolution future.",
    bgIcon: "bg-primary-50",
    dot: "bg-primary",
  },
];

export default function ProcessMeriaz() {
  return (
    <section className="py-24 bg-[#101828]">
      <div className="container-custom mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Comment se passe un projet avec <span className="text-[#FF4500]">Meriaz</span> ?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Un processus simple, transparent et efficace pour donner vie à votre projet digital.
          </p>
        </div>
        {/* Desktop version */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#FF4500] via-[#404040] to-[#f3f4f6] rounded-full"></div>
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <div className="relative" key={step.number}>
                  <div className="flex justify-center mb-8">
                    <div className={`w-12 h-12 ${step.dot} rounded-full flex items-center justify-center text-white font-bold text-xl z-10 ring-4 ring-[#101828] shadow-lg`}>{step.number}</div>
                  </div>
                  <div className="bg-[#181f2a] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                    <div className={`w-14 h-14 ${step.bgIcon} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Mobile version */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, idx) => (
            <div className="relative" key={step.number}>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 ${step.dot} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>{step.number}</div>
                  {idx < steps.length - 1 && <div className="w-0.5 h-full bg-gray-700 mt-2"></div>}
                </div>
                <div className="bg-[#181f2a] rounded-2xl p-6 shadow-lg flex-grow mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 ${step.bgIcon} rounded-lg flex items-center justify-center`}>{step.icon}</div>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          {/* Lien supprimé car non pertinent pour un portfolio */}
          <button className="inline-flex items-center justify-center gap-2 font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-[#404040] text-white hover:bg-[#FF4500] hover:text-white hover:shadow-lg hover:shadow-[#FF4500]/30 hover:-translate-y-0.5 focus:ring-[#404040] transition-all duration-300 px-8 py-4 text-lg group">
            Lancer mon projet avec Meriaz
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
