import React from "react";
import "./User.css";
import Sidebar from "./Sidebar/Sidebar";
import { useSelector } from "react-redux";
import Profile from "./Profile/Profile";
import Orders from "./Orders/Orders";
import PaymentSettings from "./PaymentSettings/PaymentSettings";
import Complaints from "./Complaints/Complaints";
import Reviews from "./Reviews/Reviews";
import Notification from "./Notification/Notification";
import Vouchers from "./Vouchers/Vouchers";

const User = () => {
  const sideBarstate = useSelector((state) => state.sidebar);
  let componentToView;

  if (sideBarstate.profileClicked) {
    componentToView = <Profile />;
  } else if (sideBarstate.ordersClicked) {
    componentToView = <Orders />;
  } else if (sideBarstate.paymentsClicked) {
    componentToView = <PaymentSettings />;
  } else if (sideBarstate.complaintsClicked) {
    componentToView = <Complaints />;
  } else if (sideBarstate.reviewsClicked) {
    componentToView = <Reviews />;
  } else if (sideBarstate.vouchersClicked) {
    componentToView = <Vouchers />;
  } else if (sideBarstate.notificationsClicked) {
    componentToView = <Notification />;
  }

  return (
    <React.Fragment>
      <div className="main-panel">
        <div className="left-side">
          <Sidebar />
        </div>
        <div className="right-side">{componentToView}</div>
      </div>
    </React.Fragment>
  );
};
export default User;
