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
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Not Found</h2>
        <Link to="/" className="text-blue-600 hover:underline flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 pb-20">
      
      {/* Navigation Bar */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center text-slate-600 hover:text-blue-600 transition font-medium">
            <ArrowLeft size={20} className="mr-2" /> Back to Home
          </Link>
          <div className="text-xl font-bold text-slate-900 tracking-tight">IRK <span className="text-blue-600">INNOVATIONS</span></div>
        </div>
      </nav>

      {/* Main Content Container - Document Style */}
      <div className="max-w-4xl mx-auto px-6 py-12 sm:px-8">
        
        {/* Header Section */}
        <header className="mb-12 border-b-2 border-slate-100 pb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-4 items-center">
            {project.liveLink && (
               <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-semibold hover:bg-blue-100 transition">
                 <ExternalLink size={18} className="mr-2" /> Live Demo
               </a>
            )}
            <span className="text-slate-500 text-sm">Published on {new Date(project.createdAt).toLocaleDateString()}</span>
          </div>
        </header>

        {/* Main Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-sm border border-slate-200">
          <img 
            src={project.mainImage} 
            alt={project.title} 
            className="w-full h-auto object-cover max-h-[600px]"
          />
        </div>

        {/* Description Section */}
        <section className="mb-16">
           <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
             <span className="w-10 h-1 bg-blue-600 mr-4 rounded-full"></span>
             Overview
           </h2>
           <div className="prose prose-lg text-slate-600 max-w-none whitespace-pre-wrap leading-relaxed space-y-4">
             {project.description}
           </div>
        </section>

        {/* Detail Images Gallery */}
        {project.detailImages && project.detailImages.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
              <span className="w-10 h-1 bg-blue-600 mr-4 rounded-full"></span>
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.detailImages.map((img, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition">
                  <img 
                    src={img} 
                    alt={`Detail ${index + 1}`} 
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Video Section */}
        {project.video && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
               <span className="w-10 h-1 bg-blue-600 mr-4 rounded-full"></span>
               Project Demonstration
            </h2>
            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-black aspect-video relative">
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
        <div className="mt-20 pt-10 border-t border-slate-200 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Interested in a similar solution?</h3>
          <p className="text-slate-600 mb-8">Contact us to discuss how we can engineer a solution for you.</p>
          <div className="flex justify-center gap-4">
            <Link to="/#contact" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-lg">
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetails;
