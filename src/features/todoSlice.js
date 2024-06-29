import { createSlice } from "@reduxjs/toolkit";

const loadTodosFromLocalStorage = () => {
  try {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  } catch (error) {
    console.error("Failed to load todos from localStorage:", error);
    return [];
  }
};

const initialState = loadTodosFromLocalStorage();

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        task: action.payload.task,
        dueDate: action.payload.dueDate,
        completed: false,
      };
      state.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    updateTodo: (state, action) => {
      const { id, task, dueDate } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.task = task;
        todo.dueDate = dueDate;
        localStorage.setItem("todos", JSON.stringify(state));
      }
    },
    deleteTodo: (state, action) => {
      const updatedState = state.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(updatedState));
      return updatedState;
    },
    toggleTodoStatus: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem("todos", JSON.stringify(state));
      }
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, toggleTodoStatus } =
  todoSlice.actions;

export default todoSlice.reducer;
