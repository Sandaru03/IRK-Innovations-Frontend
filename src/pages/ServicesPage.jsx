import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Layout, Code, Smartphone, Rocket, Search, Share2 } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Layout className="w-8 h-8 text-yellow-500" />,
      title: "Web Design",
      description: "Modern, responsive, and user-centric designs that capture your brand's essence."
    },
    {
      icon: <Code className="w-8 h-8 text-yellow-500" />,
      title: "Web Development",
      description: "High-performance web applications built with the latest technologies like React and Node.js."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-yellow-500" />,
      title: "Mobile Solutions",
      description: "Mobile-first experiences that engage users on the go across all devices."
    },
    {
      icon: <Search className="w-8 h-8 text-yellow-500" />,
      title: "SEO Optimization",
      description: "Boosting your online visibility to reach your target audience more effectively."
    },
    {
      icon: <Share2 className="w-8 h-8 text-yellow-500" />,
      title: "Digital Marketing",
      description: "Strategic campaigns that drive growth and maximize your digital presence."
    },
    {
      icon: <Rocket className="w-8 h-8 text-yellow-500" />,
      title: "Performance Tuning",
      description: "Optimizing your existing applications for maximum speed and efficiency."
    }
  ];

  return (
    <div className="bg-zinc-950 min-h-screen text-white">
      <NavBar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8">
          Our <span className="text-yellow-500">Services</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          We provide a wide range of digital services to help your business thrive in the modern world.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 bg-zinc-900 border border-yellow-500/10 hover:border-yellow-500/40 transition-all group">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesPage;
