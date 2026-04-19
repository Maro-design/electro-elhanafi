import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { productsData } from '../data/products';
import { useAppContext } from '../context/AppContext';

const IPhoneImage = ({ src, name }) => {
  return (
    <div style={{ background: '#0a0a0a', padding: '16px', height: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img
        src={src}
        alt={name}
        style={{ width: '100%', height: '260px', objectFit: 'contain' }}
        className="group-hover:scale-105 transition-transform duration-700"
        onError={(e) => { 
          e.target.style.display = 'none'; 
        }}
      />
    </div>
  );
};

const Boutique = () => {
  const [conditionFilter, setConditionFilter] = useState('Tous');
  const [modelFilter, setModelFilter] = useState('Tous');
  const [priceFilter, setPriceFilter] = useState('Tous');
  const { addToCart, searchQuery } = useAppContext();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const parsePrice = (priceStr) => parseInt(priceStr.replace(/[^0-9]/g, ''));

  const filteredProducts = useMemo(() => {
    return productsData.filter(product => {
      // 0. Search query filter (from navbar search)
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;

      // 1. Condition Filter
      if (conditionFilter !== 'Tous' && product.condition !== conditionFilter) return false;
      
      // 2. Model Filter
      if (modelFilter !== 'Tous') {
        // Special case for XR to avoid partial matches with other numbers if any
        if (modelFilter === 'XR') {
          if (product.name !== 'iPhone XR') return false;
        } else {
          // Check if product name contains the model number (e.g. "11" matches "iPhone 11 Pro")
          if (!product.name.includes(modelFilter)) return false;
        }
      }
      
      // 3. Price Filter
      const pPrice = parsePrice(product.price);
      if (priceFilter === 'Moins de 3,000 DH' && pPrice >= 3000) return false;
      if (priceFilter === '3,000 - 6,000 DH' && (pPrice < 3000 || pPrice > 6000)) return false;
      if (priceFilter === '6,000 - 10,000 DH' && (pPrice < 6000 || pPrice > 10000)) return false;
      if (priceFilter === 'Plus de 10,000 DH' && pPrice <= 10000) return false;

      return true;
    });
  }, [conditionFilter, modelFilter, priceFilter, searchQuery]);

  const models = ["XR", "11", "12", "13", "14", "15", "16", "17"];

  return (
    <div className="font-body min-h-screen relative">
      {/* Hero Header */}
      <header className="pt-20 pb-8 md:pb-12 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-end">
          <div>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-on-surface leading-none mb-4">
              IPHONE <span className="text-primary-container">SERIES</span>
            </h1>
            <p className="text-on-surface-variant max-w-md text-sm md:text-lg">
              Découvrez notre sélection exclusive des modèles iPhone les plus performants, du XR au 17 Pro Max.
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-2 md:pb-2">
            <span className="text-primary-container font-mono text-xs md:text-sm tracking-widest uppercase">Meknes Exclusive</span>
            <div className="h-1 w-24 bg-primary-container rounded-full hidden md:block"></div>
          </div>
        </motion.div>
      </header>

      {/* Filters Bar */}
      <section className="px-4 md:px-12 mb-8 md:mb-16 sticky top-[72px] z-40">
        <div className="max-w-screen-2xl mx-auto glass-card rounded-2xl p-3 md:p-4 flex overflow-x-auto no-scrollbar items-center gap-4 md:gap-6 whitespace-nowrap">
          <div className="flex items-center gap-2 group cursor-pointer border-r border-outline-variant/30 pr-4 md:pr-6 flex-shrink-0">
            <span className="text-on-surface-variant text-lg md:text-xl">⚙️</span>
            <span className="text-xs md:text-sm font-medium">Filtrer</span>
          </div>
          <div className="flex gap-4 md:gap-6 items-center">
            
            {/* Condition Dropdown */}
            <select 
              value={conditionFilter} 
              onChange={(e) => setConditionFilter(e.target.value)}
              className="bg-surface-container-high border-none rounded-full px-6 py-2 text-sm text-on-surface-variant focus:ring-1 focus:ring-primary-container appearance-none min-w-[140px]"
            >
              <option value="Tous">Condition</option>
              <option value="Neuf">Neuf</option>
              <option value="Occasion">Occasion</option>
            </select>
            
            {/* Model Dropdown */}
            <select 
              value={modelFilter} 
              onChange={(e) => setModelFilter(e.target.value)}
              className="bg-surface-container-high border-none rounded-full px-6 py-2 text-sm text-on-surface-variant focus:ring-1 focus:ring-primary-container appearance-none min-w-[140px]"
            >
              <option value="Tous">Modèle</option>
              {models.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
            
            {/* Price Dropdown */}
            <select 
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="bg-surface-container-high border-none rounded-full px-6 py-2 text-sm text-on-surface-variant focus:ring-1 focus:ring-primary-container appearance-none min-w-[140px]"
            >
              <option value="Tous">Prix range</option>
              <option value="Moins de 3,000 DH">Moins de 3,000 DH</option>
              <option value="3,000 - 6,000 DH">3,000 - 6,000 DH</option>
              <option value="6,000 - 10,000 DH">6,000 - 10,000 DH</option>
              <option value="Plus de 10,000 DH">Plus de 10,000 DH</option>
            </select>
          </div>
          <div className="ml-auto flex items-center gap-2 text-xs font-medium text-on-surface-variant uppercase tracking-widest">
            <span>{filteredProducts.length} Résultat{filteredProducts.length !== 1 ? 's' : ''}</span>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6 md:px-12 pb-24 max-w-screen-2xl mx-auto">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl text-on-surface-variant mb-4">Aucun produit ne correspond à vos critères.</h3>
            <button onClick={() => { setConditionFilter('Tous'); setModelFilter('Tous'); setPriceFilter('Tous'); }} className="text-primary-container hover:underline">Réinitialiser les filtres</button>
          </div>
        ) : (
          <motion.div 
            initial="hidden" animate="visible"
            key={filteredProducts.length} 
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 boutique-grid"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={fadeUp} className="group relative bg-surface-container rounded-xl overflow-hidden hover:shadow-[0_0_40px_rgba(0,113,227,0.1)] transition-all duration-500 flex flex-col boutique-card">
                <div className="aspect-[4/5] overflow-hidden relative bg-white/5 boutique-card-image-zone">
                  <Link to={`/boutique/${product.id}`}>
                    <IPhoneImage src={product.img} name={product.name} />
                  </Link>
                  <div className="absolute top-6 left-6 boutique-card-badge">
                    <span className={`${product.conditionColor} text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter`}>{product.condition}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow boutique-card-info">
                  <span className="card-product-category">IPHONE</span>
                  <div className="flex justify-between items-start mb-4">
                    <Link to={`/boutique/${product.id}`} className="card-product-name hover:text-primary-container transition-colors">
                      {product.name}
                    </Link>
                    <span className="card-product-subtitle">{product.storage.split(' ')[0]}</span>
                  </div>
                  <div className="mt-auto pt-4">
                    <div className="flex items-baseline mb-6 leading-none">
                      <span className="card-product-price">{product.price.split(' ')[0]}</span>
                      <span className="card-product-currency">DH</span>
                    </div>
                    
                    {/* TWO SMALL COMPACT BUTTONS */}
                    <div className="flex gap-2 w-full boutique-card-buttons">
                      <button 
                        onClick={() => addToCart(product)}
                        className="flex-1 py-3 card-product-button-text rounded-lg bg-zinc-900 border border-white/10 text-white hover:bg-white hover:text-black transition-all active:scale-95"
                      >
                        🛒 Ajouter
                      </button>
                      <Link 
                        to={`/boutique/${product.id}`}
                        className="flex-1 py-3 card-product-button-text rounded-lg bg-primary-container text-on-primary-container hover:bg-primary-container/80 transition-colors text-center flex items-center justify-center"
                      >
                        Détails
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default Boutique;
