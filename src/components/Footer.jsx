import React from 'react';
import { Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-zinc-500 py-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
         <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded overflow-hidden">
                <img src="/IRK-Logo.jpg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-white tracking-widest uppercase">IRK Innovations</span>
         </div>
         
         <div className="flex flex-wrap justify-center gap-8 text-sm font-bold uppercase tracking-wider">
            <a href="#" className="hover:text-yellow-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Sitemap</a>
         </div>

         <div className="text-xs uppercase tracking-widest opacity-60">
            &copy; {new Date().getFullYear()} IRK Innovations.
         </div>
      </div>
    </footer>
  );
};

export default Footer;
