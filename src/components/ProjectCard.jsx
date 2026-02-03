import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project._id}`} className="block h-full">
      <div className="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group border border-zinc-100 dark:border-zinc-700 flex flex-col h-full">
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.mainImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <span className="text-white font-semibold flex items-center gap-2">View Details <ArrowRight size={16}/></span>
          </div>
        </div>
        
        <div className="p-5 flex flex-col grow">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 line-clamp-1 group-hover:text-indigo-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-3 h-[60px]">
            {project.description}
          </p>
          
          <div className="mt-auto pt-4 border-t border-gray-100 dark:border-zinc-700 flex justify-between items-center">
             <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">Read More</span>
             {project.liveLink && (
                <div onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-indigo-600 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
             )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
