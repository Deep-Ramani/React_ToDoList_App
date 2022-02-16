import React from "react";
import './DateAndDay.css'
function DateAndDay(){
    return(
        <>
        <div className="row dateday mt-5">
            {/* <div className="col"></div> */}
            <div className="col-1 date">12</div>
            <div className="col-1 monthyear">Jan <br/> 2019</div>
            <div className="col-1 offset-9 day">Tuesday</div>
            <div className="col"></div>
        </div>
        </>
    );
}

export default DateAndDay;