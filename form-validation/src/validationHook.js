import { useState } from "react";

const useFormValidation = () => {
  const [validationConditions, setValidationConditions] = useState({
    username: {
      minLength: 3,
      errorMessage: "Username must have more than three characters",
    },
    email: {
      regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      errorMessage: "This is not a valid email format",
    },
    password: {
      minLength: 6,
      errorMessage: "Password must have at least 6 characters",
    },
    confirmPassword: {
      matchField: "password",
      errorMessage: "Password does not match",
    },
  });
  console.log("Hook rendering");

  return validationConditions;
};

export default useFormValidation;
