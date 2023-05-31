import React, { useState, useRef, FormEvent, useEffect } from "react";

import "./LoginForm.css";
import Eye from "../../assets/Vector.svg";
import FormHeading from "../header/FormHeading";
import Container from "../leftContainer/Container";

const LoginForm: React.FC = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [ispasswordValid, setIsPasswordValid] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      const timeout = setTimeout(() => {
        setShowPopup(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [showPopup]);

  const togglePasswordVisibility = (): void => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (emailInputRef.current && passwordInputRef.current) {
      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;

      const checkEmailValidity = /\S+@\S+\.\S+/.test(enteredEmail);
      setIsEmailValid(checkEmailValidity);

      const checkPasswordValidity = enteredPassword.trim().length >= 8;
      setIsPasswordValid(checkPasswordValidity);

      if (!checkEmailValidity || !checkPasswordValidity) {
        return;
      }

      emailInputRef.current.value = "";
      passwordInputRef.current.value = "";

      setShowPopup(true);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <Container />
      <div
        className="flex justify-center items-center flex-col h-screen"
        style={{ width: "50%" }}
      >
        <FormHeading />
        <form className="flex flex-col" onSubmit={submitHandler}>
          <div className="w-80 mt-4 ml-12 border border-solid border-gray-400 rounded-lg ">
            <input
              type="text"
              placeholder="Enter your email"
              className="px-4 py-2 ml-1 outline-none width-email placeholder rounded-lg"
              ref={emailInputRef}
            />
          </div>
          {!isEmailValid && <p className="ml-12 error">Invalid email</p>}
          <div className=" w-80 mt-6 ml-12 border border-solid border-gray-400 rounded-lg ">
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Enter your password"
              className="px-4 py-2 ml-1 outline-none width placeholder rounded-lg"
              ref={passwordInputRef}
            />
          </div>
          <div className="w-10 h-50 Top relative">
            <img
              src={Eye}
              alt="eye"
              className="relative  left-80  cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          </div>
          {!ispasswordValid && (
            <p className="ml-12 error">
              Password should be minimum 8 characters long
            </p>
          )}
          <p className="text-gray-400 leading-8 text-size w-80 ml-12 text-right pr-1 cursor-pointer -mt-3">
            Forgot Password?
          </p>
          <button
            type="submit"
            className="w-80 ml-12 bg-black text-white px-4 py-2 mt-2 rounded-lg box-shadow"
          >
            Log In
          </button>
        </form>

        {showPopup && (
          <div className="absolute top-10 right-10 bg-green-500 text-white px-4 py-2 rounded-lg">
            Login successful!
          </div>
        )}

        <p className="w-60 ml-20 mt-32 text-size text-center text-gray-400">
          Don't an account yet?{" "}
          <b className="text-teal-500 cursor-pointer">Sign Up</b>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
