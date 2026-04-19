import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Demande d\'information', message: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const phone = "212663551171";
    const text = `Nouveau Message de ${formData.name}\nEmail: ${formData.email}\nSujet: ${formData.subject}\n\nMessage:\n${formData.message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="font-body min-h-screen">
      {/* Hero Header */}
      <header className="py-12 md:py-24 px-6 md:px-12 max-w-screen-2xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl text-center md:text-left">
          <h1 className="text-4xl md:text-[3.5rem] leading-[1.1] font-bold tracking-tighter text-on-surface mb-6 uppercase">
            Connectez-vous à <br/><span className="text-primary-container">l'excellence.</span>
          </h1>
          <p className="text-on-surface-variant text-sm md:text-lg max-w-md mx-auto md:mx-0">
            Nous sommes là pour répondre à vos questions techniques et vous accompagner dans vos choix technologiques.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="hidden md:block pb-2">
          <div className="flex flex-col gap-2 text-right">
            <span className="text-xs uppercase tracking-widest text-primary-container font-bold">Disponibilité</span>
            <span className="text-on-surface font-medium">Lundi — Samedi: 09h - 19h</span>
          </div>
        </motion.div>
      </header>

      {/* Bento Contact Grid */}
      <section className="px-4 md:px-12 pb-12 md:pb-24 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-6">
          
          {/* Info Section */}
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 }}}} className="md:col-span-5 flex flex-col gap-6">
            
            {/* Phone Card */}
            <motion.div variants={fadeUp} className="bg-[#1a1a1a] rounded-xl p-6 md:p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xl md:text-2xl">📞</span>
                <h3 className="text-on-surface-variant text-[10px] md:text-xs uppercase tracking-widest font-bold">LIGNES DIRECTES</h3>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-lg md:text-xl font-bold">0663551171</span>
                <span className="text-lg md:text-xl font-bold">0666773001</span>
              </div>
              <a href="tel:0663551171" className="mt-2 w-full md:w-fit py-3 px-6 rounded-full bg-primary text-white text-sm font-bold hover:brightness-110 transition-all text-center">
                Appeler
              </a>
            </motion.div>
            
            {/* WhatsApp Card */}
            <motion.div variants={fadeUp} className="bg-[#1a1a1a] rounded-xl p-6 md:p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xl md:text-2xl">💬</span>
                <h3 className="text-on-surface-variant text-[10px] md:text-xs uppercase tracking-widest font-bold">WHATSAPP</h3>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-lg md:text-xl font-bold">Hamza Elhanafi</span>
              </div>
              <a href="https://wa.me/212663551171" target="_blank" rel="noopener noreferrer" className="mt-2 w-full md:w-fit py-3 px-6 rounded-full bg-[#25D366] text-white text-sm font-bold hover:brightness-110 transition-all text-center">
                Ouvrir WhatsApp
              </a>
            </motion.div>
            
            {/* Location Card */}
            <motion.div variants={fadeUp} className="bg-[#1a1a1a] rounded-xl p-6 md:p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xl md:text-2xl">📍</span>
                <h3 className="text-on-surface-variant text-[10px] md:text-xs uppercase tracking-widest font-bold">NOTRE BOUTIQUE</h3>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-base md:text-lg font-bold">L9isaria - Bab Jdid</span>
                <span className="text-base md:text-lg font-bold">Jotia Market, Meknès</span>
              </div>
              <a href="https://maps.google.com/?q=Jotia+Market+Meknes" target="_blank" rel="noopener noreferrer" className="mt-2 w-full md:w-fit py-3 px-6 rounded-full bg-primary text-white text-sm font-bold hover:brightness-110 transition-all text-center">
                Voir sur Maps
              </a>
            </motion.div>

            {/* Instagram Card */}
            <motion.div variants={fadeUp} className="bg-[#1a1a1a] rounded-xl p-6 md:p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xl md:text-2xl">📸</span>
                <h3 className="text-on-surface-variant text-[10px] md:text-xs uppercase tracking-widest font-bold">INSTAGRAM</h3>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xl font-bold">@electro_elhanafi</span>
              </div>
              <a href="https://instagram.com/electro_elhanafi" target="_blank" rel="noopener noreferrer" className="mt-2 w-fit py-2 px-6 rounded-full bg-primary text-white text-sm font-bold hover:brightness-110 transition-all">
                Voir le profil
              </a>
            </motion.div>
          </motion.div>

          {/* Form Section */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="md:col-span-7 bg-surface-container p-6 md:p-12 rounded-xl">
            <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center md:text-left uppercase tracking-tight">Envoyez-nous un <br className="md:hidden"/> <span className="text-primary-container">message</span></h2>
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4 md:space-y-6">
              <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs font-bold uppercase text-on-surface-variant tracking-wider">Nom Complet</label>
                  <input name="name" value={formData.name} onChange={handleChange} required className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary-container text-on-surface outline-none" placeholder="Votre nom" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs font-bold uppercase text-on-surface-variant tracking-wider">Email</label>
                  <input name="email" value={formData.email} onChange={handleChange} className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary-container text-on-surface outline-none" placeholder="votre@email.com" type="email"/>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-bold uppercase text-on-surface-variant tracking-wider">Sujet</label>
                <select name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary-container text-on-surface outline-none">
                  <option>Demande d'information</option>
                  <option>Service Après-Vente</option>
                  <option>Partenariat</option>
                  <option>Autre</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-bold uppercase text-on-surface-variant tracking-wider">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required className="w-full bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary-container text-on-surface outline-none" placeholder="Comment pouvons-nous vous aider ?" rows="4"></textarea>
              </div>
              <button type="submit" className="w-full py-4 px-8 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-black text-sm md:text-lg hover:shadow-[0_0_20px_rgba(0,113,227,0.3)] transition-all uppercase tracking-widest">
                Envoyer sur WhatsApp
              </button>
            </form>
          </motion.div>

          {/* Map Section (Full Width) */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="md:col-span-12 h-[350px] md:h-[450px] rounded-xl overflow-hidden grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 relative">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnTcLjHz2QewMgIugs2FNZLucGfO_F6VvBDyCrfdjfY2xJstzsIXboYaGFyfAmPUBq7300WwnKuUJQmnbD8VBCOQDP0d_wM6JX1DFI4aTaPsAeCma0gVWtPBiB-cV9HrFORjcHaOFDiZeNrQsnzpheD8eMDA9uqvkMmyR3LCrHpU0CSevdPqn2eX88qh8cGwtn9m1OehlUjtSLG_Ji1g--qtok17Iac_TGURNGSkXeY0XSVEKj_6LjR6aCD6CY_wLWT9txn46m5F_j" 
              alt="Meknes Map View" 
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
