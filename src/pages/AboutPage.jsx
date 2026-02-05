import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="bg-zinc-950 min-h-screen text-white">
      <NavBar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8">
          About <span className="text-yellow-500">IRK Innovations</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-3xl leading-relaxed">
          We are a team of dedicated professionals committed to delivering high-quality web solutions 
          and innovative digital experiences. Our passion for technology drives us to push boundaries 
          and create value for our clients.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-zinc-900/50 py-20 px-4 sm:px-6 lg:px-8 border-y border-yellow-500/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="h-8 w-1 bg-yellow-500"></span>
              Our Mission
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              To empower businesses through cutting-edge technology and creative strategies. 
              We believe in transparency, integrity, and excellence in every project we undertake.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-zinc-800 border border-yellow-500/20 rounded-lg">
              <div className="text-3xl font-bold text-yellow-500 mb-2">50+</div>
              <div className="text-sm text-zinc-500 uppercase tracking-widest font-bold">Projects Done</div>
            </div>
            <div className="p-6 bg-zinc-800 border border-yellow-500/20 rounded-lg">
              <div className="text-3xl font-bold text-yellow-500 mb-2">10+</div>
              <div className="text-sm text-zinc-500 uppercase tracking-widest font-bold">Expert Devs</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
