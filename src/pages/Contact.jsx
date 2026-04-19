import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle, Clock, ShieldCheck, Users } from 'lucide-react';
import HeaderText from '../components/ui/HeaderText';
import BgImage from '../components/ui/BgImage';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailSubject = `Submission from ${formData.name}`;
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:mzorab57@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  };

  const contactCards = [
    { title: 'Visit Us', details: 'Erbil - 40 Meter - Showroom No. (22)', icon: <MapPin className="w-6 h-6" />, color: 'bg-blue-50 text-blue-600' },
    { title: 'Call Us', details: '+964 750 377 2828', icon: <Phone className="w-6 h-6" />, color: 'bg-green-50 text-green-600' },
    { title: 'Email Us', details: 'info@grandmotorsiraq.com', icon: <Mail className="w-6 h-6" />, color: 'bg-red-50 text-red-600' },
  ];

  return (
    <div className="bg-white">
    
        <BgImage src="/assets/images/bg/hero2.png" alt="Contact Grand Group" />

      {/* Info Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactCards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 group text-center"
            >
              <div className={`inline-flex p-4 rounded-2xl mb-6 transition-transform group-hover:scale-110 ${card.color}`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-600 font-medium leading-relaxed">{card.details}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form & Sidebar */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100"
            >
              <div className="mb-10">
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Send a Message</h2>
                <p className="text-gray-500 mt-2 font-medium">Fill out the form and our team will get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                    <input type="text" name="name" required onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-500 transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                    <input type="email" name="email" required onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-500 transition-all" placeholder="name@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                    <input type="tel" name="phone" onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-500 transition-all" placeholder="+964..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Service</label>
                    <select name="service" onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-500 transition-all">
                      <option value="">Select Service</option>
                      <option>Car Trading</option>
                      <option>Car Rental</option>
                      <option>Transportation</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                  <textarea name="message" required rows={5} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-500 transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="w-full md:w-auto px-10 py-5 bg-gray-900 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-red-600 transition-all flex items-center justify-center gap-3 group">
                  Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>

            {/* Sidebar Info */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gray-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 blur-3xl rounded-full" />
                <h3 className="text-2xl font-bold mb-8">Why Grand Group?</h3>
                <ul className="space-y-6">
                  {[
                    { icon: <Clock className="text-red-500" />, t: 'Fast Response', d: 'We reply within 24 hours' },
                    { icon: <ShieldCheck className="text-red-500" />, t: 'Trusted Service', d: 'Over 10 years of experience' },
                    { icon: <Users className="text-red-500" />, t: 'Expert Team', d: 'Professional consultation' },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="mt-1">{item.icon}</div>
                      <div>
                        <p className="font-bold">{item.t}</p>
                        <p className="text-sm text-gray-400">{item.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Working Hours */}
              <div className="bg-white border border-gray-100 rounded-[2.5rem] p-10">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-red-600" /> Working Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm border-b border-gray-50 pb-2">
                    <span className="text-gray-500 font-medium">Sun - Thu</span>
                    <span className="text-gray-900 font-bold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 font-medium">Friday</span>
                    <span className="text-red-600 font-bold tracking-widest uppercase">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <HeaderText text="Frequently Asked Questions" />
          </div>
          <div className="space-y-4">
            {[
              { q: "What types of cars do you sell?", a: "We specialize in new and modern cars from global brands like Toyota, Nissan, and Mercedes Benz." },
              { q: "Do you ship from Dubai?", a: "Yes, we provide professional shipping and customs clearance from Dubai directly to Iraq." },
              { q: "Can I rent for long-term?", a: "Absolutely. We have special packages for monthly and yearly corporate rentals." }
            ].map((faq, i) => (
              <details key={i} className="group bg-gray-50 rounded-2xl p-6 transition-all duration-300 open:bg-white open:shadow-lg open:ring-1 open:ring-gray-100">
                <summary className="list-none flex justify-between items-center cursor-pointer font-bold text-gray-900">
                  {faq.q}
                  <span className="text-red-600 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed font-medium">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;