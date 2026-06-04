# First Steps: Bootstrapping an o16g Project

Welcome to the o16g Agentic Framework. This guide will take you from an empty repository to a fully governed, AI-ready workspace. Under this framework, code is a vanity metric; success is measured by realized business value[[cite: 722]](research/citations.md#cite-722--code-is-a-vanity-metric).

## Phase 1: Initialize the Governance Core
Do not write code yet. First, inject the o16g "Brain" into your local repository.

Run the following command in your terminal to fetch the `AGENTS.md` rules, core axioms, policies, reviewer prompts, and the bootstrap script:

```bash
mkdir -p .o16g/policies .o16g/prompts scripts && \
curl -sL https://raw.githubusercontent.com/MadMorris/o16g-agentic-sdk/main/AGENTS.md -o AGENTS.md && \
curl -sL https://raw.githubusercontent.com/MadMorris/o16g-agentic-sdk/main/core/core_axioms.md -o .o16g/core_axioms.md && \
curl -sL https://raw.githubusercontent.com/MadMorris/o16g-agentic-sdk/main/core/business_rules.yaml -o .o16g/policies/business_rules.yaml && \
curl -sL https://raw.githubusercontent.com/MadMorris/o16g-agentic-sdk/main/core/reviewer.prompt -o .o16g/prompts/reviewer.prompt && \
curl -sL https://raw.githubusercontent.com/MadMorris/o16g-agentic-sdk/main/scripts/bootstrap.sh -o scripts/bootstrap.sh
```

## Phase 2: Define the Intention (The Voyage)
Never prompt an AI agent without a specification.
The system canvas/state is tracked in `.o16g_state.md` (the REASONS Canvas). When the orchestrator agent starts, it will automatically check for this file and run the bootstrap script to generate it if it doesn't exist. Alternatively, you can run it manually:

```bash
bash scripts/bootstrap.sh
```

Fill out the business KPIs, requirements, and strict Safeguards in `.o16g_state.md`. This file is your executable design contract.

## Phase 3: Agent Orchestration & Execution
Open your AI IDE (e.g., Antigravity, Cursor, Cline).
The agent will bootstrap using the instructions in `AGENTS.md` and read the core axioms. Use the `/draft` command to initiate execution:

```markdown
/draft [description of the feature/change]
```

The orchestrator will record the intent in `.o16g_state.md` under the `[DRAFT]` state, create an ephemeral branch (e.g., `feat/short-name`), and begin coding while strictly keeping any new logic deactivated behind feature flags.

## Phase 4: Review Driven Development (The Truth)
Quality is not added at the end; it is a cultivated discipline.
Before merging, run the `/review` command in the chat to audit the generated changes:

```markdown
/review
```

The agent will assume the Reviewer Agent role, read the auditing guidelines in `.o16g/prompts/reviewer.prompt`, and inspect the current diff. If external source code modifications are detected without a corresponding update to `.o16g_state.md`, the state transitions to `[BLOCKED_DRIFT]`.

## Phase 5: Agnostic Structural Pruning (The Cleanup)
Once feature flags are ready to be integrated permanently and have been marked as `[PENDING_PRUNE]` in the manifest/Canvas, you can clean up the dead paths. Ask the agent to prune the flag:

```markdown
/prune [flag_id]
```

The agent will use universal AST/LSP analysis (never regex) to safely clean up the flag logic and all associated code branches.
