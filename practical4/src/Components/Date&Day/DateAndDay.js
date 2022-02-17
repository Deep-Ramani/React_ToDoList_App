import React from "react";
import './DateAndDay.css'

class DateAndDay extends React.Component{
    render() {
        return( 
        
        <div className="row dateday mt-5">
            <div className="col">
                <div className="row">
                    <div className="col date">12</div>
                    <div className="col monthyear"><b>JAN</b> <br/> 2016</div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
            </div>
                 <div className="col day">TUESDAY</div>
        </div>
       ); 
    }
}

export default DateAndDay;