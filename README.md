# 🌌 Portfólio de Liderança Cooperativa — Fernando Gomes Côrtes

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-FF69B4?logo=tailwind-css)](#)
[![Vite](https://img.shields.io/badge/Vite-6.x-purple?logo=vite)](https://vite.dev/)
[![Gemini 2.5 Flash](https://img.shields.io/badge/AI_Model-Gemini_2.5_Flash-orange?logo=google-gemini)](https://deepmind.google/technologies/gemini/)

Este é um portal interativo desenvolvido para apresentar de forma dinâmica o **Portfólio de Aprendizagem de Liderança de Fernando Gomes Côrtes**, que atua como **Técnico de Audiovisual do CriaLab** (UEG). Utilizando design baseado em *Glassmorphism* (efeito de vidro jateado), microinterações ricas alimentadas por Motion React e inteligência artificial alimentada pelo Gemini integrada de forma segura no servidor, o portfólio explora a transição de grupos para equipes de alta performance com foco corporativo e acadêmico.

---

## 📂 Informações para Postagem no GitHub

Para publicar o projeto com facilidade, utilize as sugestões abaixo:

### Nomes de Repositório Sugeridos (Slug):
1. `portfolio-lideranca-crialab` (Mais claro e direto)
2. `lideranca-cooperativa-crialab` (Foco nos pilares teóricos e no CriaLab)
3. `fernando-cortes-lideranca` (Profissional e focado em marca pessoal)

### Descrição Curta do Repositório (Tagline para o GitHub):
> 🌌 Portfólio interativo de liderança cooperativa e alta performance de equipes no CriaLab/UEG. Desenvolvido com React, TypeScript, Tailwind CSS, Motion React e Mentor IA integrado via Google Gemini API e Express.

---

## 🚀 Principais Recursos do Ecossistema

### 1. 🤖 Tutor IA Inteligente (Modulo Gemini 2.5 Flash)
*   **Integração Nativa Segura**: Chamadas de inteligência artificial proxyadas no lado do servidor utilizando o SDK `@google/genai`, mantendo as chaves de API ocultas de forma segura.
*   **Contextualização Cognitiva**: O assistente atua como tutor técnico especializado no conteúdo do site (liderança situacional, comunicação assertiva, equipes de alta performance e cronogramas ágeis do CriaLab).
*   **UX Premium**: Chat flutuante e colapsável moderno com suporte completo a leituras em Markdown estilizadas via CSS customizado, estados de carregamento fluidos (efeito *skeleton* / indicador de digitação) e histórico ativo efêmero que persiste durante a sessão do usuário.
*   **Sugestões Rápidas**: Atalhos pré-programados para iniciar conversas imediatamente focando em temas centrais do portfólio.

### 2. 🔍 Spotlight Global Search e Atalhos Inteligentes
*   **Navegação Direcional Instantânea**: Paleta de busca de comando global com correspondência difusa de tópicos do site e atalhos rápidos de teclado (*Command/Ctrl + K*) para alternar telas instantaneamente.
*   **Barra de Leitura Progressiva**: Indicador visual de progresso dinâmico sincronizado no cabeçalho do site para acompanhar o status da leitura ao longo dos capítulos.
*   **Flipping Cards Interativos**: Módulo de comunicação com microinterações físicas realistas que giram em 3D sob o comando do cursor.

### 3. 🎯 SEO e Integração com WhatsApp
*   **Favicon Vetorial de Alta Fidelidade**: Favicon estruturado em SVG inline, gerando compatibilidade com telas retina de ultra resolução e velocidade instantânea de carregamento sem requisições HTTP adicionais.
*   **Open Graph Dinâmico**: Tags customizadas (`og:title`, `og:description`, `og:image`, `og:url` e Twitter Cards) otimizadas para WhatsApp e mídias visuais na proporção 1.91:1, garantindo previews elegantes e imersivos em convites ou compartilhamentos.

### 4. 🖨️ Exportação Conveniente para PDF
*   **Impressão Otimizada**: Botão dedicado para disparar a janela nativa de impressão do navegador, formatada e estendida horizontalmente (Paisagem A4) para gerar PDFs executivos perfeitos das seções estáticas do portfólio.

---

## 📂 Estrutura de Pastas de Alto Nível

```text
/
├── assets/                    # Ativos gráficos e utilitários da IDE
├── dist/                      # Pasta contendo os arquivos estáticos compilados
├── public/                    # Ativos públicos e imagens estáticas
├── server.ts                  # Servidor Express Full-Stack (Vite Middleware + APIs da IA)
├── package.json               # Gerenciador de Dependências e Scripts Node.js
├── vite.config.ts             # Configuração do Vite (Plugins, Aliases & HMR)
├── @types/                    # Definições específicas de tipos globais
└── src/                       # Código Principal do Frontend React (TypeScript)
    ├── App.tsx                # Layout principal e orquestrador de blocos do Portfólio
    ├── main.tsx               # Ponto de entrada de montagem do React 19
    ├── index.css              # Diretivas globais e configurações de tema do Tailwind CSS
    ├── data.ts                # Base de dados estruturada de busca e navegação
    └── components/            # Componentes visuais isolados
        ├── AltoDesempenho.md  # Blocos visuais de ecossistema
        ├── CallToAction.tsx   # Contatos estratégicos e link central do currículo
        ├── Comunicacao.tsx    # Seção com os Cards interativos 3D
        ├── Diagnostico.tsx    # Gráficos e dados de diagnóstico organizacional
        ├── Encerramento.tsx   # Conclusões e síntese final
        ├── GlobalSearch.tsx   # Barra de pesquisas e comandos global (Spotlight)
        ├── GrupoEquipe.tsx    # Comparativo visual de transição corporativa
        ├── Hero.tsx           # Banner principal com introdução do portfólio
        ├── LiderancaHibrida.tsx# Seção sobre descentralização e métricas
        ├── PlanoAcao.tsx      # Fluxo de Cronograma de 5 semanas (Formato Kanban)
        └── TutorChat.tsx      # Widget de Chatbot Assistente Cognitivo
```

---

## 🛠️ Pré-requisitos para Execução

Antes de rodar o projeto localmente, certifique-se de possuir instalado:
*   [Node.js](https://nodejs.org/) v18+ (Recomendado v20 ou posterior)
*   NPM v9+ ou Yarn v1.22+

---

## 💻 Instruções para Execução Local

Siga o passo a passo resumido abaixo:

### 1. Clona o repositório
```bash
git clone https://github.com/seu-usuario/portfolio-lideranca-crialab.git
cd portfolio-lideranca-crialab
```

### 2. Instala as dependências das ferramentas de desenvolvimento
```bash
npm install
```

### 3. Configura as variáveis de ambiente
Crie um arquivo `.env` na raiz do diretório com base no arquivo de demonstração `.env.example`:
```bash
cp .env.example .env
```
Abra o arquivo `.env` e configure sua chave secreta pessoal fornecida pelo console do Google AI Studio para o modelo do Gemini:
```env
GEMINI_API_KEY="AIzaSyYourActualGeminiKeyHere"
APP_URL="http://localhost:3000"
```

### 4. Roda o servidor de desenvolvimento full-stack
```bash
npm run dev
```
O servidor será carregado executando simultaneamente o backend Express (porta 3000) e integrando o pipeline do compilador Vite em tempo real. Acesse em: [http://localhost:3000](http://localhost:3000)

---

## 🚀 Guia de Deploy Pro na Vercel

O projeto foi planejado e pré-configurado considerando a implantação na plataforma **Vercel** de forma prática e em minutos.

### Opção 1: Deploy Rápido Integrado (Interface Vercel Web)
1. Conecte sua conta do GitHub à Vercel.
2. No painel de controle principal, selecione **"Add New"** > **"Project"** e importe este repositório.
3. Nas configurações gerais de compilação (**Build & Development Settings**), alterne o diretório de saída caso necessário (deixe o padrão Vite de exportação direcionado a `dist`).
4. Na aba **"Environment Variables"**, adicione a chave vital:
   *   `GEMINI_API_KEY`: <sua_chave_do_gemini>
5. Clique em **"Deploy"**.

### Opção 2: Serverless Deploy Completo (Hospedando a API)
Caso pretenda rodar o ecossistema completo incluindo o servidor Express usando arquitetura de Serverless Functions da Vercel, crie um arquivo simples `vercel.json` na raiz da pasta com o seguinte mapeamento básico de rotas:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.ts",
      "use": "@vercel/node"
    },
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "server.ts"
    },
    {
      "src": "/(.*)",
      "dest": "dist/$1"
    }
  ]
}
```
*Observação: Lembre-se sempre de ajustar o carregamento das variáveis no painel administrativo de segredos da sua plataforma Vercel.*

---

## 🌟 Detalhes de Engenharia Visual & IA

### Modelo Sênior de Processamento de Linguagem Natural
O tutor embarcado no ecossistema utiliza a inteligência artificial `gemini-2.5-flash` do pacote oficial da Google `@google/genai`. Ele opera um loop de conversa determinístico, processando as seguintes etapas cruciais:
1. **Sanitização do Histórico**: Transmite as mensagens anteriores mantendo o contexto de encadeamento sem vazar metadados pesados do sistema.
2. **System Constraints**: Um prompt fixado no servidor molda os limites morais, tom de fala, empunhadura profissional e direciona as discussões exclusivamente para a jornada de aprendizado do Fernando Côrtes.
3. **Markdown Rendering**: Um pré-processador modular codificado em JavaScript/React traduz marcações para JSX puro sem as vulnerabilidades comuns de injeções de HTML.

---

## 🏛️ Currículo Profissional de Apoio
Você pode descobrir mais sobre as especializações, conquistas corporativas curriculares e entrar em detalhes sobre novos projetos do Fernando Gomes Côrtes visitando diretamente o currículo oficial interativo e portfólios complementares em:
👉 **[https://fgc-cv.vercel.app/](https://fgc-cv.vercel.app/)**

---

Desenvolvido com carinho e engenharia de precisão 🚀
