import {
  Cpu,
  Wrench,
  ShoppingBag,
  Monitor,
  ShieldCheck,
  History,
  Users,
} from "lucide-react";

export const NAV_LINKS = [
  { name: "Inicio", href: "#hero" },
  { name: "Nosotros", href: "#about" },
  { name: "Servicios", href: "#services" },
  { name: "Productos", href: "https://tienda.vidadigitalec.com/" },
  { name: "Contacto", href: "#contact" },
];

export const HERO_CONTENT = {
  title: "VIDA DIGITAL",
  subtitle: "Soluciones Tecnológicas de Alto Nivel",
  description:
    "Especialistas en PC Gamers, Laptops de alto rendimiento y Servicio Técnico certificado en Ibarra, Ecuador.",
  cta: "Cotizar Ahora",
};

export const SERVICES = [
  {
    title: "PC Gamers & Workstations",
    description:
      "Ensamblaje profesional de equipos de alto rendimiento para gaming, arquitectura y diseño.",
    icon: Cpu,
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Servicio Técnico",
    description:
      "Mantenimiento, reparación y diagnóstico garantizado de computadoras y laptops.",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Venta de Componentes",
    description:
      "Las mejores marcas: Gigabyte, Corsair, Asus, Lenovo. Todo lo que necesitas para tu setup.",
    icon: ShoppingBag,
    image:
      "https://images.unsplash.com/photo-1709715357479-591f9971fb05?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const STATS = [
  { label: "Ensambles Realizados", value: "2.4K+", icon: Monitor },
  { label: "Servicios Técnicos", value: "4.5K+", icon: Wrench },
  { label: "Clientes Felices", value: "14K+", icon: Users },
  { label: "Años de Experiencia", value: "15+", icon: History },
];

export const BRANDS = [
  "Gigabyte",
  "Corsair",
  "Logitech",
  "Lenovo",
  "Cougar",
  "Asus ROG",
  "Kingston",
  "GameMax",
  "MSI",
  "Intel",
  "AMD",
  "Nvidia",
];

export const CONTACT_INFO = {
  phone: "+593 98 323 2624",
  email: "vidadigitalibarra@outlook.com",
  address: "Hernán Gonzáles de Saa 5-29 y Jacinto Egas, Ibarra, Ecuador",
  whatsapp: "https://wa.me/593983232624",
  facebook: "https://www.facebook.com/vidadigitalibarrra",
  tiktok: "https://www.tiktok.com/@vidadigitalec",
  instagram: "https://www.instagram.com/vidadigital_ec",
};
