import React, { useEffect, useRef } from "react";
import "./EventCom.css";

const EventCom = () => {
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
  }, []);

  return (
    <React.Fragment>
      <div className="event-com-scrollable" ref={containerRef}>
        <div class="event-com-single">
          <p>event 1</p>
        </div>
        <div class="event-com-single">
          <p>event 2</p>
        </div>
        <div class="event-com-single">
          <p>event 3</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EventCom;
