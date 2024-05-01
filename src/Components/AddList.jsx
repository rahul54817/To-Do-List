import React from "react";

import { useState } from "react";

const AddList = () => {
  const [task, setTask] = useState();

  const [list, setList] = useState([]);

  function addTaks(event) {
    event.preventDefault();
    if (task != "") {
      const data = {
        msg: task,
        id : Date.now()
      };

      console.log(data);

      setList((prevList) => [...prevList, data]);
      setTask("");
    }
  }

  const deletTask = (id) => {
    setList((prevList) => prevList.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="container">
        <h1>To-Do List</h1>

        <div className="add-todo-form">
          <input
            id="new-task"
            type="text"
            placeholder="Add new todo"
            onChange={(e) => setTask({ task: e.target.value })}
          />
          <button onClick={(event) => addTaks(event)}>Add</button>
        </div>
      </div>
      <div>
        {list.map((item) => (
          <div className="todo-item container">
            <input
              type="checkbox"
            />
            <span>{item.msg.task}</span>
            <button onClick={() => deletTask(item.id)} >Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default AddList;
