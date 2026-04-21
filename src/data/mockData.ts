export const quickStartTopics = [
  "Secure Agentic Workflows",
  "RAG vs Fine-tuning",
  "LLM Provider Comparison",
  "AGENTS.md Governance",
  "Multi-Agent Orchestration",
  "GenAI Cost Optimization",
];

export const mockResponses: Record<string, string> = {
  default: `Based on Shreekant's architectural frameworks, here's a structured approach:

**Key Considerations:**
1. **Governance First** — Before selecting tools, establish your AGENTS.md governance layer to define trust boundaries and escalation protocols.
2. **Decision Framework** — Use the 3-layer evaluation: Business Context → Technical Fit → Operational Cost.
3. **Implementation Path** — Start with a controlled pilot using a single agentic workflow before scaling.

**Recommended Next Steps:**
- Review the AGENTS.md template for your specific use case
- Evaluate your existing infrastructure against the GenAI readiness checklist
- Define your RAG data strategy before selecting a vector store

*This response is grounded in Shree's GenAI Architecture frameworks. Subscribe to GenAI Brew for full templates.*`,

  secure: `**Securing Agentic AI Systems — Shree's Framework**

The biggest vulnerability in agentic workflows is **unconstrained tool access**. Here's the defense architecture:

**AGENTS.md Security Layer:**
\`\`\`
Trust Hierarchy: Human > Orchestrator > Sub-Agent > Tool
Permission Scope: Principle of Least Privilege per agent
Audit Trail: Every tool call logged with intent + outcome
\`\`\`

**Critical Controls:**
1. **Input Sanitization** — Validate all inputs entering agent context windows (prompt injection prevention)
2. **Tool Sandboxing** — Agents should never have direct DB/filesystem access; use API wrappers
3. **Human-in-the-Loop** — Mandatory checkpoints for irreversible actions (delete, send, publish)
4. **Rate Limiting** — Cap LLM calls per agent to prevent runaway loops

**Watch the deep-dive:** "AGENTS.md: Building Trustworthy AI Systems" →

*Subscribe to GenAI Brew for the full Security Checklist template.*`,

  rag: `**RAG vs Fine-tuning — The Architect's Decision Matrix**

This is the #1 question in enterprise GenAI. Here's Shree's framework:

| Dimension | RAG | Fine-tuning |
|-----------|-----|-------------|
| Data freshness | Real-time | Static (re-train needed) |
| Cost | Low inference cost | High upfront cost |
| Transparency | High (cite sources) | Black box |
| Latency | +100-300ms retrieval | Baseline |

**Choose RAG when:**
- Your knowledge base updates frequently
- You need source attribution (compliance)
- Budget is constrained (<$50k ML budget)

**Choose Fine-tuning when:**
- You need domain-specific reasoning patterns
- Latency is P99 critical (<500ms)
- Proprietary methodology must stay internal

**The Winner for 90% of enterprise use cases: RAG + Prompt Engineering first, fine-tune later.**

*Full decision template available in GenAI Brew Issue #12.*`,

  llm: `**LLM Provider Comparison — 2024 Enterprise Lens**

Shree's evaluation framework across 5 dimensions:

**GPT-4o (OpenAI)**
- Strengths: Best-in-class reasoning, massive ecosystem, vision support
- Weaknesses: Cost at scale, data residency concerns
- Best for: Complex reasoning, code generation, multimodal tasks

**Gemini 1.5 Pro (Google)**
- Strengths: 1M+ context window, competitive pricing, Google Workspace integration
- Weaknesses: Newer ecosystem, rate limits at launch
- Best for: Long-document RAG, enterprise Google shops

**Claude 3.5 Sonnet (Anthropic)**
- Strengths: Best instruction-following, safest for agentic use, 200k context
- Weaknesses: No image generation, API waitlists
- Best for: Agentic workflows, document analysis, safety-critical applications

**Shree's Recommendation:** Multi-provider architecture. Use Claude for agents, GPT-4o for user-facing chat, Gemini for long-context RAG.

*Full benchmarks and cost calculator in GenAI Brew Pro →*`,
};

export const contentItems = [
  {
    id: 1,
    type: "video" as const,
    category: "build" as const,
    title: "AGENTS.md: The Governance Layer Every AI System Needs",
    description: "Deep dive into building trustworthy agentic systems with proper trust hierarchies and audit trails.",
    body: `Every production agentic system needs a governance contract between humans and AI agents. AGENTS.md is that contract.\n\nIn this session, Shree walks through the complete AGENTS.md specification: how to define agent roles, permission scopes, escalation protocols, and audit requirements. You'll see real examples from Fortune 500 deployments where missing governance led to costly failures — and how a formal AGENTS.md would have prevented them.\n\n**What you'll learn:**\n- The 4-layer trust hierarchy: Human → Orchestrator → Sub-Agent → Tool\n- How to scope permissions using the Principle of Least Privilege\n- Building immutable audit trails for every agent action\n- Human-in-the-loop checkpoints for irreversible operations\n- Version-controlling your governance spec alongside your code`,
    duration: "42 min",
    date: "Dec 2024",
    tags: ["Agents", "Governance", "Security"],
    thumbnail: "🎬",
    featured: true,
  },
  {
    id: 2,
    type: "blog" as const,
    category: "strategy" as const,
    title: "The CEO's Guide to GenAI Investment in 2025",
    description: "Strategic framework for evaluating GenAI ROI, build vs buy decisions, and organizational readiness.",
    body: `GenAI investment decisions made in 2025 will define competitive positioning for the next decade. Yet most executive teams are making these decisions without a structured framework.\n\nThis guide provides Shree's 3-layer evaluation model for GenAI investment: Business Context (where does AI create real leverage?), Technical Fit (what infrastructure do you need?), and Operational Cost (total cost of ownership beyond API fees).\n\n**The Build vs Buy Decision Tree:**\nMost enterprises default to buying vendor solutions — but this creates dangerous lock-in. Shree's framework helps you identify the 20% of use cases where building custom is the right call.\n\n**Organizational Readiness Checklist:**\n- Do you have a designated AI Architect or team?\n- Is your data infrastructure RAG-ready?\n- Have you established AI governance policies?\n- Do your contracts address AI-generated output liability?\n\n**The #1 CEO mistake:** Treating GenAI as an IT project instead of a business transformation initiative.`,
    readTime: "12 min read",
    date: "Jan 2025",
    tags: ["Strategy", "ROI", "Leadership"],
    thumbnail: "📝",
    featured: true,
  },
  {
    id: 3,
    type: "video" as const,
    category: "build" as const,
    title: "Building a Perplexity Replica from Scratch",
    description: "Step-by-step RAG architecture walkthrough: embeddings, vector stores, retrieval pipelines, and streaming.",
    body: `One of the best ways to understand RAG deeply is to build a production-grade search-and-answer system from scratch. In this session, Shree builds a Perplexity-style system live.\n\nThe full stack covered: OpenAI embeddings, Pinecone vector store, a custom retrieval pipeline with re-ranking, and streaming responses via Server-Sent Events.\n\n**Architecture overview:**\n1. Ingestion pipeline: chunk → embed → store\n2. Query pipeline: embed query → vector search → re-rank → prompt assembly\n3. Generation: streaming LLM response with source citations\n4. Frontend: React + SSE for real-time streaming UI\n\nAll code is available to GenAI Brew Pro subscribers.`,
    duration: "68 min",
    date: "Jan 2025",
    tags: ["RAG", "Vector DB", "Streaming"],
    thumbnail: "🎬",
    featured: false,
  },
  {
    id: 4,
    type: "blog" as const,
    category: "build" as const,
    title: "RAG vs Fine-tuning: The Definitive Decision Framework",
    description: "When to use retrieval augmentation vs model fine-tuning. Includes cost calculators and decision trees.",
    body: `This is the most-asked question in enterprise GenAI: should we use RAG or fine-tune a model?\n\nThe honest answer is: it depends — but 90% of teams choose fine-tuning when RAG would have been faster, cheaper, and more maintainable.\n\n**The core tradeoff matrix:**\n\nRAG excels when your knowledge base changes frequently, when you need source attribution for compliance, and when you're working with a constrained ML budget. Fine-tuning wins when you need the model to internalize a specific reasoning style or domain terminology that can't be injected at runtime.\n\n**Shree's Decision Tree:**\n- Does your data update more than monthly? → RAG\n- Do you need citations in outputs? → RAG\n- Is latency P99 < 500ms a hard requirement? → Fine-tune\n- Is your proprietary methodology too sensitive for retrieval? → Fine-tune\n- Everything else? → RAG first, evaluate in 3 months\n\nThe full cost calculator template is available in GenAI Brew Issue #12.`,
    readTime: "18 min read",
    date: "Dec 2024",
    tags: ["RAG", "Fine-tuning", "Architecture"],
    thumbnail: "📝",
    featured: false,
  },
  {
    id: 5,
    type: "video" as const,
    category: "strategy" as const,
    title: "Enterprise GenAI Roadmap: 6-Month Outlook",
    description: "What CXOs need to know about the GenAI landscape through mid-2025. Key investments and risks.",
    body: `The GenAI landscape is moving faster than any technology shift in the last 20 years. This session gives CXOs and senior architects a structured 6-month view of where to invest attention and budget.\n\n**Q1 2025 — Foundation:**\nStabilize your LLM provider strategy. Lock in enterprise agreements with at least two providers to avoid single-vendor risk. Establish your AI governance framework.\n\n**Q2 2025 — Agentic Pilots:**\nLaunch 2-3 controlled agentic workflow pilots in low-risk domains. Focus on measurable ROI metrics from day one.\n\n**Q3 2025 — Scale:**\nExpand successful pilots. Build internal capability through hiring or upskilling. Evaluate make vs buy for your RAG infrastructure.\n\n**Key Risks to Monitor:**\n- Model capability convergence (the moat is narrowing)\n- Regulatory developments (EU AI Act enforcement)\n- Cost inflation as API pricing normalizes post-subsidy`,
    duration: "35 min",
    date: "Jan 2025",
    tags: ["Roadmap", "Enterprise", "Trends"],
    thumbnail: "🎬",
    featured: false,
  },
  {
    id: 6,
    type: "blog" as const,
    category: "build" as const,
    title: "Multi-Agent Orchestration Patterns",
    description: "Orchestrator-worker, peer-to-peer, and hierarchical agent patterns with production-ready code examples.",
    body: `As agentic systems grow in complexity, the question shifts from "how do I build an agent?" to "how do I orchestrate many agents reliably?"\n\nShree covers three production-proven orchestration patterns with real code examples.\n\n**Pattern 1: Orchestrator-Worker**\nA central orchestrator breaks down tasks and delegates to specialized sub-agents. Best for linear pipelines with clear task decomposition. The orchestrator holds the state; workers are stateless.\n\n**Pattern 2: Peer-to-Peer**\nAgents communicate directly via a shared message queue. No central coordinator. Best for highly parallel tasks where work units are independent. Requires careful dead-letter queue design.\n\n**Pattern 3: Hierarchical**\nTree-structured agent hierarchy with domain-specific sub-orchestrators under a top-level planner. Best for complex enterprise workflows with multiple departments or data domains involved.\n\n**The critical engineering consideration across all patterns:** Define your agent contract (inputs, outputs, error states) before you write a line of agent code. Production failures in multi-agent systems almost always trace back to undefined contracts.`,
    readTime: "22 min read",
    date: "Dec 2024",
    tags: ["Multi-Agent", "Patterns", "Code"],
    thumbnail: "📝",
    featured: false,
  },
];

