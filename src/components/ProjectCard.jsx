import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project._id}`} className="block h-full group">
      <div className="bg-zinc-900 border border-zinc-800 rounded-none overflow-hidden hover:border-yellow-500 transition-all duration-300 h-full flex flex-col relative">
        
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.mainImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/20 transition-colors duration-300 mix-blend-overlay"></div>
        </div>
        
        {/* Content */}
        <div className="p-6 flex flex-col grow relative">
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

          <h3 className="text-xl font-black text-white mb-2 uppercase italic tracking-wide group-hover:text-yellow-500 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-zinc-500 text-sm mb-6 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          <div className="mt-auto flex items-center justify-between border-t border-zinc-800 pt-4">
             <span className="text-xs font-bold text-yellow-500 uppercase tracking-widest flex items-center">
               Specs <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform"/>
             </span>
             
             {project.liveLink && (
               <div className="flex gap-2">
                 <button className="text-zinc-500 hover:text-white transition-colors" title="View Live">
                    <ExternalLink size={16} />
                 </button>
               </div>
             )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
