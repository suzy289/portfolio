"use client";

import React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "@/app/data";
import { Code2 } from "lucide-react";

// Mapping des couleurs pour chaque compétence
const skillColors: { [key: string]: string } = {
  "Next.js": "#000000",
  "Vue.js": "#42B883",
  "React.js": "#61DAFB",
  "JavaScript": "#F7DF1E",
  "HTML": "#E34F26",
  "CSS": "#1572B6",
  "Tailwind CSS": "#06B6D4",
  "Spring Boot": "#6DB33F",
  "PHP": "#777BB4",
  "UML": "#4A5568",
  "Merise": "#2D3748",
  "Infographie": "#EC4899",
  "Canva": "#00C4CC",
  "Photoshop": "#31A8FF",
  "VS Code": "#007ACC",
  "Cursor": "#111111",
  "Antigravity": "#8B5CF6",
  "IntelliJ": "#FE315D",
  "XAMPP": "#FB7A24",
  "tldraw": "#F9A8D4",
  "Figma": "#F24E1E",
  "MySQL": "#4479A1",
  "SQL Server": "#CC2927",
};

export default function Skills() {
  const rotationDuration = 60; // Durée d'une rotation complète en secondes

  return (
    <section
      id="skills"
      className="py-20 px-4 min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#101828] [background-size:16px_16px]"
    >
      <div className="container mx-auto max-w-6xl mb-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Mes Compétences
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Mon écosystème technique et créatif
        </p>
      </div>

      <div className="relative w-full max-w-lg md:max-w-3xl aspect-square mx-auto">
        {/* Central Hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            <div className="absolute inset-0 rounded-full border-4 border-indigo-100 animate-ping opacity-20"></div>
            <div
              className="absolute inset-0 rounded-full border-4 border-purple-100 animate-ping opacity-30"
              style={{ animationDelay: "1s" }}
            ></div>
            <div className="absolute inset-0 rounded-full bg-[#FF4500] border-4 border-indigo-600 shadow-2xl flex items-center justify-center z-20">
              <div className="text-center">
                <Code2 className="w-8 h-8 md:w-12 md:h-12 text-indigo-600 mx-auto mb-1" />
                <span className="text-indigo-900 font-bold text-xs md:text-sm">
                  TECH
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Rotating System */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{
            duration: rotationDuration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {SKILLS.map((skill, index) => {

            const totalSkills = SKILLS.length;
            const angle = (index / totalSkills) * 360;
            const radius = 42; // Pourcentage du rayon (laisser de la marge)
            const color = skillColors[skill] || "#6366F1"; // Fallback color

            // Calcul de la position en pourcentage, arrondi à 2 décimales pour éviter l'erreur d'hydratation
            const angleInRad = ((angle - 90) * Math.PI) / 180;
            const left = Number((50 + radius * Math.cos(angleInRad)).toFixed(2));
            const top = Number((50 + radius * Math.sin(angleInRad)).toFixed(2));

            return (
              <React.Fragment key={skill}>
                {/* Connection Line (SVG) */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ overflow: "visible" }}
                >
                  <line
                    x1="50%"
                    y1="50%"
                    x2={`${left}%`}
                    y2={`${top}%`}
                    stroke={color}
                    strokeWidth="2"
                    strokeOpacity="0.3"
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                  />
                </svg>

                {/* Skill Node */}
                <div
                  className="absolute"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <motion.div
                    className="group relative"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: rotationDuration,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {/* Glow effect */}
                    <div
                      className="absolute inset-0 rounded-full blur-md opacity-40 transition-opacity group-hover:opacity-75"
                      style={{ backgroundColor: color }}
                    ></div>

                    {/* Card Content */}
                    <div
                      className="relative bg-[#101828] border-2 border-[#FF4500] rounded-xl p-2 md:p-3 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-110 min-w-[76px] md:min-w-[92px] text-white"
                      style={{ borderColor: color }}
                    >
                      {/* Top Bar Decoration */}
                      <div
                        className="absolute top-0 left-0 right-0 h-1.5 rounded-t-lg opacity-80"
                        style={{ backgroundColor: color }}
                      ></div>
                      
                      <div className="mt-2 flex flex-col items-center">
                        {/* Dot Icon */}
                        <div
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mb-1 transition-transform duration-300 group-hover:scale-110"
                          style={{
                            backgroundColor: `${color}20`, // 20 = ~12% opacity hex
                          }}
                        >
                          <div
                            className="w-3 h-3 md:w-4 md:h-4 rounded-full"
                            style={{ backgroundColor: color }}
                          ></div>
                        </div>
                        
                        {/* Text */}
                        <span
                          className="block text-center font-bold text-[10px] md:text-xs leading-tight whitespace-nowrap"
                          style={{ color: color }}
                        >
                          {skill}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </React.Fragment>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
