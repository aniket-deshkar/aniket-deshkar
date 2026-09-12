import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Mail, MapPin } from "lucide-react";

import deliveryAsset from "../assets/delivery-loop.gif.asset.json";
import headerAsset from "../assets/profile-header.gif.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aniket Deshkar — GitHub Profile Preview" },
      {
        name: "description",
        content:
          "Animated GitHub profile README for Applied AI and Backend Systems Engineer Aniket Deshkar.",
      },
      { property: "og:title", content: "Aniket Deshkar — GitHub Profile Preview" },
      {
        property: "og:description",
        content:
          "Applied AI, governed agents, backend platforms, and dependable production systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  {
    name: "DecisionOps AI",
    href: "https://github.com/aniket-deshkar/enterprise-agentic-operations-platform",
    type: "Enterprise agentic operations",
    description:
      "Policy-controlled AI tools, approval gates, tenant-aware authorization, and durable audit evidence.",
    tags: ["Java 21", "Spring Boot", "LangGraph", "Kafka", "Qdrant", "OPA"],
    color: "bg-signal-orange",
  },
  {
    name: "Settlement Sentinel",
    href: "https://github.com/aniket-deshkar/settlement-sentinel",
    type: "Governed payment investigation",
    description:
      "Retrieves evidence, analyzes cases, validates policy remotely, and proposes bounded adjustments.",
    tags: ["Python", "Google ADK", "Gemini", "MCP", "FastAPI"],
    color: "bg-signal-green",
  },
  {
    name: "Custom Agentic RAG",
    href: "https://github.com/aniket-deshkar/Custom_Agentic_RAG",
    type: "Retrieval evaluation framework",
    description:
      "A scratch-built framework for comparing vector databases and model backends in retrieval workflows.",
    tags: ["Python", "RAG", "Embeddings", "Vector DBs", "LLMs"],
    color: "bg-signal-blue",
  },
  {
    name: "AI Voice Appointment Assistant",
    href: "https://github.com/aniket-deshkar/voice-agent",
    type: "Independent proof of concept",
    description:
      "Outbound appointment confirmation, cancellation, rescheduling requests, and human escalation.",
    tags: ["Vapi", "Twilio", "FastAPI", "Groq", "Langfuse"],
    color: "bg-signal-yellow",
  },
];

const disciplines = [
  [
    "01",
    "Agentic systems",
    "Stateful, multi-step agents with explicit tool contracts, policy checks, and human approval gates.",
  ],
  [
    "02",
    "Retrieval & evaluation",
    "RAG pipelines measured with vector-store comparisons, evaluation harnesses, and regression checks.",
  ],
  [
    "03",
    "Backend platforms",
    "High-throughput services with idempotency, messaging, caching, and load shedding built in.",
  ],
  [
    "04",
    "Reliability & governance",
    "Traces, metrics, replayable runs, controlled access, and durable evidence for regulated workflows.",
  ],
];

const toolkit = [
  ["Languages", "Java 8/11/17/21 · Python 3.12 · TypeScript · JavaScript · SQL"],
  ["AI systems", "LangGraph · LangChain · LlamaIndex · MCP · RAG · RAGAS · Human-in-the-loop"],
  ["Backend", "Spring Boot · FastAPI · REST/OpenAPI · GraphQL · Kafka · Celery · Redis"],
  ["Data", "PostgreSQL · pgvector · Qdrant · MongoDB · DynamoDB · Elasticsearch"],
  ["Operations", "AWS · Docker · GitHub Actions · OpenTelemetry · Prometheus · Grafana"],
];

function SectionTitle({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <h2 className="section-title">
      <span>{index}</span>
      {children}
    </h2>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/80 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1056px] items-center justify-between px-4 sm:px-6">
          <h1 className="font-mono text-sm font-semibold text-foreground">
            <a className="text-foreground" href="#top" aria-label="Back to top">
              aniket-deshkar
            </a>{" "}
            <span className="text-muted-foreground">/ README.md</span>
          </h1>
          <a
            className="external-link"
            href="https://github.com/aniket-deshkar"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </header>

      <div id="top" className="mx-auto max-w-[1056px] px-4 py-8 sm:px-6 sm:py-12">
        <div className="readme-frame">
          <img
            className="block w-full"
            src={headerAsset.url}
            alt="Aniket Deshkar, Applied AI and Backend Systems Engineer"
          />

          <div className="px-5 py-8 sm:px-10 sm:py-10">
            <nav
              aria-label="Profile links"
              className="flex flex-wrap justify-center gap-x-5 gap-y-3 font-mono text-sm"
            >
              <a href="https://github.com/aniket-deshkar" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/aniket-deshkar" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="mailto:aniket.deshkar@proton.me">Email</a>
              <a
                href="https://github.com/aniket-deshkar?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                Repositories
              </a>
            </nav>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {["India", "4.5+ years", "Enterprise AI", "Regulated software"].map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>

            <section className="profile-section animate-fade-in">
              <SectionTitle index="01">About</SectionTitle>
              <blockquote>
                I turn ambiguous enterprise workflows into governed AI systems.
              </blockquote>
              <p>
                Applied AI and backend engineer working from use-case discovery and architecture
                through implementation, evaluation, and production handoff. My work spans enterprise
                AI, cross-border payments, healthcare supply chains, and other regulated
                environments.
              </p>
              <p>
                I care about the parts that make intelligent systems dependable: narrow tool
                contracts, measurable retrieval quality, human approval for consequential actions,
                durable audit evidence, and observability that explains failures.
              </p>
              <img
                className="mt-7 block w-full rounded-md border border-border"
                src={deliveryAsset.url}
                alt="Animated delivery loop from discovery through operations"
              />
            </section>

            <section className="profile-section">
              <SectionTitle index="02">What I engineer</SectionTitle>
              <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
                {disciplines.map(([number, title, description]) => (
                  <article className="discipline" key={number}>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-signal-green">{number}</span>
                      <h3>{title}</h3>
                    </div>
                    <p>{description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="profile-section">
              <SectionTitle index="03">Selected systems</SectionTitle>
              <div className="grid gap-4 sm:grid-cols-2">
                {projects.map((project, index) => (
                  <article
                    className="project-card group"
                    key={project.name}
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className={`h-2.5 w-2.5 rounded-full ${project.color}`} />
                      <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                    </div>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      {project.name}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                    <p className="mt-1 font-mono text-xs font-medium text-signal-blue">
                      {project.type}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
              <details className="mt-4 rounded-md border border-border bg-panel">
                <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-sm font-semibold">
                  Explore more engineering projects <ChevronDown size={16} aria-hidden="true" />
                </summary>
                <div className="border-t border-border px-5 py-4 text-sm leading-7 text-muted-foreground">
                  Java MCP Gateway · Agent Policy Engine · Spring AI Durable Runtime · Agent Run
                  Replay · Agent Contract Test · Spring Outbox Inbox · Spring Load Shedding · Agent
                  Memory Lifecycle
                </div>
              </details>
            </section>

            <section className="profile-section">
              <SectionTitle index="04">Working toolkit</SectionTitle>
              <div className="overflow-hidden rounded-md border border-border">
                {toolkit.map(([label, tools]) => (
                  <div className="tool-row" key={label}>
                    <strong>{label}</strong>
                    <span>{tools}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="profile-section">
              <SectionTitle index="05">Credentials</SectionTitle>
              <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                <li>
                  <strong>AWS Certified AI Practitioner</strong>
                  <br />
                  AIF-C01
                </li>
                <li>
                  <strong>Microsoft Azure Fundamentals</strong>
                  <br />
                  AZ-900
                </li>
                <li>
                  <strong>B.E., Electronics & Telecommunication</strong>
                  <br />
                  RTM Nagpur University
                </li>
                <li>
                  <strong>Diploma, Electronics & Telecommunication</strong>
                  <br />
                  MSBTE
                </li>
              </ul>
            </section>

            <footer className="mt-12 border-t border-border pt-10 text-center">
              <p className="font-mono text-lg font-bold text-foreground">
                Useful. Governed. Dependable.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Open to engineering conversations and ambitious systems work.
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm">
                <a className="external-link" href="mailto:aniket.deshkar@proton.me">
                  <Mail size={14} /> Email Aniket
                </a>
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <MapPin size={14} /> India
                </span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
