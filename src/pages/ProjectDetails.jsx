import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, ExternalLink, Video, Calendar, User, MapPin } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

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
    <div className="bg-zinc-950 font-sans text-zinc-300 min-h-screen">
      <NavBar />

      {/* Hero Header */}
      <div className="relative h-[60vh] w-full overflow-hidden">
         <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/50 to-transparent z-10"></div>
         <img 
           src={project.mainImage} 
           alt={project.title} 
           className="w-full h-full object-cover"
         />
         <div className="absolute bottom-0 left-0 w-full z-20 px-4 sm:px-6 lg:px-8 pb-12">
            <div className="max-w-7xl mx-auto">
               <Link to="/projects" className="inline-flex items-center text-yellow-500 hover:text-yellow-400 font-bold uppercase tracking-widest text-sm mb-6 transition-transform hover:-translate-x-2">
                 <ArrowLeft size={16} className="mr-2" /> Back to Projects
               </Link>
               <h1 className="text-4xl md:text-7xl font-black text-white uppercase italic leading-none mb-6">
                 {project.title}
               </h1>
               
               <div className="flex flex-wrap gap-8 text-sm font-bold uppercase tracking-wider text-zinc-400">
                  <div className="flex items-center gap-2">
                     <Calendar className="text-yellow-500" size={18} />
                     <span>{new Date(project.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <User className="text-yellow-500" size={18} />
                     <span>Client Project</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <MapPin className="text-yellow-500" size={18} />
                     <span>{project.location || 'Colombo, LK'}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
               
               <section>
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center uppercase tracking-wider">
                    <span className="w-1.5 h-8 bg-yellow-500 mr-4"></span>
                    Project Overview
                  </h2>
                  <div className="prose prose-lg prose-invert text-zinc-400 max-w-none leading-relaxed">
                    {project.description}
                  </div>
                  
                  {project.liveLink && (
                     <div className="mt-8">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-3 bg-zinc-900 border border-zinc-800 text-white font-bold uppercase tracking-widest hover:border-yellow-500 hover:text-yellow-500 transition-all group">
                           <ExternalLink size={18} className="mr-2 transition-transform group-hover:rotate-45" /> 
                           Visit Live Project
                        </a>
                     </div>
                  )}
               </section>

               {project.video && (
                 <section>
                   <h2 className="text-2xl font-bold text-white mb-6 flex items-center uppercase tracking-wider">
                      <span className="w-1.5 h-8 bg-yellow-500 mr-4"></span>
                      Project Demonstration
                   </h2>
                   <div className="border border-zinc-800 bg-black aspect-video relative group overflow-hidden">
                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity z-10">
                        <div className="bg-yellow-500/90 text-black p-4 rounded-full shadow-[0_0_30px_rgba(234,179,8,0.5)]">
                           <Video size={32} fill="currentColor" />
                        </div>
                     </div>
                     <video controls className="w-full h-full relative z-0">
                       <source src={project.video} type="video/mp4" />
                       Your browser does not support the video tag.
                     </video>
                   </div>
                 </section>
               )}

               {project.detailImages && project.detailImages.length > 0 && (
                 <section>
                   <h2 className="text-2xl font-bold text-white mb-8 flex items-center uppercase tracking-wider">
                     <span className="w-1.5 h-8 bg-yellow-500 mr-4"></span>
                     Gallery
                   </h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {project.detailImages.map((img, index) => (
                       <div key={index} className="group relative overflow-hidden aspect-video border border-zinc-800">
                         <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-colors z-10 pointer-events-none"></div>
                         <img 
                           src={img} 
                           alt={`Detail ${index + 1}`} 
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                         />
                       </div>
                     ))}
                   </div>
                 </section>
               )}

            </div>

            {/* Sidebar (Optional Details) */}
            <div className="space-y-8">
               <div className="bg-zinc-900 border border-zinc-800 p-8">
                  <h3 className="text-xl font-bold text-white uppercase mb-6">Project Stats</h3>
                  <div className="space-y-4 text-sm">
                     <div className="flex justify-between py-2 border-b border-zinc-800">
                        <span className="text-zinc-500">Service Type</span>
                        <span className="text-white font-bold">Industrial Automation</span>
                     </div>
                     <div className="flex justify-between py-2 border-b border-zinc-800">
                        <span className="text-zinc-500">Duration</span>
                        <span className="text-white font-bold">3 Months</span>
                     </div>
                     <div className="flex justify-between py-2 border-b border-zinc-800">
                        <span className="text-zinc-500">Status</span>
                        <span className="text-yellow-500 font-bold">Completed</span>
                     </div>
                  </div>
               </div>

               <div className="bg-yellow-500 p-8 text-black text-center">
                  <h3 className="text-2xl font-black uppercase italic mb-4">Have a similar idea?</h3>
                  <p className="font-medium mb-6">Let's discuss how we can bring your industrial concepts to life.</p>
                  <Link to="/contact" className="inline-block w-full bg-black text-white px-6 py-3 font-bold uppercase tracking-widest hover:bg-zinc-800 transition">
                     Get a Quote
                  </Link>
               </div>
            </div>

         </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetails;
