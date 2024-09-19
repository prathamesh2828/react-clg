import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const TodoList = () => {
  let [task, setTask] = useState([
    { task: "Sample Task", isDone: false, id: uuidv4() },
  ]);
  let [text, setText] = useState("");
  let [isUpdate, setIsUpdate] = useState(false);
  let[tbu_id,setTbu_id]= useState(0);


const handleUpdate= ()=>{
  console.log("update called", text);
  const u_list = task.map((item)=>{
    if(item.id===tbu_id){
      item.task = text;
  }
return item;
})
  setTask(u_list);
}

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleAddTask = () => {
    if (text !== "") {
      const existingTask = task.find((task) => task.task === text);
      if (!existingTask) {
        const newTask = { task: text, isDone: false, id: uuidv4() };
        setTask((Task) => [...Task, newTask]);
      } else {
        alert("Task already exists!");
      }
      setText("");
    } else {
      alert("Empty text not allowed");
    }
  };

  const handleComplete = (id) => {
    console.log(id);
    let completedTask = task.map((item) => {
      if (id === item.id) {
        item.isDone = true;
      }
      return item;
    });
    setTask(completedTask);
  };

  const handleEdit = (id) => {
    console.log(id);
    setTbu_id(id);
    setIsUpdate(true);
    task.map((item) => {
      if (id === item.id) setText(item.task);
    });
  };

  const handleDelete = (id) => {
    console.log(id);
    const newTask = (Task) => Task.filter((task) => task.id !== id);
    setTask(newTask);
  };
  
  return (
    <div className="container text-center">
      <h2>welcome To ToDo List </h2>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">
          Enter Your Task
        </span>
        <input
          onChange={handleChange}
          type="text"
          value={text}
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
        {isUpdate ? (
          <button className="mx-3 btn btn-dark" onClick={handleUpdate}>Update</button>
        ) : (
          <button onClick={handleAddTask} className="mx-3 btn btn-primary">
            ADD
          </button>
        )}
      </div>

      <ol>
        {task.map((item) => (
          <li key={item.id}>
            <span
              style={{
                textDecoration: item.isDone ? "line-through" : "normal",
              }}
            >
              {item.task}
            </span>
            <span>
              <button
                className="m-2 btn btn-success"
                onClick={() => {
                  handleComplete(item.id);
                }}
              >
                Complete
              </button>
              <button
                className="m-2 btn btn-warning"
                onClick={() => {
                  handleEdit(item.id);
                }}
              >
                Edit
              </button>
              <button
                className="m-2 btn btn-danger"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
