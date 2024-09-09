import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const TodoList = () => {
  let [task,setTask]=useState
  ([
    {task:'Sample Task',
    isDone:false,
    id:uuidv4()
    },
  ])
  return (
    <div className="container text-center">
      <h2>welcome To ToDo List </h2>
      <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Enter Your Task</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
  <button className="mx-3 btn btn-primary">ADD</button>
</div>

    <ol>
      {
        task.map(item=>(
          <li>{item.task}</li>
        ))
      }
    </ol>



    </div>
  )
}

export default TodoList