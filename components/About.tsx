import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-dark overflow-hidden relative scroll-mt-24">
      {/* Decorative Line */}
      <div className="absolute left-0 top-1/2 w-24 h-48 bg-brand-primary/10 blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative group"
          >
            <div className="relative z-10">
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-primary to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-500 skew-x-12 rounded-[4px]"></div>
              <img 
                src="https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=1000" 
                alt="Tech Workshop" 
                className="relative rounded-[2px] border border-brand-border grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl z-10"
              />
              
              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 w-auto h-auto bg-brand-surface border border-brand-primary/50 rounded-[2px] p-6 flex flex-row items-center gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-20 hidden md:flex">
                <ShieldCheck size={32} className="text-brand-primary" />
                <div className="flex flex-col">
                  <span className="text-2xl font-display font-bold text-white leading-none">100%</span>
                  <span className="text-xs text-brand-text uppercase tracking-wider">Garantizado</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight [text-shadow:0_0_12px_rgba(255,255,255,0.2)]">
              MÁS DE UNA DÉCADA <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400 [text-shadow:0_0_12px_rgba(242,101,34,0.45)]">
                INNOVANDO
              </span>
            </h2>
            <p className="text-brand-text text-lg mb-6 leading-relaxed font-sans">
              Este sueño comenzó en el 2010 y desde entonces no hemos parado. En Vida Digital, no solo reparamos computadoras; <strong className="text-white">construimos experiencias de alto rendimiento.</strong>
            </p>
            <p className="text-brand-text mb-10 leading-relaxed font-sans font-light">
              Entendemos que cada componente cuenta. Ya sea que necesites una estación de trabajo para arquitectura o la PC Gamer de tus sueños, nuestro equipo de expertos está listo para asesorarte con honestidad y profesionalismo.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-2 border-brand-primary pl-6 py-2 bg-gradient-to-r from-brand-primary/5 to-transparent">
                <h4 className="text-white font-heading font-bold text-lg mb-2 uppercase">Misión</h4>
                <p className="text-gray-500 text-sm">Soluciones tecnológicas duraderas y de calidad superior.</p>
              </div>
              <div className="border-l-2 border-white pl-6 py-2 hover:border-brand-primary transition-colors duration-300">
                <h4 className="text-white font-heading font-bold text-lg mb-2 uppercase">Visión</h4>
                <p className="text-gray-500 text-sm">Liderazgo nacional en hardware entusiasta y gaming.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
