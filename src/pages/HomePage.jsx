import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { 
  CheckCircle, ArrowRight, Phone, Mail, MapPin, 
  ChevronLeft, ChevronRight, Zap 
} from 'lucide-react';

const HomePage = () => {
  const [apiProjects, setApiProjects] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero Slider Images (Placeholders)
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop",
      title: "Solutions Engineered for Impact",
    },
    {
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
      title: "Precision Manufacturing",
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      title: "Smart Electronic Integration",
    }
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects');
        setApiProjects(response.data); 
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();

    const sliderInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(sliderInterval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="font-sans text-slate-200 bg-zinc-950 min-h-screen">
      
      <NavBar />

      {/* ================= HERO SECTION (SLIDER) ================= */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slider */}
        {slides.map((slide, index) => (
           <div 
             key={index}
             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
           >
              <div className="absolute inset-0 bg-black/70 z-10"></div> {/* Overlay */}
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
           </div>
        ))}
        
        {/* Slider Controls */}
        <button onClick={prevSlide} className="absolute left-4 md:left-8 z-30 p-2 text-white/50 hover:text-yellow-500 transition-colors">
           <ChevronLeft size={48} />
        </button>
        <button onClick={nextSlide} className="absolute right-4 md:right-8 z-30 p-2 text-white/50 hover:text-yellow-500 transition-colors">
           <ChevronRight size={48} />
        </button>

        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center mt-16">
           <div className="inline-block mb-6 px-4 py-1 border border-yellow-500/50 rounded-full bg-yellow-500/10 backdrop-blur-sm">
              <span className="text-yellow-400 font-bold tracking-widest uppercase text-xs md:text-sm">
                Industrial Innovation Partner
              </span>
           </div>

           <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-8">
             Customized Electronics Solutions <br/>
             <span className="text-yellow-500">From Idea to Installation</span>
           </h1>

           <p className="text-lg md:text-2xl text-zinc-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
             We design, manufacture & deliver smart electronic products with over <span className="text-white font-semibold">10 years</span> of industry experience.
           </p>

           <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <a href="#projects" className="bg-yellow-500 text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(234,179,8,0.3)]">
               View Projects
             </a>
             <a href="#contact" className="bg-transparent border-2 border-white text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
               Contact Us
             </a>
           </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
           {slides.map((_, idx) => (
             <button 
               key={idx} 
               onClick={() => setCurrentSlide(idx)}
               className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-12 bg-yellow-500' : 'w-4 bg-white/30 hover:bg-white/50'}`}
             />
           ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section id="why-us" className="py-24 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-yellow-500 font-bold tracking-widest uppercase mb-3 text-sm">Core Strengths</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter uppercase">Why Choose Us</h3>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { title: "Experience", subtitle: "10+ Years", icon: <CheckCircle /> },
                { title: "Solutions", subtitle: "End-to-End", icon: <Zap /> },
                { title: "Quality", subtitle: "Industrial Grade", icon: <CheckCircle /> },
                { title: "Cost", subtitle: "Optimized", icon: <Zap /> },
                { title: "Reach", subtitle: "Global Clients", icon: <CheckCircle /> },
              ].map((item, index) => (
                <div key={index} className="group relative bg-zinc-900/50 border-t border-b border-zinc-800 p-8 flex flex-col items-center justify-between text-center transition-all duration-300 hover:bg-zinc-900 hover:border-yellow-500/30">
                   
                   {/* Tech Corners */}
                   <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-700 group-hover:border-yellow-500 transition-colors"></div>
                   <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-700 group-hover:border-yellow-500 transition-colors"></div>

                   {/* Number Watermark */}
                   <span className="absolute top-2 right-4 text-4xl font-black text-zinc-900 group-hover:text-yellow-500/10 transition-colors select-none">
                     0{index + 1}
                   </span>
                   
                   <div className="mb-8 relative">
                      <div className="text-zinc-500 group-hover:text-yellow-500 transition-colors duration-300 transform group-hover:scale-110">
                        {React.cloneElement(item.icon, { size: 32, strokeWidth: 1 })}
                      </div>
                      <div className="absolute -inset-4 bg-yellow-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   </div>
                   
                   <div>
                     <h4 className="text-white font-bold uppercase text-sm tracking-wider mb-1 group-hover:text-yellow-500 transition-colors">
                       {item.subtitle}
                     </h4>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Scroll To Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 bg-yellow-500 text-black p-3 rounded-full shadow-lg hover:bg-yellow-400 transition-colors group"
        title="Back to Top"
      >
        <div className="flex flex-col items-center">
            <div className="h-3 w-[2px] bg-black mb-1"></div>
            <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-[6px] border-b-black"></div>
        </div>
      </button>

      {/* ================= PARALLAX FEATURE HIGHLIGHT (Image 1 Style) ================= */}
      <section className="relative py-32 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-zinc-950/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
           
           <div className="flex-1">
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase mb-6">
                Uninterruptible <br/>
                <span className="text-white">power supply</span> <br/>
                in your home
              </h2>
              <button className="bg-yellow-500 text-black px-8 py-3 font-bold uppercase tracking-widest hover:bg-yellow-400 transition shadow-lg mt-4">
                + Order Now
              </button>
           </div>

           <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: <Zap size={32} />, title: "Refined power supply", desc: "Stabilized voltage for sensitive electronics." },
                { icon: <CheckCircle size={32} />, title: "Protection against issues", desc: "Shields against surges and outages." },
                { icon: <CheckCircle size={32} />, title: "Effective time saving", desc: "Instant switch-over technology." },
                { icon: <Zap size={32} />, title: "Consistent power quality", desc: "Pure sine wave output guarantee." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="text-yellow-500 transition-transform group-hover:scale-110">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-zinc-400 text-sm leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ================= FAQ & WHY CHOOSE US (Image 2 Style) ================= */}
      <section id="faq" className="py-24 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row gap-16">
              
              {/* Left: Accordion */}
              <div className="flex-1">
                 <div className="bg-yellow-500 text-black font-bold uppercase tracking-widest text-xs inline-block px-2 py-1 mb-4">Explore FAQ's</div>
                 <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic leading-tight mb-12">
                   Popular questions <br/> about our company
                 </h2>

                 <div className="space-y-4">
                    {[
                      { q: "Why to choose us?", a: "Whether you need lighting repairs, electrical upgrades, or a new installation, we're here to provide quality services that meet your needs and exceed your expectations." },
                      { q: "How quickly can you get help?", a: "Our emergency response team is available 24/7 with a guaranteed 2-hour onsite arrival time for critical failures." },
                      { q: "How to pay for services?", a: "We accept all credit cards, bank transfers, and offer flexible financing plans for large-scale industrial projects." },
                      { q: "What to call an electrician?", a: "Call us anytime at +94 76 537 6106 for immediate assistance or consultation." }
                    ].map((faq, i) => (
                      <div key={i} className="bg-zinc-950 border border-zinc-800">
                        <button className="w-full flex justify-between items-center p-6 text-left hover:bg-zinc-900 transition-colors group">
                           <span className="text-lg font-bold text-white group-hover:text-yellow-500 transition-colors">{faq.q}</span>
                           <div className="bg-yellow-500 text-black p-1">
                             <CheckCircle size={16} className="rotate-45" /> 
                           </div>
                        </button>
                        {i === 0 && ( 
                          <div className="p-6 pt-0 text-zinc-400 text-sm leading-relaxed border-t border-zinc-900">
                             {faq.a}
                          </div>
                        )}
                      </div>
                    ))}
                 </div>
                 
                 <button className="mt-8 bg-yellow-500 text-black px-8 py-3 font-bold uppercase tracking-widest hover:bg-yellow-400 transition shadow-lg flex items-center gap-2">
                   + All Questions
                 </button>
              </div>

              {/* Right: Images Grid */}
              <div className="flex-1 relative hidden lg:block">
                 <div className="aspect-4/5 bg-yellow-500 absolute top-0 right-0 w-2/3 z-0"></div>
                 <div className="relative z-10 grid grid-cols-2 gap-4 pt-12 pr-8">
                    <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" className="w-full h-64 object-cover border-4 border-zinc-950 shadow-2xl" alt="Worker" />
                    <img src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1974&auto=format&fit=crop" className="w-full h-64 object-cover border-4 border-zinc-950 shadow-2xl mt-12" alt="Switch" />
                    <img src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1974&auto=format&fit=crop" className="w-full h-64 object-cover border-4 border-zinc-950 shadow-2xl col-span-2" alt="Lighting" />
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* ================= PROJECTS GRID ================= */}
      <section id="projects" className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-zinc-800 pb-8">
            <div>
              <h2 className="text-yellow-500 font-bold tracking-widest uppercase mb-2">Our Portfolio</h2>
              <h3 className="text-3xl md:text-5xl font-black text-white uppercase italic">Featured Projects</h3>
            </div>
            <Link to="/projects" className="hidden md:flex items-center text-zinc-400 hover:text-yellow-500 font-bold uppercase tracking-widest transition mt-4 md:mt-0">
               View Full Archive <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apiProjects.length > 0 ? (
              apiProjects.slice(0, 6).map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))
            ) : (
              <p className="text-zinc-600 col-span-3 text-center py-10">No projects to display.</p>
            )}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/projects" className="inline-block border border-zinc-700 text-white px-8 py-3 uppercase tracking-widest font-bold hover:border-yellow-500 hover:text-yellow-500 transition">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section id="contact" className="py-24 bg-yellow-500 relative overflow-hidden text-black">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
         
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-6 tracking-tighter">
               Ready to Start?
            </h2>
            <p className="text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto border-black/10">
               Let's engineer the future together. Get in touch for a consultation.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
               <div className="flex items-center justify-center gap-3">
                  <div className="bg-black/10 p-2 rounded-full"><Phone size={24}/></div>
                  <span className="font-bold text-lg">+94 76 537 6106</span>
               </div>
               <div className="flex items-center justify-center gap-3">
                  <div className="bg-black/10 p-2 rounded-full"><Mail size={24}/></div>
                  <span className="font-bold text-lg">info@volteng.com</span>
               </div>
               <div className="flex items-center justify-center gap-3">
                  <div className="bg-black/10 p-2 rounded-full"><MapPin size={24}/></div>
                  <span className="font-bold text-lg">Colombo, Sri Lanka</span>
               </div>
            </div>

            <button className="bg-black text-white px-12 py-5 font-bold uppercase tracking-widest text-lg hover:scale-105 transition-transform shadow-2xl">
               Request Free Consultation
            </button>
         </div>
      </section>

      <Footer />

    </div>
  );
};

export default HomePage;