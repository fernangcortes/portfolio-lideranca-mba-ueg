import { motion } from "motion/react";
import { presenterInfo } from "../data";
import { Award, Briefcase, Heart, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto flex flex-col justify-between overflow-hidden">
      {/* Decorative BG orbs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-primary-neon/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-purple-accent/10 rounded-full blur-3xl -z-10 animate-bounce" />

      {/* Title block */}
      <div className="text-center md:text-left mt-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-neon/15 border border-primary-neon/30 text-xs font-mono font-medium tracking-wider text-cyan-accent uppercase mb-4"
        >
          <Award className="w-3.5 h-3.5 text-cyan-accent animate-spin-slow" />
          Portfólio Interativo de Aprendizagem
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white uppercase leading-none"
        >
          Portfólio <br />
          <span className="bg-gradient-to-r from-primary-neon via-purple-accent to-cyan-accent bg-clip-text text-transparent">
            de Liderança
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sub font-semibold text-lg md:text-xl text-slate-350 mt-4 max-w-2xl"
        >
          Liderança, Gestão de Equipes e Ambientes Híbridos
        </motion.p>
      </div>

      {/* Main Intro Layout: Avatar + Quote Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="lg:col-span-5 glass-panel rounded-2xl p-6 relative overflow-hidden group"
        >
          {/* Accent Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-neon to-purple-accent" />
          
          <div className="flex flex-col sm:flex-row items-center gap-5">
            {/* Styled Avatar Frame */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary-neon via-purple-accent to-cyan-accent p-1 shadow-lg shadow-primary-neon/20 flex-shrink-0 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-[#1E293B] flex items-center justify-center overflow-hidden">
                {/* SVG represented stylish avatar */}
                <svg className="w-16 h-16 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>

            <div className="text-center sm:text-left">
              <h2 className="font-display text-xl font-bold text-white tracking-wide">
                {presenterInfo.name}
              </h2>
              <p className="text-cyan-accent text-sm font-mono mt-1 flex items-center justify-center sm:justify-start gap-1">
                <Briefcase className="w-3.5 h-3.5" />
                {presenterInfo.role}
              </p>
              <div className="mt-2 flex items-center justify-center sm:justify-start gap-1 text-xs text-slate-400">
                <span className="px-2 py-0.5 rounded bg-slate-850 border border-slate-700">CriaLab</span>
                <span className="px-2 py-0.5 rounded bg-slate-850 border border-slate-700">Inovação</span>
              </div>
            </div>
          </div>

          <p className="text-slate-300 text-sm mt-5 leading-relaxed font-sans">
            {presenterInfo.bio}
          </p>
        </motion.div>

        {/* Big Quote / Statement Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="lg:col-span-7 glass-panel rounded-2xl p-6 relative"
        >
          <div className="absolute -top-4 -left-2 text-6xl text-primary-neon/20 font-serif pointer-events-none">
            “
          </div>
          <div className="absolute -bottom-10 -right-2 text-6xl text-purple-accent/20 font-serif pointer-events-none">
            ”
          </div>

          <p className="text-[#F5F7FA] text-base md:text-lg leading-relaxed italic relative z-10 font-sans">
            {presenterInfo.introQuote}
          </p>

          <div className="mt-4 flex items-center gap-2 border-t border-slate-800 pt-4">
            <Heart className="w-4 h-4 text-[#FF5252] fill-[#FF5252]" />
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Conexão • Propósito • Coletividade
            </span>
          </div>
        </motion.div>
      </div>

      {/* SVG Collaborative Micro-illustrations */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full h-44 rounded-2xl bg-gradient-to-b from-[#1E293B]/20 to-[#0F172A]/40 border border-slate-800 mt-12 flex flex-col md:flex-row items-center justify-between p-6 gap-6 relative"
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 text-cyan-accent mb-1">
            <Cpu className="w-5 h-5 text-cyan-accent" />
            <span className="text-sm font-mono font-semibold uppercase tracking-wider">CriaLab Hub de Design</span>
          </div>
          <p className="text-xs text-slate-400 max-w-xl">
            Ambiente que fomenta experimentação ágil com foco no equilíbrio ideal entre liberdade de criação e rigores operacionais cronometrados.
          </p>
        </div>

        {/* Dynamic Vector Animation Visualizer */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="h-10 w-2 h-20 bg-primary-neon/20 rounded-full flex items-end overflow-hidden">
              <div className="w-full bg-primary-neon animate-pulse" style={{ height: "65%" }}></div>
            </div>
            <span className="text-[10px] font-mono text-slate-500 mt-1.5">Tecnologia</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-10 w-2 h-20 bg-purple-accent/20 rounded-full flex items-end overflow-hidden">
              <div className="w-full bg-purple-accent animate-pulse" style={{ height: "85%", animationDelay: "0.2s" }}></div>
            </div>
            <span className="text-[10px] font-mono text-slate-500 mt-1.5">Design</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-10 w-2 h-20 bg-cyan-accent/20 rounded-full flex items-end overflow-hidden">
              <div className="w-full bg-cyan-accent animate-pulse" style={{ height: "50%", animationDelay: "0.4s" }}></div>
            </div>
            <span className="text-[10px] font-mono text-slate-500 mt-1.5">Gestão</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-10 w-2 h-20 bg-green-accent/20 rounded-full flex items-end overflow-hidden">
              <div className="w-full bg-[#00C853] animate-pulse" style={{ height: "75%", animationDelay: "0.6s" }}></div>
            </div>
            <span className="text-[10px] font-mono text-slate-500 mt-1.5">Entrega</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
