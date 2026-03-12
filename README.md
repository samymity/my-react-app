# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
1. Preparation (Don't skip!)
Make sure you are not uploading the node_modules folder, which is massive and will crash your push.

Check for .gitignore: In your terminal, type ls .gitignore.

If it's missing: Type echo "node_modules/" > .gitignore.

2. The Local Setup (The "Git Init" part)
Run these commands one by one in your terminal:

PowerShell
# 1. Start tracking the folder
git init

# 2. Add all your files to the "waiting area"
git add .

# 3. Save the files into your first "snapshot"
git commit -m "Initial commit of my React app"

# 4. Rename the branch to 'main' (modern standard)
git branch -M main
3. The GitHub Setup (The "Remote" part)
Since you want to do this manually to be safe:

Go to github.com/new.

Name it my-react-app.

Keep it Private.

Important: Do not check any boxes (No README, No License).

Click Create Repository.

Copy the URL it gives you (e.g., https://github.com/samymity/my-react-app.git).

4. The Final Bridge (The "Push" part)
Go back to your terminal and finish the link:

PowerShell
# 1. Tell your computer where the cloud repo is
git remote add origin https://github.com/samymity/my-react-app.git

# 2. Send the code!
git push -u origin main
How to use your MCP Server next time?
Now that you've done it manually once, your GitHub MCP in Antigravity is much smarter. In the future, for a new project, you can just say:

"Agent, initialize a git repo here and use the GitHub MCP to create a matching private repo on my account and push it."

Would you like me to help you verify that the files arrived safely on GitHub? Just ask me to "List my GitHub files for my-react-app."