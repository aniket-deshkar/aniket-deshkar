# Aniket Deshkar

**AI Engineer · Java & Python · Backend systems**

[LinkedIn](https://www.linkedin.com/in/aniket-deshkar) · [Repositories](https://github.com/aniket-deshkar?tab=repositories)

I’m an Assistant Lead AI Engineer with 4.5+ years across backend and AI engineering. I started with Java, Spring Boot, and microservices, and now work on AI agents, retrieval systems, and voice workflows—mostly with Python and AWS.

My experience spans international payments, fleet operations, recruitment automation, and conversational analytics. I’m particularly interested in the engineering around a model: how it gets reliable context, which tools it can use, when a person needs to step in, and how to investigate a failed run.

## Selected projects

These are personal projects where I explore those problems in code. Each repository documents its setup, design, and current scope.

### [Settlement Sentinel](https://github.com/aniket-deshkar/settlement-sentinel)
A settlement-investigation demo that collects evidence through MCP, consults a separate policy agent through A2A, and sends a proposed adjustment for human review. Uses synthetic data and a simulated ledger.

**Google ADK · Gemini · MCP · A2A · FastAPI · OpenTelemetry**

### [Spring AI Governance](https://github.com/aniket-deshkar/spring-ai-governance)
A Java library that checks authorization, argument rules, and approval requirements before a Spring AI tool can execute. Includes audit events and tests for rejected and pending calls.

**Java · Spring AI · Spring Security · Micrometer**

### [Java MCP Gateway](https://github.com/aniket-deshkar/java-mcp-gateway)
An embeddable gateway for exposing a controlled catalog of tools across MCP server adapters. Handles tool naming, allow-lists, authorization, quotas, and health checks before forwarding a call.

**Java · MCP · OpenTelemetry**

### [AI Voice Appointment Assistant](https://github.com/aniket-deshkar/voice-agent)
An appointment-reminder assistant with confirmation, cancellation, rescheduling requests, and human callbacks. FastAPI validates appointment changes; voice-provider callbacks are checked for duplicate events.

**Python · FastAPI · Vapi · Twilio · SQLAlchemy · Langfuse**

### [DecisionOps AI](https://github.com/aniket-deshkar/enterprise-agentic-operations-platform)
An ongoing exploration of business workflows combining Java services, Python agent components, policy checks, human approvals, and event-driven audit records. Implemented domain slices sit alongside a documented roadmap for the remaining platform work.

**Java · Python · Kafka · PostgreSQL · OPA · OpenTelemetry**

<details>
<summary>More projects</summary>

- [**Agentic Payment Reconciliation**](https://github.com/aniket-deshkar/agentic-payment-ops-reconciliation) — Matches transaction and settlement fixtures using deterministic rules, then uses LangGraph to assemble evidence, explanations, and review records.
- [**CareerForge**](https://github.com/aniket-deshkar/interview-prep-platform-api) — An interview-preparation and job-tracking backend with PostgreSQL, vector retrieval, and background workers. Provider integrations and resume processing have documented next steps.

</details>

## Tools I work with

| Area | Main tools |
| --- | --- |
| Backend | Java, Spring Boot, Python, FastAPI |
| AI & retrieval | LangGraph, LangChain, MCP, Amazon Bedrock, MongoDB Atlas Vector Search |
| Data & messaging | PostgreSQL, MongoDB, Redis, Kafka |
| Cloud & observability | AWS, Azure, OpenTelemetry, Langfuse, Prometheus, Grafana |

I’m currently exploring Google ADK, Gemini, and A2A through Settlement Sentinel.

## How I approach the work

- Keep calculations, permissions, and state changes in application code.
- Give agents a small set of well-defined tools and explicit boundaries.
- Make approval decisions durable and retries safe.
- Use traces and tests to understand failures across the whole workflow.

**Certifications:** AWS Certified Cloud Practitioner · AWS Certified AI Practitioner · Microsoft Certified: Azure Fundamentals (AZ-900)

Happy to compare notes on Java + AI, agent orchestration, retrieval, or payment systems. [Connect with me on LinkedIn](https://www.linkedin.com/in/aniket-deshkar).
