import React, { useState } from "react";
import TodoItem from "./TodoItem";

function Todo() {
  const [todos, setTodos] = useState([], true);
  const [newTodo, setNewTodo] = useState("", true);

  const storedValue = JSON.parse(localStorage.getItem("todos")) || [];

  function addTodo() {
    const storing = [...todos, newTodo];
    if (newTodo !== "") {
      setTodos(storing);
      localStorage.setItem("todos", JSON.stringify(storing));
      setNewTodo("");
    }
  }
  const updateList = [...todos];
  function removeItem(index) {
    updateList.splice(index, 1);
    setTodos(updateList);
    localStorage.setItem("todos", JSON.stringify(updateList));
  }

  function handleChange(data) {
    if (data == "frist") {
    }
    if (todos == true) {
      console.log(data, "Hii");
    }
    // setTodos(!todos)
    if (data == "second") {
    }
    if (newTodo == true) {
      console.log(data, "Hello");
    }
    // setNewTodo(!todos)
  }
  return (
    <div>
      <center>
        <h1>My Todolist</h1>
      </center>
      <center>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>add it</button>
      </center>
      <center>
        <TodoItem data={todos} removeItem={removeItem} />
      </center>
      <center>
        <input
          type="checkbox"
          value={todos}
          onChange={() => handleChange("frist")}
        />
        frist
        <input
          type="checkbox"
          value={newTodo}
          onChange={() => handleChange("second")}
        />
        Second
      </center>
    </div>
  );
}

export default Todo;
