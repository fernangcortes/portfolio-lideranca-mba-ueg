export interface DiagnosticoItem {
  title: string;
  desc: string;
  style: "creative" | "adaptability" | "delegation";
}

export interface GrupoVsEquipeItem {
  problemas: string[];
  solucoes: string[];
  impactos: string[];
}

export interface AltoDesempenhoItem {
  feature: string;
  strengthens: string;
  weakens: string;
}

export interface ComunicacaoItem {
  original: string;
  restructured: string;
  justification: string;
  reflection: string;
}

export interface MicrogestaoItem {
  practices: string[];
  impacts: string[];
  alternatives: string[];
}

export interface PlanoAcaoEstrategia {
  strategy: string;
  howText: string;
  who: string;
  outcome: string;
  iconName: string;
}

export interface CronogramaEtapa {
  week: number;
  title: string;
  action: string;
  iconName: string;
}

export const presenterInfo = {
  name: "Fernando Gomes Côrtes",
  role: "Técnico de Audiovisual do CriaLab",
  bio: "Atuo em contextos que articulam criatividade, tecnologia, produção audiovisual, inovação e suporte a projetos de difusão de conhecimento, especialmente no CriaLab da UEG. Minha prática profissional envolve o diálogo entre áreas técnicas, artísticas e acadêmicas, exigindo organização cooperativa, comunicação clara e participação ativa em equipes multifacetadas.",
  introQuote: "A liderança deixou de ser apenas a capacidade de direcionar pessoas e passou a ser compreendida como uma prática de construção coletiva de sentido, confiança e responsabilidade. Em ambientes criativos e tecnológicos, como o CriaLab, liderar exige equilibrar autonomia, escuta, clareza e foco em resultados. Uma boa liderança não elimina conflitos ou incertezas, mas cria condições para que a equipe transforme desafios em aprendizagem, inovação e entregas consistentes."
};

export const diagnosticoData: {
  desafio: DiagnosticoItem;
  desenvolvida: DiagnosticoItem;
  fortalecer: DiagnosticoItem;
} = {
  desafio: {
    title: "Maior Desafio Atual",
    desc: "Equilibrar a liberdade criativa e a experimentação com o cumprimento rigoroso de cronogramas e entregas técnicas. Liderar uma equipe multifacetada exige manter todos engajados e alinhados a um objetivo comum, sem sufocar a inovação, garantindo ao mesmo tempo alta performance e bem-estar coletivo diante da pressão dos projetos.",
    style: "creative",
  },
  desenvolvida: {
    title: "Competências Desenvolvidas",
    desc: "Adaptabilidade e comunicação transversal. No dia a dia do laboratório, consigo transitar com facilidade entre o universo técnico e o artístico, traduzindo demandas complexas em direcionamentos práticos para perfis profissionais e estudantes diferentes, mantendo o time coeso mesmo diante de imprevistos e demandas ágeis.",
    style: "adaptability",
  },
  fortalecer: {
    title: "Competências a Fortalecer",
    desc: "Delegação estratégica de tarefas críticas em momentos de forte pressão. Como lidamos com projetos de alta exigência visual e técnica, às vezes tendo a centralizar decisões para garantir o controle de qualidade final. Meu objetivo é desapegar gradualmente desses processos e empoderar a equipe para que assuma maior protagonismo nessas etapas.",
    style: "delegation",
  }
};

export const grupoVsEquipeData: GrupoVsEquipeItem = {
  problemas: [
    "Baixa comunicação entre os setores cotidianamente.",
    "Realização de retrabalho frequente por falta de acordos.",
    "Falta de integração das atividades finalísticas e operacionais.",
    "Dependência excessiva da coordenação para conduzir processos e solucionar questões rotineiras."
  ],
  solucoes: [
    "Promover reuniões periódicas de alinhamento com pautas objetivas.",
    "Incentivar canais de comunicação transversais rápidos e integrados.",
    "Estabelecer objetivos compartilhados claros com responsabilidades definidas.",
    "Estimular a cooperação mútua e desenvolver maior autonomia coletiva descentralizada."
  ],
  impactos: [
    "Redução drástica do retrabalho",
    "Aumento significativo da interação intersetorial",
    "Cumprimento rigoroso dos prazos",
    "Menos intervenção da coordenação em tarefas operacionais",
    "Melhoria na satisfação e clima interno"
  ]
};

