import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, ExternalLink, Video } from 'lucide-react';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

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
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950">
        <h2 className="text-2xl font-bold text-white mb-4">Project Not Found</h2>
        <Link to="/" className="text-yellow-500 hover:text-yellow-400 flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-300 pb-20">
      
      {/* Navigation Bar */}
      <nav className="border-b border-zinc-800 bg-zinc-950 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center text-zinc-400 hover:text-yellow-500 transition font-medium">
            <ArrowLeft size={20} className="mr-2" /> Back to Home
          </Link>
          <div className="text-xl font-bold text-white tracking-tight">VOLT<span className="text-yellow-500">ENG</span></div>
        </div>
      </nav>

      {/* Main Content Container - Document Style */}
      <div className="max-w-4xl mx-auto px-6 py-12 sm:px-8">
        
        {/* Header Section */}
        <header className="mb-12 border-b border-zinc-800 pb-8">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight uppercase italic">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-4 items-center">
            {project.liveLink && (
               <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-yellow-500 text-black rounded-sm font-bold hover:bg-yellow-400 transition">
                 <ExternalLink size={18} className="mr-2" /> Live Demo
               </a>
            )}
            <span className="text-zinc-500 text-sm font-mono">PUBLISHED: {new Date(project.createdAt).toLocaleDateString()}</span>
          </div>
        </header>

        {/* Main Hero Image */}
        <div className="mb-12 border border-zinc-800">
          <img 
            src={project.mainImage} 
            alt={project.title} 
            className="w-full h-auto object-cover max-h-[600px] grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* Description Section */}
        <section className="mb-16">
           <h2 className="text-2xl font-bold text-white mb-6 flex items-center uppercase tracking-wider">
             <span className="w-2 h-8 bg-yellow-500 mr-4"></span>
             Overview
           </h2>
           <div className="prose prose-lg prose-invert text-zinc-400 max-w-none whitespace-pre-wrap leading-relaxed space-y-4">
             {project.description}
           </div>
        </section>

        {/* Detail Images Gallery */}
        {project.detailImages && project.detailImages.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center uppercase tracking-wider">
              <span className="w-2 h-8 bg-yellow-500 mr-4"></span>
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.detailImages.map((img, index) => (
                <div key={index} className="border border-zinc-800 hover:border-yellow-500/50 transition duration-300">
                  <img 
                    src={img} 
                    alt={`Detail ${index + 1}`} 
                    className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Video Section */}
        {project.video && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center uppercase tracking-wider">
               <span className="w-2 h-8 bg-yellow-500 mr-4"></span>
               Project Demonstration
            </h2>
            <div className="border border-zinc-800 bg-black aspect-video relative">
              <video 
                controls 
                className="w-full h-full"
                src={project.video}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </section>
        )}

        {/* Footer CTA */}
        <div className="mt-20 pt-10 border-t border-zinc-800 text-center">
          <h3 className="text-2xl font-bold text-white mb-4 uppercase italic">Interested in a similar solution?</h3>
          <p className="text-zinc-500 mb-8">Contact us to discuss how we can engineer a solution for you.</p>
          <div className="flex justify-center gap-4">
            <Link to="/#contact" className="px-8 py-3 bg-yellow-500 text-black font-bold uppercase tracking-widest hover:bg-yellow-400 transition shadow-[0_0_15px_rgba(234,179,8,0.2)]">
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetails;
