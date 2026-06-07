import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { 
  Compass, Flame, Users, MessageSquare, Zap, Target, Award, ArrowUp
} from "lucide-react";

// Modular Imports
import Hero from "./components/Hero";
import Diagnostico from "./components/Diagnostico";
import GrupoEquipe from "./components/GrupoEquipe";
import AltoDesempenho from "./components/AltoDesempenho";
import Comunicacao from "./components/Comunicacao";
import LiderancaHibrida from "./components/LiderancaHibrida";
import PlanoAcao from "./components/PlanoAcao";
import Encerramento from "./components/Encerramento";
import CallToAction from "./components/CallToAction";
import GlobalSearch from "./components/GlobalSearch";
import TutorChat from "./components/TutorChat";

export default function App() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSection, setActiveSection] = useState("inicio");
  const navContainerRef = useRef<HTMLDivElement>(null);

  // Smoothly center the active navigation element horizontally inside the scrollable header row
  useEffect(() => {
    if (navContainerRef.current) {
      const parent = navContainerRef.current;
      const activeElement = parent.querySelector('[data-active="true"]') as HTMLElement;
      if (activeElement) {
        const parentRect = parent.getBoundingClientRect();
        const activeRect = activeElement.getBoundingClientRect();
        const relativeLeft = activeRect.left - parentRect.left + parent.scrollLeft;
        
        parent.scrollTo({
          left: relativeLeft - parentRect.width / 2 + activeRect.width / 2,
          behavior: "smooth"
        });
      }
    }
  }, [activeSection]);

  // Track window scroll coordinates for reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = docHeight > 0 ? (scrolled / docHeight) * 100 : 0;
      setScrollPercent(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync navigation menu highlighting using Intersection Observer with viewport centering logic
  useEffect(() => {
    const ids = [
      "inicio",
      "diagnostico",
      "grupo-equipe",
      "alto-desempenho",
      "comunicacao",
      "lideranca-hibrida",
      "plano-acao",
      "síntese-final"
    ];

    const elements = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -55% 0px", // focus observer on the mid-upper viewport
      threshold: [0, 0.1, 0.2, 0.4, 0.6]
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      // Collect entries that are intersecting
      const intersectingEntries = entries.filter(entry => entry.isIntersecting);

      if (intersectingEntries.length > 0) {
        // Sort intersecting elements so the one occupying the highest ratio is selected
        const sorted = [...intersectingEntries].sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        setActiveSection(sorted[0].target.id);
      } else {
        // Fallback: If no elements represent a clean intersection, check viewport proximity manually
        const scrollPosition = window.scrollY;
        for (let i = elements.length - 1; i >= 0; i--) {
          const el = elements[i];
          if (scrollPosition >= el.offsetTop - 200) {
            setActiveSection(el.id);
            break;
          }
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    elements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const menuItems = [
    { label: "Início", id: "inicio" },
    { label: "Diagnóstico", id: "diagnostico" },
    { label: "Grupo vs Equipe", id: "grupo-equipe" },
    { label: "Alto Desempenho", id: "alto-desempenho" },
    { label: "Comunicação", id: "comunicacao" },
    { label: "Liderança Híbrida", id: "lideranca-hibrida" },
    { label: "Plano & Cronograma", id: "plano-acao" },
    { label: "Síntese Final", id: "síntese-final" }
  ];

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  return (
    <div className="relative selection:bg-cyan-accent selection:text-slate-950 min-h-screen bg-[#0F172A] overflow-x-hidden">
      
      {/* Background Mesh Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#0B1E5B] rounded-full blur-[130px] opacity-45"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#6C4DFF] rounded-full blur-[130px] opacity-35"></div>
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-[#00C8FF] rounded-full blur-[110px] opacity-25"></div>
        <div className="absolute top-[60%] left-[5%] w-[500px] h-[500px] bg-[#2D7FF9]/10 rounded-full blur-[130px] opacity-40"></div>
        <div className="absolute bottom-[30%] right-[15%] w-[500px] h-[500px] bg-[#6C4DFF]/10 rounded-full blur-[130px] opacity-30"></div>
      </div>

      {/* Floating Read Progress Line (Fixed Top) */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-900 z-50 print-hidden no-print">
        <div 
          className="h-full bg-gradient-to-r from-primary-neon via-purple-accent to-cyan-accent scroll-indicator-bar"
          style={{ width: `${scrollPercent}%` }}
        />
      </div>

      {/* Persistent Glass Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-white/5 backdrop-blur-md border-b border-white/10 py-3.5 px-4 md:px-8 shadow-lg print-hidden no-print">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <button 
            onClick={() => scrollToId("inicio")} 
            className="flex items-center gap-3 cursor-pointer font-display text-white font-bold leading-none tracking-tight text-sm uppercase flex-shrink-0"
          >
            <div className="w-8 h-8 bg-gradient-to-tr from-primary-neon to-cyan-accent rounded-lg flex items-center justify-center font-bold text-white shadow-md shadow-primary-neon/20">
              CG
            </div>
            <span className="hidden sm:inline">Portifolio <span className="text-cyan-accent text-xs font-mono font-medium opacity-80">/ Fernando Côrtes</span></span>
            <span className="sm:hidden font-extrabold text-[#2D7FF9]">Portifolio</span>
          </button>

          {/* Core Navigation Controls */}
          <div className="flex items-center gap-3 overflow-hidden">
            {/* Spotlight Global search palette */}
            <GlobalSearch onSelectItem={scrollToId} />

            {/* CV Link Button */}
            <motion.a
              href="https://fgc-cv.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.94 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10.5px] sm:text-xs font-mono uppercase tracking-wider font-semibold bg-[#6C4DFF]/10 text-[#00C8FF] border border-[#6C4DFF]/30 hover:bg-[#6C4DFF]/25 transition-all duration-300 cursor-pointer text-center whitespace-nowrap shrink-0"
            >
              <Award className="w-3.5 h-3.5 text-cyan-accent" />
              <span className="hidden sm:inline leading-none">Ver CV</span>
              <span className="sm:hidden leading-none font-bold">CV</span>
            </motion.a>

            {/* Scrolling Shortcut menu (Horizontal scroll lists optimized for mobile) */}
            <div 
              ref={navContainerRef}
              className="flex gap-2 overflow-x-auto pb-1 invisible-scrollbar max-w-[150px] xs:max-w-[220px] sm:max-w-md md:max-w-xl lg:max-w-none px-2 shrink"
            >
              <div className="flex gap-2 shrink-0">
                {menuItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      data-active={isActive ? "true" : "false"}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.94 }}
                      onClick={() => scrollToId(item.id)}
                      className={`px-3 py-1.5 rounded-lg text-[10.5px] sm:text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer ${
                        isActive 
                          ? "bg-gradient-to-r from-primary-neon to-cyan-accent text-white shadow-lg font-bold shadow-primary-neon/15" 
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Chapters Layout coordinates container */}
      <main className="relative">
        <motion.div 
          id="inicio" 
          className="scroll-mt-20"
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Hero />
        </motion.div>

        <div className="w-full h-px bg-slate-900" />

        <motion.div 
          id="diagnostico" 
          className="scroll-mt-20"
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Diagnostico />
        </motion.div>

        <div className="w-full h-px bg-slate-900" />

        <motion.div 
          id="grupo-equipe" 
          className="scroll-mt-20"
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <GrupoEquipe />
        </motion.div>

        <div className="w-full h-px bg-slate-900" />

        <motion.div 
          id="alto-desempenho" 
          className="scroll-mt-20"
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <AltoDesempenho />
        </motion.div>

        <div className="w-full h-px bg-slate-900" />

        <motion.div 
          id="comunicacao" 
          className="scroll-mt-20"
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Comunicacao />
        </motion.div>

        <div className="w-full h-px bg-slate-900" />

        <motion.div 
          id="lideranca-hibrida" 
          className="scroll-mt-20"
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <LiderancaHibrida />
        </motion.div>

        <div className="w-full h-px bg-slate-900" />

        <motion.div 
          id="plano-acao" 
          className="scroll-mt-20"
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <PlanoAcao />
        </motion.div>

        <div className="w-full h-px bg-slate-900" />

        <motion.div 
          id="síntese-final" 
          className="scroll-mt-20"
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Encerramento />
        </motion.div>

        <div className="w-full h-px bg-slate-900" />

        <motion.div 
          className="scroll-mt-10"
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <CallToAction />
        </motion.div>

        {/* Floating Interactive AI Assistant (Tutor) */}
        <TutorChat />
      </main>

    </div>
  );
}
