import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import CalendarCom from "./CalendarCom/CalendarCom";
import EventCom from "./EventCom/EventCom";

const Home = () => {
  const [events, setEvents] = useState("");

  return (
    <React.Fragment>
      <div className="main-container">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <div class="row">
            <div class="leftcolumn">
              <div class="card">
                <h2>Slidshow</h2>
                <h5>Title description, Dec 7, 2017</h5>
                <div class="fakeimg">Image</div>
                <p>Some text..</p>
                <p>
                  Sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>
              <div class="card">
                <h2>Hot deals</h2>
                <h5>Title description, Sep 2, 2017</h5>
                <div class="fakeimg">Image</div>
                <p>Some text..</p>
                <p>
                  Sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
            <div class="rightcolumn">
              <div class="card">
                <span className="home-heading ">Calendar</span>
                <div class="calendar-component">
                  <CalendarCom events={events} />
                </div>
              </div>
              <div class="card">
                <span className="home-heading ">Upcoming events</span>
                <EventCom />
              </div>
              <div class="card">
                <h3>optional</h3>
                <p>Some text..</p>
              </div>
            </div>
          </div>

          <div class="footer">
            <h2>Footer</h2>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Home;
