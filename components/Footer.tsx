import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Music2,
} from "lucide-react";
import { CONTACT_INFO } from "../constants";

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-[#050505] pt-24 pb-12 border-t border-brand-border scroll-mt-24"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Info */}
          <div>
            <a
              href="#"
              className="text-3xl font-display font-bold text-white tracking-wider mb-8 inline-block"
            >
              <span className="text-brand-primary">VIDA</span>DIGITAL
            </a>
            <p className="text-brand-text mb-10 max-w-md leading-relaxed font-light">
              Tu aliado estratégico en tecnología de alto nivel. Visítanos en
              nuestro local o contáctanos para envíos seguros a todo el país.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="bg-brand-surface p-3 rounded-[2px] text-brand-primary border border-brand-border group-hover:border-brand-primary transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-heading font-bold mb-1 uppercase text-sm">
                    Ubicación
                  </h4>
                  <p className="text-brand-text group-hover:text-white transition-colors">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="bg-brand-surface p-3 rounded-[2px] text-brand-primary border border-brand-border group-hover:border-brand-primary transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-heading font-bold mb-1 uppercase text-sm">
                    Contacto
                  </h4>
                  <a
                    href={CONTACT_INFO.whatsapp}
                    className="text-brand-text group-hover:text-white transition-colors block"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="bg-brand-surface p-3 rounded-[2px] text-brand-primary border border-brand-border group-hover:border-brand-primary transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-heading font-bold mb-1 uppercase text-sm">
                    Email
                  </h4>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-brand-text group-hover:text-white transition-colors block"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a
                href={CONTACT_INFO.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-[2px] bg-brand-surface border border-brand-border flex items-center justify-center text-brand-text hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-[2px] bg-brand-surface border border-brand-border flex items-center justify-center text-brand-text hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href={CONTACT_INFO.tiktok}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-[2px] bg-brand-surface border border-brand-border flex items-center justify-center text-brand-text hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300"
              >
                <Music2 size={20} />
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="h-[450px] w-full bg-brand-surface rounded-[2px] overflow-hidden shadow-2xl border border-brand-border group">
            <iframe
              src="https://maps.google.com/maps?q=Vida%20Digital%20Ibarra&t=m&z=15&output=embed&iwloc=near"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Ubicación Vida Digital"
              className="grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-text text-sm font-light">
            © {new Date().getFullYear()} Vida Digital Ecuador. Todos los
            derechos reservados.
          </p>
          <p className="text-brand-text text-xs uppercase tracking-widest opacity-70">
            Desarrollado por{" "}
            <a href="https://www.linkedin.com/in/arturom0427/" target="_blank">
              <strong className="text-white">Arturo Muñoz</strong>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
