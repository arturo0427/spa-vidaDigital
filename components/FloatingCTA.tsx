import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { CONTACT_INFO } from "../constants";

const FloatingCTA: React.FC = () => {
  return (
    <motion.a
      href={CONTACT_INFO.whatsapp}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
    >
      <MessageCircle size={32} fill="white" className="text-transparent" />
      {/* <span className="absolute right-full mr-4 bg-brand-surface text-white border border-brand-border px-4 py-2 rounded-[4px] text-xs font-bold font-heading uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl translate-x-2 group-hover:translate-x-0 duration-300">
        Cotizar Ahora
      </span> */}
    </motion.a>
  );
};

export default FloatingCTA;
