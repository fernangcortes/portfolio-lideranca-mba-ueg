import { useState } from "react";
import { motion } from "motion/react";
import { diagnosticoData } from "../data";
import { Sliders, Sparkles, Target, ArrowRightLeft, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Diagnostico() {
  const [creativeWeight, setCreativeWeight] = useState(50); // 0 to 100

  // Calculate coordinates for the radar chart (Competências Desenvolvidas)
  // Center is (100, 100), max radius is 70
  // we have 4 directions:
  // 1. Adaptabilidade (level: 85%) -> Up (100, 100 - radius * 0.85)
  // 2. Transversal (level: 90%) -> Right (100 + radius * 0.90, 100)
  // 3. Técnico (level: 75%) -> Down (100, 100 + radius * 0.75)
  // 4. Acadêmico (level: 65%) -> Left (100 - radius * 0.65, 100)
  const pad = 100;
  const radius = 75;
  const radarPoints = [
    { x: pad, y: pad - radius * 0.85 }, // Adaptabilidade
    { x: pad + radius * 0.90, y: pad }, // Comunicação Transversal
    { x: pad, y: pad + radius * 0.75 }, // Artístico / Técnico
    { x: pad - radius * 0.65, y: pad }, // Acadêmico / Projetos
  ];
  const radarPolygonPath = radarPoints.map(p => `${p.x},${p.y}`).join(" ");

  // Growth chart levels for delegation (Competência a Fortalecer)
  const currentDelegationLevel = 45; // %
  const targetDelegationLevel = 85;  // %

  // Improvement Indicators Details
  const indicators = [
    { label: "Redução do retrabalho", metric: "-40%", desc: "Menos refações no laboratório", color: "text-[#FF5252]" },
    { label: "Mais interação entre setores", metric: "3x Mais", desc: "Equipe técnica conectada com artístico", color: "text-cyan-accent" },
    { label: "Cumprimento de prazos", metric: "95%", desc: "Entregas sem estresse e no prazo", color: "text-[#00C853]" },
    { label: "Menos intervenção central", metric: "-60%", desc: "Autonomia local para focar no core", color: "text-purple-accent" },
    { label: "Maior satisfação e clima", metric: "+45%", desc: "Ambiente criativo seguro e harmônico", color: "text-yellow-400" },
  ];

  // Helper text based on sliding balance
  const getBalanceStatus = () => {
    if (creativeWeight < 35) {
      return {
        label: "Zona de Rigidez Crítica",
        text: "Excesso de rigor técnico sufoca a criatividade, desmotivando os profissionais de design e inovação do CriaLab.",
        color: "text-[#FF5252] border-[#FF5252]/30 bg-[#FF5252]/10"
      };
    } else if (creativeWeight > 65) {
      return {
        label: "Zona de Caos / Entregas em Risco",
        text: "Projetos em experimentação infinita. Alto risco de atrasos graves nos cronogramas acadêmicos e técnicos.",
        color: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10"
      };
    } else {
      return {
        label: "Ponto de Equilíbrio CriaLab",
        text: "Sintonia ideal! Inovação criativa estimulada concomitantemente com marcos de entrega precisos e organizados.",
        color: "text-[#00C853] border-[#00C853]/30 bg-[#00C853]/10"
      };
    }
  };

  const balanceStatus = getBalanceStatus();

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="flex items-center gap-3 mb-10 border-b border-slate-800 pb-4">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-neon text-white font-mono font-bold text-sm">
          01
        </span>
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
            DIAGNÓSTICO DE LIDERANÇA
          </h2>
          <p className="text-xs text-slate-400 font-mono">DASHBOARD EXECUTIVO INTERATIVO</p>
        </div>
      </div>

      {/* Grid of 3 Main Diagnostics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* CHALLENGE: Balance Scale */}
        <motion.div
          whileHover={{ y: -8, borderColor: "rgba(255, 213, 79, 0.4)", boxShadow: "0 22px 45px -15px rgba(255, 213, 79, 0.15)" }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="glass-panel rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFD54F]/5 rounded-full blur-2xl pointer-events-none" />
          
          <div>
            <div className="flex items-center gap-2 text-yellow-400 mb-4">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <h3 className="font-sub font-semibold text-white tracking-wide text-lg">
                {diagnosticoData.desafio.title}
              </h3>
            </div>
            
            <p className="text-sm text-slate-300 leading-relaxed font-sans mb-6">
              {diagnosticoData.desafio.desc}
            </p>
          </div>

          {/* Scale Interactive Box */}
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
            <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-2">
              <span className={creativeWeight > 50 ? "text-cyan-accent font-bold" : ""}>Liberdade Criativa</span>
              <span className={creativeWeight < 50 ? "text-yellow-400 font-bold" : ""}>Cronogramas Rígidos</span>
            </div>

            {/* Slider control */}
            <input
              type="range"
              min="10"
              max="90"
              value={creativeWeight}
              onChange={(e) => setCreativeWeight(parseInt(e.target.value))}
              className="w-full accent-primary-neon bg-slate-950 rounded-lg cursor-pointer h-1.5 focus:outline-none mb-4"
            />

            {/* Animated Balance SVG scale */}
            <div className="flex justify-center py-4">
              <svg width="180" height="70" viewBox="0 0 180 70" className="overflow-visible">
                {/* Column Base */}
                <path d="M90 60 L90 20" stroke="#475569" strokeWidth="4" />
                <path d="M75 60 L105 60" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
                
                {/* Balancing beam pivots dynamically based on creativeWeight */}
                {/* Angle from -20deg (more schedule weight) to +20deg (more creative weight) */}
                <g transform={`translate(90, 20) rotate(${(creativeWeight - 50) * 0.5}) translate(-90, -20)`}>
                  {/* Beam */}
                  <line x1="20" y1="20" x2="160" y2="20" stroke="#F1F5F9" strokeWidth="3" />
                  <circle cx="90" cy="20" r="4" fill="#38BDF8" />
                  
                  {/* Left scale pan string */}
                  <line x1="20" y1="20" x2="20" y2="45" stroke="#94A3B8" strokeWidth="1" />
                  {/* Left dish */}
                  <path d="M10 45 L30 45" stroke="#F1F5F9" strokeWidth="2" strokeLinecap="round" />
                  <ellipse cx="20" cy="46" rx="10" ry="2" fill="#0EA5E9" fillOpacity="0.4" />
                  
                  {/* Right scale pan string */}
                  <line x1="160" y1="20" x2="160" y2="45" stroke="#94A3B8" strokeWidth="1" />
                  {/* Right dish */}
                  <path d="M150 45 L170 45" stroke="#F1F5F9" strokeWidth="2" strokeLinecap="round" />
                  <ellipse cx="160" cy="46" rx="10" ry="2" fill="#6C4DFF" fillOpacity="0.4" />
                </g>
              </svg>
            </div>

            {/* Scale status */}
            <div className={`p-3 rounded-lg border text-xs font-sans leading-relaxed ${balanceStatus.color} transition-all duration-300`}>
              <div className="font-mono font-bold uppercase tracking-wider mb-0.5 flex items-center gap-1">
                <ArrowRightLeft className="w-3.5 h-3.5" />
                {balanceStatus.label}
              </div>
              {balanceStatus.text}
            </div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ y: -8, borderColor: "rgba(0, 200, 255, 0.4)", boxShadow: "0 22px 45px -15px rgba(0, 200, 255, 0.15)" }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="glass-panel rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary-neon/5 rounded-full blur-2xl pointer-events-none" />
          
          <div>
            <div className="flex items-center gap-2 text-cyan-accent mb-4">
              <ShieldCheck className="w-5 h-5 text-cyan-accent" />
              <h3 className="font-sub font-semibold text-white tracking-wide text-lg">
                {diagnosticoData.desenvolvida.title}
              </h3>
            </div>
            
            <p className="text-sm text-slate-300 leading-relaxed font-sans mb-6">
              {diagnosticoData.desenvolvida.desc}
            </p>
          </div>

          {/* Interactive Radar Illustration with SVG */}
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 flex flex-col items-center">
            <span className="text-[10px] font-mono text-slate-400 mb-2 uppercase tracking-wide">
              Matriz de Competências Práticas
            </span>
            
            <div className="relative w-44 h-44 flex items-center justify-center mb-2">
              <svg width="200" height="200" viewBox="0 0 200 200" className="overflow-visible">
                {/* Background radar concentric shapes */}
                <circle cx="100" cy="100" r="75" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="100" cy="100" r="50" fill="none" stroke="#2c3e55" strokeWidth="1" />
                <circle cx="100" cy="100" r="25" fill="none" stroke="#2c3e55" strokeWidth="0.5" />
                
                {/* 4 Axis */}
                <line x1="100" y1="20" x2="100" y2="180" stroke="#334155" strokeWidth="1" />
                <line x1="20" y1="100" x2="180" y2="100" stroke="#334155" strokeWidth="1" />
                
                {/* Filled polygon for competence levels */}
                <polygon
                  points={radarPolygonPath}
                  fill="url(#radarGrad)"
                  stroke="#2D7FF9"
                  strokeWidth="2.5"
                  className="animate-pulse"
                />

                {/* Coordinate marker dots */}
                {radarPoints.map((p, i) => (
                  <circle key={i} cx={p.x} cy={p.y} r="4" fill="#00C8FF" stroke="#0F172A" strokeWidth="1.5" />
                ))}

                {/* Axis Labels */}
                <text x="100" y="15" textAnchor="middle" className="fill-slate-300 font-mono font-medium text-[9px]">
                  Adaptabilidade (85%)
                </text>
                <text x="183" y="103" textAnchor="start" className="fill-slate-300 font-mono font-medium text-[9px]">
                  Transversal (90%)
                </text>
                <text x="100" y="193" textAnchor="middle" className="fill-slate-400 font-mono text-[9px]">
                  Artístico / Técnico (75%)
                </text>
                <text x="15" y="103" textAnchor="end" className="fill-slate-400 font-mono text-[9px]">
                  Projetos (65%)
                </text>

                {/* Gradients */}
                <defs>
                  <linearGradient id="radarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(45, 127, 249, 0.45)" />
                    <stop offset="100%" stopColor="rgba(108, 77, 255, 0.45)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ y: -8, borderColor: "rgba(108, 77, 255, 0.4)", boxShadow: "0 22px 45px -15px rgba(108, 77, 255, 0.15)" }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="glass-panel rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-accent/5 rounded-full blur-2xl pointer-events-none" />
          
          <div>
            <div className="flex items-center gap-2 text-purple-accent mb-4">
              <Target className="w-5 h-5 text-purple-500" />
              <h3 className="font-sub font-semibold text-white tracking-wide text-lg">
                {diagnosticoData.fortalecer.title}
              </h3>
            </div>
            
            <p className="text-sm text-slate-300 leading-relaxed font-sans mb-6">
              {diagnosticoData.fortalecer.desc}
            </p>
          </div>

          {/* Delegação Estratégica Growth representation */}
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 flex flex-col">
            <span className="text-[10px] font-mono text-slate-400 mb-3 uppercase tracking-wide">
              Descentralização & Delegação
            </span>

            {/* Double Bar Comparison */}
            <div className="space-y-4 font-sans text-xs">
              <div>
                <div className="flex justify-between mb-1.5 font-mono text-slate-450">
                  <span>Delegação s/ Pressão</span>
                  <span className="text-slate-300 font-bold">{currentDelegationLevel}%</span>
                </div>
                <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="bg-gradient-to-r from-red-500 to-purple-500 h-full rounded-full"
                    style={{ width: `${currentDelegationLevel}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1.5 font-mono text-cyan-accent">
                  <span>Meta com Empoderamento</span>
                  <span className="text-white font-bold">{targetDelegationLevel}%</span>
                </div>
                <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-cyan-accent h-full rounded-full animate-pulse"
                    style={{ width: `${targetDelegationLevel}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Target goals pointers */}
            <div className="mt-4 border-t border-slate-800 pt-3 text-[11px] text-slate-400 leading-normal flex gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-accent shrink-0 mt-1"></div>
              <span>Objetivo: Desapegar gradualmente dos processos burocráticos operacionais permitindo maior maturidade criativa lateral.</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Improvement indicators footer section */}
      <h4 className="font-mono text-xs text-slate-400 uppercase tracking-widest text-center mt-12 mb-6">
        Indicadores Chave de Melhoria Monitorados
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {indicators.map((ind, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="glass-panel p-4 rounded-xl border border-slate-800 text-center relative overflow-hidden flex flex-col justify-between"
          >
            {/* Soft glowing line background */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-neon to-cyan-accent opacity-40" />
            
            <p className="text-[10px] font-mono uppercase tracking-wide text-slate-400 mb-2 leading-tight">
              {ind.label}
            </p>
            
            <div className={`text-2xl md:text-3xl font-mono font-bold my-1 ${ind.color}`}>
              {ind.metric}
            </div>

            <p className="text-[10px] text-slate-500 font-sans leading-tight mt-1">
              {ind.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
