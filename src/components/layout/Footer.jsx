import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 w-full py-16 px-6 md:px-12 border-t border-zinc-900 mt-20 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-screen-2xl mx-auto font-inter text-zinc-500 text-sm">
        <div className="space-y-6">
          <div className="text-lg font-bold text-zinc-100 uppercase tracking-tighter">Electro Elhanafi</div>
          <p className="font-inter text-zinc-500 text-sm leading-relaxed max-w-xs">
            Le leader de la vente de produits Apple certifiés à Meknès. Performance, style et authenticité garantis.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="text-zinc-100 font-bold uppercase text-xs tracking-widest">Produits</div>
            <ul className="space-y-2 flex flex-col">
              <Link to="/boutique" className="hover:text-blue-400 transition-colors inline-block w-fit">iPhone</Link>
              <Link to="/accessoires" className="hover:text-blue-400 transition-colors inline-block w-fit">Accessoires</Link>
              <Link to="/promotions" className="hover:text-blue-400 transition-colors inline-block w-fit">Promotions</Link>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="text-zinc-100 font-bold uppercase text-xs tracking-widest">Contact</div>
            <ul className="space-y-2 flex flex-col">
              <a href="https://instagram.com/electro_elhanafi" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors inline-block w-fit">Instagram</a>
              <a href="https://wa.me/212663551171" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors inline-block w-fit">WhatsApp</a>
              <Link to="/contact" className="hover:text-blue-400 transition-colors inline-block w-fit">Location</Link>
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <div className="text-zinc-100 font-bold uppercase text-xs tracking-widest">Localisation</div>
          <p className="font-inter text-sm mb-4">L9isaria - Bab Jdid (Jotia market)<br/>Meknes, Morocco</p>
          <div className="h-32 w-full rounded-xl overflow-hidden grayscale contrast-125 opacity-50 relative group cursor-pointer hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <img 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyrCEbkCECQLq5w0cLWcYwQbp8QOcN2qsA50KzJj_i7FXOPgxOHMZ7WHlCO-hN9ydxXY2t2Nh4ISB8S_dJPGoquADT2pqZ5Bgx8TC-fd00-ZX5vAaz3CMqQ3LR2OsKJcagjPyEv6WradixDJUwKQhFBmepMRD7lo3uHG15sx06UvvUJTeq3GHuoYB45pxtG07_vtG1LakTcEsl55w_jSVpHbrLiyTRCCgx4nbg_oQBSduHoB603rxHTRqhSpU8OnDR7u_dYpHw2DtK" 
              alt="Meknes Map" 
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto mt-16 pt-8 border-t border-zinc-900 text-center text-zinc-600 flex flex-col md:flex-row justify-between items-center text-xs">
        <span>© 2024 Electro Elhanafi. Meknes, Morocco.</span>
        <div className="mt-4 md:mt-0 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="uppercase tracking-tighter">Boutique Ouverte</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
