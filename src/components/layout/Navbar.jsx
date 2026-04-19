import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, User, ShoppingCart, X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../../hooks/useAppContext';
import CartDrawer from './CartDrawer';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const {
    cartCount,
    isCartOpen,
    setIsCartOpen,
    isProfileOpen,
    setIsProfileOpen,
    isSearchOpen,
    setIsSearchOpen,
    searchQuery,
    setSearchQuery
  } = useAppContext();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );
  const [showAuthModal, setShowAuthModal] = useState(null); // null | 'login' | 'register'

  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [prenomInput, setPrenomInput] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = { name: emailInput.split('@')[0], email: emailInput };
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
    setShowAuthModal(null);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = { name: prenomInput, email: emailInput };
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
    setShowAuthModal(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsProfileOpen(false);
  };

  const searchRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsSearchOpen, setIsProfileOpen]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Boutique', path: '/boutique' },
    { name: 'Accessoires', path: '/accessoires' },
    { name: 'Promotions', path: '/promotions' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (currentPath !== '/boutique') {
      navigate('/boutique');
    }
  };

  return (
    <>
      <nav className="sticky top-0 w-full z-50 bg-zinc-950/40 backdrop-blur-xl shadow-2xl border-b border-zinc-900/10">
        <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-screen-2xl mx-auto">
          {/* Logo */}
          <Link to="/" className="text-lg md:text-xl font-bold tracking-tighter text-zinc-100 uppercase">
            Electro Elhanafi
          </Link>

          {/* Nav Links - Desktop only */}
          <div className="hidden md:flex gap-8 items-center font-inter tracking-tight font-medium text-sm text-zinc-400">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-all duration-300 hover:opacity-80 pb-1 ${
                  currentPath === link.path
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'hover:text-zinc-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons and Mobile Toggle */}
          <div className="flex gap-4 md:gap-5 items-center">

            {/* 🔍 Search */}
            <div className="relative" ref={searchRef}>
              <button
                id="navbar-search-btn"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  isSearchOpen ? 'text-blue-500' : 'text-zinc-100/70 hover:text-white'
                }`}
              >
                <Search size={22} strokeWidth={2} />
              </button>

              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 mt-4 w-80 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-4 z-50"
                  >
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                      <input
                        autoFocus
                        type="text"
                        placeholder="Rechercher un modèle (ex: iPhone 15)..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="w-full bg-zinc-800 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm text-zinc-100 placeholder:text-zinc-500 focus:ring-1 focus:ring-blue-500 outline-none"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 👤 Profile - Desktop only */}
            <div className="relative hidden md:block" ref={profileRef}>
              <button
                id="navbar-profile-btn"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className={`transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  isProfileOpen ? 'text-blue-500' : 'text-zinc-100/70 hover:text-white'
                }`}
              >
                <User size={22} strokeWidth={2} />
              </button>

              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 mt-4 w-64 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-50 p-4"
                  >
                    {!user ? (
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 px-1 mb-2 border-b border-zinc-800 pb-3">
                          <span className="text-xl">👤</span>
                          <span className="font-bold text-zinc-100">Mon Compte</span>
                        </div>
                        <button 
                          onClick={() => { setShowAuthModal('login'); setIsProfileOpen(false); }}
                          className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all"
                        >
                          Se connecter
                        </button>
                        <button 
                          onClick={() => { setShowAuthModal('register'); setIsProfileOpen(false); }}
                          className="w-full py-2.5 bg-transparent border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-sm font-bold rounded-xl transition-all"
                        >
                          S'inscrire
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <div className="flex items-center gap-3 px-2 mb-2 border-b border-zinc-800 pb-3">
                          <span className="text-xl">👤</span>
                          <span className="font-bold text-zinc-100 truncate">Bonjour, {user.name}</span>
                        </div>
                        <button 
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded-lg transition-all mt-2"
                        >
                          <span>🚪</span> Se déconnecter
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 🛒 Cart */}
            <button
              id="navbar-cart-btn"
              onClick={() => setIsCartOpen(true)}
              className="text-zinc-100/70 hover:text-white hover:brightness-110 transition-all duration-300 transform hover:scale-105 active:scale-95 relative"
            >
              <ShoppingCart size={22} strokeWidth={2} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center leading-none">
                  {cartCount}
                </span>
              )}
            </button>

            {/* ☰ Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-zinc-100/70 hover:text-white transition-all transform active:scale-90"
            >
              <Menu size={24} strokeWidth={2} />
            </button>
          </div>
        </div>

      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-[100vw] h-[100vh] z-[99999] bg-[#000000] flex flex-col p-[30px_24px] gap-[32px] overflow-y-auto"
          >
            <div className="flex justify-between items-center">
              <span className="text-white text-[14px] font-[700] tracking-[2px] uppercase">Menu</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-[44px] h-[44px] bg-[#1a1a1a] flex items-center justify-center rounded-full text-white border-none transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-[32px]">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-[28px] font-[700] no-underline transition-colors ${
                    currentPath === link.path ? 'text-[#0A84FF]' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-8 border-t border-zinc-800 flex flex-col gap-4">
              {!user ? (
                <button 
                  onClick={() => { setShowAuthModal('login'); setIsMobileMenuOpen(false); }}
                  className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl"
                >
                  Se connecter
                </button>
              ) : (
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Bonjour, {user.name}</span>
                  <button onClick={handleLogout} className="text-red-400">Déconnexion</button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Side Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Auth Modals */}
      <AnimatePresence>
        {showAuthModal !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setShowAuthModal(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            ></motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-[384px] bg-[#1a1a1a] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl p-8"
            >
              <button 
                onClick={() => setShowAuthModal(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all"
              >
                <X size={20} />
              </button>

              {showAuthModal === 'login' ? (
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-white">Connexion</h2>
                  </div>
                  <div className="space-y-4">
                    <input 
                      required
                      type="email" 
                      placeholder="Email" 
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-zinc-600 outline-none" 
                    />
                    <input 
                      required
                      type="password" 
                      placeholder="Mot de passe" 
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-zinc-600 outline-none" 
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all active:scale-95"
                  >
                    Se connecter
                  </button>
                  <p className="text-center text-sm text-zinc-500">
                    Pas encore de compte ? <button type="button" onClick={() => setShowAuthModal('register')} className="text-blue-400 hover:underline font-medium">S'inscrire</button>
                  </p>
                </form>
              ) : (
                <form onSubmit={handleRegister} className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-white">Créer un compte</h2>
                  </div>
                  <div className="space-y-4">
                    <input 
                      required
                      type="text" 
                      placeholder="Prénom" 
                      value={prenomInput}
                      onChange={(e) => setPrenomInput(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-zinc-600 outline-none" 
                    />
                    <input 
                      required
                      type="email" 
                      placeholder="Email" 
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-zinc-600 outline-none" 
                    />
                    <input 
                      required
                      type="password" 
                      placeholder="Mot de passe" 
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-zinc-600 outline-none" 
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all active:scale-95"
                  >
                    Créer mon compte
                  </button>
                  <p className="text-center text-sm text-zinc-500">
                    Déjà un compte ? <button type="button" onClick={() => setShowAuthModal('login')} className="text-blue-400 hover:underline font-medium">Se connecter</button>
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