export const equipeAltoDesempenho: AltoDesempenhoItem[] = [
  {
    feature: "Objetivos claros e compartilhados",
    strengthens: "Comunicação aberta e respeitosa",
    weakens: "Falta de comunicação"
  },
  {
    feature: "Confiança entre os membros",
    strengthens: "Cooperação e trabalho em equipe",
    weakens: "Individualismo excessivo"
  },
  {
    feature: "Comprometimento com resultados",
    strengthens: "Responsabilidade e cumprimento de prazos",
    weakens: "Falta de comprometimento"
  },
  {
    feature: "Respeito às diferenças e diversidade",
    strengthens: "Escuta ativa e empatia",
    weakens: "Desrespeito e preconceito"
  },
  {
    feature: "Colaboração e apoio mútuo",
    strengthens: "Compartilhamento de conhecimentos",
    weakens: "Retenção de informações"
  },
  {
    feature: "Organização e planejamento",
    strengthens: "Participação nas decisões",
    weakens: "Falta de envolvimento"
  },
  {
    feature: "Liderança inspiradora e participativa",
    strengthens: "Feedback construtivo contínuo",
    weakens: "Críticas destrutivas e fofocas"
  },
  {
    feature: "Foco na solução de problemas",
    strengthens: "Proatividade e iniciativa pessoal",
    weakens: "Resistência a mudanças e inércia"
  },
  {
    feature: "Aprendizagem contínua",
    strengthens: "Busca por desenvolvimento e inovação ágil",
    weakens: "Acomodação e completo desinteresse"
  },
  {
    feature: "Ambiente positivo e motivador",
    strengthens: "Reconhecimento e valorização sincera das pessoas",
    weakens: "Conflitos constantes e falta total de feedback"
  }
];

export const comunicacaoEstrategica: ComunicacaoItem[] = [
  {
    original: "Precisamos melhorar.",
    restructured: "Precisamos melhorar a comunicação da equipe para reduzir erros e retrabalho.",
    justification: "A nova mensagem indica claramente o ponto a ser melhorado de forma objetiva, conectando a mudança a um resultado prático mensurável.",
    reflection: "Quando todos entendem exatamente a expectativa final, a equipe trabalha com mais dinamismo, foco e minimiza atritos."
  },
  {
    original: "Vocês precisam se organizar.",
    restructured: "É necessário planejar melhor as atividades e cumprir os prazos estabelecidos juntos.",
    justification: "Apresenta uma proposta de ação concreta e coordenada ao invés de um apontamento acusatório generalizado.",
    reflection: "A clareza organizacional propõe estabilidade, reduz ansiedade de entregas urgentes e gera previsibilidade tática."
  },
  {
    original: "Essa equipe está muito desmotivada.",
    restructured: "Percebo que a equipe está desanimada; precisamos identificar as dificuldades e buscar soluções em conjunto.",
    justification: "Evita julgamento categórico estático de motivação e convida os membros a participar da busca ativa por resoluções.",
    reflection: "Uma abordagem humanizada de escuta ativa aumenta substancialmente o sentimento de pertencimento e reengajamento."
  },
  {
    original: "O setor precisa funcionar melhor.",
    restructured: "Precisamos revisar os processos críticos do setor para aperfeiçoar o fluxo e a eficiência das nossas atividades.",
    justification: "Identifica que o problema geralmente está no design de processos, definindo claramente o escopo da melhoria de trabalho.",
    reflection: "Processos claros e transparentes evitam gargalos operacionais e protegem as pessoas de cobranças desalinhadas."
  },
  {
    original: "As tarefas estão atrasadas.",
    restructured: "Algumas atividades prioritárias não foram concluídas no prazo; precisamos priorizá-las no quadro para organizar as entregas.",
    justification: "Informa o status real atualizado, remove o tom meramente punitivo e propõe um plano de replanejamento ágil.",
    reflection: "A comunicação profissional lida com atrasos focando em contingência realista e ajustes de escopo em vez de frustrações passivas."
  },
  {
    original: "A comunicação entre vocês está ruim.",
    restructured: "Identifico ruídos e falhas pontuais no compartilhamento interno de informações, o que cria dificuldades na tomada de decisões.",
    justification: "Trata a falha de comunicação como um sintoma do sistema de trabalho e a expõe de forma respeitosa e analítica.",
    reflection: "Ambientes transparentes onde os problemas de cooperação são tratados com respeito facilitam a correção ágil dos canais."
  }
];

export const liderancaHibrida: MicrogestaoItem = {
  practices: [
    "Exigência excessiva de relatórios e atualizações constantes redundantes.",
    "Monitoramento contínuo intromissivo dos colaboradores, sufocando a autonomia individual.",
    "Revisão excessiva de tarefas simples que poderiam ser executadas sem qualquer supervisão direta.",
    "Convocação exagerada de reuniões síncronas para acompanhar pequenos detalhes operacionais.",
    "Centralização rígida de decisões cotidianas simples que poderiam ser compartilhadas confortavelmente."
  ],
  impacts: [
    "Dramática redução de autonomia dos indivíduos e deterioração da confiança mútua.",
    "Queda drástica na motivação, inovação espontânea e engajamento genuíno.",
    "Aumento de estresse laboral, ansiedade e clima de desconfiança sistemática.",
    "Queda severa de produtividade por conta de dezenas de interrupções diárias para checagens.",
    "Bloqueio no desenvolvimento de lideranças substitutas e competências decisórias maduras.",
    "Sobrecarga mental extrema do líder que imerge em microdetalhes burocráticos."
  ],
  alternatives: [
    "Delegar responsabilidades com total clareza, alinhado à maturidade de cada indivíduo.",
    "Estabelecer metas, indicadores transparentes e combinados flexíveis de acompanhamento regular.",
    "Focar em resultados finais mensuráveis e marcos chave, abandonando o monitoramento de cada microetapa.",
    "Realizar reuniões síncronas de alinhamento estruturadas apenas quando for estritamente útil.",
    "Promover ativamente conexões abertas, feedbacks construtivos rápidos e cultura de errar rápido.",
    "Empoderar a autonomia de tomada de decisões para acelerar entregas e descentralizar forças."
  ]
};

