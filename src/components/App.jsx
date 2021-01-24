import React, { useState, useEffect } from "react";
import InputArea from "./InputArea";
import ListItem from "./ListItems";
function App() {
  const [TodoList, setTodoList] = useState([]);

  const AddItem = (Item) => {
    setTodoList((prev) => {
      return [Item, ...prev];
    });
  };

  const DeleteItem = (id) => {
    setTodoList((prev) => {
      return prev.filter((value, index) => {
        return index !== id;
      });
    });
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    setLocalStorage();
  });

  function setLocalStorage() {
    localStorage.setItem("Todolist", JSON.stringify(TodoList));
  }

  function getLocalStorage() {
    if (localStorage.getItem("Todolist") === null) {
      localStorage.setItem("Todolist", JSON.stringify([]));
    }
    const Itemarray = JSON.parse(localStorage.getItem("Todolist"));
    setTodoList(Itemarray);
  }

  return (
    <div className="container">
      <h1 className="heading">
        <i className="fas fa-tasks"></i> ToDo List
      </h1>
      <InputArea additem={AddItem} />
      <div className="itemscontainer">
        {TodoList.map((text, index) => {
          return (
            <ListItem key={index} id={index} text={text} Delete={DeleteItem} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
