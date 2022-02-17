import { BsFillCheckCircleFill } from 'react-icons/bs';
import React from 'react';
import ListItem from './ListItem/ListItem';


function List(props){
    const listItem =[
        {
          listdetail : 'Buy New SweatShirts',
          icon : <BsFillCheckCircleFill/>
        },
        {
            listdetail : 'Begin Promotional Phase',
        },
        {
            listdetail : 'Read an article',
        },
        {
            listdetail : 'Try not to fall asleep',
        },
        {
            listdetail : 'Watch \'Sherlock\'',
        },
        {
            listdetail : 'Begin QA for the product',
        },
        {
            listdetail : 'Go for the Walk',
        },
      ]

    return(
    <>
        <ListItem completed={true} listdetail={listItem[0].listdetail} icon={listItem[0].icon}/>
        <ListItem completed={true} listdetail={listItem[1].listdetail} icon={listItem[0].icon}/>
        <ListItem listdetail={listItem[2].listdetail}/>
        <ListItem listdetail={listItem[3].listdetail}/>
        <ListItem listdetail={listItem[4].listdetail}/>
        <ListItem listdetail={listItem[5].listdetail}/>
        <ListItem listdetail={listItem[6].listdetail}/>
    </>
    );
}

export default List;