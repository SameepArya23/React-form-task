import { Formik, Field, Form } from "formik";
import { useState } from "react";

const FormInputs = () => {
  const [addInfo, setAddInfo] = useState([]);

  const handleSubmit = (values) => {
    setAddInfo([...addInfo, values]);
  };

  return (
    <div className="Form-container">
      <Formik
        initialValues={{
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
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <h2>Personal details</h2>
          <label htmlFor="name">Name*</label>
          <Field
            id="name"
            name="name"
            placeholder="Enter name"
            type="text"
            required
          />

          <label htmlFor="age">Date Of Birth*</label>
          <Field
            id="age"
            name="dob"
            placeholder="Date Of Birth"
            type="date"
            required
          />

          <label htmlFor="select">sex*</label>
          <Field id="select" name="sex" as="select" required>
            <option value="" disabled hidden>
              choose gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Field>

          <label htmlFor="mobile">Mobile</label>
          <Field
            id="mobile"
            name="mobile"
            placeholder="Enter mobile"
            type="tel"
          />

          <label htmlFor="govIdType">Govt Issued ID</label>
          <Field id="govIdType" name="govt" as="select">
            <option value="" disabled hidden>
              choose ID type
            </option>
            <option value="adhaar card">Adhaar Card</option>
            <option value="pan card"> PAN Card</option>
            <option value="voter ID card">Voter ID Card</option>
          </Field>

          <Field
            id="ID-number"
            name="idNum"
            type="text"
            placeholder="Enter Id"
          />

          <h2>Contact Details</h2>
          <label htmlFor="guardian">Guardian details</label>
          <Field id="guardian" name="guardian" as="select">
            <option value="" disabled hidden>
              choose guardian
            </option>
            <option value="mother">Mother</option>
            <option value="father">Father</option>
            <option value="father">Relative</option>
          </Field>
          <Field
            name="guardianName"
            type="text"
            placeholder="Enter guardian name"
          />

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="Enter email" />

          <label htmlFor="emergencyNum">Emergency contact number</label>
          <Field
            id="emergencyNum"
            name="emergencyNum"
            placeholder="Enter emergency contact"
          />

          <h2>Address Details</h2>
          <label htmlFor="address">Address</label>
          <Field
            id="address"
            name="address"
            type="text"
            placeholder="Enter address"
          />

          <label htmlFor="state">State</label>
          <Field id="state" name="state" placeholder="Enter state" as="select">
            <option value="" disabled hidden>
              Select states
            </option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
          </Field>

          <label htmlFor="city">City</label>
          <Field id="city" name="city" placeholder="Enter city" as="select">
            <option value="" disabled hidden>
              Select city
            </option>
            <option value="Indore">Indore</option>
          </Field>

          <label htmlFor="country">Country</label>
          <Field
            id="country"
            name="country"
            type="search"
            placeholder="Enter country"
          />

          <label htmlFor="pincode">Pincode</label>
          <Field
            id="pincode"
            name="pincode"
            type="text"
            placeholder="Enter pincode"
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <div>
        {addInfo.map((info, index) => (
          <h2 key={index}>
            name: {info.name}, age: {info.mobile}, sex: {info.sex}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default FormInputs;
