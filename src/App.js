import Header from "./components/Header";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import React, { useState } from "react";
import "./index.css";

function App() {
  const [input, setInput] = useState("");
  const [toDo, setToDo] = useState([]);
  const [edit, setEdit] = useState(0);
  return (
    <div className="ToDoPage">
      <div className="ToDoList">
        <Header />
        <ToDoInput
          input={input}
          setInput={setInput}
          toDo={toDo}
          setToDo={setToDo}
          edit={edit}
          setEdit={setEdit}
        />
        <ToDoList toDo={toDo} setToDo={setToDo} input={input} setEdit={setEdit}/>
      </div>
    </div>
  );
}

export default App;
