import { GoogleGenAI } from "@google/genai";

export default async function handler(req: any, res: any) {
  // Only accept POST requests
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Método Não Permitido" });
  }

  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Mensagem é obrigatória." });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ 
        error: "A chave de API GEMINI_API_KEY não está configurada no ambiente do Vercel." 
      });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });

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

    const contents: any[] = [];
    if (history && Array.isArray(history)) {
      history.forEach((msg: any) => {
        contents.push({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.text }],
        });
      });
    }

    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "Sem resposta.";
    return res.status(200).json({ message: replyText });
  } catch (error: any) {
    console.error("Erro no processamento da IA no Vercel:", error);
    return res.status(500).json({
      error: error.message || "Erro inesperado processando sua solicitação de IA."
    });
  }
}
