# 🧠 AetherMind – Autonomous AI Workflow Builder

**Team Aether | AI Genesis Hackathon 2025**

<p align="center">
  <strong>Turn prompts into end-to-end autonomous agent pipelines</strong><br>
  Powered by Gemini 1.5 Flash and AI/ML API
</p>

<div align="center">

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Built for AI Genesis Hackathon](https://img.shields.io/badge/Hackathon-AI%20Genesis%202025-blue)](https://lablab.ai)

[Documentation](#documentation) • [Quick Start](#quick-start) • [Demo](#demo)

</div>

---

## 🎯 What is AetherMind?

**AetherMind** is a visual, no-code AI workflow builder that transforms simple prompts into autonomous agent pipelines. Built specifically for the AI Genesis Hackathon 2025, it demonstrates how **Google Gemini 1.5 Flash** and **AI/ML API** can work together to create intelligent, multi-agent workflows.

### Perfect for:

- **Research & Analysis** – Automated research workflows with web scraping and AI analysis
- **Multi-Agent Orchestration** – Different LLMs for different tasks (Gemini for reasoning, AI/ML API for summaries)
- **Data Extraction** – Web scraping and structured data extraction
- **Content Generation** – Automated content creation pipelines
- **Business Intelligence** – Transform raw data into actionable insights

---

## ✨ Key Features

### Visual Workflow Builder
- **Drag-and-drop interface** for building agent workflows
- **Real-time execution** with streaming updates
- **8 core node types**: Start, Agent, MCP Tools, Transform, If/Else, While Loop, User Approval, End
- **Template library** with pre-built workflows
- **MCP protocol support** for extensible tool integration

### Powered by Gemini & AI/ML API
- **Gemini 1.5 Flash** – Primary LLM for reasoning, planning, and analysis
- **AI/ML API** – Sub-agents using Llama 3.1 70B, Flux, and more
- **Multi-agent orchestration** – Different models for different tasks
- **Cost-optimized** – Use the right model for each job

### Enterprise Features
- **LangGraph execution engine** for reliable state management
- **Convex database** for persistent storage
- **Real-time updates** with streaming execution
- **Structured JSON output** for auditability
- **Firecrawl integration** for web scraping and research

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 14 (App Router) + Tailwind + shadcn/ui |
| **Workflow Engine** | LangGraph (workflow orchestration) |
| **Primary LLM** | **Google Gemini 1.5 Flash** (reasoning, planning, analysis) |
| **Sub-Agents** | **AI/ML API** (Llama 3.1 70B, Llama 3.1 8B, Flux 1.1 Pro) |
| **Web Scraping** | **Firecrawl** (MCP integration) |
| **Database** | Convex (real-time state management) |
| **Visual Canvas** | React Flow (drag-and-drop nodes) |
| **Deployment** | Vercel (frontend) + Convex Cloud (backend) |

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- **Gemini API key** ([Get one here](https://aistudio.google.com/app/apikey))
- **AI/ML API key** ([Get one here](https://aimlapi.com) - Use promo: `2GENAIDUB` for $20 credit)
- Firecrawl API key ([Get one here](https://firecrawl.dev))
- Convex account ([Sign up free](https://convex.dev))

### Installation

1. **Clone the repository:**
```bash
   git clone https://github.com/Aaron-T04/AetherMind.git
   cd AetherMind
npm install
```

2. **Set up Convex (Database):**
```bash
npm install -g convex
npx convex dev
```
   This will generate `NEXT_PUBLIC_CONVEX_URL` in your `.env.local`

3. **Configure environment variables:**
```bash
   cp env.local.template .env.local
   ```
   
   Edit `.env.local` with your keys:
   ```bash
   # Required
   NEXT_PUBLIC_CONVEX_URL=<from-convex>
   FIRECRAWL_API_KEY=fc-...

   # Hackathon Required
   GEMINI_API_KEY=your-gemini-key
   AIMLAPI_API_KEY=your-aimlapi-key
   ```

4. **Run the application:**
```bash
   # Terminal 1: Convex
npx convex dev
   
   # Terminal 2: Next.js
   npm run dev
   ```

5. **Visit:** `http://localhost:3000`

---

## 📋 Default Workflow Template

**AetherMind: Research → Analysis → Summary**

This template demonstrates the core hackathon workflow:

```
Start → Firecrawl Search → Gemini Analysis → AI/ML API Summary → Transform JSON → End
```

**What it does:**
1. **Research** – Uses Firecrawl to search the web for your topic
2. **Analysis** – Gemini 1.5 Flash analyzes findings and extracts insights
3. **Summary** – AI/ML API (Llama 3.1 70B) creates concise executive summary
4. **Output** – Structured JSON report for auditability

**Try it:**
- Click "New Workflow"
- Select "AetherMind: Research → Analysis → Summary"
- Enter a research topic (e.g., "Latest AI trends in 2025")
- Click "Run" and watch the autonomous pipeline execute

---

## 🎨 Understanding Node Types

| Node Type | Purpose | Example Use |
|-----------|---------|-------------|
| **Start** | Workflow entry point | Define input variables |
| **Agent** | AI reasoning with LLMs | Analyze data, make decisions (Gemini/AI/ML API) |
| **MCP Tool** | External tool calls | Firecrawl scraping, APIs |
| **Transform** | Data manipulation | Parse JSON, filter arrays |
| **If/Else** | Conditional logic | Route based on conditions |
| **While Loop** | Iteration | Process multiple pages |
| **User Approval** | Human-in-the-loop | Review before posting |
| **End** | Workflow completion | Return final output |

---

## 🔧 Configuration

### Adding API Keys

API keys can be added in two ways:

1. **Environment Variables** (`.env.local`):
```bash
   GEMINI_API_KEY=your-key
   AIMLAPI_API_KEY=your-key
   FIRECRAWL_API_KEY=your-key
   ```

2. **UI Settings** (coming soon):
   - Go to Settings → API Keys
   - Add your keys directly in the interface

### MCP Server Registry

Add custom MCP servers in Settings → MCP Registry:
- Firecrawl (built-in)
- Custom HTTP endpoints
- Environment variable substitution: `{API_KEY}`

---

## 📦 Deployment

### Deploying to Vercel

1. **Push to GitHub:**
   ```bash
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables from `.env.local`
   - Deploy!

3. **Deploy Convex to production:**
   ```bash
   npx convex deploy
   ```

### Environment Variables Checklist

**Required:**
- `NEXT_PUBLIC_CONVEX_URL` - Convex database
- `FIRECRAWL_API_KEY` - Web scraping
- `GEMINI_API_KEY` - Primary LLM
- `AIMLAPI_API_KEY` - Sub-agents

**Optional:**
- `E2B_API_KEY` - Sandboxed code execution

---

## 🎬 Demo

### Example Workflow: Research → Analysis → Summary

1. **Start** – Define research topic
2. **Firecrawl Search** – Search web for information
3. **Gemini Agent** – Analyze and extract insights
4. **AI/ML API Agent** – Create executive summary
5. **Transform** – Format as structured JSON
6. **End** – Return final report

**Result:** A complete research report with analysis and summary, fully automated!

---

## 🏆 Hackathon Project

**Event:** AI Genesis Hackathon 2025  
**Host:** lablab.ai + /function1  
**Dates:** November 14-19, 2025  
**Location:** Hybrid (Online + Festival Arena Dubai)  
**Team:** Team Aether

### Judging Criteria Alignment

- ✅ **Application of Technology** – Gemini + AI/ML API integration
- ✅ **Presentation** – Visual workflow builder with real-time execution
- ✅ **Business Value** – Automates research and analysis workflows
- ✅ **Originality** – Multi-agent orchestration with visual builder

---

## 📚 Documentation

- [Hackathon README](README_HACKATHON.md) – Detailed hackathon setup and demo guide
- [Template Outputs](TEMPLATE_OUTPUTS.md) – Expected outputs for each workflow template

---

## 🤝 Acknowledgments

Built on top of [Open Agent Builder](https://github.com/firecrawl/open-agent-builder) by [Firecrawl](https://firecrawl.dev).

Extended and customized for AI Genesis Hackathon 2025 by **Team Aether**.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🌟 Star Us

If you find AetherMind useful, please star the repository!

**Built with ❤️ by Team Aether for AI Genesis Hackathon 2025**

---

<div align="center">

[GitHub](https://github.com/Aaron-T04/AetherMind) • [Issues](https://github.com/Aaron-T04/AetherMind/issues) • [Demo](#demo)

</div>
