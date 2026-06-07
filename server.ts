import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini Client Lazily/Carefully
  let ai: GoogleGenAI | null = null;
  function getGeminiClient() {
    if (!ai) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY is not defined. Please configure it in Settings > Secrets.");
      }
      ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
    return ai;
  }

  // API endpoint for Chatbot
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        res.status(400).json({ error: "Mensagem é obrigatória." });
        return;
      }

      const client = getGeminiClient();

      const systemInstruction = `Você é o Mentor de Liderança do Portfólio de Fernando Gomes Côrtes.
Seu objetivo principal é atuar como um consultor estratégico e tutor focado em Liderança, Gestão de Equipes de Alto Desempenho, Comunicação Assertiva e Metodologias Ágeis.

Diretrizes de Conteúdo & Contexto:
- O Tema Central é Liderança Situacional e o desenvolvimento de Equipes. Você deve responder dúvidas com base nas teorias de gestão do portfólio, como a diferenciação crítica entre "Grupo de Trabalho" e "Equipe de Alto Desempenho", delegação estratégica de tarefas sob pressão, e a superação da microgestão em ambientes de trabalho híbridos.
- Contexto sobre o CriaLab e a UEG (Universidade Estadual de Goiás): O CriaLab é o Laboratório de Pesquisa, Desenvolvimento e Inovação em Criatividade, Tecnologia e Audiovisual da UEG. É o cenário real onde Fernando Gomes Côrtes atua como Técnico de Audiovisual, colaborando ativamente na produção e observando os desafios reais de comunicação e coordenação de equipes em ambientes híbridos. O portfólio de liderança reflete sua vivência e propostas práticas para este ambiente de criação. Mencione o CriaLab e a UEG sob essa ótica, conectando a liderança ao apoio, aprendizagem coletiva e facilitação de times.
- Detalhes dos Capítulos que você domina:
  1. Diagnóstico do Líder: Foca em Adaptabilidade e Comunicação Transversal para lidar com perfis diversos. Fala sobre o desafio de equilibrar liberdade criativa com as metas estritas de cronograma.
  2. Transição de Grupo para Equipe: Superação do retrabalho e falta de integração por meio da autonomia coletiva descentralizada e pactuação de regras explícitas.
  3. Pilares da Alta Performance (Ecossistema): Confiança mútua, respeito à diversidade, colaboração ativa, feedback construtivo continuado e aprendizagem contínua.
  4. Comunicação Assertiva Reestruturada: Substituir cobranças reativas ou julgamentos de motivação por falas assertivas, descritivas e orientadas a propostas de soluções práticas.
  5. Liderança Híbrida (Descentralização): Como contornar o vício da microgestão (cobranças excessivas, reuniões excessivas) implantando combinados de acompanhamento visuais e delegação madura.
  6. Plano de Ação de 5 Semanas: Diagnóstico Ativo, Pactuação de Canais Oficiais, Setup Visual (Trello/Kanban), Calibração de feedbacks de melhoria contínua e Avaliação do Clima.

Instruções de Resposta:
- Adote um tom inspirador, altamente estruturado, empático, sênior e profissional.
- Sempre responda em português do Brasil.
- Use formatação Markdown (tópicos, negrito para destacar conceitos chaves como **confiança mútua** ou **gestão visual**) de forma a tornar o texto legível e agradável.
- Responda de maneira concisa e objetiva. Se o usuário fizer perguntas gerais sobre liderança, direcione a resposta integrando elegantemente a jornada de aprendizagem do Fernando no CriaLab/UEG.`;

      // Structure historical contents for GenAI model
      const contents: any[] = [];
      
      if (history && Array.isArray(history)) {
        history.forEach((msg: any) => {
          contents.push({
            role: msg.role === "user" ? "user" : "model",
            parts: [{ text: msg.text }],
          });
        });
      }

      // Add the final user message
      contents.push({
        role: "user",
        parts: [{ text: message }],
      });

      const response = await client.models.generateContent({
        model: "gemini-2.5-flash",
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const replyText = response.text || "Sem resposta.";
      res.json({ message: replyText });
    } catch (error: any) {
      console.error("Erro no processamento da IA:", error);
      res.status(500).json({ 
        error: error.message || "Erro inesperado processando sua solicitação de IA." 
      });
    }
  });

  // Serve Vite in development
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting in development mode with Vite middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting in production mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server fully running on http://localhost:${PORT}`);
  });
}

startServer();
