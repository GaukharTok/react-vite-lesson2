import React, { useState } from "react";
import "./Todoapp.css";

export function Todoapp() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editInput, setEditInput] = useState("");

  const handleAddTask = () => {
    if (taskInput.trim() === "") return;

    setTasks([...tasks, taskInput]);
    setTaskInput("");
  };

  const handleRemoveTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleEditStart = (index) => {
    setEditIndex(index);
    setEditInput(tasks[index]);
  };

  const handleEditSave = () => {
    if (editInput.trim() === "") return;

    const newTasks = [...tasks];
    newTasks[editIndex] = editInput;
    setTasks(newTasks);
    setEditIndex(null);
    setEditInput("");
  };

  const handleEditCancel = () => {
    setEditIndex(null);
    setEditInput("");
  };
  return (
    <>
      <div className="main">
        <h1>To-Do App!</h1>
        <p>Add new todo</p>
        <div className="input-group">
          <input
            className="input"
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button className="addBtn" onClick={handleAddTask}>
            Add
          </button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editInput}
                    onChange={(e) => setEditInput(e.target.value)}
                  />
                  <button className="saveBtn" onClick={handleEditSave}>
                    Save
                  </button>
                  <button className="cancelBtn" onClick={handleEditCancel}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  {task}
                  <button
                    className="editBtn"
                    onClick={() => handleEditStart(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="removeBtn"
                    onClick={() => handleRemoveTask(index)}
                  >
                    Remove
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
