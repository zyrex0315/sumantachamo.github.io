import React from 'react';
import { Code, Palette, Smartphone, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Design',
      description: 'I can design simple webpages with HTML,CSS,Java Script, Tailwind CSS and React.',
      features: ['Responsive Design', 'Modern UI/UX', 'Performance Optimized', 'SEO Friendly'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'Graphic Designing',
      description: 'Experienced Adobe Photoshop user. Posters, Thumbnails, and Banners. I can provide you with modern interactive app designs and webpages in Figma',
      features: ['Brand Identity', 'Print Design', 'Digital Art', 'Logo Design'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Smartphone,
      title: 'App Designing',
      description: 'Learn Android OS development.',
      features: ['Native Apps', 'Cross Platform', 'UI/UX Design', 'App Store Ready'],
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-pink-500">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I offer a comprehensive range of digital services to help bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-pink-500/50 transition-all duration-500 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                
                {/* Service Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="group/btn flex items-center text-pink-500 hover:text-pink-400 transition-colors duration-300">
                  Learn more
                  <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" size={16} />
                </button>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border border-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border border-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services; 