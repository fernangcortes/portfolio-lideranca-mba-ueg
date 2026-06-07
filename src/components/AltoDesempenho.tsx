import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { equipeAltoDesempenho } from "../data";
import { 
  Users, MessageSquare, Shield, CheckCircle, Heart, Handshake, 
  Settings, Award, Lightbulb, BookOpen, Smile, Sparkles, TrendingUp, AlertTriangle 
} from "lucide-react";

export default function AltoDesempenho() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  // Mapped icons based on index
  const icons = [
    <CheckCircle className="w-4 h-4" />,      // Objetivos claros
    <Shield className="w-4 h-4" />,           // Confiança
    <Award className="w-4 h-4" />,            // Comprometimento
    <Users className="w-4 h-4" />,            // Respeito às diferenças 
    <Handshake className="w-4 h-4" />,        // Colaboração
    <Settings className="w-4 h-4" />,         // Organização
    <Sparkles className="w-4 h-4" />,         // Liderança inspiradora
    <Lightbulb className="w-4 h-4" />,        // Foco soluções
    <BookOpen className="w-4 h-4" />,         // Aprendizagem contínua
    <Smile className="w-4 h-4" />             // Clima positivo
  ];

  /* Node labels brief version for orbital graphics */
  const nodeBriefs = [
    "Objetivos",
    "Confiança",
    "Comprometimento",
    "Diversidade",
    "Cooperação",
    "Planejamento",
    "Liderança",
    "Soluções",
    "Aprendizado",
    "Motivação"
  ];

  const currentItem = equipeAltoDesempenho[selectedIdx];

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="flex items-center gap-3 mb-10 border-b border-slate-800 pb-4">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-neon text-white font-mono font-bold text-sm">
          03
        </span>
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
            EQUIPES DE ALTO DESEMPENHO
          </h2>
          <p className="text-xs text-slate-400 font-mono">ECOSSISTEMA INTERATIVO DE COMPORTAMENTOS</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left column: Circular Ecosystem visualization */}
        <div className="lg:col-span-6 flex justify-center items-center py-8">
          <div className="relative w-76 h-76 sm:w-96 sm:h-96 rounded-full border border-slate-800/80 flex items-center justify-center">
            {/* Pulsing decoration */}
            <div className="absolute inset-4 rounded-full border border-slate-800/40 animate-ping opacity-15" />
            <div className="absolute inset-16 rounded-full border border-slate-850/60" />

            {/* Central core node */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full pointer-events-none"
            >
              <svg width="100%" height="100%" viewBox="0 0 100 100" className="opacity-15">
                {/* Visual orbit dashed lines */}
                <circle cx="50" cy="50" r="40" fill="none" stroke="#2D7FF9" strokeWidth="0.5" strokeDasharray="2 2" />
              </svg>
            </motion.div>

            {/* Central Core Bubble */}
            <div className="z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-primary-neon via-purple-accent to-cyan-accent flex flex-col items-center justify-center p-2 text-center shadow-lg shadow-primary-neon/20 animate-pulse">
              <Users className="w-6 sm:w-8 h-6 sm:h-8 text-white mb-1" />
              <span className="font-display font-black text-[13px] tracking-widest text-white uppercase">Equipe</span>
              <span className="text-[9px] font-mono font-medium text-slate-200 uppercase tracking-widest">Alto Perf</span>
            </div>

            {/* Orbital Nodes distribution */}
            {icons.map((ico, idx) => {
              // Distribute 10 nodes perfectly along 360 degrees
              const angle = (idx * 360) / 10;
              // Radius of orbit in rem/pixels based on screen sizes
              const r = 110; // offset in px for smaller screens
              const rSm = 145; // offset for sm/md screens
              
              // We'll calculate translational styles dynamically (inline style)
              const isSelected = selectedIdx === idx;

              return (
                <div
                  key={idx}
                  style={{
                    transform: `rotate(${angle}deg) translateY(-115px) rotate(-${angle}deg)`,
                  }}
                  className="absolute z-20"
                >
                  {/* Outer wrapper to cancel rotation so content matches orientation */}
                  <div
                    style={{
                      transform: `rotate(${angle}deg) translate(0, -110px) rotate(-${angle}deg)`,
                    }}
                    className="sm:hidden"
                  >
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      onClick={() => setSelectedIdx(idx)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isSelected
                          ? "bg-cyan-accent border-cyan-accent text-slate-950 shadow-md shadow-cyan-accent/30"
                          : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                      }`}
                    >
                      {ico}
                    </motion.button>
                  </div>

                  <div
                    style={{
                      transform: `rotate(${angle}deg) translate(0, -145px) rotate(-${angle}deg)`,
                    }}
                    className="hidden sm:block"
                  >
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      onClick={() => setSelectedIdx(idx)}
                      className={`px-3 py-2 rounded-xl flex items-center gap-1.5 border transition-all duration-300 ${
                        isSelected
                          ? "bg-gradient-to-r from-primary-neon to-purple-accent border-primary-neon text-white shadow-lg shadow-primary-neon/20 font-bold"
                          : "bg-slate-900/90 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700"
                      }`}
                    >
                      <span className={isSelected ? "text-white" : "text-purple-accent"}>{ico}</span>
                      <span className="font-mono text-[9.5px] uppercase tracking-wider">{nodeBriefs[idx]}</span>
                    </motion.button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right column: Selected node comparison and detail cards */}
        <div className="lg:col-span-6">
          <div className="glass-panel rounded-2xl p-6 border border-slate-800 relative min-h-80 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-28 h-28 bg-primary-neon/5 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              {/* Header category info */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent" />
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-accent">
                  Característica {selectedIdx + 1} de 10
                </span>
              </div>

              {/* Detail title */}
              <h3 className="font-display font-medium text-xl text-white mb-4">
                {currentItem.feature}
              </h3>

              {/* Strengthening vs Fragilizing Comparison Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                
                {/* Weakens / Fragiliza */}
                <div className="bg-[#FF5252]/5 border border-[#FF5252]/20 p-4 rounded-xl">
                  <div className="flex items-center gap-1.5 text-[#FF5252] mb-2">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span className="font-mono font-bold text-[10px] uppercase tracking-wider">Fragiliza a Equipe</span>
                  </div>
                  <p className="text-sm text-slate-350 leading-relaxed font-sans">
                    {currentItem.weakens}
                  </p>
                </div>

                {/* Strengthens / Fortalece */}
                <div className="bg-[#00C853]/5 border border-[#00C853]/20 p-4 rounded-xl">
                  <div className="flex items-center gap-1.5 text-green-400 mb-2">
                    <TrendingUp className="w-4 h-4 shrink-0" />
                    <span className="font-mono font-bold text-[10px] uppercase tracking-wider">Fortalece a Equipe</span>
                  </div>
                  <p className="text-sm text-slate-350 leading-relaxed font-sans">
                    {currentItem.strengthens}
                  </p>
                </div>

              </div>
            </div>

            {/* Reflexive Comment context hook */}
            <div className="mt-6 border-t border-slate-800/80 pt-4 text-xs font-sans text-slate-400 leading-relaxed italic flex gap-2">
              <span className="text-xl text-purple-accent font-serif tracking-normal leading-none">“</span>
              <span>
                No CriaLab, esse dinamismo é vital. Quando há respeito e alinhamento transparente de objetivos comuns, inovamos de maneira madura. Se isolamos, o desempenho é inevitavelmente comprometido.
              </span>
            </div>
          </div>

          {/* Helper pagination dots */}
          <div className="flex justify-center gap-1.5 mt-4">
            {equipeAltoDesempenho.map((_, i) => (
              <button
                key={i}
                onClick={() => setSelectedIdx(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  selectedIdx === i ? "bg-cyan-accent w-5" : "bg-slate-700"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
