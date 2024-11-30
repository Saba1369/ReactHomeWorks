import React, { useState, useRef } from "react";
import Button from "../button";

const TodoList = ({ list , handleUpdateList }) => {
  const [showSaveButton, setShowSaveButton] = useState(false);
  const handleButtons = () => {
    setShowSaveButton((showSaveButton) => !showSaveButton);
  };
 
  const deleteFromList = (index) => {
    const updatedList = [...list]
    updatedList.splice(index, 1);
    handleUpdateList(updatedList) 
   }

  const pRef = useRef(null);
  return (
    <ul className="mt-4 font-light max-h-[300px] overflow-y-auto px-1">
      {list.map((item, index) => (
        <li key={index} className="flex justify-between items-center pb-2 gap-2">
          <p
            ref={pRef}
            contentEditable={showSaveButton}
            className={`${showSaveButton ? "border border-gray-300 rounded p-2 overflow-y-auto w-[200px] max-h-[100px]" : ""}`}
          >
            {item}
          </p>
          <div className="space-x-2">
            <Button
            type="button"
              color={`${showSaveButton ? "bg-green-500" : "bg-yellow-500"}`}
              title={`${showSaveButton ? "Save" : "Edit"}`}
              onClick={handleButtons}
            />
            <Button type="button" color="bg-red-700" title="Remove" hidden={showSaveButton} onClick={deleteFromList}/>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
