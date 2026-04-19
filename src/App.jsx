import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';

// Pages
import Accueil from './pages/Accueil';
import Boutique from './pages/Boutique';
import Accessoires from './pages/Accessoires';
import Promotions from './pages/Promotions';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';

import { AppProvider } from './context/AppContext';

const PageTransitionWrapper = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="min-h-screen flex flex-col"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="flex flex-col min-h-screen antialiased bg-surface-container-lowest text-on-surface selection:bg-primary-container selection:text-white dark">
          <Navbar />
          <main className="flex-grow">
            <PageTransitionWrapper>
              <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/boutique" element={<Boutique />} />
                <Route path="/boutique/:id" element={<ProductDetail />} />
                <Route path="/accessoires" element={<Accessoires />} />
                <Route path="/promotions" element={<Promotions />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </PageTransitionWrapper>
          </main>
          <Footer />
          <WhatsAppButton variant="floating" />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;

