import React from 'react';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-linear-to-br from-zinc-900 to-zinc-950 overflow-hidden transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
      
      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-yellow-500/0 to-transparent group-hover:via-yellow-500 transition-all duration-700 z-20"></div>
      
      {/* Side Border Glow */}
      <div className="absolute inset-0 border border-zinc-800 group-hover:border-yellow-500/30 transition-all duration-500 rounded-xl"></div>

      {/* Image Section */}
      <div className="relative h-64 overflow-hidden rounded-t-xl">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-linear-to-br from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/20 group-hover:to-transparent transition-all duration-700 z-10"></div>
        
        {/* Image */}
        <img
          src={project.mainImage}
          alt={project.title}
          className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
        />

        {/* Tech Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 z-10 transition-opacity duration-500" style={{
          backgroundImage: 'linear-gradient(rgba(234, 179, 8, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(234, 179, 8, 0.3) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>



        {/* Diagonal Corner Accent */}
        <div className="absolute top-0 right-0 w-0 h-0 border-t-50 border-t-transparent border-r-50 border-r-yellow-500/0 group-hover:border-r-yellow-500/20 transition-all duration-500 z-20"></div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col grow relative bg-linear-to-b from-zinc-900/50 to-zinc-950 rounded-b-xl">
        
        {/* Decorative Line */}
        <div className="absolute top-0 left-0 right-0 h-px">
          <div className="h-full bg-linear-to-r from-transparent via-zinc-800 to-transparent group-hover:via-yellow-500/50 transition-all duration-700"></div>
        </div>

        {/* Meta Info */}
        <div className="flex items-center gap-3 mb-4">
           <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-500 group-hover:text-yellow-500 transition-colors">
              <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
              <Calendar size={11} className="text-yellow-500" />
              <span>{new Date().getFullYear()}</span>
           </div>
           {project.location && (
             <>
               <div className="w-px h-3 bg-zinc-700"></div>
               <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-500">
                  <MapPin size={11} className="text-yellow-500" />
                  <span className="line-clamp-1">{project.location}</span>
               </div>
             </>
           )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-black text-white mb-3 leading-tight group-hover:text-yellow-500 transition-colors duration-300 line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3 grow group-hover:text-zinc-300 transition-colors">
          {project.description}
        </p>

        {/* Divider */}
        <div className="relative w-full h-px bg-zinc-800 mb-5">
          <div className="absolute left-0 top-0 h-px bg-yellow-500 w-0 group-hover:w-full transition-all duration-700"></div>
        </div>

        {/* CTA Button */}
        <Link 
          to={`/projects/${project._id}`} 
          className="mt-auto group/btn relative inline-flex items-center gap-3 overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-yellow-500/10 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-out rounded"></div>
          
          {/* Button Content */}
          <div className="relative flex items-center gap-3">
            <span className="text-white group-hover/btn:text-yellow-500 font-black uppercase tracking-widest text-xs transition-colors duration-300">
              Explore Project
            </span>
            <div className="w-8 h-8 border border-zinc-700 group-hover/btn:border-yellow-500 flex items-center justify-center transition-all duration-300 group-hover/btn:bg-yellow-500/10 rounded">
              <ArrowRight 
                size={14} 
                className="text-zinc-500 group-hover/btn:text-yellow-500 transform group-hover/btn:translate-x-1 transition-all duration-300" 
              />
            </div>
          </div>
        </Link>

        {/* Bottom Corner Detail */}
        <div className="absolute bottom-0 right-0 w-12 h-12 border-r border-b border-zinc-800 group-hover:border-yellow-500/30 transition-colors duration-500 rounded-br-xl"></div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl">
        <div className="absolute inset-0 bg-linear-to-br from-yellow-500/5 via-transparent to-yellow-500/5"></div>
      </div>

    </div>
  );
};

export default ProjectCard;