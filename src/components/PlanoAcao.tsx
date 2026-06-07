import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { planoAcaoOrg, cronogramaEtapas } from "../data";
import { 
  Building, AlertTriangle, Lightbulb, Play, ChevronRight, 
  MessageSquare, Calendar, Trello, Users, Heart, ClipboardCheck,
  Search, Sliders, Workflow, RefreshCw, TrendingUp 
} from "lucide-react";

export default function PlanoAcao() {
  const [selectedStrategy, setSelectedStrategy] = useState<number>(0);
  const [selectedWeek, setSelectedWeek] = useState<number>(1);

  // Strategy icons alignment helper
  const strategyIcons = [
    <MessageSquare className="w-5 h-5 text-cyan-accent" />,
    <Calendar className="w-5 h-5 text-purple-accent" />,
    <Trello className="w-5 h-5 text-[#FF9800]" />,
    <Users className="w-5 h-5 text-[#00C853]" />,
    <Heart className="w-5 h-5 text-[#FF5252]" />,
  ];

  // Week icons alignment helper
  const weekIcons = [
    <Search className="w-4 h-4" />,
    <Sliders className="w-4 h-4" />,
    <Workflow className="w-4 h-4" />,
    <RefreshCw className="w-4 h-4" />,
    <TrendingUp className="w-4 h-4" />,
  ];

  const currentStrategy = planoAcaoOrg.estrategias[selectedStrategy];
  const currentWeekInfo = cronogramaEtapas[selectedWeek - 1];

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="flex items-center gap-3 mb-10 border-b border-slate-800 pb-4">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-neon text-white font-mono font-bold text-sm">
          06
        </span>
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
            PLANO DE AÇÃO ORGANIZACIONAL
          </h2>
          <p className="text-xs text-slate-400 font-mono">DIRETRIZES E CRONOGRAMA DE INTERVENÇÃO</p>
        </div>
      </div>

      {/* Grid: Layout 1: Brief details card of organization */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10 font-sans text-sm">
        {/* Caracterização */}
        <div className="glass-panel p-5 rounded-2xl border border-slate-800 relative">
          <div className="flex items-center gap-2 text-cyan-accent mb-3 font-semibold font-sub">
            <Building className="w-4.5 h-4.5" />
            <span>Caracterização do Time</span>
          </div>
          <p className="text-slate-300 leading-relaxed text-xs">
            {planoAcaoOrg.equipeDesc}
          </p>
        </div>

        {/* Problema central */}
        <div className="glass-panel p-5 rounded-2xl border border-slate-800 relative">
          <div className="flex items-center gap-2 text-red-400 mb-3 font-semibold font-sub">
            <AlertTriangle className="w-4.5 h-4.5" />
            <span>Problema Central Identificado</span>
          </div>
          <p className="text-slate-300 leading-relaxed text-xs">
            {planoAcaoOrg.problemaCentral}
          </p>
        </div>

        {/* Justificativa */}
        <div className="glass-panel p-5 rounded-2xl border border-slate-800 relative">
          <div className="flex items-center gap-2 text-[#00C853] mb-3 font-semibold font-sub">
            <Lightbulb className="w-4.5 h-4.5" />
            <span>Justificativa da Liderança</span>
          </div>
          <p className="text-slate-300 leading-relaxed text-xs">
            {planoAcaoOrg.justificativa}
          </p>
        </div>
      </div>

      {/* Layout 2: Intervention Strategies Dashboard */}
      <h3 className="font-display font-bold text-white text-lg mb-4 uppercase tracking-wider">
        Estratégias de Intervenção
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* Left Side: Interventions List Toggles */}
        <div className="lg:col-span-5 space-y-3.5">
          {planoAcaoOrg.estrategias.map((est, idx) => {
            const isSelected = selectedStrategy === idx;

            return (
              <motion.button
                key={idx}
                whileHover={{ x: 4 }}
                onClick={() => setSelectedStrategy(idx)}
                className={`w-full text-left p-4 rounded-xl border flex items-center justify-between transition-all duration-300 ${
                  isSelected 
                    ? "bg-slate-900 border-primary-neon shadow-md shadow-primary-neon/10" 
                    : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border border-slate-800/80 bg-slate-950`}>
                    {strategyIcons[idx]}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-semibold text-slate-500 uppercase">Ação {idx + 1}</span>
                    <p className="font-sub font-bold text-slate-200 text-xs uppercase tracking-wide mt-0.5">
                      {est.strategy}
                    </p>
                  </div>
                </div>

                <ChevronRight className={`w-4 h-4 text-slate-500 transition-all duration-300 ${
                  isSelected ? "translate-x-1 text-cyan-accent" : ""
                }`} />
              </motion.button>
            );
          })}
        </div>

        {/* Right Side: Deep-Dive Card details */}
        <div className="lg:col-span-7">
          <div className="glass-panel rounded-2xl p-6 border border-slate-800 relative min-h-[350px] flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-neon/5 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-2 mb-3">
                <ClipboardCheck className="w-4 h-4 text-cyan-accent" />
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-accent">
                  Estratégia Operativa em Detalhes
                </span>
              </div>

              <h4 className="font-display font-medium text-2xl text-white mb-4">
                {currentStrategy.strategy}
              </h4>

              <div className="space-y-4 font-sans text-sm">
                <div>
                  <span className="text-[10px] font-mono text-slate-450 uppercase block mb-1">Como será implementado</span>
                  <p className="text-slate-250 leading-relaxed bg-slate-900/50 p-3 rounded-lg border border-slate-800/60">
                    {currentStrategy.howText}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] font-mono text-slate-450 uppercase block mb-1">Quem participará</span>
                    <p className="text-slate-300 font-medium font-sub text-xs">
                      {currentStrategy.who}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-450 uppercase block mb-1">Resultado Esperado</span>
                    <p className="text-green-400 font-medium font-sub text-xs">
                      {currentStrategy.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-805 pt-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest text-right">
              CriaLab Metodologia de Gestão
            </div>
          </div>
        </div>
      </div>

      {/* Chapter 07: Horizontal Timeline Progress */}
      <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-4">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#00C853] text-slate-950 font-mono font-bold text-sm">
          07
        </span>
        <div>
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-white">
            CRONOGRAMA DE IMPLANTAÇÃO ÁGIL
          </h2>
          <p className="text-xs text-slate-400 font-mono">timeline horizontal de cinco semanas</p>
        </div>
      </div>

      {/* Horizontal timeline board */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 mb-6">
        
        {/* Dynamic active week detail widget */}
        <div className="mb-8 p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary-neon/10 border border-primary-neon/30 flex items-center justify-center text-cyan-accent font-bold shrink-0">
            {weekIcons[selectedWeek - 1]}
          </div>
          <div>
            <span className="text-[10px] font-mono text-[#00C853] uppercase tracking-wider font-bold">Semana {selectedWeek} de Implantação</span>
            <h4 className="font-sub font-bold text-white text-sm mb-1">{currentWeekInfo.title}</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">{currentWeekInfo.action}</p>
          </div>
        </div>

        {/* Timeline track nodes */}
        <div className="relative pt-6 pb-2">
          {/* Main track horizontal bar */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-950 rounded-full select-none" />
          
          {/* Active progress tracker line */}
          <div 
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-primary-neon to-[#00C853] rounded-full transition-all duration-700" 
            style={{ width: `${((selectedWeek - 1) / 4) * 100}%` }}
          />

          <div className="grid grid-cols-5 relative z-10">
            {cronogramaEtapas.map((step, idx) => {
              const isActive = selectedWeek === step.week;
              const isPast = selectedWeek > step.week;

              return (
                <div key={idx} className="flex flex-col items-center">
                  <button
                    onClick={() => setSelectedWeek(step.week)}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 font-mono text-xs font-bold ${
                      isActive 
                        ? "bg-[#00C853] border-[#00C853] text-slate-950 shadow-md shadow-[#00C853]/20" 
                        : isPast 
                          ? "bg-primary-neon border-primary-neon text-white" 
                          : "bg-slate-900 border-slate-800 text-slate-500 hover:text-white"
                    }`}
                  >
                    {idx + 1}
                  </button>
                  <span className={`text-[10px] font-mono uppercase tracking-wider mt-2.5 font-bold transition-all duration-300 ${
                    isActive ? "text-cyan-accent" : isPast ? "text-slate-400" : "text-slate-600"
                  }`}>
                    Semana {step.week}
                  </span>
                  <span className="text-[9px] text-slate-500 text-center font-sans hidden sm:block mt-1 px-2 line-clamp-1">
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
