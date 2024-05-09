import { useState, useMemo } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import useFormValidation from "./validationHook";

function App() {
  const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formValues, setFormValues] = useState(initialState);
  const [formData, setFormData] = useState([]);
  const validationConditions = useFormValidation();

  const memoizedValidationConditions = useMemo(() => validationConditions, []);

  const { username, email, password, confirmPassword } = formValues;

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData([...formData, formValues]);

    if (username.length < memoizedValidationConditions.username.minLength) {
      alert(memoizedValidationConditions.username.errorMessage);
    } else if (!memoizedValidationConditions.email.regex.test(email)) {
      alert(memoizedValidationConditions.email.errorMessage);
    } else if (
      password.length < memoizedValidationConditions.password.minLength
    ) {
      alert(memoizedValidationConditions.password.errorMessage);
    } else if (password !== confirmPassword) {
      alert(memoizedValidationConditions.confirmPassword.errorMessage);
    }

    setFormValues(initialState);
  };

  console.log(formData);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            onChange={handleChange}
            value={username}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={handleChange}
            value={email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={handleChange}
            value={password}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Confrim Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            onChange={handleChange}
            value={confirmPassword}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
