import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import "./todo.css";

function AllTodos() {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="task-list">
      <div className="task-list-header">
        <h3>TASK</h3>
        <h3>DUE DATE</h3>
        <h3>STATUS</h3>
        <h3>ACTIONS</h3>
      </div>
      <div className="task-list-body">
        {todos.length === 0 ? (
          <h2 className="no-task">No Task Found!.</h2>
        ) : (
          todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        )}
      </div>
    </div>
  );
}

export default AllTodos;
