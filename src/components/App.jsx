import React, { useState } from "react";
import InputArea from "./InputArea";
import ListItem from "./ListItems";
function App() {
  const [TodoList, setTodoList] = useState([]);

  const AddItem = (Item) => {
    setTodoList((prev) => {
      return [Item, ...prev];
    });
  };

  const DeleteItem = (id)=>{
    setTodoList((prev)=>{
        return prev.filter((value,index)=>{
            return index!==id
        })
    })
  }


  return (
    <div className="container">
      <h1 className="heading">
        <i className="fas fa-tasks"></i> ToDo List
      </h1>
      <InputArea additem={AddItem} />
      <div className="itemscontainer">
        {TodoList.map((text, index) => {
          return <ListItem key={index} id={index} text={text} Delete={DeleteItem}/>;
        })}
      </div>
    </div>
  );
}

export default App;
