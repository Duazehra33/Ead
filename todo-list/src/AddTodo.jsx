import { useState } from "react";

function AddTodo({onNewItem}){
  const [todoName, settodoName] = useState("");
  const [dueDate, setdueDate] =useState("");
  const handleNameChange = (event)=>{
    settodoName(event.target.value);
  }
  const handleDateChange = (event)=>{
    setdueDate(event.target.value);
  }

  const handleAddbuttonClicked = ()=>{
    onNewItem(todoName,dueDate);
    setdueDate("");
    settodoName("");
  }

 
    return<div className="container text-center">
    <div className="row kg-row">
      <div className="col-6">
        <input type="text" 
        placeholder="Enter todo here" 
        value={todoName}
        onChange={handleNameChange}
          className="form-control" 
        />
      </div>
      <div className="col-4">
        <input type="date" 
        value={dueDate} onChange={handleDateChange}
        className="form-control" />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success" 
        onClick={handleAddbuttonClicked}>Add</button>
      </div>
    </div>
    </div>
}
export default AddTodo;