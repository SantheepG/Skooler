import { useState, useEffect, useRef } from "react";
import Calendar from "react-calendar";
import "./CalendarCom.css";
import "react-calendar/dist/Calendar.css";

const CalendarCom = ({ events }) => {
  const [date, setDate] = useState(new Date());
  const [mindate, setminDate] = useState(new Date());
  const [isShowing, setIsShowing] = useState(false);
  const [showSlider, setShowSlider] = useState(true);

  //const sliderRef = useRef(null);

  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formattedDate = `${daysOfWeek[date.getDay()]}, ${
    months[date.getMonth()]
  } ${date.getDate()}${getOrdinalSuffix(
    date.getDate()
  )}, ${date.getFullYear()}`;

  const toggleSlider = (value) => {
    if (value === date) {
      setShowSlider(false);
    } else {
      setDate(value);
      setShowSlider(!showSlider);
    }
  };

  const isCurrentDate = (calendarDate) => {
    const currentDate = new Date();
    return (
      currentDate.getDate() === calendarDate.getDate() &&
      currentDate.getMonth() === calendarDate.getMonth() &&
      currentDate.getFullYear() === calendarDate.getFullYear()
    );
  };

  const customTileContent = ({ date }) => {
    const isCurrent = isCurrentDate(date);

    if (isCurrent) {
      return (
        <div className="custom-tile-content">
          <div className="red-bar"></div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="calendar">
      <div className="slider-container">
        <div className={`slider ${showSlider ? "active" : ""}`}>
          <div>
            <div>
              <span>
                {date.getDate()}
                {getOrdinalSuffix(date.getDate())} {months[date.getMonth()]},
              </span>
              <span> {date.getFullYear()}</span>
            </div>
            <div>{daysOfWeek[date.getDay()]}</div>
          </div>
          <div className="event-com-scrollable">
            <div class="event-com-single">
              <p>event 1</p>
            </div>
            <div class="event-com-single">
              <p>event 2</p>
            </div>
            <div class="event-com-single">
              <p>event 3</p>
            </div>
            <div class="event-com-single">
              <p>event 4</p>
            </div>
            <div class="event-com-single">
              <p>event 5</p>
            </div>
          </div>
        </div>
      </div>
      <div className="calendar-container">
        <Calendar
          onChange={toggleSlider}
          value={date}
          minDate={mindate}
          tileContent={({ date }) => customTileContent({ date })}
        />
      </div>
    </div>
  );
};

export default CalendarCom;
