import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="group flex flex-col h-full bg-transparent">
      
      {/* Image Section - Large Rounded Corners */}
      <div className="relative h-64 w-full overflow-hidden rounded-[32px] mb-6 shadow-sm">
        <img
          src={project.mainImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col grow px-2">
        
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Read More Link */}
        <Link 
          to={`/projects/${project._id}`} 
          className="mt-auto inline-flex items-center gap-2 text-[#143d2d] font-bold text-sm hover:gap-3 transition-all duration-300"
        >
          Read More <ArrowRight size={18} />
        </Link>
      </div>

    </div>
  );
};

export default ProjectCard;