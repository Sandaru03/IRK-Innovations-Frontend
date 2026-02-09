import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, ExternalLink } from 'lucide-react';
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
      <NavBar position="fixed" />

      {/* ================= HERO SECTION ================= */}
      <div className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-zinc-900 text-white overflow-hidden">
        {/* Background Overlay Image (Blurred) */}
        <div className="absolute inset-0 z-0">
             <img src={project.mainImage} alt="Background" className="w-full h-full object-cover opacity-20 blur-xl scale-110" />
             <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/projects" className="inline-flex items-center text-zinc-400 hover:text-yellow-400 font-bold uppercase tracking-widest text-xs mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Projects
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
              {project.title}
            </h1>
            {project.shortDescription && (
                <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-3xl">
                    {project.shortDescription}
                </p>
            )}
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-20">
         
         {/* Main Image - Featured */}
         <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white mb-16 aspect-video bg-zinc-100 max-w-5xl mx-auto">
            <img 
                src={project.mainImage} 
                alt={project.title} 
                className="w-full h-full object-cover"
            />
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Description Column */}
            <div className="lg:col-span-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide border-l-4 border-yellow-400 pl-4">
                    About The Project
                </h2>
                <div className="prose prose-lg prose-gray max-w-none text-gray-600 leading-relaxed whitespace-pre-wrap">
                    {project.description}
                </div>
            </div>

            {/* Sidebar / Info Column */}
            <div className="lg:col-span-4 space-y-8">
                {project.liveLink && (
                    <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-2xl">
                        <h3 className="text-lg font-bold text-emerald-900 mb-4">Live Preview</h3>
                        <p className="text-emerald-700/80 mb-6 text-sm">
                            Check out the live version of this project.
                        </p>
                        <a 
                            href={project.liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex w-full items-center justify-center px-6 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-200 transform hover:-translate-y-1"
                        >
                            Visit Site <ExternalLink size={18} className="ml-2" />
                        </a>
                    </div>
                )}
            </div>
         </div>

         {/* ================= GALLERY SECTION ================= */}
         {project.detailImages && project.detailImages.length > 0 && (
            <div className="mt-24">
                <h2 className="text-3xl font-black text-gray-900 mb-10 text-center uppercase tracking-tight">
                    Project Gallery
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.detailImages.map((img, index) => (
                        <div 
                            key={index} 
                            className="group relative aspect-square bg-gray-100 rounded-2xl overflow-hidden cursor-zoom-in shadow-md hover:shadow-xl transition-all duration-300"
                            onClick={() => setActiveImage(img)}
                        >
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-10"></div>
                            <img 
                                src={img} 
                                alt={`Detail ${index + 1}`} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                <span className="bg-white/90 backdrop-blur text-gray-900 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
                                    View
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
         )}

      </div>
      
      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-zoom-out backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
        >
          <img 
            src={activeImage} 
            alt="Full view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProjectDetails;