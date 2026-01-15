import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { NAV_LINKS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-dark/90 backdrop-blur-lg border-b border-brand-primary/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-display font-bold text-white tracking-wider flex items-center gap-1"
        >
          <span className="text-brand-primary drop-shadow-[0_0_8px_rgba(242,101,34,0.8)]">
            LANDING
          </span>
          PAGE
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-text hover:text-brand-primary transition-colors text-sm font-heading font-semibold uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#"
            className="bg-brand-primary hover:bg-[#B33F00] text-white px-6 py-2 rounded-[2px] text-sm font-bold transition-all shadow-glow hover:shadow-glow-lg flex items-center gap-2 font-heading uppercase tracking-wide transform hover:-translate-y-0.5"
          >
            <ShoppingCart size={16} /> Tienda
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} className="text-brand-primary" />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark/95 backdrop-blur-xl border-t border-brand-border overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl text-white font-display font-medium hover:text-brand-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
