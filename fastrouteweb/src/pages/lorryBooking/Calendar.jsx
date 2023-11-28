import React, { useState } from "react";
import Calendar from "react-calendar";
import '../../styles/Calendar1.css';

function Calendar1() {
   const [date, changeDate] = useState(new Date());

   function changeValue(val) {
      changeDate(val);
   }

   return (
      <div>
         <Calendar onChange = {changeValue} value = {date} />
      </div>
   );
}
export default Calendar1;