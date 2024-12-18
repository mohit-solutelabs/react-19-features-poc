import { use, useOptimistic, useState, useTransition } from "react";
import classNames from "classnames";
import axios from "axios";

function Todos({ todosPromise }) {
  const todos = use(todosPromise);

  const [todosState, setTodosState] = useState(todos.data.slice(0, 10));

  const [optimisticTodos, setOptimisticTodos] = useOptimistic(
    todosState,
    (state, newTodo) => {
      return state.map((todo) => (todo.id === newTodo.id ? newTodo : todo));
    }
  );

  const [isPending, startTransition] = useTransition();

  return optimisticTodos.map((todo) => (
    <div className="flex items-center gap-2" key={todo.id}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={async () => {
          startTransition(async () => {
            setOptimisticTodos({ ...todo, completed: !todo.completed });
            // do an async API call to update the todo
            await axios.patch(
              `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
              {
                completed: !todo.completed,
              }
            );
            setTodosState((prev) =>
              prev.map((prevTodo) =>
                prevTodo.id === todo.id
                  ? { ...prevTodo, completed: !prevTodo.completed }
                  : prevTodo
              )
            );
          });
        }}
      />
      <p
        className={classNames("cursor-pointer", {
          "line-through": todo.completed,
        })}
      >
        {todo.title}
      </p>
    </div>
  ));
}

export default Todos;
