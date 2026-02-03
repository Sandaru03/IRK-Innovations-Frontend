import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, CheckCircle, Zap } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-lg overflow-hidden border border-yellow-500/50 group-hover:border-yellow-500 transition-colors">
               {/* Using the public folder image as requested */}
               <img src="/IRK-Logo.jpg" alt="IRK Innovations" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-2xl text-white tracking-tighter">
              IRK <span className="text-yellow-500">Innovations</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-yellow-500 transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
             <div className="text-zinc-300 font-bold text-sm">
                <span className="text-yellow-500 mr-2">📞</span>
                +94 76 537 6106
             </div>
             <button className="border border-yellow-500/50 text-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-2 uppercase font-bold text-sm tracking-wider transition-all duration-300">
               Get Quote
             </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-zinc-400 hover:text-yellow-500">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-yellow-500/20">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {['Home', 'Services', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block px-3 py-4 text-base font-bold text-zinc-300 hover:text-yellow-500 border-b border-zinc-800 uppercase tracking-wider">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
