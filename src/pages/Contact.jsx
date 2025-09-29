import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      title: 'Main Office',
      details: 'Erbil - 40 Meter - Showroom No. (22)',
      icon: '📍',
      color: 'text-blue-600'
    },
    {
      title: 'Phone',
      details: '+964 750 123 4567',
      icon: '📞',
      color: 'text-green-600'
    },
    {
      title: 'Email',
      details: 'info@grandgroup-iraq.com',
      icon: '✉️',
      color: 'text-purple-600'
    },
    {
      title: 'Working Hours',
      details: 'Sunday - Thursday: 9:00 AM - 6:00 PM',
      icon: '🕒',
      color: 'text-orange-600'
    }
  ];

  const services = [
    'Grand Motors - Car Trading',
    'Grand Rent A Car - Car Rental',
    'Grand Transportation - Shipping',
    'General Inquiry',
    'Other'
  ];

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'WhatsApp', icon: '💬', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Get in touch with Grand Group for all your automotive needs. 
            We're here to help you find the perfect solution.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📞 Contact Information</h2>
            <p className="text-xl text-gray-600">Multiple ways to reach us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl mb-4">{info.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${info.color}`}>{info.title}</h3>
                <p className="text-gray-700 leading-relaxed">{info.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                      placeholder="+964 750 123 4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 resize-none"
                    placeholder="Tell us about your requirements or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Send Message 📤
                </button>
              </form>
            </div>

            {/* Location and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Find Us Here</h3>
                  <p className="text-gray-700">Erbil - 40 Meter - Showroom No. (22)</p>
                  <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-colors duration-300">
                    Open in Maps
                  </button>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center justify-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <span className="text-2xl mr-3">{social.icon}</span>
                      <span className="font-medium text-gray-700">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">⚡</div>
                    <div>
                      <div className="font-semibold">Fast Response</div>
                      <div className="text-sm opacity-90">We respond within 24 hours</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">🏆</div>
                    <div>
                      <div className="font-semibold">Expert Team</div>
                      <div className="text-sm opacity-90">10+ years of experience</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">🤝</div>
                    <div>
                      <div className="font-semibold">Trusted Partner</div>
                      <div className="text-sm opacity-90">2,800+ satisfied customers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">❓ Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What types of cars do you sell?",
                answer: "We specialize in new and modern cars from global brands including Toyota, Nissan, Hyundai, Kia, Mercedes Benz, Land Rover, BMW, Chery, GAC MG, and BYD."
              },
              {
                question: "Do you offer car rental services?",
                answer: "Yes, Grand Rent A Car offers both short and long-term car rental services for individuals and companies with flexible packages."
              },
              {
                question: "Can you ship cars from Dubai?",
                answer: "Absolutely! Grand Transportation & Shipping provides professional car shipping services from Dubai to Iraq with secure and insured transportation."
              },
              {
                question: "What are your working hours?",
                answer: "We are open Sunday through Thursday from 9:00 AM to 6:00 PM. We're closed on Fridays and Saturdays."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;