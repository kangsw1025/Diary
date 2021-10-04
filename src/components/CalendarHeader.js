import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

function CalndarHeader({ calendarYM, clickDate, moveMonth }) {
  const prevMonth = () => {
    moveMonth(-1);
  };

  const nextMonth = () => {
    moveMonth(1);
  };

  return (
    <div className="header-container">
      <span className="move-button left-img icon" onClick={prevMonth}>
        <FontAwesomeIcon icon={faArrowCircleLeft} />
      </span>
      <h2 className="header-calendarYM header-middle">{calendarYM}</h2>
      <span className="move-button right-img icon" onClick={nextMonth}>
        <FontAwesomeIcon icon={faArrowCircleRight} />
      </span>
    </div>
  );
}

export default CalndarHeader;
