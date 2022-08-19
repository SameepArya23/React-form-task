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
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Jane" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <div>
        {addInfo.map((info) => (
          <h2>{info.firstName}</h2>
        ))}
      </div>
    </div>
  );
};

export default FormInputs;
