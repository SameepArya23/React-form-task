import { Field } from "formik";
import { State } from "../../states/state";
import "./form.styles.css";

const AddressDetails = ({ address, state, city, country, pincode }) => {
  return (
    <div className="form-section-container">
      <div className="form-field">
        <label htmlFor="address">Address</label>
        <Field
          id="address"
          name={address}
          type="text"
          placeholder="Enter address"
        />
      </div>

      <div className="form-field">
        <label htmlFor="state">State</label>
        <Field id="state" name={state} as="select">
          <option value="" disabled hidden>
            Select states
          </option>
          {State.map((state, index) => (
            <option value={state.name} key={index}>
              {state.name}
            </option>
          ))}
        </Field>
      </div>

      <div className="form-field">
        <label htmlFor="city">City</label>
        <Field id="city" name={city} type="search" placeholder="Enter city" />
      </div>

      <div className="form-field">
        <label htmlFor="country">Country</label>
        <Field
          id="country"
          name={country}
          type="search"
          placeholder="Enter country"
        />
      </div>

      <div className="form-field">
        <label htmlFor="pincode">Pincode</label>
        <Field
          id="pincode"
          name={pincode}
          type="text"
          placeholder="Enter pincode"
        />
      </div>
    </div>
  );
};

export default AddressDetails;
