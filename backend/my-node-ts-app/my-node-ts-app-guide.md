# My Node.js + TypeScript App

This is a basic setup for a Node.js application written in TypeScript.

## 📁 Structure

```
my-node-ts-app/
├── node_modules/
├── src/
│   └── index.ts
├── dist/
│   └── index.js
├── package.json
├── tsconfig.json
└── package-lock.json
```

## 📦 Scripts

- `npm run dev` – Start dev server with hot reload.
- `npm run build` – Compile TypeScript to JavaScript.
- `npm start` – Run compiled JavaScript.

## 🛠 Example Code

**src/index.ts**
```ts
const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

console.log(greet("Ayushi"));
```

---

Happy Coding! 🚀