import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, ExternalLink, Video, Calendar, Layers, MapPin, Share2, CircuitBoard, CheckCircle2 } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/projects/${id}`);
        setProject(response.data);
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();

    const header = document.querySelector('header');
    if (header) setHeaderHeight(header.offsetHeight);
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white space-y-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-yellow-400"></div>
        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Loading Project...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
        <h2 className="text-3xl font-black mb-4">PROJECT NOT FOUND</h2>
        <Link to="/projects" className="bg-emerald-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-800 transition-all flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      <NavBar />

      {/* ================= HERO HEADER ================= */}
      <div className="relative pt-32 pb-20 bg-[#143d2d] overflow-hidden" style={{ marginTop: headerHeight }}>
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Link to="/projects" className="inline-flex items-center text-emerald-100 hover:text-yellow-400 font-bold uppercase tracking-widest text-xs mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
                <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                <p className="text-yellow-400 font-bold uppercase tracking-widest text-xs">{project.category || 'Industrial Engineering'}</p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap gap-6 text-sm font-bold uppercase tracking-wider text-emerald-100/60 border-t border-white/10 pt-6">
                 <div className="flex items-center gap-2">
                    <CircuitBoard className="text-yellow-400" size={18} />
                    <span>Electronics Design</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Calendar className="text-yellow-400" size={18} />
                    <span>{new Date(project.createdAt).getFullYear()}</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Layers className="text-yellow-400" size={18} />
                    <span>Completed</span>
                 </div>
              </div>
            </div>

            {/* Hero Image Card */}
            <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-yellow-400 to-emerald-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                <div className="relative rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl aspect-video">
                    <img 
                      src={project.mainImage} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[20s]"
                    />
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
           
           {/* Main Content Area */}
           <div className="lg:col-span-8 space-y-16">
              
              {/* Project Description */}
              <section className="group">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600">
                        <Layers size={24} />
                    </div>
                    <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Project Overview</h2>
                 </div>
                 
                 <div className="prose prose-lg prose-gray max-w-none leading-relaxed whitespace-pre-wrap text-gray-600">
                   {project.description}
                 </div>

                 {project.liveLink && (
                    <div className="mt-10">
                       <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-emerald-900 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-yellow-400 hover:text-emerald-950 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                          <ExternalLink size={18} className="mr-3" /> 
                          Visit Live Project
                       </a>
                    </div>
                 )}
              </section>

              {/* Video Section */}
              {project.video && (
                <section>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600">
                        <Video size={24} />
                    </div>
                    <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">System Demo</h2>
                 </div>
                  <div className="bg-black rounded-3xl overflow-hidden shadow-2xl ring-4 ring-gray-100">
                    <div className="aspect-video relative group">
                        <video controls className="w-full h-full relative z-0">
                        <source src={project.video} type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                    </div>
                  </div>
                </section>
              )}

              {/* Gallery Section */}
              {project.detailImages && project.detailImages.length > 0 && (
                <section>
                   <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                        <Layers size={24} />
                    </div>
                    <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Gallery & Interfaces</h2>
                 </div>
                  
                  {/* Gallery Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.detailImages.map((img, index) => (
                      <div 
                        key={index} 
                        className={`group relative overflow-hidden rounded-2xl shadow-lg cursor-zoom-in ${index % 3 === 0 ? 'md:col-span-2 aspect-video' : 'aspect-square'}`}
                        onClick={() => setActiveImage(img)}
                      >
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                        <img 
                          src={img} 
                          alt={`Project detail ${index + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                          <p className="text-xs font-bold text-gray-900 uppercase tracking-widest">View Image</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
           </div>

           {/* Sidebar - Project Specs */}
           <div className="lg:col-span-4 space-y-8">
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl sticky top-32">
                 <h3 className="text-xl font-black text-gray-900 uppercase mb-8 border-b-2 border-yellow-400 pb-4 inline-block">
                    Technical Specs
                 </h3>
                 
                 <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <div className="mt-1 text-emerald-600"><CircuitBoard size={20} /></div>
                       <div>
                          <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Project Type</span>
                          <span className="text-gray-900 font-bold text-lg">Custom Electronics & IoT</span>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="mt-1 text-emerald-600"><Layers size={20} /></div>
                       <div>
                          <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Platform</span>
                          <span className="text-gray-900 font-bold text-lg">Embedded Systems / Web / Mobile</span>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="mt-1 text-emerald-600"><MapPin size={20} /></div>
                        <div>
                           <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Client Location</span>
                           <span className="text-gray-900 font-bold text-lg">{project.location || 'International / Local'}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mt-4 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg w-fit">
                        <CheckCircle2 size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">Successfully Deployed</span>
                    </div>
                 </div>

                 <div className="mt-10 pt-8 border-t border-gray-200">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Share Project</h4>
                    <div className="flex gap-4">
                       <button className="p-3 bg-white border border-gray-200 hover:border-emerald-500 hover:text-emerald-600 text-gray-400 rounded-full transition-all shadow-sm hover:shadow-md">
                          <Share2 size={18} />
                       </button>
                    </div>
                 </div>
              </div>

              {/* Call to Action Box */}
              <div className="bg-[#143d2d] p-8 text-white rounded-3xl relative overflow-hidden group shadow-2xl">
                 <div className="absolute -right-10 -bottom-10 bg-yellow-400/20 w-40 h-40 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                 <h3 className="text-2xl font-black uppercase mb-4 relative z-10">Need a Solution?</h3>
                 <p className="font-medium mb-8 text-emerald-100/80 relative z-10 leading-relaxed">
                    We design and manufacture customized electronics products for your specific problems.
                 </p>
                 <Link to="/contact" className="inline-block w-full bg-yellow-400 text-emerald-950 px-6 py-4 font-black uppercase tracking-widest hover:bg-white transition-all text-center rounded-xl relative z-10 shadow-lg">
                    Get in Touch
                 </Link>
              </div>
           </div>

        </div>
      </div>
      
      {/* Lightbox Modal for Images */}
      {activeImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-zoom-out backdrop-blur-sm"
          onClick={() => setActiveImage(null)}
        >
          <img 
            src={activeImage} 
            alt="Full view" 
            className="max-w-full max-h-screen object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProjectDetails;