import { Formik, Form } from "formik";
import { Fragment, useState } from "react";
import AddressDetails from "./address-details.component";
import ContactDetails from "./contact-details.component";
import OtherDetails from "./other-details.component";
import PersonalDetails from "./personal-details.component";
import "./form.styles.css";
import UserList from "../list/user-list.component";

const FormInputs = () => {
  const [addInfo, setAddInfo] = useState([]);

  const handleSubmit = (values) => {
    setAddInfo([...addInfo, values]);
  };

  const initialVals = {
    name: "",
    dob: "",
    sex: "",
    mobile: "",
    govt: "",
    idNum: "",
    guardian: "",
    guardianName: "",
    email: "",
    emergencyNum: "",
    address: "",
    state: "",
    city: "",
    country: "",
    pincode: "",
    occupation: "",
    religion: "",
    martialStatus: "",
    bloodGroup: "",
    nationality: "",
  };

  return (
    <Fragment>
      <div className="form-container">
        <Formik initialValues={initialVals} onSubmit={handleSubmit}>
          <Form className="form">
            <h3>Personal Details</h3>
            <PersonalDetails
              name="name"
              dob="dob"
              sex="sex"
              mobile="mobile"
              govt="govt"
              idNum="idNum"
            />

            <h3>Contact Details</h3>
            <ContactDetails
              guardian="guardian"
              guardianName="guardianName"
              email="email"
              emergencyNum="emergencyNum"
            />

            <h3>Address Details</h3>
            <AddressDetails
              address="address"
              state="state"
              city="city"
              country="country"
              pincode="pincode"
            />

            <h3>Other Details</h3>
            <OtherDetails
              occupation="occupation"
              religion="religion"
              martialStatus="martialStatus"
              bloodGroup="bloodGroup"
              nationality="nationality"
            />

            <button className="button" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
      <UserList addInfo={addInfo} />
    </Fragment>
  );
};

export default FormInputs;
