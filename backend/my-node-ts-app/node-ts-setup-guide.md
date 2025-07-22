# Node.js + TypeScript Project Setup Guide

This guide walks you through setting up a Node.js project using TypeScript.

## ✅ Step-by-Step Setup

### 🔹 1. Create Project Folder
```bash
mkdir my-node-ts-app
cd my-node-ts-app
```

### 🔹 2. Initialize npm
```bash
npm init -y
```

### 🔹 3. Install Dev Dependencies
```bash
npm install -D typescript ts-node-dev @types/node
```

### 🔹 4. Generate and Edit tsconfig.json
```bash
npx tsc --init
```

Modify it to:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

### 🔹 5. Create Source Directory and Entry File
```bash
mkdir src
touch src/index.ts
```

### 🔹 6. Add Scripts to package.json
```json
"scripts": {
  "dev": "ts-node-dev src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}
```

### 🔹 7. Run Commands
```bash
npm run dev      # Run development server
npm run build    # Compile TypeScript to JavaScript
npm start        # Run compiled output
```

## 📁 Project Structure

```
my-node-ts-app/
├── node_modules/
├── src/
│   └── index.ts
├── dist/
│   └── index.js (after build)
├── package.json
├── tsconfig.json
└── package-lock.json
```