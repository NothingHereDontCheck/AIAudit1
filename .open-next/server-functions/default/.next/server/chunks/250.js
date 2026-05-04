"use strict";exports.id=250,exports.ids=[250],exports.modules={14250:(a,b,c)=>{c.d(b,{f5:()=>e,zX:()=>f});let d=[{slug:"complete-ai-security-audit-guide-2026",title:"The Complete AI Security Audit Guide for 2026",excerpt:"A practitioner's walkthrough of everything you need to conduct a comprehensive AI security audit — from scoping the engagement to delivering the report. Covers NIST AI RMF, OWASP LLM Top 10, and the 6-Domain methodology.",category:"Practitioner How-Tos",readTime:"14 min read",date:"May 2026",hasTemplate:!0,primaryKeyword:"AI security audit",content:`
## What Is an AI Security Audit?

An AI security audit is a structured assessment of an organization's AI tool usage, data handling practices, governance posture, and compliance alignment. Unlike a traditional penetration test (which looks for technical exploits), an AI security audit examines the human and process layer — the decisions, policies, and practices that create AI-specific risk.

The goal isn't to break into systems. The goal is to answer: **Does this organization know what AI they're using, what data it's touching, and whether their current controls are anywhere near adequate?**

For most SMBs in 2026, the honest answer is no.

## Why Traditional Security Audits Miss AI Risk

Your existing security frameworks weren't built for AI. Here's the concrete problem:

**NIST CSF 2.0** covers identify, protect, detect, respond, and recover. It says nothing about AI training data risks, model poisoning, prompt injection, or the governance gap created when employees use AI tools your CISO has never heard of.

**ISO 27001** is an excellent information security framework. It predates the LLM explosion. Its asset management controls assume you know what assets you have. Shadow AI is, by definition, invisible to your inventory.

**SOC 2** Type II auditors are starting to ask about AI. But most organizations don't have AI-specific controls to show them.

This is why a dedicated AI security audit exists. The frameworks above are necessary but not sufficient.

## The 6-Domain AI Audit Methodology

Every AI security audit I conduct covers six domains. Together, they give you a complete picture of an organization's AI risk posture.

### Domain 1: AI Tool Inventory

You cannot secure what you don't know exists. The first domain is discovery — finding every AI tool in use across the organization, whether approved or not.

Discovery techniques include:
- DNS/proxy log analysis for known AI service domains
- Browser extension inventory
- Employee intake questionnaires
- App store and SaaS spend reviews
- Direct manager interviews

Shadow AI will almost always surface here. Expect to find 2–3x more AI tools than the client thought they were using.

### Domain 2: Data Classification & Handling

Once you have the inventory, you need to understand what data is flowing into each tool. The questions:

- Is any PHI, PII, or confidential client data being entered into AI tools?
- Is data retention turned off for AI tools that offer it?
- Are employees uploading documents, spreadsheets, or email content to AI systems?
- What are the data processing terms for each AI vendor?

This domain frequently surfaces the highest-severity findings. A single employee pasting client contracts into ChatGPT can constitute a reportable data incident under GDPR or HIPAA.

### Domain 3: Access Controls & Identity

Who has access to AI tools, and how? Key questions:

- Are AI tools accessed via individual accounts or shared credentials?
- Is SSO enforced where available?
- Are departing employees' AI accounts deprovisioned?
- What permissions does each AI tool request?

### Domain 4: Vendor & Third-Party Risk

The AI vendor is a third-party processor of your data. You should review:

- Data Processing Agreement (DPA) availability and terms
- Sub-processor list
- Incident response SLA
- SOC 2 Type II certification status
- Data residency and retention policies

Most SMBs have signed zero DPAs with their AI vendors. That's an immediate compliance gap under GDPR and a liability risk under HIPAA.

### Domain 5: Policy & Governance

Does the organization have written policies covering AI use? Specifically:

- AI Acceptable Use Policy (AUP)
- AI tool approval process
- Incident response procedures that cover AI-related breaches
- Training records for AI risk awareness

73% of SMBs have no AI AUP. This is both the easiest problem to fix and the one with the most immediate legal exposure.

### Domain 6: Compliance Alignment

The final domain maps findings against applicable regulatory frameworks:

- **HIPAA**: Does PHI flow through AI tools? Is there a BAA in place?
- **GDPR**: Is there a lawful basis for AI data processing? Is there a DPA?
- **SOC 2**: Do AI tools fall within the audit scope? Are relevant controls documented?

## What Goes Into the Audit Report

A professional AI security audit report includes:

1. **Executive Summary** — Overall risk score (1–10), top 3 critical findings, one-page summary
2. **AI Tool Inventory** — Full list with risk classification for each tool
3. **Findings & Risk Matrix** — All findings rated Critical/High/Medium/Low
4. **Compliance Gap Analysis** — Specific gaps against applicable frameworks
5. **Prioritized Recommendations** — Specific, actionable fixes for every finding
6. **30/60/90-Day Roadmap** — (Enterprise tier) Sequenced implementation plan

## How Long Does an AI Security Audit Take?

For a Basic tier engagement (up to 3 tools), the timeline is typically:

- Day 1: Intake questionnaire sent, client completes within 24 hours
- Days 2–3: Analysis, framework mapping, findings documentation
- Days 4–5: Report writing, quality review
- Day 5: Report delivered

Standard and Enterprise engagements add time for additional interviews, deeper data flow analysis, and roadmap development.

## Getting Started

The fastest way to understand your AI risk posture is to download the [free AI Security Risk Overview](/free-risk-overview) — it covers the five risks this guide addresses in a format you can use to brief your leadership team.

If you're ready to get a professional assessment, [book a free discovery call](/audit) and we'll scope the engagement together.
    `},{slug:"nist-ai-rmf-explained",title:"NIST AI RMF 1.0 Explained in Plain English",excerpt:"The NIST AI Risk Management Framework is the federal government's guidance for managing AI risk. Here's what it actually says, how it's structured, and how to apply it in a real audit context — without the government-document fog.",category:"Framework Guides",readTime:"9 min read",date:"May 2026",hasTemplate:!1,primaryKeyword:"NIST AI RMF",content:`
## What Is the NIST AI RMF?

The NIST AI Risk Management Framework (AI RMF) 1.0 is a voluntary framework published by the National Institute of Standards and Technology in January 2023. It provides guidance for organizations to identify, assess, and manage the risks associated with AI systems throughout their lifecycle.

It is not a compliance mandate. It is not a checklist. It is a framework — meaning it gives you a structure for thinking about AI risk systematically, not a list of controls you check off.

That said, it's the most comprehensive and widely-referenced AI risk framework available, and it's increasingly being cited in regulatory guidance, RFPs, and enterprise security requirements.

## How the AI RMF Is Structured

The framework has two main components:

**The FRAME** — A set of foundational concepts about AI risk, AI trustworthiness, and how to think about AI systems in an organizational context.

**The CORE** — The operational part: four functions that define what an AI risk management program actually does.

### The Four Core Functions

**GOVERN** — Establish the organizational conditions for responsible AI development and use. This is where policies, roles, accountability, and culture live.

**MAP** — Identify the AI risks relevant to your context. Who are the stakeholders? What are the potential impacts? What are the relevant standards and regulations?

**MEASURE** — Analyze and assess the AI risks identified in MAP. This is where quantitative and qualitative risk assessment happens.

**MANAGE** — Prioritize and address identified risks. Implement controls, monitor effectiveness, and adjust as needed.

This structure should feel familiar if you've worked with NIST CSF — it follows the same "function → category → subcategory" architecture.

## How to Use the AI RMF in an Audit

When I conduct an AI security audit, I use the AI RMF as a backdrop rather than a checklist. Specifically:

**GOVERN gives me the policy questions.** Does the organization have AI-specific governance in place? Is there an AI AUP? Who owns AI risk? Is there an approval process for new AI tools?

**MAP gives me the scoping questions.** What AI systems are in use? What are the potential impacts on internal and external stakeholders? What regulatory requirements apply?

**MEASURE gives me the assessment methodology.** How should I score and document identified risks? What evidence do I need to support each finding?

**MANAGE gives me the recommendations framework.** For each finding, what controls would address it? How do I prioritize remediation?

## What the AI RMF Doesn't Do

The AI RMF is deliberately non-prescriptive. It does not tell you exactly which controls to implement or how to score specific risk scenarios. This is intentional — NIST recognizes that AI risk is highly context-dependent.

In practice, this means you need supplementary guidance for the "how." OWASP LLM Top 10 (which we cover in a separate post) fills in the technical risk specifics. ISO/IEC 42001 provides the certification structure if your clients need formal attestation.

## Further Reading

- [NIST AI RMF 1.0 (official)](https://airc.nist.gov/RMF)
- [NIST AI RMF Playbook](https://airc.nist.gov/Docs/2)
- [OWASP LLM Top 10](/blog/owasp-llm-top-10)
    `},{slug:"how-to-write-ai-acceptable-use-policy",title:"How to Write an AI Acceptable Use Policy (Free Template)",excerpt:"73% of SMBs have no written AI Acceptable Use Policy. Here's what needs to be in one, why it matters legally, and a free template you can adapt for your organization.",category:"Practitioner How-Tos",readTime:"8 min read",date:"May 2026",hasTemplate:!0,primaryKeyword:"AI acceptable use policy",content:`
## Why Your Organization Needs an AI Acceptable Use Policy

An AI Acceptable Use Policy (AUP) is a written document that defines how employees are permitted to use AI tools in the course of their work. It establishes what's allowed, what's prohibited, and what the consequences are for violations.

Without one, you have no baseline. No accountability mechanism. And critically, no legal protection when something goes wrong.

Here's the scenario that plays out more often than it should: An employee pastes a client contract into ChatGPT to get a summary. The client finds out. The client's legal team asks your organization what policies were in place governing the use of AI with client data. You have no answer. That's a breach of contract, a potential GDPR violation, and a reputational disaster — all from a 30-second productivity shortcut.

An AI AUP wouldn't have prevented the employee from making a bad decision. But it would have:

1. Given you grounds to take corrective action
2. Demonstrated due diligence to your client and their legal team
3. Satisfied the "documented safeguards" requirement in most data processing agreements
4. Helped your cyber insurer not deny the claim

## What Must Be in an AI AUP

A minimal AI AUP covers five areas:

### 1. Scope

Which AI tools does this policy cover? "All AI tools" is the right answer — approved and unapproved. The policy should explicitly state that using unapproved AI tools for work purposes is a violation.

### 2. Prohibited Uses

This is the core of the policy. Common prohibitions include:

- Entering PHI, PII, or confidential client data into AI tools (unless specifically approved)
- Using AI tools for regulated communications (legal, financial advice, medical information)
- Using AI-generated content without human review before distribution
- Using personal AI tool accounts for business purposes

### 3. Approved Tools and Approval Process

List the AI tools that are currently approved for use, and describe the process for requesting approval of new tools. This gives employees a clear path forward and prevents them from using unapproved tools out of convenience.

### 4. Data Handling Requirements

For approved AI tools that may handle sensitive data:

- Data retention settings must be disabled where available
- No client data may be entered without explicit approval from [role]
- AI-generated content containing client information must be reviewed before distribution

### 5. Enforcement

What are the consequences of policy violations? These should align with your existing disciplinary policy — first violation is a warning, repeat violations are grounds for termination, etc. The specifics matter less than the fact that they exist.

## Download the Free Template

Download the AI Acceptable Use Policy Template from the [free resource library](/free-risk-overview) — it includes all five sections above in a format ready to customize for your organization.

You'll need to add:
- Your organization name and effective date
- Your approved AI tool list
- The name of the role responsible for AI governance
- Your specific data classification definitions

The whole process takes about 30 minutes. That's 30 minutes to close one of the most common high-severity findings in an AI security audit.

## Who Needs to Sign It

The policy is only effective if employees are aware of it and have acknowledged it in writing. At minimum, get signatures from:

- All current employees (existing + new hires as part of onboarding)
- Contractors who use company systems

Annual recertification is good practice as the policy will need to evolve.
    `},{slug:"shadow-ai-what-it-is-why-dangerous-how-to-find-it",title:"Shadow AI: What It Is, Why It's Dangerous, and How to Find It",excerpt:"Shadow AI is the unauthorized AI tools your employees are using right now without your knowledge or approval. Here's what it looks like, why it creates serious liability, and the techniques auditors use to uncover it.",category:"AI Risk Education",readTime:"7 min read",date:"May 2026",hasTemplate:!1,primaryKeyword:"shadow AI",content:`
## What Is Shadow AI?

Shadow AI refers to AI tools and systems used within an organization without formal authorization, oversight, or governance. The term is deliberately parallel to "Shadow IT" — the unauthorized software and services that have plagued IT departments since cloud computing became mainstream.

The difference is that shadow AI creates risks traditional shadow IT doesn't:

**Data training risks**: Many AI tools use submitted data to train or improve their models. When an employee pastes sensitive information into a shadow AI tool, that data may become part of a training dataset. That's not a hypothetical — it's the default behavior for most consumer AI tools unless explicitly disabled.

**Output integrity risks**: AI-generated content introduced into business processes without review creates accuracy and liability risk. If an employee uses an unauthorized AI tool to draft client communications, legal documents, or financial analyses, the organization owns the output.

**Invisible attack surface**: You cannot apply security controls to systems you don't know exist. Shadow AI is, by definition, outside your security perimeter.

## The Scale of the Problem

The numbers are worse than most organizations expect. In surveys of enterprise employees:

- 75%+ report using AI tools for work at least weekly
- 40%+ report using AI tools their employer hasn't officially sanctioned
- Less than 30% of organizations have a formal AI tool approval process

For SMBs, the numbers are worse. The average SMB has no IT department, no shadow IT detection tooling, and no AI AUP. They are running completely blind.

## How Auditors Find Shadow AI

When I conduct an AI security audit, I use multiple discovery techniques to surface unauthorized AI tool usage:

**DNS/Proxy Log Analysis**: AI service providers have distinctive DNS footprints. Logs from your DNS resolver or web proxy will show requests to openai.com, anthropic.com, gemini.google.com, and dozens of other AI service endpoints. If you're not logging this traffic, you're blind.

**Employee Intake Questionnaires**: Direct questions to employees about which AI tools they use. Most employees don't realize shadow AI is a problem — they're using these tools to be more productive, not to circumvent security. An honest, non-punitive intake process surfaces a lot.

**Browser Extension Audit**: Many AI tools operate as browser extensions. An inventory of installed browser extensions across company devices will often reveal several AI tools that are invisible to traditional network monitoring.

**Expense Report Review**: AI subscriptions show up on expense reports. A quick review of software and subscription charges often reveals individual AI tool subscriptions that IT has never seen.

**App Store Inventory**: For organizations using mobile device management (MDM), the installed app inventory on company devices will show AI apps.

## What to Do When You Find Shadow AI

The instinct is to ban everything and lock down. Resist it.

Shadow AI exists because employees are trying to get work done. If you ban unauthorized AI use without providing authorized alternatives, you'll drive the behavior underground rather than eliminate it.

The right response:

1. **Acknowledge the productivity value** — employees are using these tools because they work
2. **Establish an approval process** — give people a path to get tools officially sanctioned
3. **Create an approved tool list** — designate which AI tools are acceptable for which use cases
4. **Implement an AI AUP** — document the rules clearly
5. **Address the shadow tools** — for tools that remain unauthorized, make the business case for why they're off-limits

The goal is a governed AI environment, not a tool-free one. The organizations that try to eliminate AI use entirely will lose the productivity benefit and still have the shadow AI problem.
    `},{slug:"owasp-llm-top-10-security-guide",title:"OWASP LLM Top 10 — What Every Security Pro Needs to Know",excerpt:"The OWASP Top 10 for LLM Applications is the definitive reference for LLM-specific security risks. Here's what all 10 risks mean in practice, with real examples and the controls that address each one.",category:"Framework Guides",readTime:"11 min read",date:"May 2026",hasTemplate:!1,primaryKeyword:"OWASP LLM Top 10",content:`
## What Is the OWASP LLM Top 10?

The OWASP Top 10 for Large Language Model (LLM) Applications is a list of the 10 most critical security risks in LLM-based applications. Published by the Open Web Application Security Project (OWASP), it follows the same format as the famous OWASP Top 10 for web applications — but applied specifically to AI systems.

The current version (1.1) was released in late 2023 and covers risks that are specific to how LLMs process input, generate output, and interact with external systems.

This is not a theoretical framework. Every risk on this list has active exploitation in the wild.

## LLM01: Prompt Injection

**What it is**: An attacker manipulates an LLM by injecting malicious instructions into the input, overriding the system prompt or causing the model to take unintended actions.

**Why it matters**: If your AI application has any system-level instructions ("always respond in English," "never discuss competitor products"), those instructions can be overridden by a crafted user input. In agentic AI systems — where the LLM can take actions — prompt injection can lead to data exfiltration, unauthorized actions, or system compromise.

**The control**: Input validation, output filtering, and architectural separation between trusted instructions and untrusted user input.

## LLM02: Insecure Output Handling

**What it is**: LLM output is passed to downstream systems or presented to users without adequate validation, leading to injection attacks (XSS, SQLi, command injection) or trust issues.

**Why it matters**: If your application takes LLM output and uses it directly in a database query, HTML template, or shell command, you've created a classic injection vulnerability with an AI middleman.

**The control**: Treat LLM output as untrusted user input. Sanitize and validate before use in downstream systems.

## LLM03: Training Data Poisoning

**What it is**: An attacker corrupts the training data for an LLM, introducing biases, backdoors, or false information into the model's learned behavior.

**Why it matters**: This primarily affects organizations building or fine-tuning their own models. It's less relevant for organizations using third-party AI APIs — but it matters significantly when evaluating AI vendor risk.

**The control**: Data provenance validation, supply chain security for training datasets, and monitoring for unexpected model behavior post-training.

## LLM04: Model Denial of Service

**What it is**: An attacker consumes excessive LLM resources through crafted inputs, causing service degradation or cost escalation.

**Why it matters**: Computationally expensive prompts can dramatically increase API costs or cause performance issues. In some cases, this can be a stepping stone to a larger attack.

**The control**: Rate limiting, input length restrictions, and cost monitoring with anomaly alerting.

## LLM05: Supply Chain Vulnerabilities

**What it is**: Vulnerabilities introduced through the LLM supply chain — third-party models, plugins, training data sources, or deployment infrastructure.

**Why it matters**: Every AI vendor in your stack is a potential supply chain risk. Model weights from untrusted sources, plugins with excessive permissions, and compromised training pipelines have all been demonstrated in practice.

**The control**: Vendor assessment, model provenance verification, and minimal-permission plugin architectures.

## LLM06: Sensitive Information Disclosure

**What it is**: An LLM reveals sensitive information from its training data or context window in response to prompts.

**Why it matters**: Models trained on proprietary data can regurgitate that data in response to crafted prompts. For consumer AI tools, this is a known issue — OpenAI and others have had incidents where training data was extractable.

**The control**: Data minimization in training, output filtering, and not including sensitive information in system prompts.

## LLM07: Insecure Plugin Design

**What it is**: LLM plugins with excessive permissions, insufficient access controls, or inadequate input validation.

**Why it matters**: AI assistants with plugin access (web browsing, code execution, file access) have a dramatically larger attack surface. A plugin that can read email and write files, authorized by a prompt injection, becomes a serious threat.

**The control**: Least-privilege plugin design, explicit authorization for sensitive actions, and user confirmation for high-impact operations.

## LLM08: Excessive Agency

**What it is**: LLM-based systems are given excessive permissions or autonomy, enabling unintended actions with real-world consequences.

**Why it matters**: An AI agent that can send emails, create calendar events, modify files, and make API calls is one prompt injection away from serious damage. The more an AI system can do autonomously, the larger the blast radius of a successful attack.

**The control**: Minimum necessary permissions, human-in-the-loop for irreversible actions, and comprehensive audit logging.

## LLM09: Overreliance

**What it is**: Overreliance on LLM output without adequate human oversight, leading to errors propagating into critical decisions.

**Why it matters**: This is a governance risk as much as a technical one. Organizations that treat AI output as authoritative without verification are creating liability from AI hallucinations and confident wrong answers.

**The control**: Human review requirements for high-stakes outputs, accuracy monitoring, and user training on AI limitations.

## LLM10: Model Theft

**What it is**: Attackers extract a proprietary model's parameters or capabilities through targeted querying.

**Why it matters**: If you've invested in fine-tuning a model on proprietary data, a sufficiently sophisticated attacker can reconstruct meaningful portions of that model through the API. This is mostly relevant for organizations with significant model development investment.

**The control**: Rate limiting, output watermarking, and monitoring for systematic querying patterns.

## Using the OWASP LLM Top 10 in an Audit

In a standard AI security audit, I reference the OWASP LLM Top 10 in Domain 4 (Vendor Risk) and Domain 2 (Data Classification). Specifically:

- LLM06 informs the questions I ask about what data is flowing into AI tools
- LLM08 drives my questions about agentic AI deployments
- LLM05 frames my vendor risk review

For organizations building AI applications (not just using them), the full Top 10 becomes a checklist for the development security review.

## Further Reading

- [OWASP Top 10 for LLM Applications (official)](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [NIST AI RMF explained](/blog/nist-ai-rmf-explained)
    `}];function e(a){return d.find(b=>b.slug===a)}function f(){return d}}};