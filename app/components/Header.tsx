"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projets", href: "#projects" },
    { name: "À propos", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              className="w-12 h-12 flex items-center justify-center"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              style={{ perspective: 1000 }}
            >
              <img
                src="/logos/sdv-logo.svg"
                alt="Logo SDV"
                className="w-full h-full object-contain drop-shadow-xl"
                style={{ transformStyle: "preserve-3d" }}
              />
            </motion.div>
            <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
              Suzy<span className="text-primary">.dev</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${isScrolled ? 'text-black hover:text-primary' : 'text-white hover:text-primary'}`}
              >
                {link.name.replace(/:$/g, "")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://wa.me/237677259325?text=Bonjour%20!%20Je%20souhaite%20discuter%20sur%20WhatsApp%20avec%20vous."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-primary text-white font-semibold hover:bg-primary/80 transition-all flex items-center gap-2 text-sm"
            >
              Me contacter
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white font-medium py-2 border-b border-white/5"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
