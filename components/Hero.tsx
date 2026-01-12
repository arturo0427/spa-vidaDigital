import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HERO_CONTENT, CONTACT_INFO } from "../constants";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let particles: Particle[] = [];
    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5; // Slow drift
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;

        this.color =
          Math.random() > 0.9 ? "#F26522" : "rgba(100, 100, 100, 0.5)";
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const particleCount = Math.min(Math.floor((width * height) / 12000), 100);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            const opacity = 1 - distance / 120;

            const isOrange =
              particles[i].color === "#F26522" ||
              particles[j].color === "#F26522";
            ctx.strokeStyle = isOrange
              ? `rgba(242, 101, 34, ${opacity * 0.6})`
              : `rgba(255, 255, 255, ${opacity * 0.1})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        const dx = mouse.x - particles[i].x;
        const dy = mouse.y - particles[i].y;
        const distMouse = Math.sqrt(dx * dx + dy * dy);
        if (distMouse < 200) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(242, 101, 34, ${1 - distMouse / 200})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      id="hero"
      ref={ref}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-brand-dark scroll-mt-24"
    >
      {/* Parallax Content Container */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        {/* Deep background image (Motherboard texture) */}
        <div className="absolute inset-1 opacity-1">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000"
            alt="Chipset"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/90 to-brand-dark" />

        {/* The Canvas Animation */}
        <canvas ref={canvasRef} className="absolute inset-0 z-10" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0D0D0D_100%)] z-20 pointer-events-none" />
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 z-10 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-30 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pointer-events-auto"
        >
          <span className="inline-block py-1 px-4 rounded-[2px] bg-brand-primary/10 text-brand-primary border border-brand-primary/50 text-xs md:text-sm font-display font-bold tracking-[0.2em] mb-6 backdrop-blur-sm uppercase glow-text">
            Innovación Desde 2010
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-black text-white mb-6 drop-shadow-2xl leading-tight [text-shadow:0_0_14px_rgba(255,255,255,0.25)]">
            VIDA{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-[#B33F00] [text-shadow:0_0_14px_rgba(242,101,34,0.45)]">
              DIGITAL
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 font-sans font-light leading-relaxed tracking-wide drop-shadow-lg">
            {HERO_CONTENT.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-brand-primary text-white font-heading font-bold uppercase tracking-wider rounded-[2px] overflow-hidden shadow-glow hover:shadow-glow-lg transition-all duration-300 w-full sm:w-auto"
            >
              <div className="absolute inset-0 w-full h-full bg-[#B33F00] translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
              <span className="relative flex items-center justify-center gap-2">
                {HERO_CONTENT.cta} <ArrowRight size={20} />
              </span>
            </a>
            <a
              href="#services"
              className="px-8 py-4 border border-brand-text/30 hover:border-brand-primary hover:text-brand-primary text-white font-heading font-bold uppercase tracking-wider rounded-[2px] transition-all backdrop-blur-sm w-full sm:w-auto bg-black/20"
            >
              Explorar Servicios
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 text-brand-text/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest font-display">
          Scroll
        </span>
        <ChevronDown size={24} className="text-brand-primary animate-pulse" />
      </motion.div>
    </div>
  );
};

export default Hero;
