# React + Vite

## Manually create this template

### 1. Install React template with Vite

```powershell
# On Windows run:
npx create-vite@latest <app-title> --template react
```

```bash
# On Linux/MacOS run:
npm create vite@latest <app-title> -- --template react
```

### 2. (Optionally) Add Workspace to Git

```powershell
# Initialize Git repository
git init
# Add all files to the staging area
git add .
# Commit the changes
git commit -m "Initial commit"
```

## (Alternatively) Get the template from GitHub

```powershell
# Install degit
# https://github.com/Rich-Harris/degit
npm i -g degit

# Clone the template
degit nbilalis/react-vite-template <app-title>

```

## Install dependencies

```powershell
# Navigate to the project directory
cd <app-title>

# Install dependencies
npm install
```

## Use the npm scripts

```powershell
# Start the development server
# You can use the following shortcuts:
# h + enter to show help
# r + enter to restart the server
# u + enter to show server url
# o + enter to open in browser
# c + enter to clear console
# q + enter to quit
npm run dev

# Build the project
# This will create a dist folder with the build files
npm run build

# Run ESLint
# This will check the code for errors and warnings
npm run lint

# Preview the build
# This will serve the build files
npm run preview
```

## Other Info

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
