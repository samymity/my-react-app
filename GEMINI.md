# Brick World - Project Context

## Project Overview
A React learning project themed around LEGO brick building. Called "Brick World", it allows users to count different types of LEGO bricks (Technic, Duplo, Classic, City) for a specific build (currently: Millennium Falcon).

## Tech Stack
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Language**: TypeScript (TSX for components)
- **Styling**: Inline styles (no CSS framework, no CSS modules)
- **Package Manager**: npm
- **Linting**: ESLint with typescript-eslint

## Dev Server
```bash
npm run dev   # starts Vite dev server (hot reload enabled)
npm run build # tsc + vite build (production)
npm run lint  # eslint check
```

## Project Structure
```
src/
├── main.tsx              # Entry point, renders <App /> into #root
├── App.tsx               # Root component — composes Header, Body, Footer
├── index.css             # Global CSS (body, h1, button defaults)
├── App.css               # App-specific styles (#root, .logo, .card etc.)
└── component/
    ├── Header.tsx        # Top banner — red (#d32f2f), "Brick World 🧱"
    ├── Body.tsx          # Main content — shows current build info + BrickCounters
    ├── BrickCounter.tsx  # Reusable stateful counter for a brick type/color
    └── Footer.tsx        # Bottom bar — "© 2026 Master Builder Studio"
```

## Key Components

### `BrickCounter`
- **Props**: `brickType: string`, `color: string`
- **State**: `count` (via `useState`)
- **Behaviour**: Displays a colored box with an increment button for a named brick type
- **Usage**: `<BrickCounter brickType="Technic" color="blue" />`

### `Body`
- Renders the current build name and pieces remaining
- Composes multiple `<BrickCounter />` instances

### `Header`
- Full-width red banner (`width: 100%`, `boxSizing: border-box`)
- Title centered via inline style

## Coding Conventions
- Named exports for all components (`export function Foo()`)
- TypeScript interfaces defined inline above the component that uses them
- Inline styles used throughout (no CSS classes in components)
- Components live in `src/component/`
- No routing library installed yet (`react-router-dom` not in dependencies)

## Notes & TODOs
- Routing: Not yet set up. To add routing, install `react-router-dom` and wrap `<App>` in `<BrowserRouter>` inside `main.tsx`.
- No state management library (Redux, Zustand, etc.) — local `useState` only.
- No testing framework set up yet.


## Tasks
Reads Tasks.md and updates it with the tasks to be done.

