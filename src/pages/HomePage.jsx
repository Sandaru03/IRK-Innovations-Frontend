import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { 
  CheckCircle, ArrowRight, Phone, Mail, MapPin, 
  ChevronLeft, ChevronRight, Zap, Award, Users, Target, 
  Plus, Minus, Cpu, CircuitBoard, Factory, Globe, Settings,
  Shield, Sparkles, TrendingUp, Wrench
} from 'lucide-react';

const HomePage = () => {
  const [apiProjects, setApiProjects] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(0);

  // Hero Slider Images
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      title: "Electronic Innovation",
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      title: "Precision Manufacturing",
    },
    {
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop", // Automation/Smart Lab
      title: "Smart Solutions",
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

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="font-sans text-slate-200 bg-zinc-950 min-h-screen">
      
      <NavBar />

      {/* ================= HERO SECTION ================= */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slider */}
        {slides.map((slide, index) => (
           <div 
             key={index}
             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
           >
              <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/70 to-zinc-950 z-10"></div>
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
           </div>
        ))}
        
        {/* Slider Controls */}
        <button 
          onClick={prevSlide} 
          className="absolute left-4 md:left-8 z-30 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/70 hover:text-yellow-500 hover:border-yellow-500/50 transition-all duration-300"
        >
           <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute right-4 md:right-8 z-30 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/70 hover:text-yellow-500 hover:border-yellow-500/50 transition-all duration-300"
        >
           <ChevronRight size={24} />
        </button>

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 text-center">


           <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
             Customized Electronics <br/>
             <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-yellow-600">
               Products Design & Manufacturing
             </span>
           </h1>

           <p className="text-base md:text-lg lg:text-xl text-zinc-300 mb-3 max-w-3xl mx-auto font-light leading-relaxed">
             10+ Years Industry Experience in Delivering Smart Solutions.
           </p>
           <p className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto font-semibold">
             We need your problem only — we will give you the solution.
           </p>

           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a 
               href="#services" 
               className="group relative bg-yellow-500 text-black px-10 py-4 font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/30"
             >
               <span className="relative z-10">Explore Services</span>
               <div className="absolute inset-0 bg-yellow-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
             </a>
             <a 
               href="#contact" 
               className="group bg-transparent border-2 border-white/30 text-white px-10 py-4 font-bold uppercase tracking-widest hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300"
             >
               Contact Us
               <ArrowRight size={16} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
             </a>
           </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
           {slides.map((_, idx) => (
             <button 
               key={idx} 
               onClick={() => setCurrentSlide(idx)}
               className={`h-1 rounded-full transition-all duration-300 ${
                 idx === currentSlide 
                   ? 'w-12 bg-yellow-500' 
                   : 'w-8 bg-white/30 hover:bg-white/50'
               }`}
             />
           ))}
        </div>

        {/* Scroll Indicator */}

      </section>

      {/* ================= COMPANY INTRO ================= */}
      <section className="py-20 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div>
              <div className="inline-block mb-6 px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
                <span className="text-yellow-500 font-bold tracking-widest uppercase text-xs">About IRK Innovations</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Your Partner in <br/>
                <span className="text-yellow-500">Electronic Innovation</span>
              </h2>
              
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                IRK Innovations is a leading electronics product design and manufacturing company with over 10 years of industry experience. We specialize in delivering customized, end-to-end solutions that transform ideas into reality.
              </p>
              
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                From initial consultation to final installation, we handle every aspect of product development with precision, quality, and innovation at the core of everything we do.
              </p>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-yellow-500" size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold">10+ Years</div>
                    <div className="text-zinc-500 text-sm">Experience</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center">
                    <Users className="text-yellow-500" size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold">500+</div>
                    <div className="text-zinc-500 text-sm">Projects Delivered</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center">
                    <Globe className="text-yellow-500" size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold">Global</div>
                    <div className="text-zinc-500 text-sm">Client Base</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" 
                    alt="Electronics Lab" 
                    className="w-full h-64 object-cover rounded-lg shadow-xl"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" 
                    alt="Circuit Design" 
                    className="w-full h-48 object-cover rounded-lg shadow-xl"
                  />
                </div>
                <div className="space-y-4 pt-12">
                  <img 
                    src="https://images.unsplash.com/photo-1616440347437-b1c73416efc2?q=80&w=800&auto=format&fit=crop" 
                    alt="PCB Board" 
                    className="w-full h-48 object-cover rounded-lg shadow-xl"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=800&auto=format&fit=crop" 
                    alt="Quality Control" 
                    className="w-full h-64 object-cover rounded-lg shadow-xl"
                  />
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-black px-8 py-6 rounded-lg shadow-2xl">
                <div className="text-4xl font-black mb-1">98%</div>
                <div className="text-sm font-bold uppercase tracking-wider">Client Satisfaction</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SERVICES & CAPABILITIES ================= */}
      <section id="services" className="py-24 bg-zinc-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(234, 179, 8) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center mb-20">
              <div className="inline-block mb-6 px-6 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
                <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm">What We Offer</span>
              </div>
              <h3 className="text-5xl md:text-6xl font-black text-white mb-6">
                Services & Capabilities
              </h3>
              <div className="w-24 h-1.5 bg-linear-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-6"></div>
              <p className="text-zinc-400 max-w-3xl mx-auto text-lg leading-relaxed">
                End-to-End Customized Electronics Product Design & Manufacturing. <br/>
                We follow standard product development steps and handle design, manufacturing, and installation.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: "Engineering Consultation", 
                  icon: <Users />,
                  description: "Expert guidance in embedded product design and manufacturing with over 10 years of experience."
                },
                { 
                  title: "Architecture & PCB Design", 
                  icon: <CircuitBoard />,
                  description: "Complete electronics product architecture design and professional PCB designing."
                },
                { 
                  title: "Cost & BOM Optimization", 
                  icon: <TrendingUp />,
                  description: "Optimizing Bill of Materials (BOM) and manufacturing costs without compromising quality."
                },
                { 
                  title: "DFM & DFA", 
                  icon: <Settings />,
                  description: "Design for Manufacturing (DFM) and Design for Assembly (DFA) to ensure smooth production."
                },
                { 
                  title: "Product Testing", 
                  icon: <Shield />,
                  description: "Rigorous testing protocols to ensure reliability, safety, and performance of every unit."
                },
                { 
                  title: "Assembly Optimization", 
                  icon: <Wrench />,
                  description: "Streamlining assembly processes for maximum efficiency and reduced turnaround time."
                },
                { 
                  title: "Bulk Manufacturing", 
                  icon: <Factory />,
                  description: "Capacity for electronics bulk manufacturing, handling small batches to large-scale runs."
                },
                { 
                  title: "Global Sourcing", 
                  icon: <Globe />,
                  description: "Sourcing electronic components and tech products, specializing in imports from China."
                },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="group relative bg-zinc-950 border border-zinc-800 p-8 rounded-xl overflow-hidden transition-all duration-500 hover:border-yellow-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/10"
                >
                   {/* Background Glow */}
                   <div className="absolute inset-0 bg-linear-to-br from-yellow-500/0 via-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/5 group-hover:via-yellow-500/10 group-hover:to-transparent transition-all duration-500"></div>
                   
                   {/* Top Line Accent */}
                   <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-yellow-500/0 to-transparent group-hover:via-yellow-500 transition-all duration-500"></div>
                   
                   {/* Icon */}
                   <div className="relative mb-6 inline-block">
                      <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center group-hover:bg-yellow-500 group-hover:border-yellow-500 transition-all duration-500 group-hover:scale-110">
                        {React.cloneElement(item.icon, { 
                          size: 28, 
                          className: "text-yellow-500 group-hover:text-black transition-colors duration-500",
                          strokeWidth: 2
                        })}
                      </div>
                   </div>
                   
                   {/* Content */}
                   <div className="relative">
                     <h4 className="text-white font-black text-xl mb-4 group-hover:text-yellow-500 transition-colors duration-300">
                       {item.title}
                     </h4>
                     <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                       {item.description}
                     </p>
                   </div>

                   {/* Bottom Arrow */}
                   <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                     <ArrowRight size={20} className="text-yellow-500" />
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ================= PROCESS TIMELINE ================= */}
      <section className="py-24 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-6 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
              <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm">Our Process</span>
            </div>
            <h3 className="text-5xl md:text-6xl font-black text-white mb-4">
              How We Work
            </h3>
            <div className="w-24 h-1.5 bg-linear-to-r from-transparent via-yellow-500 to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your requirements and challenges", icon: <Users /> },
              { step: "02", title: "Design & Development", desc: "Architecture, PCB design, and prototyping", icon: <CircuitBoard /> },
              { step: "03", title: "Manufacturing", desc: "Bulk production with quality assurance", icon: <Factory /> },
              { step: "04", title: "Delivery & Support", desc: "Installation and ongoing support", icon: <Zap /> }
            ].map((item, index) => (
              <div key={index} className="relative h-full">
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-linear-to-r from-yellow-500/50 to-transparent"></div>
                )}
                
                <div className="relative bg-zinc-900 border border-zinc-800 p-8 rounded-xl hover:border-yellow-500/50 transition-all duration-300 group h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center group-hover:bg-yellow-500 transition-all duration-300">
                      {React.cloneElement(item.icon, { 
                        size: 24, 
                        className: "text-yellow-500 group-hover:text-black transition-colors"
                      })}
                    </div>
                    <div className="text-5xl font-black text-zinc-800 group-hover:text-yellow-500/20 transition-colors">
                      {item.step}
                    </div>
                  </div>
                  <h4 className="text-xl font-black text-white mb-2 group-hover:text-yellow-500 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll To Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 bg-yellow-500 text-black p-4 rounded-full shadow-2xl hover:bg-yellow-400 hover:scale-110 transition-all duration-300 group"
        title="Back to Top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* ================= FAQ SECTION ================= */}
      <section id="faq" className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row gap-16">
              
              {/* Left: FAQ */}
              <div className="flex-1">
                 <div className="inline-block mb-6 px-6 py-2 bg-yellow-500 text-black font-bold uppercase tracking-widest text-xs rounded-full shadow-lg">
                   Explore FAQ's
                 </div>
                 <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                   Frequently Asked <br/> 
                   <span className="text-yellow-500">Questions</span>
                 </h2>
                 <p className="text-zinc-400 mb-12 text-lg">
                   Find answers to common queries about our services, processes, and support.
                 </p>

                 <div className="space-y-4">
                    {[
                      { 
                        q: "Why should I choose IRK Innovations?", 
                        a: "With over 10 years of industry experience, we deliver end-to-end electronic solutions from concept to installation. Our industrial-grade quality, cost optimization, and global client base set us apart. We provide comprehensive support and maintain a 98% client satisfaction rate." 
                      },
                      { 
                        q: "What is your product development process?", 
                        a: "We follow a structured approach: consultation and requirement analysis, architecture and PCB design, prototyping and testing, DFM/DFA optimization, bulk manufacturing, and finally delivery with installation support. Every step is quality-controlled." 
                      },
                      { 
                        q: "Can you optimize costs for large-scale production?", 
                        a: "Absolutely. We specialize in BOM optimization and DFM/DFA to reduce manufacturing costs without compromising quality. Our bulk manufacturing capabilities allow us to offer competitive pricing for large orders." 
                      },
                      { 
                        q: "Do you handle international projects & sourcing?", 
                        a: "Yes! We serve clients globally and specialize in sourcing components from China and other international markets. We handle customs, shipping, and provide localized support through our partner network." 
                      }
                    ].map((faq, i) => (
                      <div 
                        key={i} 
                        className="bg-zinc-950 border border-zinc-800 rounded-lg hover:border-yellow-500/30 transition-all duration-300 overflow-hidden"
                      >
                        <button 
                          onClick={() => toggleFaq(i)}
                          className="w-full flex justify-between items-center p-6 text-left group"
                        >
                           <span className="text-lg font-bold text-white group-hover:text-yellow-500 transition-colors pr-4">
                             {faq.q}
                           </span>
                           <div className={`shrink-0 w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center transition-all duration-300 ${expandedFaq === i ? 'rotate-180 bg-yellow-400' : ''}`}>
                             {expandedFaq === i ? (
                               <Minus size={20} className="text-black" strokeWidth={3} />
                             ) : (
                               <Plus size={20} className="text-black" strokeWidth={3} />
                             )}
                           </div>
                        </button>
                        <div 
                          className={`transition-all duration-500 ease-in-out ${
                            expandedFaq === i 
                              ? 'max-h-96 opacity-100' 
                              : 'max-h-0 opacity-0'
                          } overflow-hidden`}
                        >
                          <div className="px-6 pb-6 text-zinc-400 leading-relaxed border-t border-zinc-900 pt-4">
                             {faq.a}
                          </div>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Right: Images */}
              <div className="flex-1 relative hidden lg:block">
                 <div className="relative grid grid-cols-2 gap-6 mt-24">
                    <div className="space-y-6">
                      <div className="relative overflow-hidden rounded-xl group">
                        <img 
                          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" 
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
                          alt="Electronics Testing" 
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                      </div>
                      <div className="relative overflow-hidden rounded-xl group">
                        <img 
                          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800&auto=format&fit=crop" 
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                          alt="Manufacturing" 
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                      </div>
                    </div>
                    <div className="space-y-6 pt-12">
                      <div className="relative overflow-hidden rounded-xl group">
                        <img 
                          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" 
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                          alt="PCB Design" 
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                      </div>
                      <div className="relative overflow-hidden rounded-xl group">
                        <img 
                          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" 
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
                          alt="Circuit Board" 
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                      </div>
                    </div>
                 </div>

                 {/* Decorative Element */}
                 <div className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl"></div>
                 <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl"></div>
              </div>

           </div>
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section id="projects" className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 pb-8 border-b border-zinc-800">
            <div>
              <div className="inline-block mb-3 px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
                <span className="text-yellow-500 font-bold tracking-widest uppercase text-xs">Our Work</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white">Featured Projects</h3>
            </div>
            <Link to="/projects" className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-yellow-500 font-bold uppercase tracking-widest transition-all duration-300 mt-4 md:mt-0 group">
               View All Projects
               <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apiProjects.length > 0 ? (
              apiProjects.slice(0, 6).map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))
            ) : (
              <div className="col-span-3 text-center py-20">
                <div className="inline-block p-8 bg-zinc-900 border border-zinc-800 rounded-xl">
                  <p className="text-zinc-500 text-lg">No projects to display at the moment.</p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-16 text-center md:hidden">
            <Link to="/projects" className="inline-flex items-center gap-3 bg-zinc-900 border border-zinc-700 text-white px-10 py-4 uppercase tracking-widest font-bold hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300 rounded-lg">
              View All Projects
              <ArrowRight size={18} />
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
                  <span className="font-bold text-lg">info@irkinnovations.com</span>
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