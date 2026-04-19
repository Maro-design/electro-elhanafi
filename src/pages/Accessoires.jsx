import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../hooks/useAppContext';

const ImageWithFallback = ({ src, alt }) => {
  return (
    <div style={{ background: '#0a0a0a', padding: '16px', height: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img 
        src={src} 
        alt={alt} 
        style={{ width: '100%', height: '260px', objectFit: 'contain' }}
        className="group-hover:scale-110 transition-transform duration-500" 
        onError={(e) => { 
          e.target.style.display = 'none'; 
        }}
      />
    </div>
  );
};

const Accessoires = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const { addToCart } = useAppContext();

  const openWhatsApp = (productName) => {
    const msg = `Bonjour, je suis intéressé par ${productName}`;
    window.open(`https://wa.me/212663551171?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const DualButtons = ({ product }) => (
    <div className="flex gap-2 mt-auto pt-4 accesorios-card-buttons">
      <button
        onClick={() => addToCart(product)}
        className="flex-1 py-2.5 card-product-button-text rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 transition-colors flex items-center justify-center gap-1"
      >
        🛒 Ajouter
      </button>
      <button
        onClick={() => openWhatsApp(product.name)}
        style={{ background: '#0A84FF' }}
        className="flex-1 py-2.5 card-product-button-text rounded-lg text-white hover:brightness-110 transition-all flex items-center justify-center gap-1"
      >
        ⚡ Acheter
      </button>
    </div>
  );


  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const categories = [
    { id: 'ALL', label: 'Tous les produits' },
    { id: 'AirPods', label: 'AirPods' },
    { id: 'Chargeurs Originaux', label: 'Chargeurs Originaux' },
    { id: 'Série Premium Copy', label: 'Série Premium Copy' }
  ];

  const airpods = [
    { id: 'airpods-pro-2', name: "AirPods Pro 2", price: "2,650 DH", storage: "", desc: "Réduction active du bruit deux fois plus performante.", img: "/images/airpods-pro-2.jpg" },
    { id: 'airpods-3',     name: "AirPods 3",     price: "1,950 DH", storage: "", desc: "Audio spatial personnalisé avec suivi dynamique de la tête.", img: "/images/airpods-3.jpg" },
    { id: 'airpods-2',     name: "AirPods 2",     price: "1,450 DH", storage: "", desc: "L'expérience sans fil, toute simple.", img: "/images/airpods-2.jpg" }
  ];

  const originalChargers = [
    { id: 'chargeur-20w', name: "Chargeur Apple 20W Original", price: "350 DH", storage: "", img: "https://www.apple.com/newsroom/images/product/ipad/standard/Apple_20W-USB-C-Power-Adapter_09162020.jpg.landing-big_2x.jpg" },
    { id: 'chargeur-35w', name: "Chargeur Apple 35W",          price: "790 DH", storage: "", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNWP3?wid=532&hei=582&fmt=png-alpha" }
  ];

  const premiumCopy = [
    { id: 'cable-usbc',     name: "Câble USB-C (1m)",      price: "99 DH",  storage: "", copy: "High Quality AAA",     img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQKJ3?wid=532&hei=582&fmt=png-alpha" },
    { id: 'magsafe-copy',   name: "MagSafe Premium Copy", price: "180 DH", storage: "", copy: "Animation Support",    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXH3?wid=532&hei=582&fmt=png-alpha" },
    { id: 'coque-magsafe',  name: "Coque Silicone MagSafe", price: "150 DH", storage: "", copy: "All Colors Available", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT0E3?wid=532&hei=582&fmt=png-alpha" },
    { id: 'adaptateur-20w', name: "Adaptateur 20W Fast",   price: "120 DH", storage: "", copy: "Premium Quality",      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHJA3?wid=532&hei=582&fmt=png-alpha" }
  ];

  return (
    <div className="font-body min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 md:px-12 py-12 md:py-24 overflow-hidden hero-gradient-linear">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="z-10 md:w-1/2 flex flex-col items-center md:items-start">
            <span className="text-primary-container font-semibold tracking-widest text-xs md:text-sm uppercase mb-4 block">Premium Collection</span>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-tight text-white">
                L'Élite des <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">Accessoires</span>
            </h1>
            <p className="text-on-surface-variant text-sm md:text-lg max-w-md mb-8 md:mb-10 leading-relaxed mx-auto md:mx-0">
                Optimisez votre expérience Apple avec notre sélection rigoureuse de produits originaux et certifiés.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button 
                onClick={() => setActiveFilter('ALL')}
                className="w-full md:w-auto primary-gradient-btn text-white px-8 py-4 rounded-full font-bold shadow-[0_0_40px_rgba(0,113,227,0.2)] hover:scale-105 transition-transform"
              >
                  Voir les offres
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 hidden md:flex items-center justify-center relative"
          >
            {/* Enhanced glow behind image */}
            <div className="absolute w-72 h-72 bg-primary/30 rounded-full blur-[80px] z-0"></div>
            
            <img 
              src="/images/accessories-hero.png" 
              alt="Accessoires Premium" 
              className="w-[95%] max-w-[500px] object-contain relative z-10 animate-floating"
            />
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="bg-surface-container-low px-4 md:px-12 py-6 md:py-8 sticky top-[72px] z-40 border-b border-outline-variant/10">
        <div className="max-w-screen-2xl mx-auto flex overflow-x-auto no-scrollbar gap-3 md:gap-4 md:justify-center whitespace-nowrap accesorios-tabs">
          {categories.map(cat => (
            <button 
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-all flex-shrink-0 accesorios-tab-btn ${
                activeFilter === cat.id 
                  ? "bg-primary-container text-on-primary-container" 
                  : "bg-surface-variant/40 hover:bg-surface-variant text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Sections */}
      <section className="px-6 md:px-12 py-20 max-w-screen-2xl mx-auto space-y-32">
        {/* AirPods Section */}
        {(activeFilter === 'ALL' || activeFilter === 'AirPods') && (
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-2">Série AirPods</h2>
                <div className="h-1 w-20 bg-primary-container rounded-full"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 accesorios-grid">
              {airpods.map((item, idx) => (
                <motion.div key={idx} variants={fadeUp} className="glass-card p-8 rounded-xl border border-outline-variant/10 hover:border-primary-container/30 transition-all group flex flex-col accesorios-card">
                  <div className="aspect-square mb-8 overflow-hidden rounded-lg bg-black flex items-center justify-center accesorios-card-image-zone">
                    <ImageWithFallback src={item.img} alt={item.name} productName={item.name} />
                  </div>
                  <span className="card-product-category">AUDIO</span>
                  <h3 className="card-product-name mb-2">{item.name}</h3>
                  <p className="card-product-description mb-6 flex-grow">{item.desc}</p>
                   <div className="mt-auto">
                    <div className="flex items-baseline mb-4 leading-none">
                      <span className="card-product-price">{item.price.split(' ')[0]}</span>
                      <span className="card-product-currency">DH</span>
                    </div>
                    <DualButtons product={item} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Original Chargers Section */}
        {(activeFilter === 'ALL' || activeFilter === 'Chargeurs Originaux') && (
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="bg-surface-container-low p-6 md:p-12 rounded-xl">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/3">
                <h2 className="text-4xl font-extrabold tracking-tighter mb-4">Chargeurs <span className="text-primary-container">Originaux</span></h2>
                <p className="text-on-surface-variant mb-8 leading-relaxed">Préservez la santé de votre batterie avec les accessoires certifiés Apple et les technologies GaN de pointe.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <span className="text-primary-container text-xl">✅</span>
                    Garantie Constructeur 1 An
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <span className="text-primary-container text-xl">⚡</span>
                    Charge Rapide Certifiée
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 accesorios-grid">
                {originalChargers.map((item, idx) => (
                  <div key={idx} className="bg-surface-container-high p-6 rounded-lg border border-outline-variant/10 flex flex-col items-center text-center accesorios-card">
                    <div className="w-32 h-32 mb-4 bg-black rounded-lg overflow-hidden flex items-center justify-center accesorios-card-image-zone">
                      <ImageWithFallback src={item.img} alt={item.name} productName={item.name} />
                    </div>
                    <span className="card-product-category">CHARGE</span>
                    <h4 className="card-product-name">{item.name}</h4>
                    <div className="flex items-baseline mt-2 mb-4 leading-none">
                      <span className="card-product-price text-sm">{item.price.split(' ')[0]}</span>
                      <span className="card-product-currency">DH</span>
                    </div>
                    <DualButtons product={item} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Copy Chargers Section (Premium Category) */}
        {(activeFilter === 'ALL' || activeFilter === 'Série Premium Copy') && (
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-2">Série Premium Copy</h2>
                <div className="h-1 w-20 bg-zinc-700 rounded-full"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 accesorios-grid">
              {premiumCopy.map((item, idx) => (
                <motion.div key={idx} variants={fadeUp} className="group relative bg-surface-container-lowest border border-outline-variant/10 rounded-lg overflow-hidden hover:bg-surface-container-low transition-colors accesorios-card">
                  <div className="aspect-[4/5] p-6 flex flex-col justify-between h-full accesorios-card-info">
                    <div className="w-full h-32 bg-black rounded-lg overflow-hidden flex items-center justify-center accesorios-card-image-zone">
                       <ImageWithFallback src={item.img} alt={item.name} productName={item.name} />
                    </div>
                    <div>
                      <span className="card-product-category">PREMIUM</span>
                      <h4 className="card-product-name text-sm">{item.name}</h4>
                      <p className="card-product-description text-xs mt-1">{item.copy}</p>
                      <div className="mt-4 flex items-baseline mb-2">
                        <span className="card-product-price text-lg leading-none">{item.price.split(' ')[0]}</span>
                        <span className="card-product-currency">DH</span>
                      </div>
                      <DualButtons product={item} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default Accessoires;

