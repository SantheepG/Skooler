import React from "react";
import "./Profile.css";
import defaultpic from "../../../../assets/profile-pic-default.jpg";
const Profile = ({ userData }) => {
  return (
    <React.Fragment>
      <div className="profile-component">
        <div></div>
        <div className="profile-content">
          <div className="profile-left-side">
            <div className="profile-pic-container">
              <img src={defaultpic} alt="" class="image" />
              <div class="img-overlay">
                <div class="img-update-text">
                  <a href="">Update</a>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-right-side">
            <div className="details-container">
              <div className="profile-section header-part">
                <div className="profile-section section-title">
                  User details
                </div>
                <div>
                  <span>
                    {" "}
                    <button class="btn btn-edit" ng-click="launch('confirm')">
                      Edit
                    </button>
                  </span>
                  <span>
                    {" "}
                    <button
                      class="btn btn-resetpwd"
                      ng-click="launch('confirm')"
                    >
                      Reset password
                    </button>
                  </span>
                </div>
              </div>

              <div className="details-col-container">
                <div className="details-col user-name">
                  <div className="details-col-header">Full name</div>
                  <div className="details-col-footer">{userData.name}</div>
                </div>
                <div className="details-col user-email">
                  <div className="details-col-header">Email</div>
                  <div className="details-col-footer">{userData.email}</div>
                </div>
                <div className="details-col user-phone-no">
                  <div className="details-col-header">Phone number</div>
                  <div className="details-col-footer">
                    <span className="contry-code">{userData.mobile_no}</span>
                  </div>
                </div>

                <div className="details-col user-home-address">
                  <div className="details-col-header">Home address</div>
                  <div className="details-col-footer">
                    1st cross street, Hospital lane, Kalmunai
                  </div>
                </div>
              </div>
            </div>
            <div className="student details-container">
              <div className="profile-section section-title">
                Student details
              </div>
              <div className="student details-col-container">
                <div className="student details-col user-name">
                  <div className="student details-col-header">Full name</div>
                  <div className="student details-col-footer">Sam Anderson</div>
                </div>
                <div className="student details-col user-email">
                  <div className="student details-col-header">Email</div>
                  <div className="student details-col-footer">
                    sam@gmail.com
                  </div>
                </div>
                <div className="student details-col user-phone-no">
                  <div className="student details-col-header">Phone number</div>
                  <div className="student details-col-footer">
                    <span className="contry-code">+94</span> 777046363
                  </div>
                </div>

                <div className="student details-col user-home-address">
                  <div className="student details-col-header">Home address</div>
                  <div className="student details-col-footer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
