import React from "react";
import './ToDoList.css'
import DateAndDay from "./Date&Day/DateAndDay";
import List from "./List/List";
import Button from "./Button/Button";
function ToDoList(){
 
  return(
        <>
        <div className="container">
          <DateAndDay/>
          <List/>
          <Button/>
        </div>
        </>
    );
}

export default ToDoList;