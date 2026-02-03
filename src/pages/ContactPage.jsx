import React, { useState } from 'react';
import axios from 'axios';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { toast } from 'react-toastify';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      toast.success(response.data.message || 'Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to send message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-300">
      <NavBar />
      
      {/* Header */}
      <div className="relative py-20 bg-zinc-900 overflow-hidden border-b border-zinc-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4">
               Get In <span className="text-yellow-500">Touch</span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Our engineering team is ready to assist you.
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Section */}
          <div className="space-y-12">
            <div>
               <h2 className="text-2xl font-bold text-white uppercase tracking-wider mb-6">Contact Information</h2>
               <div className="space-y-8">
                  {[
                     { icon: Phone, title: "Phone", content: "+94 76 537 6106", sub: "Mon-Fri 9am-6pm" },
                     { icon: Mail, title: "Email", content: "info@volteng.com", sub: "Online support 24/7" },
                     { icon: MapPin, title: "Office", content: "No. 123, Innovation Drive", sub: "Colombo, Sri Lanka" }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-6 group">
                        <div className="bg-zinc-900 p-4 border border-zinc-800 group-hover:border-yellow-500 transition-colors">
                           <item.icon className="text-yellow-500" size={24} />
                        </div>
                        <div>
                           <h3 className="text-white font-bold text-lg">{item.title}</h3>
                           <p className="text-zinc-300 text-lg font-medium">{item.content}</p>
                           <p className="text-zinc-500 text-sm">{item.sub}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="bg-yellow-500 p-8 text-black relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="text-3xl font-black uppercase italic mb-4">Urgent Inquiry?</h3>
                 <p className="font-bold mb-6 text-lg border-b border-black/20 pb-6">Skip the form and call our direct engineering hotline.</p>
                 <a href="tel:+94765376106" className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                    <Phone size={20} /> Call Now
                 </a>
               </div>
               <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/3 -translate-y-1/3">
                  <Phone size={300} />
               </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 lg:p-12 relative">
             <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-yellow-500 to-transparent"></div>
             <h2 className="text-2xl font-bold text-white uppercase tracking-wider mb-8">Send us a Message</h2>
             
             <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                      <label className="block text-xs font-bold text-yellow-500 uppercase tracking-widest mb-2">Name</label>
                      <input 
                         type="text" name="name" value={formData.name} onChange={handleChange} required
                         className="w-full bg-zinc-950 border border-zinc-800 text-white px-4 py-3 focus:border-yellow-500 focus:outline-none transition-colors"
                         placeholder="Your Name"
                      />
                   </div>
                   <div>
                      <label className="block text-xs font-bold text-yellow-500 uppercase tracking-widest mb-2">Email</label>
                      <input 
                         type="email" name="email" value={formData.email} onChange={handleChange} required
                         className="w-full bg-zinc-950 border border-zinc-800 text-white px-4 py-3 focus:border-yellow-500 focus:outline-none transition-colors"
                         placeholder="email@example.com"
                      />
                   </div>
                </div>

                <div>
                   <label className="block text-xs font-bold text-yellow-500 uppercase tracking-widest mb-2">Subject</label>
                   <input 
                      type="text" name="subject" value={formData.subject} onChange={handleChange} required
                      className="w-full bg-zinc-950 border border-zinc-800 text-white px-4 py-3 focus:border-yellow-500 focus:outline-none transition-colors"
                      placeholder="Project Inquiry"
                   />
                </div>

                <div>
                   <label className="block text-xs font-bold text-yellow-500 uppercase tracking-widest mb-2">Message</label>
                   <textarea 
                      name="message" rows="5" value={formData.message} onChange={handleChange} required
                      className="w-full bg-zinc-950 border border-zinc-800 text-white px-4 py-3 focus:border-yellow-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                   ></textarea>
                </div>

                <button 
                  type="submit" disabled={loading}
                  className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 hover:bg-yellow-500 transition-colors flex justify-center items-center gap-2 group"
                >
                   {loading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent"></div>
                   ) : (
                      <>Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" /></>
                   )}
                </button>
             </form>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
