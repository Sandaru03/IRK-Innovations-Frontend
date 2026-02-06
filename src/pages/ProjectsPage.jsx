import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Filter, Search, ArrowRight, LayoutGrid, Cpu, Factory, Building2, Home } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/projects`);
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();

    const header = document.querySelector('header');
    if (header) setHeaderHeight(header.offsetHeight);
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'All' || (project.category && project.category === filter);
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = [
    { name: 'All', icon: <LayoutGrid size={16} /> },
    { name: 'Industrial', icon: <Factory size={16} /> },
    { name: 'Commercial', icon: <Building2 size={16} /> },
    { name: 'Residential', icon: <Home size={16} /> },
    { name: 'Electronics', icon: <Cpu size={16} /> }
  ];

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      <NavBar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 bg-[#143d2d] overflow-hidden" style={{ marginTop: headerHeight }}>
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">

          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight uppercase tracking-tighter">
            Our <span className="text-yellow-400 underline decoration-white/10">Projects</span>
          </h1>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover how we've helped industries transform with cutting-edge 
            electronics, automation, and industrial engineering solutions.
          </p>
        </div>
      </section>

      {/* ================= TOOLBAR (Filter & Search) ================= */}
      <section className="sticky top-[80px] z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs font-black text-gray-400 uppercase tracking-widest mr-2">Filter by:</span>
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setFilter(cat.name)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all ${
                    filter === cat.name 
                    ? 'bg-emerald-900 text-white shadow-lg shadow-emerald-900/20' 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {cat.icon}
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search projects..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-2xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= PROJECTS GRID ================= */}
      <section className="py-20 bg-white min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4">
          
          {loading ? (
            <div className="flex flex-col justify-center items-center h-64 space-y-4">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-yellow-500"></div>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Loading Excellence...</p>
            </div>
          ) : (
            <>
              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {filteredProjects.map((project) => (
                    <div key={project._id} className="group transition-all duration-500">
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-24">
                  <div className="inline-block p-12 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
                    <Search size={48} className="mx-auto text-gray-300 mb-4" />
                    <h3 className="text-2xl font-black text-gray-900 mb-2">No projects found</h3>
                    <p className="text-gray-500 mb-8 max-w-xs mx-auto">We couldn't find any projects matching your current search or filter criteria.</p>
                    <button 
                      onClick={() => {setFilter('All'); setSearchTerm('');}}
                      className="bg-emerald-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-800 transition-all"
                    >
                      Clear All Filters
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#143d2d] rounded-[3rem] p-10 md:p-16 text-white flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden isolate">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            
            <div className="text-center lg:text-left max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black mb-6">Have a custom project in mind?</h2>
              <p className="text-emerald-100 text-lg opacity-80 leading-relaxed">
                We specialize in turning unique ideas into high-performance industrial solutions. 
                Let's discuss how we can engineer your vision.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-yellow-400 text-emerald-950 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white transition-all shadow-xl shadow-yellow-400/20 text-center"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;