# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite HMR)
npm run build      # Type-check with tsc then build for production
npm run lint       # Run ESLint
npm run preview    # Preview production build locally
```

## Stack

- **React 19** with TypeScript, bootstrapped via Vite
- **Build**: Vite 7 with `@vitejs/plugin-react` (Babel-based Fast Refresh)
- **TypeScript**: strict mode, `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`
- **Linting**: ESLint 9 flat config (`eslint.config.js`) with `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`

## TypeScript notes

- `verbatimModuleSyntax` is enabled — use `import type` for type-only imports
- `erasableSyntaxOnly` is enabled — avoid TypeScript-only syntax that requires runtime transforms (e.g., enums, namespaces, parameter properties)
- Source files live in `src/`, entry point is `src/main.tsx`


# Tasks

doing POC  to learn react and typescript
