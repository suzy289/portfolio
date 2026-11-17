"use client";

import React, { useRef } from "react";
import { ArrowRight, Code, Palette, Search, CheckCircle } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from "framer-motion";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Suivi de la souris pour l'effet 3D interactif
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animation pour le mouvement
  const springConfig = { damping: 20, stiffness: 100 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = event.clientX - rect.left;
    const mouseYPos = event.clientY - rect.top;
    
    // Convertir en valeurs normalisées de -0.5 à 0.5
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    
    mouseX.set(xPct);
    mouseY.set(yPct);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const features = [
    {
      icon: <Search className="w-6 h-6 text-white" />, 
      title: "Analyse",
      desc: "Compréhension 360° de vos enjeux.",
      color: "bg-blue-500"
    },
    {
      icon: <Palette className="w-6 h-6 text-white" />,
      title: "Design",
      desc: "UI/UX moderne et impactant.",
      color: "bg-purple-500"
    },
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: "Tech",
      desc: "Développement performant.",
      color: "bg-[#FF4500]"
    }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-[#101828] relative overflow-hidden"
      ref={containerRef}
    >
      <div className="container mx-auto max-w-7xl relative z-10 px-4 bg-[#101828]">
        {/* Contenu Description et Expertise */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181f2a] rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF4500]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-white">À Propos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 text-white">
              Votre vision, <br />mon expertise <span className="text-[#FF4500]">technique</span>.
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Designer UI/UX, développeuse web et analyste de données, j&apos;accompagne chaque projet de l&apos;analyse des besoins jusqu&apos;à la mise en production : maquettes, interfaces et développement. Diplômée en génie logiciel, je conçois des solutions pour des entreprises au Cameroun et à l&apos;international.
            </p>
            <a href="#contact" className="inline-flex items-center gap-3 bg-[#111] text-white px-6 py-3 rounded-full font-bold uppercase text-xs tracking-wider hover:bg-[#FF4500] transition-colors group">
              <span>Me contacter</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="space-y-4">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group p-6 rounded-2xl border border-gray-800 bg-[#181f2a] hover:border-[#FF4500]/30 hover:bg-[#232b3a] transition-all duration-300 flex items-start gap-4"
              >
                <div className={`w-12 h-12 shrink-0 rounded-xl ${feature.color} flex items-center justify-center shadow-md`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-300">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Zone 3D Interactive - Style Nuxcine */}
        <div
          className="h-[50vh] min-h-[400px] w-full flex items-center justify-center perspective-[1200px] cursor-pointer relative bg-[#101828]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Background shapes for dark theme */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Large blurred orangered ellipse */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#FF4500]/20 rounded-full blur-3xl" />
            {/* Blue blurred ellipse */}
            <div className="absolute top-10 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl" />
            {/* White grid SVG */}
            <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" width="340" height="140" viewBox="0 0 340 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="340" height="140" rx="32" fill="url(#paint0_radial)" />
              <defs>
                <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(170 70) rotate(90) scale(140 340)" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#fff" stopOpacity="0.12" />
                  <stop offset="1" stopColor="#fff" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
            {/* Dots pattern */}
            <svg className="absolute bottom-8 left-1/4 opacity-20" width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g fill="#fff">
                <circle cx="10" cy="10" r="2" />
                <circle cx="30" cy="20" r="2" />
                <circle cx="50" cy="10" r="2" />
                <circle cx="70" cy="30" r="2" />
              </g>
            </svg>
          </div>
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d"
            }}
            className="relative flex flex-col items-center justify-center z-10"
          >
            {/* Élément 1: SUZY */}
            <div
              className="bg-[#111] text-white px-8 py-2 md:px-12 md:py-4 rounded-xl border border-gray-700 shadow-2xl mb-4 md:-ml-32 transform transition-transform"
              style={{ transform: "translateZ(80px)" }}
            >
              <span className="text-4xl md:text-7xl font-black tracking-tighter">SUZY</span>
            </div>
            {/* Élément 2: DIGITAL */}
            <div
              className="bg-white text-black px-8 py-2 md:px-12 md:py-4 rounded-xl border border-gray-200 shadow-2xl md:ml-32 transform"
              style={{ transform: "translateZ(40px)" }}
            >
              <span className="text-4xl md:text-7xl font-black tracking-tighter text-[#FF4500]">DIGITAL</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


