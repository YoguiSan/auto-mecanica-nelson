---
name: React
description: Describe what this custom agent does and when to use it.
argument-hint: The inputs this agent expects, e.g., "a task to implement" or "a question to answer".

# Copilot Instructions — Frontend
You are working in a frontend codebase. Your job is to make small, correct, maintainable changes that follow the existing codebase conventions.

## Core Goals
- Prefer React for frontend development.
- Prefer TypeScript for all new frontend code.
- Prefer reusable components over one-off implementations.
- Optimize for code quality, correctness, readability, maintainability, and performance.
- Prefer accessibility where practical, even if it is not a hard requirement.
- Keep changes minimal, reviewable, and aligned with the existing architecture.

## Framework Preferences
- Prefer Vite or Next.js, depending on the repository.
- If the project uses Next.js, prefer client-side rendering by default.
- Avoid SSR unless explicitly requested or clearly justified by the task.
- Do not introduce server-driven patterns unless the task needs them.
- Follow the existing project structure and conventions instead of inventing new patterns.

## Styling Preferences
- Prefer styled-components or Sass/CSS preprocessors.
- Prefer custom-designed components over visual libraries and design systems.
- Avoid Tailwind, Bootstrap, Material UI, and similar libraries unless explicitly requested.
- Only use approved UI libraries when the task clearly requires them.
- Keep styling consistent with the repository’s existing approach.

## Component Design
- Prefer reusable, composable components.
- Keep components small and focused.
- Prefer semantic HTML before adding extra abstraction.
- Make accessibility a priority where reasonable: semantic structure, keyboard support, focus states, and ARIA only when needed.
- Avoid unnecessary abstraction or premature component generalization.

## State Management
- Prefer Context API for shared state when it is sufficient.
- Do not introduce a new state-management library unless the task clearly needs it.
- If state becomes too complex for Context, suggest an alternative only when justified.

## Forms
- Prefer simple controlled inputs for small forms.
- Use React Hook Form only when the form is non-trivial or benefits clearly from it.
- If a form library is needed, prefer React Hook Form.
- If validation is needed, prefer a schema-based approach when appropriate.
- Avoid introducing form libraries unless they solve a real problem.

## Testing
- Generate tests for meaningful behavior changes.
- Prefer React Testing Library for component and interaction tests.
- Use Jest if the repository already uses it; otherwise follow the repo’s established test runner.
- Prefer deterministic tests that do not depend on network access or unstable timing.
- Cover success paths, edge cases, and error states when relevant.

## Code Quality Rules
- Follow existing linting, formatting, naming, and folder conventions.
- Use ESLint as the syntax and quality gate.
- Prefer simple, explicit code over clever abstractions.
- Avoid introducing unnecessary dependencies.
- Avoid experimental, trendy, or non-essential technologies.
- Reuse existing utilities and components when they fit the task.

## Work Style
- Make the smallest change that solves the problem.
- If requirements are unclear, ask before making broad changes.
- If the task can be solved with existing code, reuse it rather than inventing new abstractions.
- Do not refactor unrelated code.

## Validation
Before finishing a change:
- Ensure tests are added or updated.
- Ensure ESLint expectations are satisfied.
- Ensure the solution is consistent with the repository’s architecture.
- Ensure the final code is easy to maintain and explain.

## Default Approach
When in doubt:
1. Prefer reusable components.
2. Prefer React and TypeScript.
3. Prefer client-side rendering unless SSR is explicitly requested.
4. Prefer styled-components or Sass.
5. Prefer Context API for state.
6. Prefer React Hook Form only for meaningful forms.
7. Prefer React Testing Library for tests.
8. Prefer clarity over cleverness.