import React, { useState } from 'react';
import axios from 'axios';
import { ArrowLeft, Send, Phone, Mail, MapPin, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

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
    console.log('Sending form data:', formData);
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5001/api/contact', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Server response:', response.data);
      toast.success(response.data.message || 'Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      if (error.response) {
        console.log('Error context:', error.response.status, error.response.data);
      }
      toast.error(error.response?.data?.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Navigation Bar */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center text-slate-600 hover:text-blue-600 transition font-medium">
            <ArrowLeft size={20} className="mr-2" /> Back to Home
          </Link>
          <div className="shrink-0 flex items-center gap-2">
            <div className="bg-blue-900 p-2 rounded-lg">
              <Cpu size={24} className="text-white" />
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight">
              IRK <span className="text-blue-600">INNOVATIONS</span>
            </span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Get in Touch</h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Have a project in mind or need technical assistance? Our team of experts is ready to help you innovate and solve complex engineering challenges.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Phone</h3>
                  <p className="text-slate-600">+94 XX XXX XXXX</p>
                  <p className="text-slate-500 text-sm">Mon-Fri from 9am to 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email</h3>
                  <p className="text-slate-600">kavindurajitha2002@gmail.com</p>
                  <p className="text-slate-500 text-sm">Online support 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Office</h3>
                  <p className="text-slate-600">No. 123, Innovation drive,</p>
                  <p className="text-slate-600">Colombo, Sri Lanka.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-blue-900 rounded-3xl text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Want to start a project?</h3>
                <p className="text-blue-100 mb-6">Schedule a free consultation with our engineering team today.</p>
                <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold transition-all hover:bg-blue-50 transform hover:scale-105 shadow-lg">
                  Book Appointment
                </button>
              </div>
              <Cpu size={200} className="absolute -bottom-10 -right-10 text-blue-800 opacity-20 transform -rotate-12 transition-transform group-hover:rotate-0" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-slate-100 rounded-3xl shadow-xl p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                  placeholder="Inquiry about software development"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 group"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
