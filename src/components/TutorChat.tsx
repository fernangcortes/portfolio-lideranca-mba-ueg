import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Sparkles, AlertCircle, Bot, CornerDownLeft, Coffee, Flame, ClipboardList } from "lucide-react";

interface Message {
  role: "user" | "model";
  text: string;
}

// Custom simple parser to render Markdown beautifully without heavy dependency friction
const renderFormattedText = (text: string) => {
  const lines = text.split("\n");
  return lines.map((line, lineIdx) => {
    // Render list items
    if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
      const content = line.trim().substring(2);
      return (
        <li key={lineIdx} className="ml-4 list-disc text-slate-300 mt-1 pl-1 leading-relaxed">
          {parseInlineFormatting(content)}
        </li>
      );
    }
    
    // Empty line to paragraph gap
    if (line.trim() === "") {
      return <div key={lineIdx} className="h-2" />;
    }

    // Default line
    return (
      <p key={lineIdx} className="text-slate-300 leading-relaxed text-xs sm:text-sm mt-1">
        {parseInlineFormatting(line)}
      </p>
    );
  });
};

const parseInlineFormatting = (text: string) => {
  // Regex to match bold tags: **text**
  const boldRegex = /\*\*(.*?)\*\*/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = boldRegex.exec(text)) !== null) {
    // Add text preceding bold match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    // Add bold text
    parts.push(
      <strong key={match.index} className="text-white font-extrabold glow-text-cyan">
        {match[1]}
      </strong>
    );
    lastIndex = boldRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
};

