import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, ExternalLink, Video, Calendar, Layers, MapPin, Share2, CircuitBoard } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/projects/${id}`);
        setProject(response.data);
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white">
        <h2 className="text-3xl font-black mb-4">PROJECT NOT FOUND</h2>
        <Link to="/projects" className="text-yellow-500 hover:text-yellow-400 flex items-center gap-2 font-bold uppercase tracking-widest">
          <ArrowLeft size={20} /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-zinc-950 font-sans text-zinc-300 min-h-screen selection:bg-yellow-500 selection:text-black">
      <NavBar />

      {/* Hero Header */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/60 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-zinc-950/30 z-0"></div>
        <img 
          src={project.mainImage} 
          alt={project.title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[20s]"
        />
        
        <div className="absolute bottom-0 left-0 w-full z-20 px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-7xl mx-auto">
            <Link to="/projects" className="inline-flex items-center text-yellow-500 hover:text-white font-bold uppercase tracking-widest text-sm mb-8 transition-colors">
              <ArrowLeft size={16} className="mr-2" /> Back to Projects
            </Link>
            
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white uppercase leading-none mb-6 tracking-tight">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap gap-6 text-sm font-bold uppercase tracking-wider text-zinc-400 border-t border-zinc-800 pt-6">
                 <div className="flex items-center gap-2">
                    <CircuitBoard className="text-yellow-500" size={18} />
                    <span>Electronics Design</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Calendar className="text-yellow-500" size={18} />
                    <span>{new Date(project.createdAt).getFullYear()}</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Layers className="text-yellow-500" size={18} />
                    <span>Completed</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
           
           {/* Main Content Area */}
           <div className="lg:col-span-8 space-y-16">
              
              {/* Project Description - Handles formatting from Admin Panel */}
              <section className="group">
                 <h2 className="text-2xl font-bold text-white mb-8 flex items-center uppercase tracking-wider">
                   <span className="w-1.5 h-8 bg-yellow-500 mr-4 transform origin-bottom group-hover:scale-y-125 transition-transform"></span>
                   Project Overview
                 </h2>
                 <div className="prose prose-lg prose-invert text-zinc-400 max-w-none leading-relaxed whitespace-pre-wrap">
                   {/* This whitespace-pre-wrap ensures paragraphs from your admin panel are respected */}
                   {project.description}
                 </div>

                 {project.liveLink && (
                    <div className="mt-10">
                       <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-bold uppercase tracking-widest hover:border-yellow-500 hover:text-yellow-500 hover:bg-zinc-900/50 transition-all group">
                          <ExternalLink size={18} className="mr-3 transition-transform group-hover:rotate-45" /> 
                          Visit Live Link
                       </a>
                    </div>
                 )}
              </section>

              {/* Video Section */}
              {project.video && (
                <section>
                  <h2 className="text-2xl font-bold text-white mb-8 flex items-center uppercase tracking-wider">
                     <span className="w-1.5 h-8 bg-yellow-500 mr-4"></span>
                     System Demonstration
                  </h2>
                  <div className="border border-zinc-800 bg-black aspect-video relative group overflow-hidden rounded-sm shadow-2xl shadow-black/50">
                    <video controls className="w-full h-full relative z-0">
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </section>
              )}

              {/* Gallery Section */}
              {project.detailImages && project.detailImages.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-white mb-8 flex items-center uppercase tracking-wider">
                    <span className="w-1.5 h-8 bg-yellow-500 mr-4"></span>
                    Gallery & Interfaces
                  </h2>
                  
                  {/* Gallery Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.detailImages.map((img, index) => (
                      <div 
                        key={index} 
                        className={`group relative overflow-hidden border border-zinc-800 cursor-zoom-in ${index % 3 === 0 ? 'md:col-span-2 aspect-video' : 'aspect-square'}`}
                        onClick={() => setActiveImage(img)}
                      >
                        <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                        <img 
                          src={img} 
                          alt={`Project detail ${index + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-xs font-bold text-yellow-500 uppercase tracking-widest">Figure {index + 1}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
           </div>

           {/* Sidebar - Project Specs */}
           <div className="lg:col-span-4 space-y-8">
              <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-sm sticky top-24 backdrop-blur-sm">
                 <h3 className="text-xl font-black text-white uppercase italic mb-8 border-b border-zinc-800 pb-4">
                    Technical Specs
                 </h3>
                 
                 <div className="space-y-6">
                    <div>
                       <span className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Project Type</span>
                       <span className="text-white font-medium">Custom Electronics & IoT</span>
                    </div>
                    <div>
                       <span className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Platform</span>
                       <span className="text-white font-medium">Embedded Systems / Web / Mobile</span>
                    </div>
                    <div>
                       <span className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Client Location</span>
                       <span className="text-white font-medium flex items-center gap-2">
                          <MapPin size={14} className="text-yellow-500" />
                          <span>{project.location || 'International / Local'}</span>
                       </span>
                    </div>
                    <div>
                       <span className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Status</span>
                       <span className="inline-flex items-center px-2 py-1 bg-yellow-500/10 text-yellow-500 text-xs font-bold rounded uppercase">
                          Deployed
                       </span>
                    </div>
                 </div>

                 <div className="mt-12 pt-8 border-t border-zinc-800">
                    <h4 className="text-sm font-bold text-white uppercase mb-4">Share Project</h4>
                    <div className="flex gap-4">
                       <button className="p-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full transition-colors">
                          <Share2 size={16} />
                       </button>
                    </div>
                 </div>
              </div>

              {/* Call to Action Box */}
              <div className="bg-yellow-500 p-8 text-black rounded-sm relative overflow-hidden group">
                 <div className="absolute -right-6 -top-6 bg-white/20 w-32 h-32 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                 <h3 className="text-2xl font-black uppercase italic mb-4 relative z-10">Need a Solution?</h3>
                 <p className="font-medium mb-6 text-zinc-900 relative z-10">
                    We design and manufacture customized electronics products for your specific problems.
                 </p>
                 <Link to="/contact" className="inline-block w-full bg-black text-white px-6 py-4 font-bold uppercase tracking-widest hover:bg-zinc-800 transition text-center relative z-10">
                    Get in Touch
                 </Link>
              </div>
           </div>

        </div>
      </div>
      
      {/* Lightbox Modal for Images */}
      {activeImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setActiveImage(null)}
        >
          <img 
            src={activeImage} 
            alt="Full view" 
            className="max-w-full max-h-screen object-contain"
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProjectDetails;