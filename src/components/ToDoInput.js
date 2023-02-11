import React, {useEffect} from "react";
import { v4 as uuidv4 } from "uuid";

const ToDoInput = ({ input, setInput, toDo, setToDo, edit, setEdit }) => {
  useEffect(()=>{
    if(editToDO){
      setInput(edit.title)
    }
    else {
      setInput("")
    }
  },[setInput,edit])

  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const editToDO = (title, id, completed) =>{
    const newToDo = toDo.map((todo)=>
      todo.id === id ? {title , id , completed} : todo
    );
    setToDo(newToDo);
    setEdit("");
    setInput("");
  }
  const onFormSubmit = (event) => {
    event.preventDefault();
    if(!edit){
    setToDo([...toDo, { id: uuidv4(), title: input, completed: false }]);
    setInput("");
    }
    else{
      editToDO(input, edit.id, edit.completed)
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Create new task..."
        className="toDoInput"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="addButton" type="submit">
        {edit ? 'Edit' : 'Add'}
      </button>
    </form>
  );
};
export default ToDoInput;