export default function TutorChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMsg, setInputMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  
  const bottomRef = useRef<HTMLDivElement>(null);

  const initialPhrases = [
    { label: "Grupo vs Equipe", query: "Qual a diferença crítica entre um Grupo de Trabalho e uma Equipe de Alto Desempenho?" },
    { label: "Evitar Microgestão", query: "Como podemos incentivar a autonomia sem cair na armadilha da microgestão em times híbridos?" },
    { label: "Ritos do Plano Ágil", query: "Como funcionam os ritos de alinhamento e o quadro visual no Plano de Ação de 5 semanas?" }
  ];

  useEffect(() => {
    // Scroll to the bottom whenever messages change or model loads
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading, isOpen]);

  // Insert initial greet message after mount
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          role: "model",
          text: "Olá! Sou o seu **Mentor de Liderança** do Portfólio do Fernando Côrtes. Estou aqui para dialogar sobre a ciência da **Gestão de Pessoas, Alta Performance de Equipes, Comunicação Assertiva** e ritos de produtividade. \n\nNo que posso ajudar a expandir sua perspectiva corporativa hoje? Vamos conversar sobre como superar o retrabalho, pactuar canais ou projetar a confiança em ambientes híbridos como o **CriaLab/UEG**!"
        }
      ]);
    }
  }, []);

  const handleSendMessage = async (rawMessage?: string) => {
    const textToSend = rawMessage || inputMsg.trim();
    if (!textToSend || isLoading) return;

    // Clear draft search / field
    if (!rawMessage) setInputMsg("");
    setErrorMsg(null);

    // Append new user message
    const updatedMessages = [...messages, { role: "user" as const, text: textToSend }];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      // API call to custom server API route
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          // Server handles context including the entire efemeral session chat list
          history: messages
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Erro de rede API: ${response.status}`);
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "model", text: data.message }]);
    } catch (err: any) {
      console.error("Erro no chat do Tutor:", err);
      setErrorMsg(err.message || "Tente novamente. Verifique se a chave de API do Gemini está configurada.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans pointer-events-auto print-hidden no-print">
      <AnimatePresence>
        {/* Toggle open Chat widget */}
        {!isOpen && (
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.1, translateY: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            id="chat-toggle-btn"
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-primary-neon to-cyan-accent flex items-center justify-center text-slate-950 shadow-2xl hover:shadow-cyan-accent/30 relative focus:outline-none cursor-pointer"
          >
            {/* Absolute Pulsing Ring behind */}
            <span className="absolute inset-0 rounded-full bg-primary-neon/30 animate-ping -z-10" />
            <MessageSquare className="w-6 h-6 text-slate-950 stroke-[2.2px]" />
            <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-purple-accent ring-2 ring-slate-950 animate-bounce flex items-center justify-center text-[8px] font-bold text-white">
              1
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 30 }}
            transition={{ type: "spring", stiffness: 320, damping: 21 }}
            className="w-[90vw] sm:w-[380px] h-[520px] max-h-[75vh] bg-[#090D1A]/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden shadow-black/80"
          >
            {/* Header */}
            <div className="p-4 bg-white/5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#2D7FF9] to-[#00C8FF] flex items-center justify-center shadow-lg shadow-cyan-accent/15">
                  <Bot className="w-5 h-5 text-slate-950" />
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#00C8FF] font-bold flex items-center gap-1">
                    Mentor de Liderança
                    <Sparkles className="w-3 h-3 text-cyan-accent animate-spin" />
                  </h3>
                  <p className="text-[10px] text-slate-400 font-sans">Desenvolvimento de Equipes & Gestão Ágil</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer active:scale-90"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Conversation Flow Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs invisible-scrollbar">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className="max-w-[85%] flex flex-col gap-1">
                    <span className={`text-[9px] font-mono uppercase tracking-wider text-slate-500 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                      {msg.role === "user" ? "Você" : "Mentor de Liderança"}
                    </span>
                    <div
                      className={`p-3.5 rounded-2xl text-left ${
                        msg.role === "user"
                          ? "bg-[#2D7FF9] text-white rounded-tr-none shadow-md"
                          : "bg-white/5 border border-white/10 rounded-tl-none text-slate-200"
                      }`}
                    >
                      {msg.role === "model" ? (
                        <div className="space-y-1">{renderFormattedText(msg.text)}</div>
                      ) : (
                        <p className="leading-relaxed">{msg.text}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Loader Typing indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] flex flex-col gap-1">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500">Mentor de Liderança</span>
                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-4 flex items-center gap-1.5 w-16 justify-center">
                      <span className="w-1.5 h-1.5 bg-[#00C8FF] rounded-full animate-bounce duration-300" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-[#00C8FF] rounded-full animate-bounce duration-300" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-[#00C8FF] rounded-full animate-bounce duration-300" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}

              {/* Error messages if any */}
              {errorMsg && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 flex items-start gap-2 text-[11px]">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Aviso no processamento:</span> {errorMsg}
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Quick action helper buttons */}
            {messages.length < 3 && (
              <div className="px-4 pb-2 pt-1 border-t border-white/5 flex flex-col gap-1.5">
                <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500 text-left mb-0.5">Sugestões rápidas</span>
                <div className="flex flex-col gap-1">
                  {initialPhrases.map((phrase, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(phrase.query)}
                      className="text-[10px] text-left px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-cyan-accent/10 border border-white/5 hover:border-cyan-accent/20 text-slate-350 hover:text-cyan-accent transition-all duration-200 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap block"
                    >
                      💡 {phrase.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Input */}
            <div className="p-3 bg-white/5 border-t border-white/10 flex items-center gap-2">
              <textarea
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Pergunte ao mentor..."
                rows={1}
                className="w-full bg-slate-900/60 border border-white/5 focus:border-cyan-accent/30 rounded-xl px-3 py-2 text-white placeholder-slate-550 text-xs focus:outline-none resize-none max-h-12 invisible-scrollbar leading-relaxed"
                disabled={isLoading}
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputMsg.trim() || isLoading}
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                  inputMsg.trim() && !isLoading
                    ? "bg-[#2D7FF9] text-white cursor-pointer active:scale-95"
                    : "bg-white/5 text-slate-500 cursor-not-allowed"
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
