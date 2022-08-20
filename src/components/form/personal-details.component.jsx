import { Field } from "formik";
import "./form.styles.css";

const PersonalDetails = ({ name, dob, sex, mobile, govt, idNum }) => {
  return (
    <div className="form-section-container">
      <div className="form-field">
        <label htmlFor="name">Name*</label>
        <Field
          id="name"
          name={name}
          placeholder="Enter name"
          type="text"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="age">Date Of Birth*</label>
        <Field
          id="age"
          name={dob}
          placeholder="Date Of Birth"
          type="date"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="select">sex*</label>
        <Field id="select" name={sex} as="select" required>
          <option value="" disabled hidden>
            choose gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Field>
      </div>

      <div className="form-field">
        <label htmlFor="mobile">Mobile</label>
        <Field
          id="mobile"
          name={mobile}
          placeholder="Enter mobile"
          type="tel"
        />
      </div>

      <div className="form-field">
        <label htmlFor="govIdType">Govt Issued ID</label>
        <Field id="govIdType" name={govt} as="select">
          <option value="" disabled hidden>
            choose ID type
          </option>
          <option value="adhaar card">Adhaar Card</option>
          <option value="pan card"> PAN Card</option>
          <option value="voter ID card">Voter ID Card</option>
        </Field>
        <Field id="ID-number" name={idNum} type="text" placeholder="Enter Id" />
      </div>
    </div>
  );
};

export default PersonalDetails;
