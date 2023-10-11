import "./TodoStyle.css";
import React, { useState } from "react";

/**
 * @function Añadir_Tarea
 * @param { string } nombre
 */
function AddTask(props) {
  const [text, useText] = useState("");

  function AddToState(e) {
    e.preventDefault();
    console.log("Nueva tarea añadida");
    props.changeTask((oldArray) => [
      ...oldArray,
      <Task description={document.getElementById("inputA").value}></Task>,
    ]);
  }
  return (
    <div>
      <form onSubmit={AddToState}>
        <input type="text" id="inputA"></input>
        <button type="submit">Agregar tarea</button>
      </form>
    </div>
  );
}

function ViewTask(props) {
  return (
    <div>
      <h2>Lista de tareas</h2>
      <div className="TaskList">
        {props.taskList.map((Task) => {
          return Task;
        })}
      </div>
    </div>
  );
}

function Task(props) {
  if (props.description == "Correr") {
    return <p>Tienes correr 10km</p>;
  }
  return (
    <div className="Task">
      <input type="checkbox"></input>
      <p>{props.description}</p>
    </div>
  );
}

function ToDo(props) {
  const [taskList, useTask] = useState([]);

  return (
    <div className="ToDo-Main">
      <h1>App To'Do</h1>

      <AddTask changeTask={useTask}></AddTask>
      <ViewTask taskList={taskList}></ViewTask>
    </div>
  );
}

export { ToDo };