export const planoAcaoOrg = {
  equipeDesc: "Grupo composto por aproximadamente 10 a 20 integrantes que atuam em formato híbrido conectando design de experiência, desenvolvimento e entregas técnicas artísticas com desafios de integração e alinhamento remoto.",
  problemaCentral: "Fragmentação da comunicação tática e do fluxo operacional em ambiente híbrido devido à dispersão de canais e ausência de centralização visual moderna das demandas diárias.",
  justificativa: "A reestruturação para um modelo descentralizado de tomada de decisão, amparado por ritos síncronos objetivos, elimina o gargalo da liderança reativa, expandindo os resultados de satisfação, criatividade e velocidade do CriaLab.",
  objetivoGeral: "Garantir um fluxo contínuo de informação, maximizando a autonomia de entregas em ambiente híbrido através de gestão visual moderna de tarefas, reduzindo o retrabalho de forma drástica.",
  estrategias: [
    {
      strategy: "Padronização da comunicação",
      howText: "Definição formal de canais oficiais síncronos e assíncronos (Ex: Slack, Chats), combinando prazos máximos transparentes e regras de resposta claras.",
      who: "Liderança técnica e equipe completa",
      outcome: "Eliminação total de mensagens fragmentadas, ruídos de corredor e registros perdidos de tarefas importantes.",
      iconName: "MessageSquare",
    },
    {
      strategy: "Planejamento semanal de entregas",
      howText: "Realização de uma reunião condensada de alinhamento estratégico nas manhãs de segunda-feira contendo definição focada de prioridades semanais.",
      who: "Coordenação geral e lideranças setoriais",
      outcome: "Alinhamento operacional unificado e previsibilidade total das entregas técnicas chave.",
      iconName: "Calendar",
    },
    {
      strategy: "Gestão visual de tarefas",
      howText: "Centralização visual de demandas diárias em quadros Kanban transparentes com colunas bem definidas, responsáveis e datas limites.",
      who: "Operação e membros produtivos",
      outcome: "Acompanhamento transparente em tempo real, mitigando a necessidade de microgestão ou cobranças redundantes.",
      iconName: "Trello",
    },
    {
      strategy: "Delegação estratégica",
      howText: "Distribuição qualificada de responsabilidades de liderança técnica com base em afinidades de especialidade e limites claros de autonomia e auto-resolução.",
      who: "Membros sêniores e líderes técnicos de projetos",
      outcome: "Empoderamento tático da equipe de criação, expandindo velocidade executiva sem sobrecarregar a gestão central.",
      iconName: "Users",
    },
    {
      strategy: "Feedback e escuta ativa",
      howText: "Ritos curtos individuais (one-on-one) quinzenais focados em desenvolvimento mútuo, avaliação de gargalos de comunicação e alinhamento de bem-estar.",
      who: "Liderança e colaboradores diretos",
      outcome: "Confiança psicológica fortalecida, detecção precoce de atritos e contínuo aprendizado organizacional.",
      iconName: "Heart",
    }
  ] as PlanoAcaoEstrategia[]
};

export const cronogramaEtapas: CronogramaEtapa[] = [
  {
    week: 1,
    title: "Diagnóstico Ativo",
    action: "Entrevistas individuais breves e mapeamento sistêmico de fluxos informais de comunicação e demandas.",
    iconName: "Search"
  },
  {
    week: 2,
    title: "Pactuação de Canais",
    action: "Oficina participativa para definição das ferramentas oficiais, papéis estruturais e tempos de resposta.",
    iconName: "Sliders"
  },
  {
    week: 3,
    title: "Setup Visual & Ritos",
    action: "Fardamento de boards Kanban unificados e institucionalização das reuniões semanais condensadas de alinhamento.",
    iconName: "Workflow"
  },
  {
    week: 4,
    title: "Calibração e Ajustes",
    action: "Rodada experimental de feedback ágil, identificando pontos de atrito iniciais nos fluxos e canais definidos.",
    iconName: "RefreshCw"
  },
  {
    week: 5,
    title: "Avaliação do Clima",
    action: "Mapeamento quantitativo e consolidação das melhorias operacionais, promovendo autonomia e ritos continuados.",
    iconName: "TrendingUp"
  }
];

export const sinteseReflexiva = {
  originalText: "Ao longo da disciplina, minha compreensão sobre liderança se ampliou significativamente. Passei a perceber que liderar não é apenas distribuir tarefas ou garantir entregas, mas criar condições para que as pessoas atuem com clareza, confiança, autonomia e senso de pertencimento.",
  conclusao: "Como mudança prática, pretendo fortalecer a delegação estratégica, tornar os combinados de comunicação mais explícitos e acompanhar o desempenho da equipe com foco em resultados reais e no desenvolvimento coletivo continuado no CriaLab."
};
