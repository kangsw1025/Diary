import moment from "moment";
import React from "react";

function Week({
  firstDayOfThisWeekFormat,
  ymOfThisCalendar,
  clickDate,
  changeDate,
}) {
  const days = (firstDayFormat, weekIndex) => {
    const _days = [];

    for (let i = 0; i < 7; i++) {
      const day = moment(firstDayFormat).add("d", i);
      _days.push({
        yearMonthDayFormat: day.format("YYYY-MM-DD"),
        getDay: day.format("D"),
        isHolyDay: false,
        weekIndex,
      });
    }
    return _days;
  };

  const mapDaysToComponents = (
    Days,
    calendarMonthYear,
    clickedDayFormat,
    changeDate
  ) => {
    const thisMonth = moment(calendarMonthYear);
    return Days.map((dayInfo, i) => {
      let className = "date-weekday-label";

      if (!thisMonth.isSame(dayInfo.yearMonthDayFormat, "month")) {
        className = "date-notThisMonth";
      } else if (i === 0) {
        className = "date-sun";
      } else if (i === 6) {
        className = "date-sat";
      }

      if (moment(dayInfo.yearMonthDayFormat).isSame(clickedDayFormat, "day")) {
        className = "clicked";
      }

      return (
        <div
          className={"calendar-day " + className}
          onClick={() => {
            changeDate(dayInfo.yearMonthDayFormat);
          }}
        >
          <label className="calendar-day-label">{dayInfo.getDay}</label>
        </div>
      );
    });
  };

  return (
    <div className="calendar-week">
      {mapDaysToComponents(
        days(firstDayOfThisWeekFormat),
        ymOfThisCalendar,
        clickDate,
        changeDate
      )}
    </div>
  );
}

function CalendarBody({ dateForm, YM, clickDate, changeDate }) {
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

  const Weeks = (monthYear, clickDate, changeDate) => {
    const firstDayOfMonth = moment(monthYear).startOf("month");
    const firstDateOfMonth = firstDayOfMonth.get("d");

    const firstDayOfWeek = firstDayOfMonth.clone().add("d", -firstDateOfMonth);

    const _Weeks = [];

    for (let i = 0; i < 6; i++) {
      _Weeks.push(
        <Week
          key={`calendar-week=${i}`}
          weekIndex={i}
          ymOfThisCalendar={firstDayOfMonth.format("YYYY-MM")}
          firstDayOfThisWeekFormat={firstDayOfWeek
            .clone()
            .add("d", i * 7)
            .format("YYYY-MM-DD")}
          clickDate={clickDate}
          changeDate={changeDate}
        />
      );
    }
    return _Weeks;
  };

  return (
    <div className="body-container">
      <div className="calendar-body-header">{mapArrayToDate(dateForm)}</div>
      <div className="calendar-body">{Weeks(YM, clickDate, changeDate)}</div>
    </div>
  );
}

export default CalendarBody;
