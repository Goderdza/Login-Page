import React, { useState } from "react";
import "../styles/Login.scss";
import Header from "../components/Header";
import CancelButton from "../components/CancelButton";

export const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [savedErrors, setSavedErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSavedErrors(validateData(values));
  };

  //validation
  const validateData = (data) => {
    const errors = {};
    const background = document.body;
    const userInput = document.getElementById("username-input");
    const passwordInput = document.getElementById("password-input");

    if (!data.username) {
      errors.username = "Field is empty!";
      background.style.backgroundColor = "rgb(208, 125, 125)";
      userInput.classList.add("error");
    }
    if (!data.password) {
      errors.password = "Field is empty";
      background.style.backgroundColor = "rgb(208, 125, 125)";
      passwordInput.classList.add("error");
    }
    if (data.username) {
      userInput.classList.remove("error");
      errors.username = "";
    }
    if (data.password) {
      passwordInput.classList.remove("error");
      errors.password = "";
    }

    if (data.username && data.password) {
      background.style.backgroundColor = "rgb(0, 83, 83)";
    }

    return errors;
  };

  //code below describes all the html elements that im using to create Login page
  return (
    <>
      <div className="headings">
        <Header className="header"/>
        <CancelButton className="cancel-button" />
      </div>
      <div className="login-page">
        <div className="data">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-fields">
              <input
                id="username-input"
                name="username"
                type="text"
                placeholder="Username"
                onChange={handleChange}
              />
              <p>{savedErrors.username}</p>
              <input
                id="password-input"
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <p>{savedErrors.password}</p>
            </div>
            <div>
              <a href="#" className="forgotten-password">
                Forgot password?
              </a>
            </div>
            <button type="submit" value="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
