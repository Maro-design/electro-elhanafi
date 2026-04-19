import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('electro_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [authModal, setAuthModal] = useState('none'); // 'none', 'login', 'signup'

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('electro_user', JSON.stringify(userData));
    showToast(`👋 Bonjour, ${userData.firstName}`);
    setAuthModal('none');
  };

  const signup = (userData) => {
    setUser(userData);
    localStorage.setItem('electro_user', JSON.stringify(userData));
    showToast(`✅ Compte créé ! Bienvenue, ${userData.firstName}`);
    setAuthModal('none');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('electro_user');
    showToast("🚪 Déconnexion réussie");
    setIsProfileOpen(false);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    
    showToast(`✅ ${product.name} ajouté au panier`);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productId) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => {
    const price = parseInt(item.price.replace(/[^0-9]/g, ''));
    return total + price * item.quantity;
  }, 0);

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        cartTotal,
        searchQuery,
        setSearchQuery,
        isSearchOpen,
        setIsSearchOpen,
        isProfileOpen,
        setIsProfileOpen,
        isCartOpen,
        setIsCartOpen,
        toast,
        user,
        setUser,
        authModal,
        setAuthModal,
        login,
        signup,
        logout
      }}
    >
      {children}
      
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[100] bg-zinc-900 border border-zinc-800 text-white px-6 py-3 rounded-full shadow-2xl animate-fade-in-up">
          {toast}
        </div>
      )}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
