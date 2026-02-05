import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { 
  Cpu, 
  Settings, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Layers, 
  Box,
  Factory
} from 'lucide-react';

const ServicesPage = () => {
  // 1. Core Services based on the image
  const mainServices = [
    {
      title: "End-to-End Customized Electronics",
      description: "We need your problem only. We will give you the solution. From design to manufacturing and installation, we follow standard product development steps.",
      icon: <Cpu className="w-10 h-10 text-yellow-500" />,
    },
    {
      title: "Electronics Engineering Consultation",
      description: "10+ years of industry experience in Embedded products design and Manufacturing. Experts in architecture, testing, and optimization.",
      icon: <Settings className="w-10 h-10 text-yellow-500" />,
    },
    {
      title: "Tech Products Sourcing",
      description: "Need to source specific tech products? We have established networks to source high-quality components and products directly from China.",
      icon: <Search className="w-10 h-10 text-yellow-500" />,
    }
  ];

  // 2. Full Workflow Steps (Detailed)
  const fullWorkflow = [
    { step: "Gather Information", detail: "Requirements collection" },
    { step: "Proof of Concept", detail: "Prototype development" },
    { step: "EVT", detail: "Engineering Validation (Circuit Finalize)" },
    { step: "DVT", detail: "Design Validation (Mechanical Parts)" },
    { step: "Molding", detail: "Plastic parts molding" },
    { step: "PVT / Mini Bulk", detail: "Manufacturing process finalize" },
    { step: "Bulk Production", detail: "Batch wise production" }
  ];

  // 3. Consultation Points
  const consultPoints = [
    "Electronics products architecture design",
    "Products testing",
    "Cost optimization / BOM optimization",
    "Design for Manufacturing (DFM)",
    "Design for Assembly (DFA)",
    "Assembly process optimization",
    "Electronics components sourcing",
    "Electronics bulk manufacturing"
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      <NavBar />
      
      {/* Hero Header */}
      <div className="pt-32 pb-16 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase">
          Our <span className="text-yellow-500 underline decoration-white/10">Services</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Comprehensive electronics solutions from concept to mass production.
        </p>
      </div>

      {/* Main Service Highlights */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {mainServices.map((s, i) => (
          <div key={i} className="p-10 bg-zinc-900/50 border-2 border-zinc-800 hover:border-yellow-500 transition-all duration-500 group rounded-3xl">
            <div className="bg-black w-20 h-20 flex items-center justify-center rounded-2xl mb-8 group-hover:rotate-12 transition-transform">
              {s.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 leading-tight">{s.title}</h3>
            <p className="text-zinc-400 leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>

      {/* Development Timeline (Modern Visual) */}
      <div className="bg-zinc-900/30 py-24 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Zap className="text-yellow-500" /> Standard Product Development Steps
          </h2>
          
          <div className="relative overflow-x-auto pb-8">
            <div className="flex flex-now-with gap-4 min-w-[1200px]">
              {fullWorkflow.map((item, index) => (
                <div key={index} className="flex-1">
                  <div className="bg-zinc-800 p-6 rounded-2xl border border-zinc-700 h-full relative group hover:bg-yellow-500 transition-colors duration-300">
                    <span className="text-yellow-500 font-mono text-sm mb-4 block group-hover:text-black">STEP 0{index + 1}</span>
                    <h4 className="font-bold text-lg mb-2 group-hover:text-black">{item.step}</h4>
                    <p className="text-xs text-zinc-400 group-hover:text-black/80">{item.detail}</p>
                    {index !== fullWorkflow.length - 1 && (
                      <ArrowRight className="absolute -right-3 top-1/2 -translate-y-1/2 text-zinc-600 hidden lg:block" size={24} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 p-6 border-l-4 border-yellow-500 bg-zinc-900/80 rounded-r-xl">
            <p className="text-sm text-zinc-300">
              <span className="text-yellow-500 font-bold uppercase mr-2">Quick Note:</span> 
              If the product doesn't need customized enclosures, the project is simplified: 
              <span className="text-white italic ml-1">Gathering → Prototype → EVT → Mini Bulk → Bulk Production.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Consultancy Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold italic leading-none">
              Expert <span className="text-yellow-500">Consultation</span> Services
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              With over 10 years in the industry, we provide technical advisory across the entire production lifecycle.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {consultPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-zinc-900/40 rounded-xl border border-zinc-800 hover:bg-zinc-800 transition-colors">
                  <CheckCircle2 className="text-yellow-500 shrink-0" size={18} />
                  <span className="text-sm font-medium text-zinc-200">{point}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-zinc-900 p-12 rounded-3xl border border-zinc-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-yellow-500 rounded-lg">
                  <Factory className="text-black" />
                </div>
                <h3 className="text-2xl font-bold">China Sourcing</h3>
              </div>
              <p className="text-zinc-400 mb-8">
                We bridge the gap between you and the world's largest manufacturing hub. Get quality tech products at the best prices.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2 text-sm text-zinc-300">• Component Quality Verification</li>
                <li className="flex items-center gap-2 text-sm text-zinc-300">• Direct Factory Communication</li>
                <li className="flex items-center gap-2 text-sm text-zinc-300">• Global Shipping Logistics</li>
              </ul>
              <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-yellow-500 transition-all active:scale-95">
                Contact for Sourcing
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesPage;