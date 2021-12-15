import React from "react";
import './ProfileDetails.css';
import useAuth from "../../../Hooks/useAuth";

const ProfileDetails = () => {
    const {user}=useAuth();
  return (
    <>
      <div className="container-fluid text-center mt-5 pt-5" id="profile">
        <div className="mt-5 covered">
          <div className="content text-center">
            <h1 className="title">Profile Details</h1>
            <h5 className="text-center text-black mb-5">
              Thank You For Visiting Our Website. Your information is safe here.
            </h5>
          </div>
        </div>
        <div className="container-fluid text-center">
          <div className="numbers d-flex flex-md-row flex-wrap justify-content-center">
            <div className="rect">
              <h3>Name</h3>
              <h5>{user?.displayName}</h5>
            </div>
            <div className="rect">
              <h3>Email</h3>
              <h5>{user?.email}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
