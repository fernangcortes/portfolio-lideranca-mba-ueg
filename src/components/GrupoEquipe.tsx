import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { grupoVsEquipeData } from "../data";
import { AlertCircle, CheckCircle2, Shuffle, Users, ArrowRight, ArrowRightLeft, Sparkles } from "lucide-react";

export default function GrupoEquipe() {
  const [evolutionApplied, setEvolutionApplied] = useState(false);

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="flex items-center gap-3 mb-10 border-b border-slate-800 pb-4">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-neon text-white font-mono font-bold text-sm">
          02
        </span>
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
            GRUPO VS EQUIPE
          </h2>
          <p className="text-xs text-slate-400 font-mono">ESTUDO DE CASO COMPARTILHADO & TRANSIÇÃO</p>
        </div>
      </div>

      {/* Case brief statement */}
      <div className="glass-panel rounded-2xl p-6 mb-8 border border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-3 bg-primary-neon/10 rounded-bl-xl text-xs font-mono text-cyan-accent border-l border-b border-slate-800">
          Situação Classificada: GRUPO
        </div>
        <h3 className="font-sub font-bold text-white text-lg mb-2">Classificação Diagnóstica da Situação</h3>
        <p className="text-sm text-slate-300 leading-relaxed font-sans max-w-4xl">
          Os profissionais atuam de forma isolada, sem integração efetiva entre os diversos setores do CriaLab. 
          Embora sejam tecnicamente competentes e individuais de excelência, não há evidências suficientes de colaboração, 
          compartilhamento constante de responsabilidade ou atuação coordenada para alcançar objetivos comuns — caracterizações básicas correspondentes apenas a um <strong>Grupo de Trabalho</strong>.
        </p>
      </div>

      {/* Interactive Trigger block */}
      <div className="flex justify-center mb-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setEvolutionApplied(!evolutionApplied)}
          className={`flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-500 shadow-md ${
            evolutionApplied 
              ? "bg-[#00C853] text-slate-950 shadow-green-500/10 glow-neon-blue" 
              : "bg-primary-neon text-white hover:bg-primary-neon/90 shadow-primary-neon/10"
          }`}
        >
          <Shuffle className="w-4 h-4 animate-spin-slow" />
          {evolutionApplied ? "Ações Aplicadas! Ver Diagnóstico Inicial" : "Aplicar Ações Corretivas de Liderança"}
        </motion.button>
      </div>

      {/* Dynamic Display Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
        
        {/* Left Side: GRUPO (Problemas/Obstáculos) */}
        <motion.div
          animate={{ 
            opacity: evolutionApplied ? 0.6 : 1,
            scale: evolutionApplied ? 0.98 : 1
          }}
          transition={{ duration: 0.5 }}
          className="glass-panel border-r-4 border-r-[#FF5252] rounded-2xl p-6 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 text-[#FF5252] mb-5">
              <AlertCircle className="w-5 h-5 text-[#FF5252]" />
              <span className="font-mono font-bold text-xs uppercase tracking-widest text-[#FF5252]">GRUPO DE TRABALHO</span>
            </div>

            <h4 className="font-sub font-semibold text-white text-base mb-4">
              Sintomas e Obstáculos Críticos de Isolação
            </h4>

            <div className="space-y-4">
              {grupoVsEquipeData.problemas.map((prob, idx) => (
                <div key={idx} className="flex gap-3 items-start bg-slate-900/45 p-3 rounded-xl border border-slate-800/40">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center font-mono text-[10px] text-[#FF5252] font-bold shrink-0 mt-0.5">
                    !
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono mb-0.5">Identificado no Caso</p>
                    <p className="text-sm text-slate-200 leading-normal font-sans">{prob}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-slate-800 pt-4 text-xs font-mono text-slate-500 flex justify-between">
            <span>Diagnóstico do Caso Real</span>
            <span>Estabilidade: Estática</span>
          </div>
        </motion.div>

        {/* Overlay Arrow Indicator */}
        <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900 border border-slate-800 items-center justify-center text-slate-400 font-mono text-xs z-10 pointer-events-none shadow-md">
          <ArrowRightLeft className={`w-4 h-4 transition-transform duration-500 ${evolutionApplied ? "rotate-180 text-green-500" : ""}`} />
        </div>

        {/* Right Side: EQUIPE (Evolução Avançada / Ações Corretivas) */}
        <motion.div
          animate={{ 
            borderColor: evolutionApplied ? "rgba(0, 200, 83, 1)" : "rgba(255, 255, 255, 0.08)",
            boxShadow: evolutionApplied ? "0 10px 40px -5px rgba(0,200,83,0.15)" : "none",
            scale: evolutionApplied ? 1.02 : 1
          }}
          transition={{ duration: 0.5 }}
          className="glass-panel border-r-4 border-r-purple-accent rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden"
        >
          {/* Neon success flash mask */}
          <AnimatePresence>
            {evolutionApplied && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-green-500/5 pointer-events-none"
              />
            )}
          </AnimatePresence>

          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2 text-cyan-accent">
                <Users className="w-5 h-5 text-cyan-accent animate-pulse" />
                <span className="font-mono font-bold text-xs uppercase tracking-widest text-cyan-accent">EQUIPE DE ALTO DESEMPENHO</span>
              </div>
              {evolutionApplied && (
                <span className="px-2 py-0.5 rounded bg-green-500/20 text-[#00C853] text-[9px] font-mono font-bold uppercase tracking-widest animate-bounce">
                  Ativo/Evoluído
                </span>
              )}
            </div>

            <h4 className="font-sub font-semibold text-white text-base mb-4">
              Ações de Liderança Corretivas de Integração
            </h4>

            <div className="space-y-4">
              {grupoVsEquipeData.solucoes.map((sol, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-3 items-start p-3 rounded-xl border transition-all duration-300 ${
                    evolutionApplied 
                      ? "bg-[#00C853]/10 border-[#00C853]/30" 
                      : "bg-slate-900/40 border-slate-800/40"
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300 ${
                    evolutionApplied 
                      ? "bg-[#00C853] text-slate-950 font-bold" 
                      : "bg-purple-accent/15 border border-purple-accent/30 text-purple-accent"
                  }`}>
                    {evolutionApplied ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                  </div>
                  <div>
                    <p className={`text-xs font-mono mb-0.5 ${evolutionApplied ? "text-green-400" : "text-slate-500"}`}>
                      {evolutionApplied ? "Diretriz Ativada" : "Plano Estratégico"}
                    </p>
                    <p className={`text-sm leading-normal font-sans ${evolutionApplied ? "text-white font-medium" : "text-slate-350"}`}>
                      {sol}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-slate-800 pt-4 text-xs font-mono text-slate-500 flex justify-between">
            <span>Resultados de Operações no CriaLab</span>
            <span className={evolutionApplied ? "text-green-400 font-bold" : "text-slate-400"}>
              {evolutionApplied ? "Metas: Alcançadas" : "Meta: Cooperação Ativa"}
            </span>
          </div>
        </motion.div>

      </div>

      {/* Evolution indicators comparison row */}
      <AnimatePresence>
        {evolutionApplied && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.4 }}
            className="mt-8 p-5 bg-[#00C853]/10 border border-[#00C853]/30 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-green-400 shrink-0" />
              <div>
                <p className="font-sub font-bold text-white text-sm">Metas de Evolução Institucional</p>
                <p className="text-xs text-slate-300 font-sans">
                  Sinergia e autonomia fortalecida, desapegando de controles e ampliando satisfação geral.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {grupoVsEquipeData.impactos.map((impact, idx) => (
                <span 
                  key={idx} 
                  className="px-2.5 py-1 rounded bg-[#00C853]/15 border border-[#00C853]/25 text-xs font-mono font-medium text-green-300 flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-green-400" />
                  {impact}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
