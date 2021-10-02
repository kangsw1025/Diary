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
      {calendarYM && (
        <h2 className="header-calendarYM header-middle">{calendarYM}</h2>
      )}
      {clickDate && <h3 classNAme="header-today header-middle">{clickDate}</h3>}
      <ul className="header-buttons header-middle">
        <li>
          <i className="move-button left-img icon" onClick={prevMonth}>
            <FontAwesomeIcon icon={faArrowCircleLeft} />
          </i>
        </li>
        <li>이동</li>
        <li>
          <i className="move-button right-img icon" onClick={nextMonth}>
            <FontAwesomeIcon icon={faArrowCircleRight} />
          </i>
        </li>
      </ul>
    </div>
  );
}

export default CalndarHeader;
