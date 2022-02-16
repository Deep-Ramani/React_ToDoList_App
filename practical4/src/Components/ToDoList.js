import React from "react";
import './ToDoList.css'
import DateAndDay from "./Date&Day/DateAndDay";

function ToDoList(){
    return(
        <>
        <div className="container">
          <DateAndDay/>
        </div>
        </>
    );
}

export default ToDoList;