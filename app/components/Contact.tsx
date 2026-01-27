"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { PERSONAL_INFO } from "@/app/data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
    preferWhatsapp: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi (frontend only)
    setTimeout(() => {
      setSubmitMessage(
        "Message reçu ! Je vous répondrai dans les plus brefs délais. 🎉"
      );
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        message: "",
        preferWhatsapp: false,
      });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Démarrons votre projet ensemble
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Vous avez un projet web, besoin d&apos;une identité visuelle ou
          d&apos;une analyse de votre SI ? Parlons-en !
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div>
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-8 text-white mb-6">
              <h3 className="text-2xl font-bold mb-6">Contactez-moi</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm opacity-90">Email</p>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="font-semibold hover:underline"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm opacity-90">Téléphone / WhatsApp</p>
                    <p className="font-semibold">{PERSONAL_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm opacity-90">Localisation</p>
                    <p className="font-semibold">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-sm mb-4">Disponibilité</p>
                <p className="text-sm opacity-90">
                  Du lundi au vendredi, 9h-18h
                  <br />
                  Je réponds généralement sous 24h
                </p>
              </div>
            </div>

            {/* Bouton WhatsApp */}
            <a
              href="https://wa.me/237677259325?text=Bonjour%20!%20Je%20souhaite%20discuter%20sur%20WhatsApp%20avec%20vous."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-green-500 text-white px-6 py-4 rounded-xl font-medium hover:bg-green-600 transition-colors"
            >
              <MessageSquare size={24} />
              Discuter sur WhatsApp
            </a>
          </div>

          {/* Formulaire */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nom & Prénom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Téléphone / WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="+237 XXX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Type de projet <span className="text-red-500">*</span>
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="site-web">Site web / Application</option>
                  <option value="design">Design graphique / Logo</option>
                  <option value="analyse-si">Analyse SI</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Budget approximatif
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="portfolio">Découvrir mon portfolio</option>
                  <option value="skills">Voir mes compétences</option>
                  <option value="projects">Explorer mes projets</option>
                  <option value="a-definir">À définir ensemble</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message / Description du projet{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  placeholder="Décrivez votre projet en quelques lignes..."
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="preferWhatsapp"
                  checked={formData.preferWhatsapp}
                  onChange={handleChange}
                  id="whatsapp-checkbox"
                  className="w-4 h-4 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                />
                <label
                  htmlFor="whatsapp-checkbox"
                  className="text-sm text-gray-700"
                >
                  Je souhaite être contacté par WhatsApp
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 text-white px-6 py-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Envoyer ma demande
                  </>
                )}
              </button>

              {submitMessage && (
                <div className="bg-green-50 text-green-700 px-4 py-3 rounded-lg text-sm">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
