import React from "react";

const ToDoList = ({ toDo, setToDo, setEdit}) => {
  const handleDelete = ({ id }) => {
    setToDo(toDo.filter((todo) => todo.id !== id));
  };
  const handleDone = (todo) => {
    setToDo(
      toDo.map((task) => {
        if (task.id === todo.id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };
  const handleEdit = ({id}) =>{
    const editTask = toDo.find((todo) => todo.id === id);
    setEdit(editTask);
  }
  return (
    <div>
      {toDo.map((todo) => (
        <li className="list" key={todo.id}>
          <span className="listInput">
            <div
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </div>
            <div>
              <button
                className="functionButton"
                onClick={() => handleDone(todo)}
              >
                <img
                  src={require("../assets/DoneTask.png")}
                  className="functionIcon"
                ></img>
              </button>
              <button className="functionButton" onClick={() => handleEdit(todo)}>
                <img
                  src={require("../assets/edit.png")}
                  className="functionIcon"
                ></img>
              </button>
              <button
                className="functionButton"
                onClick={() => handleDelete(todo)}
              >
                <img
                  src={require("../assets/delete.png")}
                  className="functionIcon"
                ></img>
              </button>
            </div>
          </span>
        </li>
      ))}
    </div>
  );
};
export default ToDoList;
