import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import HeroVideo from '../components/HeroVideo';

const Accueil = () => {
  const { addToCart } = useAppContext();
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-20">
        <HeroVideo />
        
        <motion.div 
          className="container mx-auto px-6 text-center"
          style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-[64px] font-black tracking-tight leading-[1.1] text-white">
              L'iPhone.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 md:mb-8"
          >
            <h1 className="text-4xl md:text-[64px] font-black tracking-tight leading-[1.1]">
              <span className="bg-gradient-to-r from-primary-fixed-dim to-primary-container bg-clip-text text-transparent">Réinventé pour vous.</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-on-surface-variant text-sm md:text-base mb-10 md:mb-12 font-medium px-4"
          >
            Découvrez la puissance du titane, la précision de la photographie spatiale et l'intelligence sans précédent de l'iPhone 17 Pro Max.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 px-6"
          >
            <Link to="/boutique" className="w-full md:w-auto cta-button text-on-primary-fixed font-bold px-10 py-5 rounded-full text-base md:text-lg shadow-[0_0_40px_rgba(0,113,227,0.3)] hover:scale-105 active:scale-95 transition-all duration-300">
              Découvrir
            </Link>
            <Link to="/contact" className="w-full md:w-auto bg-surface-variant/40 backdrop-blur-md border border-outline-variant/20 text-on-surface font-bold px-10 py-5 rounded-full text-base md:text-lg hover:bg-surface-variant/60 transition-all duration-300">
              En savoir plus
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 }}
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-16"
          >
            {[
              { icon: '✅', title: 'Garantie Apple', desc: "Soutien officiel et pièces d'origine certifiées." },
              { icon: '🚚', title: 'Livraison Rapide', desc: "Expédition sécurisée partout au Maroc en 24/48h." },
              { icon: '🛡️', title: 'Authenticité Garantie', desc: "Produits 100% neufs et scellés d'usine." }
            ].map((badge, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-6 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary text-3xl">
                  <span>{badge.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-100">{badge.title}</h3>
                  <p className="text-on-surface-variant text-sm mt-1">{badge.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="pb-24 pt-12">
        <div className="flex flex-col md:flex-row justify-between items-end px-6 md:px-12 mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Modèles <span className="text-primary-container">Phares</span></h2>
            <div className="h-1.5 w-32 bg-primary-container rounded-full"></div>
          </motion.div>
        </div>

        <div className="flex overflow-x-auto no-scrollbar px-6 md:px-12 pb-10 space-x-8 snap-x max-w-screen-2xl mx-auto">
          {[
            {
              id: "iphone-15-pro",
              cat: "Série Pro", name: "iPhone 15 Pro", price: "12,490 DH",
              storage: "128GB", condition: "Neuf",
              img: "/images/iphone-15-pro.jpg"
            },
            {
              id: "iphone-16-pro",
              cat: "Série Pro", name: "iPhone 16 Pro", price: "9,890 DH",
              storage: "128GB", condition: "Neuf",
              img: "/images/iphone-16-pro.jpg"
            },
            {
              id: "iphone-17-pro-max",
              cat: "Standard", name: "iPhone 17 Pro Max", price: "16,500 DH",
              storage: "256GB", condition: "Neuf",
              img: "/images/iphone-16-pro-max.jpg"
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="min-w-[320px] md:min-w-[400px] snap-center glass-card p-8 rounded-2xl border border-white/5 group hover:border-primary-container/30 transition-all duration-500"
            >
              <div className="aspect-square mb-8 overflow-hidden rounded-xl bg-zinc-950 flex items-center justify-center p-8">
                <img 
                  alt={item.name} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" 
                  src={item.img}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div>
                <span className="card-product-category">{item.cat}</span>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="card-product-name text-2xl">{item.name}</h3>
                  <span className="card-product-subtitle">{item.storage}</span>
                </div>
                
                <div className="mt-auto">
                  <div className="flex items-baseline leading-none mb-6">
                    <span className="card-product-price text-3xl">{item.price.split(' ')[0]}</span>
                    <span className="card-product-currency text-sm ml-1">DH</span>
                  </div>
                  
                  <div className="flex gap-2 w-full mt-[14px]">
                    <button 
                      onClick={() => addToCart(item)}
                      style={{
                        background: 'rgba(255,255,255,0.07)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: '11px',
                        fontWeight: '700',
                        padding: '10px 16px',
                        borderRadius: '10px',
                        letterSpacing: '0.8px',
                        flex: 1
                      }}
                      className="hover:bg-white/10 transition-colors uppercase"
                    >
                      Ajouter
                    </button>
                    <button 
                      onClick={() => navigate(`/boutique/${item.id}`)}
                      style={{
                        background: '#0A84FF',
                        border: 'none',
                        color: 'white',
                        fontSize: '11px',
                        fontWeight: '700',
                        padding: '10px 16px',
                        borderRadius: '10px',
                        letterSpacing: '0.8px',
                        flex: 1
                      }}
                      className="hover:brightness-110 transition-all uppercase"
                    >
                      Détails
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-24 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="max-w-screen-2xl mx-auto relative overflow-hidden bg-zinc-900 rounded-[40px] p-10 md:p-20 border border-white/5"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-container/5 blur-[120px]"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ne manquez aucune <br/>vente flash.</h2>
              <p className="text-on-surface-variant text-lg">Inscrivez-vous pour recevoir les dernières nouveautés et offres exclusives Electro Elhanafi en avant-première.</p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-4">
                <input className="flex-grow bg-surface-container-highest border-none rounded-full px-8 py-5 text-on-surface placeholder:text-zinc-500 focus:ring-2 focus:ring-primary transition-all" placeholder="votre@email.com" type="email"/>
                <button type="button" onClick={(e) => { e.preventDefault(); alert('Abonnement réussi !'); }} className="bg-primary-container text-white font-bold px-10 py-5 rounded-full hover:brightness-110 transition-all active:scale-95">
                    S'inscrire
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Accueil;
