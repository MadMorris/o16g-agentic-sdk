# o16g Core Axioms: Agentic Ontology and Governance

This document constitutes the Supreme Ontology of the o16g Framework. It defines the dogmatic principles that the AI agent must use to interpret tasks.

## 1. Outcome Engineering
- **Axiom:** Code is a vanity metric; the only thing that matters is the rate of positive change delivered to the customer.
- **Directive:** Success is measured by realized business value, not by lines of code or closed tickets.

## 2. SDD (Spec-Driven Development): The Law
- **Axiom:** The specification is the single source of truth, and the code is a disposable byproduct.
- **Directive:** The REASONS Canvas becomes the executable design contract that o16g agents use to build solutions. If the intention changes, the code is not touched first; the requirement is altered.

## 3. RDD (Review-Driven Development): The Truth
- **Axiom:** Quality is not a property added at the end, but a discipline that is cultivated.
- **Directive:** Code is reviewed to validate that the implementation matches the original intention specified in the manifest. If the code changed without updating the specification, the state transitions to `[BLOCKED_DRIFT]`.

## 4. TBD (Trunk-Based Development) & Feature Flags
- **Axiom:** Agentic speed demands continuous integration without compromising production stability.
- **Directive:** Any new logic that expands existing flows must be born deactivated behind a Feature Flag (Feature Flag).

## 5. Agnostic Structural Pruning
- **Axiom:** A consolidated feature flag becomes severe technical debt for the model.
- **Directive:** It is mandatory to extirpate dead logic using universal Abstract Syntax Tree (AST) analyzers or LSP. The use of Regex for this task is strictly prohibited.
