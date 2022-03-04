
import React, {useState, useEffect} from 'react';
import ListInput from './InputList/ListInput';
import ListItem from './ListItem/ListItem';
import './List.css'



const LocalItems = () => {
    let list = localStorage.getItem('ListData');

    return list ? JSON.parse(list) : [] ;
}



const dateCreated = () => {

    let expDate = localStorage.getItem('expires');
    if (expDate) {
        return expDate;
    } else {
        return '';
    }
}



function List(props){

    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate());
    const expiry = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate());
    const expires = dateCreated();
    const[ListData, setListData] =useState(LocalItems);
    
    useEffect(() => {
        if (date > expires) {
            console.log("List removed");
            setListData([]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(() => {
        if (ListData.length === 0) {
            console.log("setted expDate");
            localStorage.setItem('expires', expiry);
        } else if (!expires){
            console.log("setted expDate");
            localStorage.setItem('expires', expiry);
        }
        localStorage.setItem('ListData', JSON.stringify(ListData));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ListData,expiry]);

    const toggleCheck = (index) => {
        let newTodos = [...ListData];
        if (newTodos[index].checked) {
            newTodos[index].checked = false;
        }else{
            newTodos[index].checked = true;
        }
        setListData(newTodos);
    }


    const addTodo = (listdetail) => {
        setListData([...ListData,{listdetail,checked: false}]);
    }
    
    return(
        <>
    <div className='List'>
     {ListData.map((todo,index) => {
       return <ListItem key={index} index={index} todo={todo} toggleCheck={toggleCheck}   />
     })}
   </div>
   <ListInput hideButton={props.hideButton} toggleHideButton={props.toggleHideButton} addTodo={addTodo}/>
   

        {/* <ListItem completed={true} listdetail={listItem[0].listdetail} icon={listItem[0].icon}/>
        <ListItem completed={true} listdetail={listItem[1].listdetail} icon={listItem[0].icon}/>
        <ListItem listdetail={listItem[2].listdetail}/>
        <ListItem listdetail={listItem[3].listdetail}/>
        <ListItem listdetail={listItem[4].listdetail}/>
        <ListItem listdetail={listItem[5].listdetail}/>
        <ListItem listdetail={listItem[6].listdetail}/> */}
       
      
       </> 
    );}

export default List;