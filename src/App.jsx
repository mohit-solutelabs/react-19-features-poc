"use client";
import { useState, Suspense, use } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import Todos from "./components/Todos";

const todosPromise = axios.get("https://jsonplaceholder.typicode.com/todos");
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Suspense fallback={<p>⌛Downloading message...</p>}>
        <Todos todosPromise={todosPromise} />
      </Suspense>
    </>
  );
}

export default App;
