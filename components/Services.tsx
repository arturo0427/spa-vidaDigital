import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-brand-secondary relative scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-4 [text-shadow:0_0_12px_rgba(255,255,255,0.2)]"
          >
            NUESTROS{' '}
            <span className="text-brand-primary [text-shadow:0_0_12px_rgba(242,101,34,0.45)]">
              SERVICIOS
            </span>
          </motion.h2>
          <div className="h-1 w-24 bg-brand-primary shadow-glow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative h-[450px] bg-brand-surface border border-brand-border hover:border-brand-primary transition-all duration-500 rounded-[2px] overflow-hidden"
            >
              {/* Image Container */}
              <div className="h-1/2 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-surface to-transparent z-10" />
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 h-1/2 flex flex-col justify-end">
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-secondary border border-brand-primary text-brand-primary p-3 rounded-[2px] shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={24} />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-text text-sm leading-relaxed group-hover:text-white transition-colors">
                  {service.description}
                </p>
                <div className="w-full h-[1px] bg-brand-border mt-6 group-hover:bg-brand-primary transition-colors duration-500 origin-left scale-x-50 group-hover:scale-x-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
