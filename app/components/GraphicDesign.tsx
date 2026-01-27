"use client";

import React, { useRef } from "react";
import { GRAPHIC_DESIGNS } from "@/app/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function GraphicDesign() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Animation infinie pour le marquee
  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        repeat: Infinity,
        repeatType: "loop" as const,
        duration: 20,
        ease: "linear" as const,
      },
    },
  };

  return (
    <section 
      ref={targetRef} 
      id="design" 
      className="py-24 bg-[#101828] overflow-hidden relative"
    >
      <div className="container mx-auto max-w-6xl mb-12 px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
          Design Graphique
        </h2>
        <p className="text-gray-600 max-w-2xl text-lg">
          Une galerie en mouvement de mes dernières créations.
        </p>
      </div>

      {/* Galerie statique sans animation pour compatibilité build */}
      <div className="relative w-full flex flex-wrap gap-8 px-4 justify-center">
        {GRAPHIC_DESIGNS.map((design, index) => (
          <div
            key={`${design.id}-${index}`}
            className="relative w-[300px] h-[400px] flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer bg-gray-100"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">{design.title}</h3>
              <p className="text-gray-300 text-sm">{design.category}</p>
            </div>
            {/* Lien de consultation */}
            {design.canvaLink && (
              <div className="absolute top-4 right-4 z-30">
                <a
                  href={design.canvaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-black/60 hover:bg-[#FF4500] text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 transition-all hover:scale-105 shadow-lg"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Consulter</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            )}
            {design.image ? (
              <Image
                src={design.image}
                alt={design.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <span className="text-gray-400">Sans image</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
