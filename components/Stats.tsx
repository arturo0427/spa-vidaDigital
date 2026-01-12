import React from "react";
import { motion } from "framer-motion";
import { STATS } from "../constants";

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark border-y border-brand-border relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_#F26522_0%,_transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 cursor-pointer">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="flex justify-center mb-4 text-brand-text group-hover:text-brand-primary transition-colors duration-300">
                <stat.icon size={48} strokeWidth={1} />
              </div>
              <h4 className="text-4xl md:text-5xl font-display font-bold text-white mb-2 inline-block transition-[text-shadow] group-hover:[text-shadow:0_0_10px_rgba(255,255,255,0.35)]">
                {stat.value}
              </h4>
              <p className="text-xs md:text-sm text-brand-primary uppercase tracking-[0.2em] font-bold font-heading">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
