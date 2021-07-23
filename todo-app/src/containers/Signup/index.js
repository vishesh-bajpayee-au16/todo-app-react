import "./index.scss";
import { useState } from "react";
import axios from "axios";
import { PATHS } from "../../config/";
// yup package is used for form validation
import * as yup from "yup";
import Toast from "../../components/Toast";
import InputField from "../../components/InputField";

// creating a schema for validation using yup package
let schema = yup.object().shape({
  password: yup.string().required().min(6).max(24),
  email: yup.string().required().email(),
  firstName: yup.string().required().min(1).max(16),
  lastName: yup.string().required().min(1).max(18),
});

const Signup = ({ history }) => {
  // useState to assign states, no need to create a new variable for states when using useState hook, it automatically sets the state
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // using the defined schema with validate function of yup package to validate the form inputs at the time of form submit
    schema
      .validate({ email, password })
      .then(async (data) => {
        setMessage("");
        //  making api call using axios
        const response = await axios({
          method: "get",
          url: "",
          data,
        });

        // checking if there is an error
        if (Object.values(response.data.error).length) {
          setMessage(response.data.message);
          console.log(response.error);
        } else {
          // if there is no error, we are redirecting route to login after sending data to server
          history.push(PATHS.login);
        }
      })
      .catch(function (err) {
        const errorMessage = err.errors ? err.errors[0] : err.message;
        // setting message in state to show in toast
        setMessage(errorMessage);
        // logging the error from err.errors which returns a list with error string
        console.log(err.errors);
      });
  };

  return (
    <form className="signup-form" onSubmit={submitHandler}>
      <Toast message={message} />

      <InputField
        value={firstName}
        setValue={setFirstName}
        name="firstName"
        fieldId="inputFirstName"
        label="firstName"
        type="text"
      />

      <InputField
        value={lastName}
        setValue={setlastName}
        name="lastName"
        fieldId="inputlastName"
        label="lastName"
        type="text"
      />

      <InputField
        value={email}
        setValue={setEmail}
        name="email"
        fieldId="inputEmail"
        label="Email"
        type="email"
      />

      <InputField
        value={password}
        setValue={setPassword}
        name="password"
        fieldId="inputPassword"
        label="Password"
        type="password"
      />

      <div className=" mb-3">
        <button type="submit" className="btn btn-outline-info">
          Signup
        </button>
      </div>
    </form>
  );
};

export default Signup;
