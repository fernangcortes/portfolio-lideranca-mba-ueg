import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { comunicacaoEstrategica } from "../data";
import { MessageSquareOff, MessageSquare, ArrowRight, BookOpen, Quote, Sparkles } from "lucide-react";

export default function Comunicacao() {
  const [activeCardList, setActiveCardList] = useState<number[]>([]);

  // Toggle dynamic mode per card
  const toggleCard = (idx: number) => {
    setActiveCardList(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="flex items-center gap-3 mb-10 border-b border-slate-800 pb-4">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-neon text-white font-mono font-bold text-sm">
          04
        </span>
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
            COMUNICAÇÃO ESTRATÉGICA
          </h2>
          <p className="text-xs text-slate-400 font-mono">REESTRUTURAÇÃO CONSTRUTIVA DE DIÁLOGO</p>
        </div>
      </div>

      <p className="text-sm text-slate-350 max-w-3xl font-sans mb-8">
        Comunicação vaga ou acusatória fragiliza as relações e gera retrabalhos no CriaLab. 
        Clique nos cards abaixo para <strong>atividades e simular a reestruturação profissional</strong> de frases cotidianas comuns, moldando o engajamento e a transparência sistêmica.
      </p>

      {/* Grid of Interactive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {comunicacaoEstrategica.map((item, idx) => {
          const isFlipped = activeCardList.includes(idx);

          return (
            <motion.div
              key={idx}
              whileHover={{ 
                y: -6, 
                borderColor: isFlipped ? "rgba(0, 200, 83, 0.4)" : "rgba(255, 82, 82, 0.4)",
                boxShadow: isFlipped 
                  ? "0 20px 40px -15px rgba(0, 200, 83, 0.2)" 
                  : "0 20px 40px -15px rgba(255, 82, 82, 0.2)" 
              }}
              whileTap={{ scale: 0.96 }}
              animate={{ 
                scale: isFlipped ? 1.02 : 1,
                rotateY: isFlipped ? 360 : 0
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 18,
                rotateY: { duration: 0.6, ease: "easeInOut" }
              }}
              onClick={() => toggleCard(idx)}
              className="glass-panel rounded-2xl border border-slate-800 p-5 flex flex-col justify-between min-h-[340px] relative overflow-hidden group cursor-pointer"
            >
              {/* Colored Status Tab */}
              <div className={`absolute top-0 left-0 w-full h-1 transition-colors duration-500 ${
                isFlipped ? "bg-[#00C853]" : "bg-[#FF5252]"
              }`} />

              <div>
                {/* ID badge and Mode Trigger */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    Cenário {idx + 1} de 6
                  </span>
                  
                  <button
                    onClick={() => toggleCard(idx)}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wide border transition-all duration-300 ${
                      isFlipped 
                        ? "bg-[#00C853]/10 border-[#00C853]/30 text-green-300" 
                        : "bg-[#FF5252]/10 border-[#FF5252]/20 text-red-300"
                    }`}
                  >
                    {isFlipped ? "Reestruturado" : "Original"}
                  </button>
                </div>

                {/* Display Block based on flip status */}
                <AnimatePresence mode="wait">
                  {!isFlipped ? (
                    <motion.div
                      key="original"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="space-y-4"
                    >
                      <div className="flex gap-2 items-start text-[#FF5252]">
                        <MessageSquareOff className="w-5 h-5 shrink-0 mt-1" />
                        <div>
                          <p className="text-xs font-mono text-slate-500 uppercase">Fórmula Inadequada</p>
                          <p className="font-display text-lg font-bold text-slate-200 mt-1 italic">
                            &ldquo;{item.original}&rdquo;
                          </p>
                        </div>
                      </div>

                      <div className="bg-slate-950/40 p-3 rounded-xl border border-slate-850">
                        <p className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wide mb-1">Gargalo / Risco</p>
                        <p className="text-xs text-slate-400 leading-normal font-sans">
                          Frase vaga e de responsabilização imprecisa que pode acarretar bloqueio psicológico ou reatividade defensiva nos colaboradores.
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="restructured"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-4"
                    >
                      <div className="flex gap-2 items-start text-green-400">
                        <MessageSquare className="w-5 h-5 shrink-0 mt-1" />
                        <div>
                          <p className="text-xs font-mono text-green-400 uppercase tracking-widest font-bold">Fórmula Assertiva Reestruturada</p>
                          <p className="font-display text-base font-bold text-white mt-1">
                            &ldquo;{item.restructured}&rdquo;
                          </p>
                        </div>
                      </div>

                      <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800">
                        <p className="text-xs font-mono text-cyan-accent uppercase tracking-wide mb-1">Por que melhora?</p>
                        <p className="text-xs text-slate-300 leading-normal font-sans">
                          {item.justification}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Static Impact panel in footer */}
              <div className="mt-6 border-t border-slate-800/80 pt-4 flex flex-col justify-end">
                <div className="flex items-center gap-1.5 text-purple-accent mb-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span className="text-[9.5px] font-mono uppercase tracking-wider text-purple-accent">Impacto / Reflexão</span>
                </div>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  {item.reflection}
                </p>

                {/* Flip call to action */}
                <button
                  onClick={() => toggleCard(idx)}
                  className="mt-4 text-[10px] font-mono text-cyan-accent text-right hover:underline flex items-center justify-end gap-1"
                >
                  <span>{isFlipped ? "Ver Mensagem Original" : "Simular Reestruturação"}</span>
                  <ArrowRight className="w-3 h-3 text-cyan-accent" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
