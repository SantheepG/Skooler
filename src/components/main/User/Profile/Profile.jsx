import React, { useState, useEffect } from "react";
import "./Profile.css";
import defaultpic from "../../../../assets/profile-pic-default.jpg";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
const Profile = ({ userData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: userData.id,
    name: userData.name,
    email: userData.email,
    mobile_no: userData.mobile_no,
  });
  const viewModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleOutsideClick = (event) => {
    if (event.target.className === "modal") {
      setIsModalOpen(false);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const UpdateProfileInfo = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email) {
      toast.error("Required fields are empty");
      console.log(formData);
      return;
    }

    const data = {
      id: userData.id,
      name: formData.name,
      email: formData.email,
    };

    try {
      const response = await axios.put("update", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Profile updated:", response.data);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      toast.success("Profile successfully updated", {
        duration: 3000,
        position: "top-center",
        //icon: "❌",
      });
      viewModal();
      // Handle success or redirect as needed
    } catch (error) {
      console.error("Error updating profile:", error.message);
      // Handle error scenario
    }
  };

  useEffect(() => {
    //
    const UpdateProfile = async () => {
      try {
        const response = await axios.get("events");
        //setEvents(response.data.events);
      } catch (error) {
        console.error("Fetch error: ", error);
      }
    };
    //UpdateProfile();
  }, []);

  return (
    <React.Fragment>
      <div>
        <Toaster className="notifier" />
        {isModalOpen && (
          <div className="modal" onClick={handleOutsideClick}>
            <div className="modal-content">
              <div class="form-style-10">
                <span className="close" onClick={viewModal}>
                  &times;
                </span>
                <div className="profile-section section-title">
                  Update details
                </div>

                <form className="parallel-form">
                  <div class="inner-wrap">
                    <label>
                      Your Full Name{" "}
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label>
                      Address{" "}
                      <textarea
                        name="address"
                        onChange={handleInputChange}
                      ></textarea>
                    </label>
                  </div>

                  <div class="inner-wrap">
                    <label>
                      Email Address
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label>
                      Phone Number{" "}
                      <input
                        type="text"
                        name="mobile_no"
                        value={userData.mobile_no}
                        disabled
                      />
                    </label>
                  </div>

                  <div class="button-section">
                    <button className="btn" onClick={UpdateProfileInfo}>
                      Update
                    </button>
                    <button onClick={viewModal}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="profile-component">
        <div></div>
        <div className="profile-content">
          <div className="profile-left-side">
            <div className="profile-pic-container">
              <img src={defaultpic} alt="" class="image" />
              <div class="img-overlay">
                <div class="img-update-text">
                  <a href="#">Update</a>
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
                    <button
                      class="btn btn-edit"
                      ng-click="launch('confirm')"
                      onClick={viewModal}
                    >
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
                  <div className="details-col-footer">{formData.name}</div>
                </div>
                <div className="details-col user-email">
                  <div className="details-col-header">Email</div>
                  <div className="details-col-footer">{formData.email}</div>
                </div>
                <div className="details-col user-phone-no">
                  <div className="details-col-header">Phone number</div>
                  <div className="details-col-footer">
                    <span className="contry-code">{formData.mobile_no}</span>
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
