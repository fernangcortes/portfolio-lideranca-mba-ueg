import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Sparkles, Terminal, ArrowRight, X, Compass, Flame, Users, MessageSquare, Zap, Target, BookOpen, Calendar } from "lucide-react";

interface SearchItem {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  tags: string[];
  icon: React.ElementType;
}

const SEARCH_INDEX: SearchItem[] = [
  {
    id: "diagnostico",
    category: "Capítulo 1: Diagnóstico",
    title: "Autoavaliação & Desafios de Competências",
    excerpt: "Adaptabilidade, comunicação transversal e os desafios de equilibrar liberdade criativa versus cumprimento de metas rigorosas no CriaLab.",
    tags: ["criatividade", "adaptabilidade", "comunicação", "delegar", "desafio", "capacidades", "fernando"],
    icon: Target
  },
  {
    id: "grupo-equipe",
    category: "Capítulo 2: Evolução",
    title: "Grupo vs Equipe de Alto Desempenho",
    excerpt: "Superação de retrabalhos frequentes, autonomia descentralizada, redução de dependência e integração tática intersetorial.",
    tags: ["retrabalho", "autonomia", "grupo", "equipe", "soluções", "integração", "descentralizar"],
    icon: Users
  },
  {
    id: "alto-desempenho",
    category: "Capítulo 3: Ecossistema",
    title: "Ecossistema de Alto Desempenho",
    excerpt: "Pilares do CriaLab como confiança mútua, diversidade enriquecedora, aprendizagem ágil, liderança inspiradora e cooperação ativa.",
    tags: ["confiança", "diversidade", "aprendizagem", "liderança", "colaboração", "organização", "feedback"],
    icon: Zap
  },
  {
    id: "comunicacao",
    category: "Capítulo 4: Comunicação",
    title: "Comunicação Estratégica & Diálogos",
    excerpt: "Reestruturação prática de frases inadequadas em diálogos assertivos orientados a resultados claros e respeito às pessoas.",
    tags: ["assertiva", "frases", "cenário", "reflexão", "justificativa", "retrabalho", "diálogo", "comunicação"],
    icon: MessageSquare
  },
  {
    id: "lideranca-hibrida",
    category: "Capítulo 5: Liderança Híbrida",
    title: "Liderança Híbrida vs Microgestão",
    excerpt: "Evitando os impactos nocivos da microgestão. Alternativas como delegação com foco na autonomia e na entrega de valor mensurável.",
    tags: ["microgestão", "remoto", "presencial", "produtividade", "controlo", "confiança", "metas"],
    icon: Flame
  },
  {
    id: "plano-acao",
    category: "Capítulo 6: Estratégia",
    title: "Plano de Ação Estratégico",
    excerpt: "Cinco estratégias maduras de implantação no CriaLab: Kanban visual, Alinhamento Semanal, Reuniões Individuais e Canais de Comunicação.",
    tags: ["estratégia", "implantação", "Slack", "Kanban", "delegação", "escuta ativa", "one-on-one"],
    icon: Compass
  },
  {
    id: "plano-acao", // Jumps to the timeline nested inside the Action Plan
    category: "Cronograma de Ação",
    title: "Timeline de 5 Semanas",
    excerpt: "Cronograma passo a passo iniciando no Diagnóstico Ativo até a Avaliação Final de Clima Interno e autonomia tática.",
    tags: ["cronograma", "semanas", "timeline", "setup visual", "quadro", "implantação", "calibração"],
    icon: Calendar
  },
  {
    id: "síntese-final",
    category: "Capítulo Final: Síntese",
    title: "Síntese Reflexiva & Compromisso",
    excerpt: "Lições assimiladas sobre liderança, bem-estar da equipe e compromissos práticos para elevar a maturidade do CriaLab.",
    tags: ["compromisso", "reflexiva", "conclusão", "mudança", "liderança", "fernando", "vida"],
    icon: BookOpen
  }
];

interface GlobalSearchProps {
  onSelectItem: (id: string) => void;
}

