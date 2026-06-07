import { useState } from "react";
import { motion } from "motion/react";
import { Send, FileText, Sparkles, Mail, CircleCheck, CheckCircle2, Award } from "lucide-react";

export default function CallToAction() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const email = "escrevaprofernando@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const triggerPrint = () => {
    // Elegant native print trigger to capture the portfolio as PDF
    window.print();
  };

  return (
    <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto text-center relative overflow-hidden" id="cta-contato">
      {/* Background visual light elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-[#6C4DFF] to-[#00C8FF] rounded-full blur-[140px] opacity-15 -z-10 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel p-8 sm:p-14 rounded-3xl relative border border-white/10 shadow-2xl relative overflow-hidden group"
      >
        {/* Subtle decorative mesh */}
        <div className="absolute top-[10%] right-[-10%] w-60 h-60 bg-cyan-accent rounded-full blur-[100px] opacity-10 pointer-events-none" />

        {/* Top Mini Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-accent/10 border border-cyan-accent/20 text-xs font-mono text-cyan-accent mb-6 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          Conexão & Parcerias
        </div>

        {/* Core CTA Title */}
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Vamos colaborar e construir novas ideias?
        </h2>
        
        <p className="text-sm sm:text-base text-slate-350 max-w-2xl mx-auto mt-4 font-sans leading-relaxed">
          Entre em contato para trocar ideias acadêmicas, debater os ritos de equipes de alta performance ou conversar sobre produção audiovisual e fluxos de trabalho colaborativos no CriaLab.
        </p>

        {/* Prominent Interaction Buttons */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 max-w-4xl mx-auto">
          
          {/* Principal Contact Action */}
          <motion.a
            href={`mailto:${email}?subject=Contato%20via%20Portf%C3%B3lio%20de%20Lideran%C3%A7a%20-%20CriaLab&body=Ol%C3%A1%20Fernando,%20gostei%20do%20seu%20Portf%C3%B3lio%20de%20Lideran%C3%A7a%20cooperativa.`}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-primary-neon to-cyan-accent rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-primary-neon/20 hover:shadow-cyan-accent/30 transition-all duration-300 font-mono shrink-0"
          >
            <Send className="w-4 h-4 text-slate-950" />
            Falar com Fernando
          </motion.a>

          {/* Strategic Professional Resume/CV link */}
          <motion.a
            href="https://fgc-cv.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto px-6 py-4 bg-[#6C4DFF]/15 hover:bg-[#6C4DFF]/25 text-white rounded-xl text-xs sm:text-sm font-mono tracking-wider border border-[#6C4DFF]/40 shadow-lg flex items-center justify-center gap-2 transition-all duration-300"
          >
            <Award className="w-4 h-4 text-purple-accent" />
            <span>Acessar Currículo Online</span>
          </motion.a>

          {/* Secondary Email Copy Action with Micro-feedback */}
          <motion.button
            onClick={handleCopyEmail}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/10 text-xs font-mono text-white transition-all duration-300 flex items-center justify-center gap-2"
          >
            {copiedEmail ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-[#00C853]" />
                <span className="text-[#00C853] font-bold font-mono">Email Copiado!</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Copiar escrevaprofernando@...</span>
              </>
            )}
          </motion.button>
        </div>

        {/* Discrete PDF Version Trigger link */}
        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col items-center justify-center gap-2 text-xs">
          <p className="text-slate-500 font-sans">Deseja uma leitura estática convencional para conferências rápidas?</p>
          <button
            onClick={triggerPrint}
            className="inline-flex items-center gap-1.5 text-cyan-accent hover:text-white font-mono font-semibold hover:underline active:scale-95 transition-all duration-200 cursor-pointer"
            title="Abre a janela de impressão nativa otimizada para salvar como PDF"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-accent" />
            <span>Versão para Impressão / Salvar como PDF do Portfólio</span>
          </button>
          <span className="text-[10px] text-slate-500 italic font-sans max-w-sm">
            (Passe as páginas para a folha horizontal A4 no menu de impressão do navegador para gerar o visual executivo perfeito)
          </span>
        </div>

      </motion.div>
    </section>
  );
}
