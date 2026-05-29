# o16g Agentic SDK

Governance and orchestration framework for autonomous development driven by Artificial Intelligence agents.

## Philosophy
The goal is to transform software development from an artisanal process ("Vibe Coding") into an automated, measurable supply chain centered on business impact. Under the o16g framework, outcome engineering dictates that software is no longer the end goal, but rather a means to achieve a measurable impact.

## SDK Consumption (AGENTS.md Integration)
This repository functions as a "Central Brain". For any microservice or satellite project to inherit these rules, do not copy the files manually. Instead, use the `AGENTS.md` standard in the target repository and include the following initialization command (Dynamic Fetch):

```bash
mkdir -p .o16g/policies .o16g/prompts && \
curl -sL https://raw.githubusercontent.com/MadMorris/o16g-agentic-sdk/main/core/core_axioms.md -o .o16g/core_axioms.md && \
curl -sL https://raw.githubusercontent.com/MadMorris/o16g-agentic-sdk/main/core/business_rules.yaml -o .o16g/policies/business_rules.yaml && \
curl -sL https://raw.githubusercontent.com/MadMorris/o16g-agentic-sdk/main/core/reviewer.prompt -o .o16g/prompts/reviewer.prompt
```

Each satellite project can then extend these base rules with its own local overrides inside `.o16g/`, while the core governance always points back to this central repository.

---

## Documentation and Citations
The framework specifications use precise ontological markers (e.g., `[cite: 722]`) to ground assertions in the official o16g core. To explore the origins and definitions of these codes, refer to the [o16g Ontological Reference Library](docs/research/citations.md).
