import React from "react";
import { BRANDS } from "../constants";

const Brands: React.FC = () => {
  return (
    <div className="py-12 bg-brand-secondary border-y border-brand-border overflow-hidden">
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex">
          <div className="flex space-x-20 px-8 items-center">
            {BRANDS.map((brand, index) => (
              <span
                key={`${brand}-a-${index}`}
                className="text-2xl md:text-3xl font-display font-bold text-[#444] hover:text-brand-primary transition-colors cursor-default uppercase tracking-wide transition-[text-shadow] hover:[text-shadow:0_0_12px_rgba(242,101,34,0.5)]"
              >
                {brand}
              </span>
            ))}
          </div>
          <div className="flex space-x-20 px-8 items-center" aria-hidden="true">
            {BRANDS.map((brand, index) => (
              <span
                key={`${brand}-b-${index}`}
                className="text-2xl md:text-3xl font-display font-bold text-[#444] hover:text-brand-primary transition-colors cursor-default uppercase tracking-wide transition-[text-shadow] hover:[text-shadow:0_0_12px_rgba(242,101,34,0.5)]"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
