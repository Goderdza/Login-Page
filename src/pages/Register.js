import React, { useState } from "react";
import "../styles/Register.scss";
import Header from "../components/Header";
import CancelButton from "../components/CancelButton";

export const Register = () => {
  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    passwordMatch: "",
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
    const nameInput = document.getElementById("name-input");
    const surInput = document.getElementById("surname-input");
    const emailInput = document.getElementById("email-input");
    const passwordInput = document.getElementById("password-input");
    const passwordMAtch = document.getElementById("password-match");

    if (!data.name) {
      errors.name = "Field is empty!";
      background.style.backgroundColor = "rgb(208, 125, 125)";
      nameInput.classList.add("error");
    }
    if (!data.surname) {
      errors.surname = "Field is empty!";
      background.style.backgroundColor = "rgb(208, 125, 125)";
      surInput.classList.add("error");
    }
    if (!data.email) {
      errors.email = "Field is empty!";
      background.style.backgroundColor = "rgb(208, 125, 125)";
      emailInput.classList.add("error");
    }
    if (!data.password) {
      errors.password = "Field is empty";
      background.style.backgroundColor = "rgb(208, 125, 125)";
      passwordInput.classList.add("error");
    }
    if (!data.passwordMatch) {
      errors.passwordMatch = "Field is empty!";
      background.style.backgroundColor = "rgb(208, 125, 125)";
      passwordMAtch.classList.add("error");
    }
    if (data.name) {
      nameInput.classList.remove("error");
      errors.name = "";
    }
    if (data.username) {
      surInput.classList.remove("error");
      errors.surname = "";
    }
    if (data.email) {
      emailInput.classList.remove("error");
      errors.email = "";
    }
    if (data.password) {
      passwordInput.classList.remove("error");
      errors.password = "";
    }
    if (data.passwordMatch) {
      passwordMAtch.classList.remove("error");
      errors.passwordMatch = "";
    }

    if (
      data.name &&
      data.surname &&
      data.email &&
      data.passwordMatch &&
      data.password
    ) {
      background.style.backgroundColor = "rgb(0, 83, 83)";
    }

    return errors;
  };
  return (
    <>
      <div className="headings">
        <Header className="header" />
        <CancelButton className="cancel-button" />
      </div>
      <div className="register-page">
        <div className="data">
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="input-fields">
              <div className="first-row">
                <div className="name">
                  <input
                    id="name-input"
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                  />
                  <p>{savedErrors.name}</p>
                </div>
                <div className="surname">
                  <input
                    id="surname-input"
                    name="surname"
                    type="text"
                    placeholder="Surname"
                    onChange={handleChange}
                  />
                  <p>{savedErrors.surname}</p>
                </div>
              </div>
              <input
                id="email-input"
                name="email"
                type="text"
                placeholder="Email"
                onChange={handleChange}
              />
              <p>{savedErrors.email}</p>
              <input
                id="password-input"
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <p>{savedErrors.password}</p>
              <input
                id="password-match"
                name="password-match"
                type="password"
                placeholder="Re-enter Password"
                onChange={handleChange}
              />
              <p>{savedErrors.passwordMatch}</p>
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

export default Register;
