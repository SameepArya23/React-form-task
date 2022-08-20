import { Fragment } from "react";
import "./user-list.styles.css";

const UserList = ({ addInfo }) => {
  return (
    <Fragment>
      {addInfo.map((info, index) => {
        return (
          <div key={index} className="list">
            <h3>{info.name}</h3>
            <div className="details">
              <h4>Personal Details</h4>
              {/* dob, sex, mobile, govt id name, govt id no. */}
              <span className="span-container">
                <span className="span-head">DOB:</span> {info.dob}
              </span>
              <span className="span-container">
                <span className="span-head">Sex:</span> {info.sex}
              </span>
              <span className="span-container">
                <span className="span-head">Mobile:</span> {info.mobile}
              </span>
              <span className="span-container">
                <span className="span-head">Govt ID Type:</span> {info.govt}
              </span>
              <span className="span-container">
                <span className="span-head">Govt ID no.:</span> {info.idNum}
              </span>
            </div>
            <div className="details">
              <h4>Contact Details</h4>
              {/* guardian detail, email, emergency no. */}
              <span className="span-container">
                <span className="span-head">Guardian:</span> {info.guardian}
              </span>
              <span className="span-container">
                <span className="span-head">Guardian Name:</span>{" "}
                {info.guardianName}
              </span>
              <span className="span-container">
                <span className="span-head">Email:</span> {info.email}
              </span>
              <span className="span-container">
                <span className="span-head">Emergency Number:</span>{" "}
                {info.emergencyNum}
              </span>
            </div>
            <div className="details">
              <h4>Address Details</h4>
              {/* address, state, city, country, pincode */}
              <span className="span-container">
                <span className="span-head">Address:</span> {info.address}
              </span>
              <span className="span-container">
                <span className="span-head">State:</span> {info.state}
              </span>
              <span className="span-container">
                <span className="span-head">City:</span> {info.city}
              </span>
              <span className="span-container">
                <span className="span-head">Country:</span> {info.country}
              </span>
              <span className="span-container">
                <span className="span-head">Pincode:</span> {info.pincode}
              </span>
            </div>
            <div className="details">
              <h4>Other Details</h4>
              {/* occupation, religion, martial status, blood group, nationality */}
              <span className="span-container">
                <span className="span-head">Occupation:</span> {info.occupation}
              </span>
              <span className="span-container">
                <span className="span-head">Religion:</span> {info.religion}
              </span>
              <span className="span-container">
                <span className="span-head">Martial Status:</span>{" "}
                {info.martialStatus}
              </span>
              <span className="span-container">
                <span className="span-head">Blood Group:</span>{" "}
                {info.bloodGroup}
              </span>
              <span className="span-container">
                <span className="span-head">Nationality:</span>{" "}
                {info.nationality}
              </span>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default UserList;
