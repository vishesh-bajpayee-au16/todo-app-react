import "./index.scss";
import { useState } from "react";
// yup package is used for form validation
import * as yup from "yup";
import Toast from "../../components/Toast";

// creating a schema for validation using yup package
let schema = yup.object().shape({
  password: yup.string().required().min(6),
  email: yup.string().required().email(),
});

const Login = () => {
  // useState to assign states, no need to create a new variable for states when using useState hook, it automatically sets the state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // using the defined schema with validate function of yup package to validate the form inputs at the time of form submit
    schema.validate({ email, password }).catch(function (err) {
      // setting message in state to show in toast
      setMessage(err.errors[0]);
      // logging the error from err.errors which returns a list with error string
      console.log(err.errors);
    });
  };

  return (
    <form className="login-form" onSubmit={submitHandler}>
      <Toast message={message} />

      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          aria-describedby="emailHelp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="inputPassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className=" mb-3">
        <button type="submit" className="btn btn-outline-info">
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
