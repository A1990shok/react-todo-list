import React from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

// showing vs-code github setup

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
