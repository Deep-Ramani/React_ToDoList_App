import React from "react";
import './DateAndDay.css'

class DateAndDay extends React.Component{
    render() {
        const dateToday = new Date();
        const dateMonth = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        const dateDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        return( 
        
        <div className="row dateday mt-5">
            <div className="col">
                <div className="row">
                    <div className="col date">{dateToday.getDate()}</div>
                    <div className="col monthyear">{dateMonth[dateToday.getMonth()]} <br/> {dateToday.getFullYear()}</div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
            </div>
                 <div className="col day">{dateDays[dateToday.getDay()].toUpperCase()}</div>
        </div>
       ); 
    }
}

export default DateAndDay;