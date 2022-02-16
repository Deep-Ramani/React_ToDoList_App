import React from "react";
import './ToDoList.css'
import DateAndDay from "./Date&Day/DateAndDay";
import List from "./List/List";
function ToDoList(){
 
  return(
        <>
        <div className="container">
          <DateAndDay/>
          <List/>
        </div>
        </>
    );
}

export default ToDoList;