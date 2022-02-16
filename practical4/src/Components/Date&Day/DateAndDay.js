import React from "react";
import './DateAndDay.css'
function DateAndDay(){
    return(
        <>
        <div className="row dateday mt-5">
            {/* <div className="col"></div> */}
            <div className="col">
                <div className="row">
            <div className="col date">12</div>
            <div className="col monthyear">Jan <br/> 2019</div>
            <div className="col"></div>
            <div className="col"></div>
            
            </div>
            </div>
            <div className="col day">Tuesday</div>
            {/* <div className="col"></div> */}
        </div>
        </>
    );
}

export default DateAndDay;