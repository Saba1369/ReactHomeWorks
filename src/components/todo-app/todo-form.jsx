import React, { useState } from "react";
import Button from "../button";

const TodoForm = ({ handleAddItem }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChangeInput = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem(inputValue);
    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit} className="space-x-2.5 px-1">
      <input
        type="text"
        value={inputValue}
        placeholder="Add new todo"
        className="border-[1px] rounded-[6px] p-2"
        onChange={handleChangeInput}
      />
      <Button title="Add" color="bg-emerald-500" disabled={inputValue === ""} />
    </form>
  );
};

export default TodoForm;
