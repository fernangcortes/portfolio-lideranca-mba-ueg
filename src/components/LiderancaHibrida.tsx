import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { liderancaHibrida } from "../data";
import { 
  Zap, XCircle, CheckCircle2, ShieldAlert, Sparkles, 
  ChevronRight, ArrowRight, TrendingDown, Eye, RefreshCcw 
} from "lucide-react";

export default function LiderancaHibrida() {
  const [activeTab, setActiveTab] = useState<"micro" | "modern">("modern");

  // Metrics representation based on active state
  const metrics = activeTab === "micro"
    ? [
        { label: "Autonomia do Time", value: "15%", danger: true },
        { label: "Nível de Estresse", value: "90%", danger: true },
        { label: "Velocidade Inovadora", value: "20%", danger: true },
        { label: "Retenção de Talentos", value: "35%", danger: true },
      ]
    : [
        { label: "Autonomia do Time", value: "95%", danger: false },
        { label: "Nível de Estresse", value: "25%", danger: false },
        { label: "Velocidade Inovadora", value: "95%", danger: false },
        { label: "Retenção de Talentos", value: "90%", danger: false },
      ];

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="flex items-center gap-3 mb-10 border-b border-slate-800 pb-4">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-neon text-white font-mono font-bold text-sm">
          05
        </span>
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
            LIDERANÇA HÍBRIDA & MICROGESTÃO
          </h2>
          <p className="text-xs text-slate-400 font-mono">DIFERENCIAÇÕES EM AMBIENTES FLEXÍVEIS</p>
        </div>
      </div>

      <p className="text-sm text-slate-350 max-w-3xl font-sans mb-8">
        No ambiente híbrido, a barreira do controle excessivo versus autonomia confiada dita as taxas de produtividade. 
        Altere o modelo de gestão abaixo para observar o fluxo de clima, indicadores organizacionais e rotinas do CriaLab.
      </p>

      {/* Slide Switch Control */}
      <div className="flex justify-center mb-10">
        <div className="bg-slate-950 p-1.5 rounded-2xl border border-slate-800 flex items-center min-w-80 relative">
          <motion.div
            layout
            className={`absolute top-1.5 bottom-1.5 rounded-xl -z-10 ${
              activeTab === "micro" ? "bg-[#FF5252] left-1.5" : "bg-[#00C853] left-[50.5%]"
            }`}
            style={{ width: "48%" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
          
          <button
            onClick={() => setActiveTab("micro")}
            className={`flex-1 text-center py-2.5 font-mono text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
              activeTab === "micro" ? "text-slate-950" : "text-slate-450 hover:text-white"
            }`}
          >
            Microgestão
          </button>
          
          <button
            onClick={() => setActiveTab("modern")}
            className={`flex-1 text-center py-2.5 font-mono text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
              activeTab === "modern" ? "text-slate-950" : "text-slate-450 hover:text-white"
            }`}
          >
            Liderança Moderna
          </button>
        </div>
      </div>

      {/* Main Comparison Section Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Dynamic Left Box: Practices & Impact list */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            {activeTab === "micro" ? (
              <motion.div
                key="micro-block"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="glass-panel border border-[#FF5252]/30 bg-[#FF5252]/5 rounded-3xl p-6 md:p-8 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-[#FF5252] mb-6">
                    <ShieldAlert className="w-6 h-6 text-[#FF5252]" />
                    <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider">
                      Práticas Sistemáticas e Impactos da Microgestão
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Column: Práticas */}
                    <div>
                      <h4 className="font-mono text-[11px] font-bold text-[#FF5252] uppercase tracking-wider mb-3">
                        Rotinas de Desconfiança (Causas)
                      </h4>
                      <ul className="space-y-3 font-sans text-sm text-slate-300">
                        {liderancaHibrida.practices.map((practice, i) => (
                          <li key={i} className="flex gap-2.5 items-start">
                            <XCircle className="w-4 h-4 text-[#FF5252] shrink-0 mt-0.5" />
                            <span>{practice}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column: Impactos */}
                    <div className="border-t md:border-t-0 md:border-l border-slate-800/80 pt-6 md:pt-0 md:pl-6">
                      <h4 className="font-mono text-[11px] font-bold text-red-400 uppercase tracking-wider mb-3">
                        Danos Sistêmicos (Efeitos Colaterais)
                      </h4>
                      <ul className="space-y-3 font-sans text-sm text-slate-350">
                        {liderancaHibrida.impacts.map((impact, i) => (
                          <li key={i} className="flex gap-2.5 items-start">
                            <TrendingDown className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                            <span>{impact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-800/60 pt-4 text-[11px] font-mono text-red-300 bg-red-950/20 px-3 py-2 rounded-lg border border-red-500/10">
                  ⚠️ NOTA: A centralização cria gargalos constantes, sobrecarrega a coordenação e exure o emocional dos colaboradores.
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="modern-block"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="glass-panel border border-[#00C853]/30 bg-[#00C853]/5 rounded-3xl p-6 md:p-8 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-[#00C853] mb-6">
                    <Sparkles className="w-6 h-6 text-green-400" />
                    <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider">
                      Alternativas Estratégicas - Liderança Moderna
                    </h3>
                  </div>

                  <div>
                    <h4 className="font-mono text-[11px] font-bold text-green-400 uppercase tracking-wider mb-4">
                      Protocolos de Empoderamento Operacional
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {liderancaHibrida.alternatives.map((alt, i) => (
                        <div key={i} className="flex gap-3 items-start bg-slate-905/60 p-4 rounded-xl border border-slate-800/40">
                          <div className="w-5 h-5 rounded-full bg-[#00C853]/15 flex items-center justify-center text-[#00C853] shrink-0 mt-0.5">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <p className="font-sub font-semibold text-white text-xs mb-0.5">Estratégia {i + 1}</p>
                            <p className="text-xs text-slate-300 font-sans leading-relaxed">{alt}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-800/60 pt-4 text-[11px] font-mono text-green-300 bg-green-950/20 px-3 py-2 rounded-lg border border-green-500/10">
                  ✨ LIGADO: Foco em resultados e combinados transparentes de acompanhamento fortalecem o CriaLab de ponta a ponta.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic Right Box: Performance metrics widgets */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-4">
          
          <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between flex-1 relative overflow-hidden">
            <h4 className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-4">
              Simulador de Clima Laboral
            </h4>

            <div className="space-y-4">
              {metrics.map((met, idx) => (
                <div key={idx} className="bg-slate-900/50 p-3 rounded-xl border border-slate-850">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-slate-350 font-sans">{met.label}</span>
                    <span className={`text-sm font-mono font-bold ${met.danger ? "text-[#FF5252]" : "text-[#00C853]"}`}>
                      {met.value}
                    </span>
                  </div>

                  {/* Progress segment indicator */}
                  <div className="w-full h-1 bg-slate-950 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-700 ${met.danger ? "bg-[#FF5252]" : "bg-[#00C853]"}`}
                      style={{ width: met.value }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Micro context summary */}
            <div className="mt-6 border-t border-slate-800/80 pt-4">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wide block">
                Fronteiras Sistêmicas no CriaLab
              </span>
              <p className="text-xs text-slate-400 font-sans leading-relaxed mt-1">
                {activeTab === "micro"
                  ? "Ambiente saturado de checagem. Bloqueio mental, alto turnover e desgaste contínuo da gerência."
                  : "Ambiente criativo fluido e autônomo. Altas taxas de inovação estética e responsabilidade madura."
                }
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
