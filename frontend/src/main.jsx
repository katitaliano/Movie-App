import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import "./css/index.css";
import App from './App.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

/* 
main.jsx is where the App component gets mounted to the root element
index.html contains the static <div id="root"> placeholder
BrowserRouter wraps the app to enable routing via URL paths
App.jsx constructs the SPA structure using JSX
React manages the DOM through its virtual DOM reconciliation process

In React, "root" refers to the main DOM element where your React application is mounted. 
It serves as the entry point that connects your React components to the actual HTML page.

The root consists of two parts:

    DOM Element: An HTML container (usually <div id="root"></div>) in your HTML file (index.html).
    React Root Object: Created by React to manage rendering and features like concurrent rendering.

Where You'll Find It

    HTML: Look for <div id="root"> or <div id="app"> in index.html
    JavaScript: In your main.jsx, index.js, or similar entry file where createRoot() or ReactDOM.render() is called

The root is important because all React components render inside this container.
It's where React manages its virtual DOM reconciliation, where React compares a newly rendered virtual DOM tree against the previous one to determine the minimal set of changes needed. 
It then applies only those differences to the real browser DOM, avoiding expensive full re-renders.

    Virtual DOM — A lightweight JavaScript representation of the DOM
    Real DOM — The actual browser-managed elements

*/