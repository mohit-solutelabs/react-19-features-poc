"use client";
import { Suspense } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Todos from "./components/Todos";

function AppChild({ todosPromise }) {
  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="mb-5">Vite + React</h1>
      <Suspense fallback={<p>⌛Downloading message...</p>}>
        <Todos todosPromise={todosPromise} />
      </Suspense>
    </>
  );
}

export default AppChild;
