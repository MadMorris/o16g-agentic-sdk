# First Steps: Bootstrapping an o16g Project

Welcome to the o16g Agentic Framework. This guide will take you from an empty repository to a fully governed, AI-ready workspace. Under this framework, code is a vanity metric; success is measured by realized business value[[cite: 722]](../docs/research/citations.md#cite-722--code-is-a-vanity-metric).

## Phase 1: Initialize the Governance Core
Do not write code yet. First, inject the o16g "Brain" into your local repository.

1. Create an `AGENTS.md` file in the root of your new project.
2. Run the following command in your terminal to fetch the framework's core rules from the central repository:

```bash
mkdir -p .o16g/policies .o16g/prompts && \
curl -sL https://raw.githubusercontent.com/MadMorris/o16g-agentic-sdk/main/core/core_axioms.md -o .o16g/core_axioms.md && \
curl -sL https://raw.githubusercontent.com/MadMorris/o16g-agentic-sdk/main/core/business_rules.yaml -o .o16g/policies/business_rules.yaml && \
curl -sL https://raw.githubusercontent.com/MadMorris/o16g-agentic-sdk/main/core/reviewer.prompt -o .o16g/prompts/reviewer.prompt
```

## Phase 2: Define the Intention (The Voyage)
Never prompt an AI agent without a specification.
Copy the REASONS.md template from the SDK into your project:

```bash
curl -sL https://raw.githubusercontent.com/MadMorris/o16g-agentic-sdk/main/templates/REASONS.md -o REASONS.md
```

Fill out the business KPIs, requirements, and strict Safeguards. This file is your executable design contract.

## Phase 3: Agent Orchestration & Execution
Open your AI IDE (e.g., Antigravity, Cursor, Cline).
Instruct your builder agent: "Read the .o16g/core_axioms.md and the REASONS.md file. Execute the tasks defined in the Operations dimension."
The agent will generate the code in an ephemeral branch.

## Phase 4: Review Driven Development (The Truth)
Quality is not added at the end; it is a cultivated discipline.
Before merging, switch your AI to the Reviewer role using the .o16g/prompts/reviewer.prompt.
Ask the reviewer agent to audit the generated code against the REASONS.md specification.
If the agent detects architectural drift or unrequested features, it will reject the code. Fix the implementation, then merge to main.
