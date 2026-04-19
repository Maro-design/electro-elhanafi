import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../data/products';
import { useAppContext } from '../context/AppContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === id);
  const { addToCart } = useAppContext();

  const [mainImg, setMainImg] = useState('');
  const [imgError, setImgError] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      setMainImg(product.img);
      setImgError(false);
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center font-body text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Produit introuvable</h2>
          <Link to="/boutique" className="text-primary-container hover:underline">← Retour à la boutique</Link>
        </div>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const phoneNumber = "212663551171";
    const message = `Bonjour, je souhaite commander ${quantity}x ${product.name} (${product.storage}, ${product.condition}) au prix de ${product.price}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="font-body min-h-screen pt-20 md:pt-24 pb-12 md:pb-20 px-4 md:px-12 max-w-screen-xl mx-auto">
      {/* Top Navigation */}
      <div className="mb-6 md:mb-8">
        <Link to="/boutique" className="text-on-surface-variant hover:text-white transition-colors text-xs md:text-sm font-medium flex items-center gap-2">
          <span>←</span> Retour à la boutique
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 xl:gap-20">
        {/* Left Column: Images */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div style={{ background: '#0a0a0a', padding: '16px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }} className="rounded-2xl mb-4 md:mb-6 shadow-lg border border-outline-variant/10 overflow-hidden relative">
            <img
              src={mainImg}
              alt={product.name}
              style={{ width: '100%', height: '300px', objectFit: 'contain' }}
              className="drop-shadow-2xl transition-all duration-300"
              onError={(e) => { 
                e.target.style.display = 'none'; 
              }}
            />
          </div>
          
          {/* Thumbnails */}
          {product.thumbnails && product.thumbnails.length > 0 && (
            <div className="flex gap-3 md:gap-4 w-full justify-center overflow-x-auto no-scrollbar py-2">
              {product.thumbnails.map((thumb, idx) => (
                <div
                  key={idx}
                  onClick={() => { setMainImg(thumb); }}
                  style={{ background: '#0a0a0a', padding: '8px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '80px' }}
                  className={`rounded-xl cursor-pointer border-2 transition-all ${mainImg === thumb ? 'border-primary-container' : 'border-transparent hover:border-outline-variant/50'}`}
                >
                  <img
                    src={thumb}
                    alt={`miniature ${idx + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    onError={(e) => { 
                      e.target.style.display = 'none'; 
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Details */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <span className="text-primary-container text-[10px] md:text-xs font-bold tracking-widest uppercase mb-2">APPLE</span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-2 md:mb-3">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <span className="text-2xl md:text-4xl font-extrabold text-white">{product.price}</span>
            {product.oldP && (
              <span className="text-lg md:text-xl text-on-surface-variant line-through opacity-50">{product.oldP}</span>
            )}
            <span className="px-3 py-1 bg-surface-variant/40 rounded-full text-[10px] md:text-xs font-bold text-on-surface uppercase tracking-wide border border-outline-variant/10">
              {product.condition}
            </span>
          </div>

          <div className="p-4 md:p-6 bg-surface-container-low rounded-2xl mb-6 md:mb-8 border border-outline-variant/10">
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              <div className="flex justify-between border-b border-outline-variant/10 pb-3 md:pb-4 text-sm">
                <span className="text-zinc-500">Stockage</span>
                <span className="text-white font-bold">{product.storage}</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant/10 pb-3 md:pb-4 text-sm">
                <span className="text-zinc-500">État</span>
                <span className="text-white font-bold">{product.condition}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">Disponibilité</span>
                <span className="text-green-400 font-bold">En Stock</span>
              </div>
            </div>
          </div>

          {/* Action Area */}
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center justify-between md:justify-start bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 md:py-2">
                <button onClick={handleDecrease} className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-white">-</button>
                <span className="w-12 text-center text-white font-bold">{quantity}</span>
                <button onClick={handleIncrease} className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-white">+</button>
              </div>
              <button 
                onClick={() => addToCart(product)}
                className="flex-grow py-4 bg-white text-black text-sm md:text-base font-black rounded-xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
              >
                  AJOUTER AU PANIER
              </button>
            </div>
            
            <button 
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-3 py-4 bg-primary text-white text-sm md:text-base font-black rounded-xl hover:bg-primary/90 transition-all border border-primary-container/20"
            >
              <span>📲</span> COMMANDER VIA WHATSAPP
            </button>
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="mt-16 md:mt-32 max-w-4xl mx-auto">
        <h3 className="text-xl md:text-2xl font-black tracking-tight mb-8 uppercase text-center md:text-left">Spécifications <span className="text-primary-container">Techniques</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {Object.entries(product.specs).map(([key, value]) => (
            <div key={key} className="bg-surface-container-low p-4 md:p-6 rounded-2xl border border-outline-variant/10 flex flex-col">
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-500 font-bold block mb-1">{key}</span>
              <span className="text-white font-medium text-sm md:text-base">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
