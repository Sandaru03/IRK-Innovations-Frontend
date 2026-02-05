import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { 
  Award, 
  Users, 
  Lightbulb, 
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Target,
  Zap
} from 'lucide-react';

const AboutPage = () => {
  // Company stats
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "300+", label: "Units Deployed" },
    { number: "50+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  // Core values
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: "Innovation First",
      description: "We push boundaries with cutting-edge technology and creative solutions."
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-500" />,
      title: "Problem Solvers",
      description: "Bring us your challenges. We deliver complete, practical solutions."
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Quality Assurance",
      description: "Every product undergoes rigorous testing and validation processes."
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      title: "Client Partnership",
      description: "We work alongside you from concept to deployment and beyond."
    }
  ];

  // Expertise areas
  const expertise = [
    "Embedded Systems Design",
    "IoT & Smart Automation",
    "Industrial Control Systems",
    "Product Architecture",
    "Manufacturing Optimization",
    "China Sourcing Networks"
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      <NavBar />
      
      {/* Hero Header */}
      <div className="pt-32 pb-16 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase">
          About <span className="text-yellow-500 underline decoration-white/10">Us</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Customized electronics products design and manufacturing with over a decade of proven industry experience.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto px-4 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="p-8 bg-zinc-900/50 border-2 border-zinc-800 hover:border-yellow-500 transition-all duration-500 rounded-2xl text-center group">
              <div className="text-4xl md:text-5xl font-black text-yellow-500 mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-zinc-400 uppercase tracking-wider font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-zinc-900/30 py-24 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="text-yellow-500" size={32} />
                <h2 className="text-4xl font-bold">Our Mission</h2>
              </div>
              <p className="text-zinc-300 text-lg leading-relaxed">
                To empower businesses with innovative electronics solutions that solve real-world problems. We transform complex challenges into simple, reliable, and cost-effective products.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                From concept to mass production, we handle every step of the product development lifecycle. Our expertise spans embedded systems, IoT automation, industrial controls, and smart technologies.
              </p>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Zap className="text-yellow-500" size={20} />
                  Our Expertise
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {expertise.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                      <CheckCircle2 className="text-yellow-500 shrink-0" size={16} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl blur opacity-20"></div>
              <div className="relative bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
                <h3 className="text-2xl font-bold mb-6">What Sets Us Apart</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="p-3 bg-yellow-500 rounded-lg h-fit">
                      <TrendingUp className="text-black" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Complete Solution Provider</h4>
                      <p className="text-sm text-zinc-400">We need your problem only. We deliver the complete solution - design, manufacturing, and installation.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="p-3 bg-yellow-500 rounded-lg h-fit">
                      <Award className="text-black" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Industry Experience</h4>
                      <p className="text-sm text-zinc-400">Over 10 years of proven expertise in embedded products design and manufacturing.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="p-3 bg-yellow-500 rounded-lg h-fit">
                      <Users className="text-black" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Global Network</h4>
                      <p className="text-sm text-zinc-400">Direct access to manufacturing networks in China for quality components and products.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="h-8 w-1 bg-yellow-500"></span>
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <div key={i} className="p-8 bg-zinc-900/50 border-2 border-zinc-800 hover:border-yellow-500 transition-all duration-500 rounded-3xl group">
              <div className="bg-black w-16 h-16 flex items-center justify-center rounded-2xl mb-6 group-hover:rotate-12 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-y border-yellow-500/20 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Bring Your Idea to Life?
          </h2>
          <p className="text-zinc-400 mb-8 text-lg">
            Let's discuss how we can turn your vision into a market-ready product.
          </p>
          <Link to="/contact" className="inline-block bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl hover:bg-white transition-all active:scale-95">
            Get in Touch
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;