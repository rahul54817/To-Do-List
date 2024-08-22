import React from "react";

import { useState } from "react";

const AddList = () => {
  let [task, setTask] = useState("");

  const [list, setList] = useState([]);

  function addTaks(event) {
    event.preventDefault();
    console.log("Task : " + task);

    if (task != "") {
      const data = {
        msg: task,
        id: Date.now(),
      };

      console.log("Data  : " + data.msg);

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

        <div className="">
          <form onSubmit={addTaks} className=" add-todo-form">
            <input
              id="new-task"
              type="text"
              placeholder="Add new todo"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit"
          
            >
            Add</button>
          </form>
        </div>
      </div>
      s
      <div>
        {list.reverse().map((item, index) => (
          <div className="todo-item container" style={{padding : "15px"}}>
            <p>{index +  1 + " ."}</p>
            <span style= {{marginLeft : "10px"}}>{item.msg}</span>
            <button onClick={() => deletTask(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default AddList;
