// import { BsFillCheckCircleFill } from 'react-icons/bs';
import './ListItem.css'

function ListItem(props){
  
    return(
        <>  
        <div className="row ListItem">
                <div className={`col-10 list ${props.completed?'text-muted':''}`}>{props.listdetail}</div>
                <div className='col-2 btncheck'>
                    <button className='btncheck '>{props.icon}
                    </button>
                </div>
        </div>
       
        </>
    );
}

export default ListItem;