export const roadmapPhases = [
  {
    quarter: "Q1 2025",
    theme: "Foundation",
    color: "var(--arch-green)",
    status: "current" as const,
    initiatives: [
      { title: "LLM Provider Strategy", description: "Lock in enterprise agreements with 2+ providers. Single-vendor risk is the #1 avoidable failure mode.", priority: "high" as const },
      { title: "AI Governance Framework", description: "Establish AGENTS.md-style governance before your first production deployment, not after.", priority: "high" as const },
      { title: "RAG Infrastructure Baseline", description: "Stand up a vector database and ingestion pipeline. Even if unused, having it ready cuts pilot timelines by 60%.", priority: "medium" as const },
      { title: "AI Literacy Program", description: "Train engineering leads on prompt engineering, context window management, and LLM failure modes.", priority: "medium" as const },
    ],
  },
  {
    quarter: "Q2 2025",
    theme: "Agentic Pilots",
    color: "var(--primary)",
    status: "upcoming" as const,
    initiatives: [
      { title: "2–3 Controlled Agent Pilots", description: "Launch in low-risk, high-observability domains. Customer support triage and internal knowledge search are ideal starting points.", priority: "high" as const },
      { title: "Evaluation Framework", description: "Define your golden-set test suite before pilots go live. 20 representative queries with ideal answers.", priority: "high" as const },
      { title: "Cost Monitoring", description: "Instrument every LLM call with cost tracking. Token usage surprises kill pilot budgets.", priority: "medium" as const },
      { title: "Human-in-the-Loop Design", description: "Map every irreversible agent action to a human approval gate. Non-negotiable for regulated industries.", priority: "medium" as const },
    ],
  },
  {
    quarter: "Q3 2025",
    theme: "Scale & Capability",
    color: "#6366f1",
    status: "upcoming" as const,
    initiatives: [
      { title: "Expand Successful Pilots", description: "Scale the top-performing Q2 pilot to production traffic. Harden reliability, latency, and cost targets.", priority: "high" as const },
      { title: "Internal Capability Build", description: "Hire or upskill: you need at least one dedicated AI Architect before scaling beyond 3 production agents.", priority: "high" as const },
      { title: "Make vs Buy Decision", description: "Evaluate your RAG infrastructure: is your managed service still cost-effective at 10x query volume?", priority: "medium" as const },
      { title: "Multi-Model Architecture", description: "Introduce a second LLM for cost optimization on low-complexity tasks. Routing logic pays for itself in weeks.", priority: "low" as const },
    ],
  },
  {
    quarter: "Q4 2025",
    theme: "Competitive Moat",
    color: "#000",
    status: "future" as const,
    initiatives: [
      { title: "Proprietary Data Advantage", description: "Your competitors have access to the same base models. Your unique data is your only durable moat — invest in it.", priority: "high" as const },
      { title: "AI Product Integration", description: "Embed GenAI into your core product, not just internal tools. This is where the P&L impact compounds.", priority: "high" as const },
      { title: "Regulatory Readiness", description: "EU AI Act enforcement begins. Audit your systems against the Act's risk classification framework.", priority: "medium" as const },
      { title: "Next-Gen Model Evaluation", description: "Re-evaluate your provider mix against the new model generation. The capability gap between providers will have shifted.", priority: "low" as const },
    ],
  },
];
