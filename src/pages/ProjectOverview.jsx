import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ArrowLeft, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ProjectOverview = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/projects');
      setProjects(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-300">
       <NavBar />

       {/* Hero / Header Section */}
       <div className="relative py-24 bg-zinc-900 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
             <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4">
               Our <span className="text-yellow-500">Projects</span>
             </h1>
             <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
               Explore our portfolio of industrial engineering and automation solutions.
             </p>
          </div>
       </div>

       {/* Toolbar (Placeholder for future functionality) */}
       <div className="border-b border-zinc-800 bg-black/50 backdrop-blur-sm sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-zinc-500">
                <Filter size={16} />
                <span>Filter by:</span>
                <span className="text-yellow-500 cursor-pointer">All</span>
                <span className="hover:text-white cursor-pointer transition">Industrial</span>
                <span className="hover:text-white cursor-pointer transition">Residential</span>
             </div>
             
             {/* Search */}
             <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-600" size={16} />
                <input 
                  type="text" 
                  placeholder="Search projects..." 
                  className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm rounded-full pl-10 pr-4 py-2 focus:outline-none focus:border-yellow-500 w-64 transition-colors"
                />
             </div>
          </div>
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center text-zinc-600 mt-10">
            <p className="text-xl">No projects found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProjectOverview;
