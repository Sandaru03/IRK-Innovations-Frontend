import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Filter, Search } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'All' || (project.category && project.category === filter);
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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

       {/* Toolbar */}
       <div className="border-b border-zinc-800 bg-black/50 backdrop-blur-sm sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-zinc-500">
                <Filter size={16} />
                <span className="mr-2">Filter:</span>
                {['All', 'Industrial', 'Residential', 'Commercial'].map((category) => (
                  <span 
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`cursor-pointer transition-colors ${filter === category ? 'text-yellow-500' : 'hover:text-white'}`}
                  >
                    {category}
                  </span>
                ))}
             </div>
             
             {/* Search */}
             <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-600" size={16} />
                <input 
                  type="text" 
                  placeholder="Search projects..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm rounded-full pl-10 pr-4 py-2 focus:outline-none focus:border-yellow-500 w-64 transition-colors"
                />
             </div>
          </div>
       </div>

       {/* Projects Grid */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {loading ? (
             <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
             </div>
          ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.length > 0 ? (
                   filteredProjects.map((project) => (
                      <ProjectCard key={project._id} project={project} />
                   ))
                ) : (
                   <div className="col-span-full text-center py-20">
                      <div className="inline-block p-8 bg-zinc-900 border border-zinc-800 rounded-xl">
                         <p className="text-zinc-500 text-lg">No projects match your criteria.</p>
                         <button 
                            onClick={() => {setFilter('All'); setSearchTerm('');}}
                            className="mt-4 text-yellow-500 hover:text-yellow-400 font-bold uppercase tracking-widest text-sm"
                         >
                            Clear Filters
                         </button>
                      </div>
                   </div>
                )}
             </div>
          )}
       </div>

       <Footer />
    </div>
  );
};

export default ProjectsPage;
