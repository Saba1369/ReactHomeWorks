import React, { useState } from "react";
import TodoForm from "./todo-form";
import TodoList from "./todo-list";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const addToList = (newItem) => {
    setTodoList([newItem,...todoList]);
  };
  return (
    <div className="flex flex-col gap-2 max-w-[400px]">
      <h2 className="text-white font-semibold text-lg">Todo List</h2>
      <TodoForm handleAddItem={addToList} />
      <TodoList list={todoList} />
    </div>
  );
};

export default TodoApp;
