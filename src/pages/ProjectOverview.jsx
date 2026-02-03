import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

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
       {/* Navigation Bar */}
       <nav className="border-b border-zinc-800 bg-zinc-950 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center text-zinc-400 hover:text-yellow-500 transition font-medium">
            <ArrowLeft size={20} className="mr-2" /> Back to Home
          </Link>
          <div className="text-xl font-bold text-white tracking-tight">VOLT<span className="text-yellow-500">ENG</span></div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-black text-white uppercase italic tracking-wider mb-8">All Projects</h1>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center text-zinc-600 mt-10">
            <p>No projects found. Check back later!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectOverview;
