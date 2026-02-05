import React from 'react';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-zinc-900 overflow-hidden transition-all duration-500 h-full flex flex-col hover:shadow-2xl hover:shadow-yellow-500/20">
      
      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-yellow-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 z-30"></div>

      {/* Image Section */}
      <div className="relative h-80 overflow-hidden">
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/60 to-transparent z-10"></div>
        
        {/* Image */}
        <img
          src={project.mainImage}
          alt={project.title}
          className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-105"
        />



        {/* Scan Line Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
          <div className="absolute inset-0 bg-linear-to-b from-yellow-500/0 via-yellow-500/10 to-yellow-500/0 animate-scan"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 flex flex-col grow bg-zinc-900 border-l-2 border-r-2 border-b-2 border-zinc-800 group-hover:border-yellow-500/30 transition-all duration-500">
        
        {/* Meta Info */}
        <div className="flex items-center gap-4 mb-5">
           <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500">
              <Calendar size={13} className="text-yellow-500" />
              <span>{new Date().getFullYear()}</span>
           </div>
           {project.location && (
             <>
               <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
               <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500">
                  <MapPin size={13} className="text-yellow-500" />
                  <span className="line-clamp-1">{project.location}</span>
               </div>
             </>
           )}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-black text-white mb-4 leading-tight group-hover:text-yellow-500 transition-colors duration-300 line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3 grow">
          {project.description}
        </p>

        {/* Separator */}
        <div className="relative w-full h-px bg-zinc-800 mb-6">
          <div className="absolute left-0 top-0 h-px bg-yellow-500 w-0 group-hover:w-full transition-all duration-700"></div>
        </div>

        {/* CTA Button */}
        <Link 
          to={`/projects/${project._id}`} 
          className="group/link inline-flex items-center gap-3 text-white hover:text-yellow-500 transition-colors duration-300"
        >
          <span className="font-black uppercase tracking-widest text-sm">
            View Details
          </span>
          <div className="relative w-10 h-10 border-2 border-white group-hover/link:border-yellow-500 flex items-center justify-center overflow-hidden transition-colors duration-300">
            {/* Background slide effect */}
            <div className="absolute inset-0 bg-yellow-500 transform translate-x-full group-hover/link:translate-x-0 transition-transform duration-300"></div>
            {/* Icon */}
            <ArrowRight 
              size={18} 
              className="relative z-10 text-white group-hover/link:text-black transform group-hover/link:translate-x-1 transition-all duration-300" 
            />
          </div>
        </Link>

      </div>

      {/* Side Accent Line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-yellow-500/0 via-yellow-500 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    </div>
  );
};

export default ProjectCard;