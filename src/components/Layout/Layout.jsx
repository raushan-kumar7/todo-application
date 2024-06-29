import "./layout.css";
import { ThemeBtn, TodoInput, AllTodos } from "../index";

function Layout() {
  return (
    <>
      <div className="main-container">
        <h1>Simple React To-Do Application</h1>

        <div className="theme-switcher">
          <ThemeBtn />
        </div>

        <div className="todo-container">
          <div className="inputBox common-container">
            <TodoInput />
          </div>
          <div className="taskBox common-container">
            <AllTodos />
          </div>
        </div>

        <footer><p>Developed by <strong>Raushan Kumar</strong> | <a href="https://www.linkedin.com/in/thisraushankumar/">LinkedIn</a></p></footer>
      </div>
      
    </>
  );
}

export default Layout;
