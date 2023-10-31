import React from "react";
import { useState } from "react";


export const useInputState = (initialValue) => {
  const [value, setValue] = React.useState(initialValue);
  const handleChange = (text) => setValue(text);
  return [value, handleChange];
};

export const useFormValidationState = (e, p) => {
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  ContinousBaseGesture

  const validateForm = (email, password) => {
    let isValid = true;

    if (email.trim() === "" || !email.includes("@")) {
      setEmailError(e);
      isValid = false;
    } else {
      setEmailError("");
      setPasswordError("");
    }
    if (password.trim() === "" || password.length < 8) {
      setPasswordError(p);
      isValid = false;
    } else {
      setPasswordError("");
    }
  };

  return { emailError, passwordError, validateForm };
};

export const useInputUpdateState = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChangeText = (text) => setValue(text);
  const onchengeVaue = (value) => setValue(value);
  return { value, onChangeText };
};
