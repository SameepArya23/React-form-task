import { Field } from "formik";
import "./form.styles.css";

const OtherDetails = ({
  occupation,
  religion,
  martialStatus,
  bloodGroup,
  nationality,
}) => {
  return (
    <div className="form-section-container">
      <div className="form-field">
        <label htmlFor="occupation">Occupation</label>
        <Field
          id="occupation"
          name={occupation}
          type="text"
          placeholder="Enter occupation"
        />
      </div>

      <div className="form-field">
        <label htmlFor="religion">Religion</label>
        <Field id="religion" name={religion} as="select">
          <option value="" disabled hidden>
            Select religion
          </option>
          <option value="Hindu">Hindu</option>
          <option value="Hindu">Muslim</option>
        </Field>
      </div>

      <div className="form-field">
        <label htmlFor="martialStatus">Martial Status</label>
        <Field id="martialStatus" name={martialStatus} as="select">
          <option value="" disabled hidden>
            Select martial status
          </option>
          <option value="Married">Married</option>
          <option value="single">single</option>
          <option value="Divorced">Divorced</option>
        </Field>
      </div>

      <div className="form-field">
        <label htmlFor="bloodGroup">Blood Group</label>
        <Field id="bloodGroup" name={bloodGroup} as="select">
          <option value="" disabled hidden>
            Select blood group
          </option>
          <option value="A">A</option>
          <option value="A+">A+</option>
          <option value="B">B</option>
          <option value="B+">B+</option>
          <option value="O+">O+</option>
        </Field>
      </div>

      <div className="form-field">
        <label htmlFor="nationality">Nationality</label>
        <Field
          id="nationality"
          name={nationality}
          type="search"
          placeholder="Enter nationality"
        />
      </div>
    </div>
  );
};

export default OtherDetails;
