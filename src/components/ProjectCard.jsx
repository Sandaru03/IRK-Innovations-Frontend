import React from 'react';
import { ArrowUpRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-[#121212] overflow-hidden rounded-2xl border border-white/5 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] flex flex-col h-full">
      
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-[#121212] via-transparent to-transparent opacity-60 z-10 transition-opacity duration-300 group-hover:opacity-40"></div>
        
        <img
          src={project.mainImage}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />

        {/* Floating Category Tag */}
        <div className="absolute top-4 left-4 z-20">
           <span className="bg-yellow-500/90 backdrop-blur-sm text-black text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
             {project.location || 'Industrial'}
           </span>
        </div>

        {/* Overlay Icon */}
        <div className="absolute top-4 right-4 z-20 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
           <div className="bg-white p-2.5 rounded-full text-black shadow-xl">
              <ArrowUpRight size={20} />
           </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col grow relative z-20">
        
        <div className="flex items-center gap-4 text-xs text-zinc-400 mb-4 font-medium uppercase tracking-wide">
           <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-yellow-500" />
              <span>{new Date().getFullYear()}</span>
           </div>
           <div className="w-1 h-1 bg-zinc-700 rounded-full"></div>
           <div className="flex items-center gap-1.5">
              <User size={14} className="text-yellow-500" />
              <span>Client Project</span>
           </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-yellow-500 transition-colors line-clamp-2">
          {project.title}
        </h3>

        <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>

        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
            <Link 
              to={`/projects/${project._id}`} 
              className="text-white text-sm font-bold uppercase tracking-widest hover:text-yellow-500 transition-colors flex items-center gap-2 group/link"
            >
              View Case Study
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </Link>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
