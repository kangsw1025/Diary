import moment from "moment";
import React from "react";

function CalendarBody({ dateForm }) {
  const mapArrayToDate = form => {
    return form.map((date, idx) => {
      const className = () => {
        let className = "calendar-date-component";
        if (idx === 0) {
          return className + " date-sun";
        } else if (idx == 6) {
          return className + " date-sat";
        } else {
          return className + " date-weekday";
        }
      };

      return (
        <div className={className()} key={date}>
          {date}
        </div>
      );
    });
  };

  const days = firstDayFormat => {
    const _days = [];

    for (let i = 0; i < 7; i++) {
      const day = moment(firstDayFormat).add("d", i);
      _days.push({
        yearMonthDayFormat: day.format("YYYY-MM-DD"),
        getDay: day.format("D"),
        isHolyDay: false,
      });
    }
    return _days;
  };

  return (
    <div className="body-container">
      <div className="calendar-body-header">{mapArrayToDate(dateForm)}</div>
      <div className="calendar-body">날짜</div>
    </div>
  );
}

export default CalendarBody;
