import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group border border-zinc-100 dark:border-zinc-700">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:bg-zinc-200 transition-colors"
              title="View Code"
            >
              <Github className="w-5 h-5 text-zinc-900" />
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:bg-zinc-200 transition-colors"
              title="Live Demo"
            >
              <ExternalLink className="w-5 h-5 text-zinc-900" />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-3 h-[60px]">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack && project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
