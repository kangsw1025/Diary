import React, { useState } from "react";
import moment from "moment";
import "../css/Calendar.css";
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";

function Calendar() {
  const [calendarYM, setCalendarYM] = useState(moment());
  const [clickDate, setClickDate] = useState(moment());
  const cloneDeep = require("lodash.clonedeep");

  const prevMonth = () => {
    const newYM = cloneDeep(calendarYM);
    setCalendarYM(newYM.add(-1, "M"));
  };

  const nextMonth = () => {
    const newYM = cloneDeep(calendarYM);
    setCalendarYM(newYM.add(1, "M"));
  };

  return (
    <div className="wrap">
      <div className="container">
        <CalendarHeader
          calendarYM={calendarYM.format("YYYY년 MM월")}
          clickDate={clickDate.format("현재 YYYY - MM - DD")}
          prevMonth={prevMonth}
          nextMonth={nextMonth}
        />
        <CalendarBody
          dateForm={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
        />
      </div>
    </div>
  );
}

export default Calendar;
