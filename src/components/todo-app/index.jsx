import React, { useContext, useState } from "react";
import TodoForm from "./todo-form";
import TodoList from "./todo-list";
import { ThemeContext } from "../../context/theme-provider";



const TodoApp = () => {
  const {isDark} = useContext(ThemeContext)
  const [todoList, setTodoList] = useState([]);
  const addToList = (newItem) => {
    setTodoList([newItem,...todoList]);
  };
  return (
    <div className={`flex flex-col gap-2 max-w-[400px] ${isDark ? "text-white" : "text-black"}`}>
      <h2 className=" font-semibold text-lg">Todo List</h2>
      <TodoForm handleAddItem={addToList} />
      <TodoList list={todoList} />
    </div>
  );
};

export default TodoApp;
