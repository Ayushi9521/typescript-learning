# 📘 Day 1: TypeScript Basics (Frontend in React + Backend in Node.js)

---

## 🎯 Goals for Day 1

- Understand and use **Type Annotations**
- Learn **Primitive Types**, **Functions**, **Arrays**, and **Objects**
- Apply TypeScript in both **React (frontend)** and **Node.js (backend)**

---

## 🔹 1. Primitive Types in TypeScript

| Type        | Example              |
|-------------|----------------------|
| `string`    | `"hello"`            |
| `number`    | `42`, `3.14`         |
| `boolean`   | `true`, `false`      |
| `null`      | `null`               |
| `undefined` | `undefined`          |
| `any`       | disables type checks – avoid |
| `unknown`   | like `any` but safer |

### ✅ Syntax
```ts
let username: string = "Ayushi";
let age: number = 25;
let isLoggedIn: boolean = true;

## 🔹 2. Function Type Annotations
### ✅ Syntax

function add(a: number, b: number): number {
  return a + b;
}

- a: number, b: number → function parameter types

- : number → return type

## 🔹 3. Arrays and Objects
### ✅ Arrays
let scores: number[] = [10, 20, 30];
let names: string[] = ["Alice", "Bob"];

### ✅ Objects
let user: { name: string; age: number } = {
  name: "Ayushi",
  age: 23,
};
