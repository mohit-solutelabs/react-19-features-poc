"use client";
import { memo, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Todos from "./components/Todos";
import TodosOld from "./components/TodosOld";

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
        <div className="flex items-center justify-center gap-2">
          <div className="w-1/2 flex flex-col gap-2">
            <h4 className="text-2xl font-bold text-left my-5">
              Todos with useOptimistic and useTransition hook usage
            </h4>
            <Todos todosPromise={todosPromise} />
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <h4 className="text-2xl font-bold text-left my-5">
              Todos without useOptimistic and useTransition hook usage
            </h4>
            <TodosOld todosPromise={todosPromise} />
          </div>
        </div>
      </Suspense>
    </>
  );
}

export default memo(AppChild);
