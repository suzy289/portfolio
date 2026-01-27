"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Zap, Rocket, Check, ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-black overflow-hidden sticky top-0 -z-10">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative container mx-auto pt-32 pb-20 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left z-10">
            {/* Badge Top */}
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 mb-8 justify-center lg:justify-start animate-fade-in">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span className="text-white/90 text-xs sm:text-sm font-medium">
                  Votre partenaire technologique de confiance
                </span>
              </div>
              <div className="px-3 sm:px-4 py-2 bg-primary rounded-full">
                <span className="text-white text-xs sm:text-sm font-bold">
                  Découvrez mes réalisations et compétences
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 leading-[1.1] animate-fade-in-up">
              <span className="text-primary">Suzy</span>, votre partenaire technologique pour faire décoller votre business
            </h1>

            {/* Subtitle */}
            <div className="space-y-4 mb-8 animate-fade-in-up animation-delay-200">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Je vous aide à intégrer les briques IA et les logiciels dont vous avez besoin pour moderniser votre activité.
              </p>
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 justify-center lg:justify-start animate-fade-in-up animation-delay-300">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/20 rounded-lg border border-accent/30">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-white text-sm">Sites Internet</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/20 rounded-lg border border-primary/30">
                <Rocket className="w-4 h-4 text-primary" />
                <span className="text-white text-sm">ERP & SaaS</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg border border-white/20">
                <Check className="w-4 h-4 text-white" />
                <span className="text-white text-sm">Automatisation IA</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-fade-in-up animation-delay-400">
              {/* Boutons supprimés */}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-6 md:gap-8 justify-center lg:justify-start animate-fade-in-up animation-delay-500 border-t border-white/10 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-white">50+</div>
                <div className="text-white/60 text-sm">Projets réalisés</div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-white/20"></div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-white">98%</div>
                <div className="text-white/60 text-sm">Satisfaction client</div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-white/20"></div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
                <div className="text-white/60 text-sm">Support disponible</div>
              </div>
            </div>
          </div>

          {/* Right Visual (Abstract UI) */}
          <div className="hidden lg:block relative z-10">
            <div className="relative animate-fade-in animation-delay-300 perspective-[2000px]">
              {/* Main Card */}
              <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 shadow-2xl transform rotate-y-[-10deg] hover:rotate-y-0 transition-transform duration-500">
                {/* Browser Toolbar */}
                <div className="bg-gray-900/50 rounded-xl overflow-hidden mb-4">
                  <div className="bg-gray-800/50 px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-gray-950/50 rounded-md px-3 py-1.5 text-gray-400 text-xs font-mono">
                        suzy-portfolio.vercel.app
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skeleton UI Content */}
                <div className="space-y-4 p-2">
                  <div className="flex gap-4 mb-8">
                    <div className="w-1/3 h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl animate-pulse"></div>
                    <div className="w-2/3 space-y-3">
                      <div className="h-6 bg-white/10 rounded w-3/4"></div>
                      <div className="h-4 bg-white/5 rounded w-full"></div>
                      <div className="h-4 bg-white/5 rounded w-5/6"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-24 bg-white/5 rounded-lg border border-white/5"></div>
                    <div className="h-24 bg-white/5 rounded-lg border border-white/5"></div>
                    <div className="h-24 bg-white/5 rounded-lg border border-white/5"></div>
                  </div>
                </div>

                {/* Floating Badge 1 */}
                <div className="absolute -top-6 -right-6 bg-primary text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-xl animate-bounce-subtle border border-white/20">
                  Portfolio professionnel
                </div>
              </div>

              {/* Floating Element Left */}
              <div className="absolute -left-12 top-1/3 bg-gray-800/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/10 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">Site livré</div>
                    <div className="text-gray-400 text-xs">En 5 jours</div>
                  </div>
                </div>
              </div>

              {/* Floating Element Right */}
              <div className="absolute -right-8 bottom-1/4 bg-gray-800/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/10 animate-float animation-delay-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">IA</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">Automatisation</div>
                    <div className="text-gray-400 text-xs">24h/24</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
