import { Field } from "formik";
import "./form.styles.css";

const ContactDetails = ({ guardian, guardianName, email, emergencyNum }) => {
  return (
    <div className="form-section-container">
      <div className="form-field">
        <label htmlFor="guardian">Guardian details</label>
        <Field id="guardian" name={guardian} as="select">
          <option value="" disabled hidden>
            choose guardian
          </option>
          <option value="mother">Mother</option>
          <option value="father">Father</option>
          <option value="father">Relative</option>
        </Field>
        <Field
          name={guardianName}
          type="text"
          placeholder="Enter guardian name"
        />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <Field id="email" name={email} placeholder="Enter email" />
      </div>

      <div className="form-field">
        <label htmlFor="emergencyNum">Emergency contact number</label>
        <Field
          id="emergencyNum"
          name={emergencyNum}
          placeholder="Enter emergency contact"
        />
      </div>
    </div>
  );
};

export default ContactDetails;
