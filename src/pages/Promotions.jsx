import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';

const Promotions = () => {
  const { addToCart } = useAppContext();
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes } = prev;
        if (minutes > 0) {
          minutes--;
        } else {
          minutes = 59;
          if (hours > 0) {
            hours--;
          } else {
            hours = 23;
            if (days > 0) {
              days--;
            }
          }
        }
        return { days, hours, minutes };
      });
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => num.toString().padStart(2, '0');

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const handleWhatsApp = (productName) => {
    const phoneNumber = "212663551171";
    const message = `Bonjour, je suis intéressé par ${productName}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const promoProducts = [
    { 
      id: "iphone-15-pro",
      tag: "iPhone", 
      discount: "-15%", 
      name: "iPhone 15 Pro", 
      price: "9,900 DH",
      storage: "128GB",
      oldP: "11,500 DH", 
      img: "/images/iphone-15-pro.jpg",
      link: "/boutique/iphone-15-pro"
    },
    { 
      id: "iphone-14",
      tag: "iPhone", 
      discount: "-18%", 
      name: "iPhone 14 (128GB)", 
      price: "5,900 DH",
      storage: "128GB",
      oldP: "7,200 DH", 
      img: "/images/iphone-14.jpg",
      link: "/boutique/iphone-14"
    },
    { 
      id: "airpods-pro-2",
      tag: "Audio", 
      discount: "-22%", 
      name: "AirPods Pro 2", 
      price: "1,400 DH",
      storage: "",
      oldP: "1,800 DH", 
      img: "/images/airpods-pro-2.jpg",
      link: "/boutique/airpods-pro-2"
    },
    { 
      id: "chargeur-20w",
      tag: "Charge", 
      discount: "-26%", 
      name: "Chargeur Apple 20W", 
      price: "259 DH",
      storage: "",
      oldP: "350 DH", 
      img: "https://www.apple.com/newsroom/images/product/ipad/standard/Apple_20W-USB-C-Power-Adapter_09162020.jpg.landing-big_2x.jpg",
      link: "/boutique/chargeur-20w"
    }
  ];

  return (
    <div className="font-body min-h-screen">
      {/* Hero Section: Flash Deal */}
      <section className="relative min-h-[500px] md:min-h-[716px] flex items-center px-4 md:px-12 py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 flex justify-end">
          <img 
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: 0.85,
              maskImage: 'linear-gradient(to right, transparent 0%, black 30%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%)'
            }}
            src="/images/promotions-hero.jpg" 
            alt="PROMO ELECTRO ELHANAFI" 
            className="md:w-[55%]"
          />
        </div>        <div className="container mx-auto max-w-screen-2xl relative z-10 flex justify-center md:justify-start">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl text-center md:text-left">
            <span className="inline-block px-4 py-1 bg-red-600 text-white text-xs md:text-sm font-black rounded-full mb-6 tracking-widest uppercase">Offres Exclusives</span>
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-none mb-6 text-white uppercase">
              Nos Meilleures<br/>
              <span className="text-primary-container">Promotions</span>
            </h1>
            <p className="text-on-surface-variant text-sm md:text-lg max-w-md mb-8 md:mb-10 font-medium leading-relaxed mx-auto md:mx-0">
              iPhone 15 Pro, iPhone 14, AirPods Pro 2 et Chargeur Apple 20W — jusqu'à -26% de réduction.
            </p>

            {/* Optimized Countdown for Mobile */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
              <div className="flex gap-3 md:gap-4">
                {[
                  { label: 'Jour', value: timeLeft.days },
                  { label: 'Hrs', value: timeLeft.hours },
                  { label: 'Min', value: timeLeft.minutes }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl md:text-4xl font-black text-primary-container">{formatNumber(item.value)}</span>
                    </div>
                    <span className="text-[10px] md:text-xs font-bold text-zinc-500 mt-2 uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="hidden md:block h-10 w-[1px] bg-zinc-800"></div>
              <p className="text-[10px] md:text-sm font-bold text-zinc-400 tracking-wide uppercase">Temps restant avant<br className="hidden md:block"/> la fin des offres</p>
            </div>

            <button 
              onClick={() => handleWhatsApp('Offres Spéciales Promotions')}
              className="w-full md:w-auto px-10 py-5 bg-white text-black font-black rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.15)] flex items-center justify-center gap-3"
            >
              EN PROFITER MAINTENANT <span>→</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Promotions Grid */}
      <section className="px-4 md:px-12 py-16 md:py-24 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 text-center md:text-left">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase">Ventes <span className="text-primary-container">Flash</span></h2>
            <p className="text-on-surface-variant max-w-xl text-sm md:text-base">Découvrez notre sélection Apple avec des réductions exceptionnelles pour une durée limitée.</p>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
        >
          {promoProducts.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUp} 
              className="group relative transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: '20px',
                overflow: 'hidden',
                backdropFilter: 'blur(12px)'
              }}
              whileHover={{ 
                y: -4,
                borderColor: 'rgba(10,132,255,0.4)'
              }}
            >
              {/* DISCOUNT BADGE */}
              <div 
                className="absolute z-20"
                style={{ 
                  top: '12px', 
                  left: '12px',
                  background: 'rgba(255,59,48,0.15)',
                  color: '#FF3B30',
                  border: '1px solid rgba(255,59,48,0.3)',
                  borderRadius: '20px',
                  fontSize: '10px',
                  fontWeight: '700',
                  padding: '3px 10px'
                }}
              >
                {item.discount}
              </div>

              {/* IMAGE ZONE */}
              <div 
                style={{ 
                  height: '220px', 
                  width: '100%', 
                  background: 'linear-gradient(135deg, #0a1628, #1a1a2e)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}
              >
                <img 
                  alt={item.name} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain',
                    objectPosition: 'center',
                    padding: '16px'
                  }}
                  className="group-hover:scale-105 transition-transform duration-700" 
                  src={item.img}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>

              {/* CARD INFO */}
              <div style={{ padding: '14px 16px' }}>
                <span className="card-product-category">{item.tag}</span>
                <h3 className="card-product-name">{item.name}</h3>
                
                <div className="flex items-baseline mt-2">
                  <span className="card-product-price">
                    {item.price.split(' ')[0]}
                  </span>
                  <span className="card-product-currency">DH</span>
                  <span className="ml-2 text-xs text-white/20 line-through">
                    {item.oldP}
                  </span>
                </div>

                {/* TWO BUTTONS */}
                <div className="flex gap-2" style={{ marginTop: '14px' }}>
                  <button 
                    onClick={() => addToCart(item)}
                    className="flex-1 py-3 card-product-button-text rounded-lg bg-zinc-900 border border-white/10 text-white hover:bg-white hover:text-black transition-all active:scale-95"
                  >
                    AJOUTER
                  </button>
                  <Link 
                    to={item.link}
                    className="flex-1 py-3 card-product-button-text rounded-lg bg-primary-container text-on-primary-container hover:bg-primary-container/80 transition-colors text-center flex items-center justify-center font-bold"
                  >
                    DÉTAILS
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Newsletter / Discount Unlock */}
      <section className="px-6 md:px-12 py-24 bg-surface-container-low">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-screen-xl mx-auto glass-card p-8 md:p-20 rounded-xl border border-white/5 flex flex-col items-center text-center space-y-8 relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary-container/20 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-2xl leading-tight">
            Recevez les <span className="text-primary-container underline decoration-primary-container/30">Promotions VIP</span> directement par email
          </h2>
          <p className="text-on-surface-variant text-lg max-w-lg">Inscrivez-vous pour débloquer des codes promos exclusifs et être le premier informé de nos ventes privées.</p>
          <form className="flex flex-col md:flex-row gap-4 w-full max-w-xl">
            <input className="flex-grow bg-surface-container-lowest border border-outline-variant rounded-full px-8 py-4 focus:ring-2 focus:ring-primary-container focus:border-transparent outline-none text-on-surface transition-all" placeholder="votre@email.com" type="email"/>
            <button onClick={(e) => { e.preventDefault(); alert('Abonnement réussi !'); }} className="px-8 py-4 bg-primary-container text-white font-bold rounded-full hover:brightness-110 transition-all flex items-center justify-center gap-2" type="button">
              S'abonner
              <span role="img" aria-label="send" className="text-xl">📤</span>
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Promotions;