export default function GlobalSearch({ onSelectItem }: GlobalSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Toggle Command Palette with Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 120);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
  }, [isOpen]);

  // Click outside modal to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  // Filter items in index based on query
  const filteredResults = SEARCH_INDEX.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return false;
    return (
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.excerpt.toLowerCase().includes(q) ||
      item.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  const quickSuggestions = [
    { label: "Autoavaliação", query: "autoavaliação" },
    { label: "Liderança Híbrida", query: "hibrida" },
    { label: "Plano de Ação", query: "estratégia" },
    { label: "Comunicação", query: "comunicação" }
  ];

  const handleSelect = (itemId: string) => {
    onSelectItem(itemId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Visual top search button in the Persistent Navbar */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-350 bg-white/5 border border-white/10 hover:border-cyan-accent/30 hover:bg-white/10 active:scale-95 transition-all duration-300 pointer-events-auto shadow-md"
        title="Atalho: Ctrl+K ou Cmd+K"
        id="btn-pesquisa-global"
      >
        <Search className="w-4 h-4 text-cyan-accent" />
        <span className="text-xs font-mono select-none hidden md:inline">Buscar...</span>
        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-slate-400 select-none hidden lg:inline">
          ⌘K
        </span>
      </button>

      {/* Main Search Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <div
            onClick={handleBackdropClick}
            className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-[#090D1A]/85 backdrop-blur-md"
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-2xl bg-slate-950/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden flex flex-col"
            >
              {/* Search input header */}
              <div className="flex items-center px-4 py-4 border-b border-white/10 bg-white/5">
                <Search className="w-5 h-5 text-cyan-accent shrink-0 mr-3 animate-pulse" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Pesquisar por competências, Kanban, liderança híbrida, planos..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent border-none text-white placeholder-slate-400 focus:outline-none text-sm font-sans"
                />
                
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}

                <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-slate-400 border border-white/10 px-2 py-1 rounded bg-slate-900 ml-3 shrink-0">
                  <span>ESC</span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-4 max-h-[420px] overflow-y-auto invisible-scrollbar space-y-4">
                
                {/* Autocomplete Suggestions / Empty query state */}
                {!query && (
                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-[#2D7FF9] mb-2 font-bold">
                        Sugestões de Atividade Rápida
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {quickSuggestions.map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => setQuery(item.query)}
                            className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 hover:bg-cyan-accent/10 border border-white/5 hover:border-cyan-accent/30 text-slate-350 hover:text-cyan-accent active:scale-95 transition-all duration-200 text-left"
                          >
                            # {item.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/5 text-slate-400 text-xs leading-relaxed space-y-2">
                      <div className="flex items-center gap-1 text-slate-300 font-medium">
                        <Terminal className="w-3.5 h-3.5 text-primary-neon" />
                        <span>Atalhos de Navegação</span>
                      </div>
                      <p className="font-sans text-slate-400">
                        Digite palavras-chave da liderança criativa como <strong className="text-white">"Kanban"</strong>, <strong className="text-white">"escuta"</strong>, ou <strong className="text-white">"retrabalho"</strong> para indexar todo o portfólio acadêmico e navegar instantaneamente até as seções específicas.
                      </p>
                    </div>
                  </div>
                )}

                {/* Search Results */}
                {query && (
                  <div className="space-y-2">
                    <div className="flex justify-between items-center px-1">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                        Resultados Encontrados ({filteredResults.length})
                      </span>
                      {filteredResults.length > 0 && (
                        <span className="text-[9px] font-mono text-cyan-accent uppercase">
                          Clique para navegar
                        </span>
                      )}
                    </div>

                    <AnimatePresence>
                      {filteredResults.length > 0 ? (
                        <div className="space-y-2">
                          {filteredResults.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.2, delay: index * 0.04 }}
                                onClick={() => handleSelect(item.id)}
                                className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-accent/30 cursor-pointer flex items-start justify-between group transition-all duration-300"
                              >
                                <div className="flex gap-3 leading-normal">
                                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-cyan-accent border border-white/10 shrink-0 group-hover:bg-cyan-accent/15 group-hover:text-white transition-colors">
                                    <IconComponent className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <span className="text-[9.5px] font-mono uppercase tracking-wider text-purple-accent font-bold">
                                      {item.category}
                                    </span>
                                    <h4 className="text-xs sm:text-sm font-semibold text-white mt-0.5 group-hover:text-cyan-accent transition-colors">
                                      {item.title}
                                    </h4>
                                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                                      {item.excerpt}
                                    </p>
                                  </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ml-2 shrink-0">
                                  <ArrowRight className="w-3.5 h-3.5 text-cyan-accent" />
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="py-12 text-center text-slate-450 text-xs space-y-2"
                        >
                          <p>Nenhuma concordância encontrada para "<strong className="text-white">{query}</strong>".</p>
                          <p className="text-[11px] text-slate-500">Tente buscar termos como "liderança", "Kanban", "cronograma", "equipe" ou "comunicação".</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
              
              {/* Footer Indicator info */}
              <div className="py-2.5 px-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span className="flex items-center gap-1 text-[9px] uppercase tracking-wide">
                  <Sparkles className="w-3 h-3 text-cyan-accent" />
                  Spotlight Integrado • Fernando Gomes Côrtes
                </span>
                <span>Pressione ESC para fechar</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
