import React from "react";

function ListItem(props) {
  const DeleteItem = () => {
    props.Delete(props.id);
  };
  return (
    <div className="box">
      <p>{props.text}</p>
      <button onClick={DeleteItem}>
        <i className="fas fa-times-circle fa-2x"></i>
      </button>
    </div>
  );
}

export default ListItem;
