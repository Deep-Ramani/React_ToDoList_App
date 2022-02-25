import { BsFillCheckCircleFill } from 'react-icons/bs';
import './ListItem.css'
import React, {useState} from 'react';

function ListItem(props){
  
    const [buttonDisplay, setbuttonDisplay] = useState(props.todo.checked);
  
  const showCheckbtn = () => {
    if (props.todo.checked) {
      setbuttonDisplay(true);
    }else{
      if (buttonDisplay) {
        setbuttonDisplay(false);
      }else{
        setbuttonDisplay(true);
      }
    }
  }
    return(
        <>  
 <div className="row ListItem" onMouseEnter={showCheckbtn} onMouseLeave={showCheckbtn}>
    <div className={`col-10 list ${props.todo.checked ? 'text-muted' : ''}`}>{props.todo.listdetail}</div>
    <div className={`col-2 btncheck ${buttonDisplay ? 'd-inline': 'd-none'} icon`} onClick={() => props.toggleCheck(props.index)}>
                    <button className='btncheck '>
                      <BsFillCheckCircleFill/>
                    </button>
                </div>
        </div>
       
        </>
    );
}

export default ListItem;