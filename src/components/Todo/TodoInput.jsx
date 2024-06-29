import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todoSlice";
import IconButton from "@mui/material/IconButton";
import AddTaskIcon from "@mui/icons-material/AddTask";
import "./todo.css";

function TodoInput() {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (task) {
      dispatch(addTodo({ task, dueDate }));
      setTask("");
      setDueDate("");
    }
  };

  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="Add a todo . . ."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <IconButton onClick={handleAddTodo} aria-label="Add Todo">
        <AddTaskIcon />
      </IconButton>
    </div>
  );
}

export default TodoInput;
