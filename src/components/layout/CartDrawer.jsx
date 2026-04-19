import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { useAppContext } from '../../hooks/useAppContext';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useAppContext();

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;
    const phone = '212663551171';
    let message = '🛒 *Nouvelle commande — Electro Elhanafi*\n\n';
    cart.forEach((item, i) => {
      message += `${i + 1}. *${item.name}* — ${item.storage}\n`;
      message += `   Quantité: ${item.quantity}  |  Prix unitaire: ${item.price}\n\n`;
    });
    message += `━━━━━━━━━━━━━━━\n`;
    message += `💰 *Total estimé: ${cartTotal.toLocaleString('fr-MA')} DH*\n\n`;
    message += `Merci de me confirmer la disponibilité 🙏`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-zinc-950 border-l border-zinc-800 z-[70] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <ShoppingCart size={22} className="text-blue-400" />
                <h2 className="text-lg font-bold text-zinc-100">Mon Panier</h2>
                {cart.length > 0 && (
                  <span className="bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {cart.reduce((t, i) => t + i.quantity, 0)}
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-grow overflow-y-auto p-4 space-y-3">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-16">
                  <ShoppingCart size={60} className="text-zinc-700" />
                  <p className="text-zinc-500 text-sm">Votre panier est vide.</p>
                  <button
                    onClick={onClose}
                    className="text-blue-400 hover:underline text-sm"
                  >
                    Continuer les achats →
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-4"
                  >
                    {/* Product Image */}
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-zinc-800 flex-shrink-0">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-grow min-w-0">
                      <p className="font-semibold text-sm text-zinc-100 truncate">{item.name}</p>
                      <p className="text-xs text-zinc-500">{item.storage}</p>
                      <p className="text-sm font-bold text-blue-400 mt-1">{item.price}</p>
                    </div>

                    {/* Qty + Remove */}
                    <div className="flex flex-col items-end gap-2">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-zinc-600 hover:text-red-400 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-300 transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm font-bold text-zinc-100 w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-300 transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer — only if cart has items */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-zinc-800 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400 text-sm">Total estimé</span>
                  <span className="text-xl font-black text-zinc-100">
                    {cartTotal.toLocaleString('fr-MA')} DH
                  </span>
                </div>
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-2xl transition-all duration-300 active:scale-95 shadow-lg shadow-green-500/20"
                >
                  <span className="text-xl">💬</span>
                  Commander via WhatsApp
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-3 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  Continuer les achats
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartDrawer;
