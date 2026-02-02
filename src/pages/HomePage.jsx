import React, { useState } from 'react';
import { 
  Menu, X, Phone, Cpu, Settings, Wrench, 
  Globe, Zap, ArrowRight, ShieldCheck, 
  Lightbulb, Truck, Smartphone 
} from 'lucide-react';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Project Data extracted from your document [cite: 23-64]
  const projects = [
    { 
      title: "Hoist Protection System", 
      category: "Industrial Safety", 
      desc: "Implemented at Keells retail outlets to prevent overloading and ensure safe stock handling.",
      icon: <ShieldCheck size={24} className="text-white" />
    },
    { 
      title: "Smart AC Control System", 
      category: "IoT & Energy Saving", 
      desc: "Automated climate control with mobile app integration to optimize electricity consumption in supermarkets.",
      icon: <Zap size={24} className="text-white" />
    },
    { 
      title: "Smartlife Hub Devices", 
      category: "Export (New Zealand)", 
      desc: "Designed and manufactured 300+ IoT hub devices for Smartlife NZ for home automation systems.",
      icon: <Globe size={24} className="text-white" />
    },
    { 
      title: "Smart Gate Control", 
      category: "Home Automation", 
      desc: "Remote gate operation via Android/iOS app with real-time status monitoring.",
      icon: <Smartphone size={24} className="text-white" />
    },
    { 
      title: "Heat Seal Controller", 
      category: "Industrial Automation", 
      desc: "Custom controller unit for heat seal machines with precise timing and temperature logic.",
      icon: <Settings size={24} className="text-white" />
    },
    { 
      title: "Tech Product Sourcing", 
      category: "Global Sourcing", 
      desc: "Sourcing specialized tech products (e.g., Wind Temp Meters) directly from manufacturers in China.",
      icon: <Truck size={24} className="text-white" />
    },
  ];

  return (
    <div className="font-sans text-slate-800 bg-white">
      
      {/* ================= NAVBAR ================= */}
      <nav className="bg-white shadow-lg fixed w-full z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo [cite: 1] */}
            <div className="shrink-0 flex items-center gap-2">
              <div className="bg-blue-900 p-2 rounded-lg">
                <Cpu size={24} className="text-white" />
              </div>
              <span className="font-bold text-2xl text-slate-900 tracking-tight">
                IRK <span className="text-blue-600">INNOVATIONS</span>
              </span>
            </div>

            {/* Desktop Menu [cite: 4] */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-600 hover:text-blue-600 font-medium transition hover:-translate-y-0.5">
                  {item}
                </a>
              ))}
            </div>

            {/* Right Side CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:+94771234567" className="flex items-center text-slate-700 font-semibold hover:text-blue-600 transition">
                <Phone size={18} className="mr-2" />
                <span>+94 XX XXX XXXX</span>
              </a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition shadow-md hover:shadow-lg transform hover:scale-105">
                Contact Us
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-blue-900">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-xl">
            <div className="flex flex-col space-y-4">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-700 font-medium hover:text-blue-600">
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100">
                 <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold">Request Consultation</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-900/80 z-10"></div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/Herovideo.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
              10+ Years of Industry Experience 
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              You Bring the Problem, <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
                We Build the Solution.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                        We design, manufacture & deliver smart electronic products with over 10 years of industry experience.            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg flex items-center justify-center">
                View Our Projects <ArrowRight size={20} className="ml-2" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-lg font-bold text-lg transition">
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ================= SERVICES GRID [cite: 10-21] ================= */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">End-to-End Electronics Engineering</h3>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Lightbulb size={32} />, 
                title: "Design & Consultation", 
                desc: "Architecture design, schematic capture, and electronics engineering consultation[cite: 10, 13]." 
              },
              { 
                icon: <Settings size={32} />, 
                title: "Manufacturing (DFM/DFA)", 
                desc: "Cost optimization (BOM), PCB assembly, and bulk manufacturing with enclosure design[cite: 15, 16, 20]." 
              },
              { 
                icon: <Zap size={32} />, 
                title: "Testing & Optimization", 
                desc: "Rigorous product testing and assembly process optimization to ensure industrial reliability[cite: 14, 18]." 
              },
              { 
                icon: <Truck size={32} />, 
                title: "Global Sourcing", 
                desc: "Sourcing specialized tech products and electronic components directly from China[cite: 21, 66]." 
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROJECTS [cite: 23-64] ================= */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2">Our Portfolio</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Recent Innovations</h3>
            </div>
            <button className="hidden md:flex items-center text-blue-600 font-semibold hover:text-blue-800 transition">
              View All Projects <ArrowRight size={20} className="ml-2" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                {/* Visual Header */}
                <div className="h-2 bg-linear-to-r from-blue-500 to-cyan-400"></div>
                
                <div className="p-8 flex flex-col grow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-slate-900 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-slate-600 text-sm mb-6 grow leading-relaxed">
                    {project.desc}
                  </p>
                  
                  <div className="pt-6 border-t border-slate-100 mt-auto">
                    <span className="text-sm font-semibold text-slate-400 group-hover:text-blue-600 flex items-center transition-colors">
                      See Case Study <ArrowRight size={16} className="ml-2" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <button className="bg-slate-100 text-slate-900 px-6 py-3 rounded-lg font-bold w-full">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* ================= CTA / PHILOSOPHY  ================= */}
      <section className="py-20 bg-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 L100 0 L100 100 Z" fill="white" />
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            "We need your problem only. <br/>We will give you the solution."
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
            Whether it's a simple circuit design or a complex industrial automation system, we have the expertise to deliver results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-900 hover:bg-blue-50 px-10 py-4 rounded-lg font-bold text-lg transition shadow-xl">
              Request Consultation
            </button>
            <button className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 rounded-lg font-bold text-lg transition">
              Call Us Now
            </button>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 text-white mb-6">
                <Cpu size={24} className="text-blue-500" />
                <span className="font-bold text-xl">IRK INNOVATIONS</span>
              </div>
              <p className="text-sm leading-relaxed max-w-sm mb-6">
                Specialized in embedded product design, manufacturing, and industrial electronics with over 10 years of experience[cite: 3, 11].
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">PCB Design</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Firmware Development</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Industrial Automation</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Tech Sourcing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>Colombo, Sri Lanka</li>
                <li>+94 XX XXX XXXX</li>
                <li>info@irkinnovations.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-900 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} IRK Innovations. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;