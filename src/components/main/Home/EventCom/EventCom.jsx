import React, { useEffect, useRef } from "react";
import "./EventCom.css";

const EventCom = ({ events }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const scrollAmount = container.scrollHeight - container.clientHeight;
      let scrollPos = 0;

      const scrollInterval = setInterval(() => {
        container.scrollTo({
          top: scrollPos,
          behavior: "smooth",
        });

        scrollPos += 1;
        if (scrollPos >= scrollAmount) {
          scrollPos = 0;
        }
      }, 150);

      return () => clearInterval(scrollInterval);
    }
  }, [events]);

  return (
    <React.Fragment>
      <div className="event-com-scrollable" ref={containerRef}>
        {events.map((event) => (
          <div class="event-com-single">
            <p key={event.id}>{event.event_info}</p>
          </div>
        ))}

        <div class="event-com-single">
          <p>event 2</p>
        </div>
        <div class="event-com-single">
          <p>event 3d</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EventCom;
