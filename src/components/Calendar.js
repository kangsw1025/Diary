import React, { useEffect, useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";
import "../css/Calendar.css";
import moment from "moment";

function Calendar({ clickDate, setClickDate }) {
  const [calendarYM, setCalendarYM] = useState(clickDate);
  const cloneDeep = require("lodash.clonedeep");

  const moveMonth = val => {
    const newYM = cloneDeep(calendarYM);
    setCalendarYM(newYM.add(val, "M"));
  };

  const changeDate = clickedDate => {
    if (moment(clickedDate).isSame(clickDate, "day")) {
      return;
    }

    setClickDate(moment(clickedDate));

    if (moment(clickedDate).isBefore(calendarYM, "Month")) {
      moveMonth(-1);
    } else if (moment(clickedDate).isAfter(calendarYM, "month")) {
      moveMonth(1);
    }
  };

  return (
    <div className="calendar-wrap">
      <div className="calendar-container">
        <CalendarHeader
          calendarYM={calendarYM.format("YYYY년 MM월")}
          clickDate={
            typeof clickDate === "string"
              ? `현재 ${clickDate}`
              : clickDate.format("현재 YYYY-MM-DD")
          }
          moveMonth={moveMonth}
        />
        <CalendarBody
          dateForm={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
          YM={calendarYM.format("YYYY-MM-DD")}
          clickDate={clickDate}
          changeDate={changeDate}
        />
      </div>
    </div>
  );
}

export default Calendar;
