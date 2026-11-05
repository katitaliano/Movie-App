# Movie App

A simple React practice app following a Tech with Tim tutorial at https://www.youtube.com/watch?v=G6D9cBaLViA

## Stack:

- **React** — A JavaScript library for building user interfaces through reusable, state-driven components.
- **Vite** — A build tool and dev server that bundles your code and serves it locally during development.
- **Node.js** — A JavaScript runtime environment that lets you run JavaScript outside the browser, enabling build tools and package management.
- **NPM** — The default package manager for Node that installs, version-controls, and scripts external libraries (like React or Vite).

Together: Node provides the runtime, NPM installs dependencies, Vite serves/bundles the React app during development and production.

React and Vite are frontend specific tools — React is a UI library and Vite is a frontend build tool; both exist solely to build what runs in the browser.

Node and NPM are general purpose. Node.js is a full JavaScript runtime capable of powering backend servers and APIs too (many companies run entire backends on it). NPM manages packages for any JavaScript project, frontend or backend.

Even though this app is pure frontend, import.meta.env variables like the TMDB key end up visible in the browser bundle. Truly hiding a key would require a backend—typically built with Node.

# React + Vite template notes:

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
