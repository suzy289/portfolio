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
        ease: "linear",
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

      {/* 3D Scrolling Container */}
      <div className="relative w-full perspective-[2000px]"> {/* Ajout perspective pour 3D */}
        <motion.div 
          className="flex gap-8 px-4"
          variants={marqueeVariants}
          animate="animate"
          style={{ width: "fit-content" }} // S'assurer que le conteneur s'étend
        >
          {/* On double la liste pour l'effet infini fluide si besoin, ou juste mapping */}
          {[...GRAPHIC_DESIGNS, ...GRAPHIC_DESIGNS, ...GRAPHIC_DESIGNS].map((design, index) => (
            <motion.div
              key={`${design.id}-${index}`}
              className="relative w-[300px] h-[400px] flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer bg-gray-100"
              whileHover={{ 
                scale: 1.05, 
                rotateY: 15, // Rotation 3D au survol
                zIndex: 10 
              }} 
              style={{
                 transformStyle: "preserve-3d", // Important pour la 3D
              }}
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
            </motion.div>
          ))}
        </motion.div>
        
        {/* Ombres pour masquer les bords et renforcer l'effet de profondeur */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
}
