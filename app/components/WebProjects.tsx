"use client";

import React from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { WEB_PROJECTS } from "@/app/data";
import Image from "next/image";

export default function WebProjects() {
  return (
    <section id="projects" className="relative z-10 bg-transparent">
      {/* Container avec forme de parallélogramme/clip-path */}
      <div 
        className="relative pt-32 pb-24 px-4 bg-[#111] -mt-24"
        style={{
            clipPath: "polygon(0 4rem, 100% 0, 100% 100%, 0 100%)",
            paddingTop: "calc(4rem + 80px)" 
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>

        <div className="container mx-auto max-w-7xl relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-800 pb-8">
                <div>
                   <h2 className="text-sm font-bold tracking-widest text-[#FF4500] uppercase mb-2">Portfolio</h2>
                   <p className="text-3xl font-bold text-white">Projets Réalisés</p>
                </div>
                <div className="text-right hidden md:block">
                    <div className="text-gray-400 font-medium">Découvrez mes dernières</div>
                    <div className="text-gray-400 font-medium">créations web & applications</div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WEB_PROJECTS.map((project, idx) => (
                <div 
                    key={project.id} 
                    className={`block group relative h-[500px] w-full bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-[#FF4500]/50 transition-colors ${idx % 3 === 1 ? 'md:mt-12' : idx % 3 === 2 ? 'md:mt-24' : ''}`}
                >
                    {/* Contenu textuel survolant l'image */}
                    <div className="absolute top-0 left-0 w-full p-6 z-20 flex justify-between items-start pointer-events-none">
                        <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-white/80 mb-2">{project.type}</div>
                            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        </div>
                    </div>

                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                         {project.image && (
                            <Image 
                                src={project.image}
                                alt={project.title}
                                fill
                                className={`${"imageFit" in project && project.imageFit === "contain" ? "object-contain" : "object-cover"} opacity-60 group-hover:opacity-40 transition-opacity`}
                            />
                         )}
                         <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
                    </div>

                     {/* Bas de carte */}
                     <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                         <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.slice(0,3).map((tech, i) => (
                                <span key={i} className="px-2 py-1 bg-white/10 backdrop-blur rounded text-[10px] text-white font-mono">{tech}</span>
                            ))}
                         </div>
                         
                         {project.liveUrl && (
                             <a 
                                href={project.liveUrl} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#FF4500] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-white hover:text-black transition-all cursor-pointer"
                             >
                                 Voir le site
                                 <ArrowUpRight size={16} />
                             </a>
                         )}
                     </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
}

