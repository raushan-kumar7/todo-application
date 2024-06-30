import { useDispatch } from "react-redux";
import {
  deleteTodo,
  toggleTodoStatus,
  updateTodo,
} from "../../features/todoSlice";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";
import "./todo.css";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(todo.task);

  const handleUpdateTodo = () => {
    if (isEditing) {
      dispatch(
        updateTodo({
          id: todo.id,
          task: updatedTask,
          dueDate: todo.dueDate,
        })
      );
    }
    setIsEditing(!isEditing);
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleToggleTodoStatus = () => {
    dispatch(toggleTodoStatus(todo.id));
  };

  return (
    <div className="task-list-item">
      <div>{isEditing ? (
        <input
          type="text"
          value={updatedTask}
          onChange={(e) => setUpdatedTask(e.target.value)}
        />
      ) : (
        <h3>{todo.task}</h3>
      )}</div>
      <h3>{todo.dueDate}</h3>
      <h3>{todo.completed ? "Completed" : "Pending"}</h3>
      <div className="todo-action">
        <IconButton onClick={handleUpdateTodo} className="edit-btn">
          {isEditing ? <SaveIcon /> : <EditIcon />}
        </IconButton>
        <IconButton onClick={handleToggleTodoStatus} className="complete-btn">
          <CheckIcon />
        </IconButton>
        <IconButton onClick={handleDeleteTodo} className="delete-btn">
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default TodoItem;
