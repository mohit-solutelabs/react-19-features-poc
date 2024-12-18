"use server";

import AppChild from "./AppChild";
import axios from "axios";

function App() {
  const todosPromise = axios.get("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      <AppChild todosPromise={todosPromise} />
    </>
  );
}

export default App;
