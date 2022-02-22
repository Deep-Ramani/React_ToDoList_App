import React, { useState } from "react";
import './ToDoList.css'
import DateAndDay from "./Date&Day/DateAndDay";
import List from "./List/List";
import Button from "./Button/Button";


function ToDoList(){

  const [hideButton, setHideButton] = useState(false);
  const toggleHideButton = () => {
    if(hideButton){
      setHideButton(false);
    } else {
      setHideButton(true);
    }
  }

  return(
        <>
        <div className="container">
          <DateAndDay/>
          <List/>
          <Button hideButton={hideButton} toggleHideButton={toggleHideButton}/>
        </div>
        </>
    );
}

export default ToDoList;