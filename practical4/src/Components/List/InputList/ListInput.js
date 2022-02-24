import React, { useEffect, useState } from "react";


function ListInput(props){

    const[ListData, setListData]= useState('');
    useEffect(()=>{
        if(props.hideButton){
            document.querySelector('input').focus();
        }
    },[props.hideButton])

     const pressEnter = (event) => {
        if (event.key === 'Enter') {
            if (ListData === '') {
                alert('Please enter some value')
            }
            else{
                props.addTodo(ListData);
                props.toggleHideButton();
                setListData('');
            }
        } else if (event.key === 'Escape') {
            props.toggleHideButton();
            setListData('');
        }
    }
    return(
        <div className={` ${props.hideButton ? 'd-block' : 'd-none'}`}>
            <input
            
            type="text"
            placeholder="Enter your Activity"
            value={ListData}
            className="form-control"
            onChange={(event)=>setListData(event.target.value)}
            onKeyUp={(event)=>pressEnter(event)}

            />
        </div>
    )

}
export default ListInput