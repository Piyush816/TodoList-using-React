import React, { useState } from "react";


function InputArea(props){

    const [ListItem,setListItem]  = useState("");

    const handleChange=(event)=>{
        const {value} = event.target;
        setListItem(value)
    }

    const Additem = (item)=>{
        props.additem(ListItem)
        setListItem("")
    }

    return (
        <div className="inputdiv">
            <input className="inputarea" onChange={handleChange} type="text" value={ListItem}/>
            <button className="addbtn" onClick={Additem}><i className="fas fa-plus-circle fa-3x"></i></button>
        </div>
    );
}


export default InputArea;