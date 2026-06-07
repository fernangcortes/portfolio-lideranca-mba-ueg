import { motion } from "motion/react";
import { sinteseReflexiva } from "../data";
import { Rocket, Sparkles, Star, ChevronUp, Github, Heart } from "lucide-react";

export default function Encerramento() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto text-center relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-neon/10 rounded-full blur-3xl -z-10 animate-pulse" />

      {/* Title */}
      <div className="flex flex-col items-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-mono text-green-400 mb-3 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          Conquista & Síntese
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white max-w-xl">
          Síntese Reflexiva Final
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12 glass-panel p-6 sm:p-10 rounded-3xl relative">
        {/* Left Side: Illustration of ascending rocket/creativity */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center py-6">
          <div className="relative w-48 h-48 flex items-center justify-center">
            {/* Pulsating backdrops circles */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-primary-neon to-purple-accent opacity-15 animate-pulse" />
            <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-[#00C853] to-cyan-accent opacity-20 animate-ping" />

            {/* Custom styled vector SVG rocket */}
            <svg width="140" height="140" viewBox="0 0 100 100" className="overflow-visible select-none drop-shadow-lg shadow-cyan-accent/20">
              {/* Rocket flame vectors */}
              <motion.path
                d="M50 75 Q45 85 50 95 Q55 85 50 75"
                fill="url(#fireGrad)"
                animate={{ scaleY: [1, 1.2, 1], scaleX: [1, 1.1, 1] }}
                transition={{ duration: 0.3, repeat: Infinity }}
              />
              <motion.path
                d="M48 75 Q45 82 48 88 Q51 82 48 75"
                fill="#FFD54F"
                animate={{ scaleY: [1, 1.3, 1], scaleX: [1, 0.9, 1] }}
                transition={{ duration: 0.25, repeat: Infinity, delay: 0.1 }}
              />

              {/* Main rocket ship */}
              <path d="M50 15 C60 30 65 50 63 70 C58 73 52 73 50 73 C48 73 42 73 37 70 C35 50 40 30 50 15 Z" fill="#F1F5F9" />
              {/* Cockpit window nose */}
              <circle cx="50" cy="38" r="6" fill="#1E293B" />
              {/* Cabin glow */}
              <circle cx="50" cy="38" r="4" fill="#00C8FF" className="animate-pulse" />
              
              {/* Wings left/right */}
              <path d="M37 60 C30 65 25 75 25 78 C35 78 40 73 38 65 Z" fill="#2D7FF9" />
              <path d="M63 60 C70 65 75 75 75 78 C65 78 60 73 62 65 Z" fill="#6C4DFF" />

              {/* Gradients */}
              <defs>
                <linearGradient id="fireGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FF5252" />
                  <stop offset="100%" stopColor="#FF9800" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <p className="font-mono text-xs text-cyan-accent uppercase tracking-widest mt-4">
            Rumo ao Equilíbrio de Liderança
          </p>
        </div>

        {/* Right Side: Deep text synthesis reflections */}
        <div className="lg:col-span-7 text-left space-y-6">
          <div className="relative">
            <span className="absolute -top-6 -left-4 text-7xl font-serif text-primary-neon/15 select-none font-black pointer-events-none">
              “
            </span>
            <p className="font-sub font-semibold text-lg sm:text-xl text-white leading-relaxed italic relative z-10">
              {sinteseReflexiva.originalText}
            </p>
          </div>

          <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 relative">
            <div className="absolute top-3 right-3">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 animate-pulse" />
            </div>
            
            <p className="font-mono text-[11px] font-bold text-[#00C853] uppercase tracking-wider mb-2">
              Compromissos e Mudança Prática
            </p>
            <p className="text-sm text-slate-350 leading-relaxed font-sans">
              {sinteseReflexiva.conclusao}
            </p>
          </div>
        </div>
      </div>

      {/* Button Scroll to TOP */}
      <div className="mt-12 flex justify-center">
        <motion.button
          whileHover={{ y: -3 }}
          onClick={scrollToTop}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400 transition-colors hover:text-white hover:border-slate-700"
        >
          <ChevronUp className="w-4 h-4 text-slate-500" />
          <span>Voltar ao Início do Portfólio</span>
        </motion.button>
      </div>

      {/* Footer Branding details */}
      <footer className="mt-16 pt-8 border-t border-slate-900 text-center text-xs text-slate-500 font-sans space-y-2">
        <p>© 2026 CriaLab Inovação e Gestão de Talentos.</p>
        <p className="flex items-center justify-center gap-1">
          Feito por <strong>{sinteseReflexiva.originalText.includes("Fernando") ? "Fernando" : "Fernando Gomes Côrtes"}</strong> • Adaptado com <Heart className="w-3.5 h-3.5 text-[#FF5252] fill-[#FF5252]" /> para Portfólio Acadêmico Executivo Premium.
        </p>
      </footer>
    </section>
  );
}
