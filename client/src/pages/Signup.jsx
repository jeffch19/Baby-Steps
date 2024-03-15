import React, { useState } from "react";
import { motion } from "framer-motion";
import "../css/loginsignup.css";
import { Link } from "react-router-dom";

import { useMutation } from '@apollo/client';
import auth from "../utils/auth";
import { ADD_USER } from "../graphql/mutations";

import babysteps_logo from "../assets/pink_logo.png";
import bouquet from "../assets/bouquetRight.png";

const Signup = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [passwordError, setPasswordError] = useState('');

  const [signup, { error, data }] = useMutation(ADD_USER);

  const onButtonClick = async () => {
    try {
      // send login data to backend
      const { data } = await signup({
        variables: { username: name, email, password }
      })

      console.log(data);

      const token = data?.addUser.token || '';

      // save token data on frontend
      auth.login(token);

      // clear out signup form
      setFormState()
    }
    catch (err) {
      console.log(err);
    }
  };

const setFormState = () => {
  setName("")
  setDate("")
  setEmail("")
  setPassword("")
  setConfirmPassword("")
}

const validatePasswords = () => {
  console.log(`password: ${password}, confirmPassword: ${confirmPassword}`)

  if (confirmPassword !== "" && password !== confirmPassword) {
    setPasswordError("Passwords do not match. Try again.")
  }
  else {
    setPasswordError("")
  }
}

return (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, duration: 0.3 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <div className="flex justify-center items-center h-screen">
      <div
        className="sm:max-w-sm sm:w-full px-6 py-8 h-screen w-screen md:h-auto"
        id="card"
      >
        <div class="flex flex-auto flex-col">
          <div className="flex flex-auto flex-row flex-nowrap justify-center content-center header">
            <img src={bouquet} className="header"></img>
            <div className="flex flex-auto flex-col justify-center content-center">
              <h2 className="text-center align-middle text-3xl font-bold leading-9 tracking-tight text-gray-900 header">
                Sign Up
              </h2>
            </div>

            <img src={bouquet} className="header" id="flipped"></img>
          </div>

          <img
            className="logo mx-auto h-10 w-auto"
            src={babysteps_logo}
            alt="Baby Steps Logo"
          />
        </div>

        <div className="mt-10" id="interact">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  onChange={(value) => setName(value.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Date
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  onChange={value => setDate(value.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  onChange={value => setEmail(value.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                  onChange={value => setPassword(value.target.value)}
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  onChange={value => setPassword(value.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  onChange={
                    value => {setConfirmPassword(value.target.value) ;
                    console.log(confirmPassword) ;
                    validatePasswords()
                  }}
                />
              </div>
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {passwordError}
              </label>
            </div>

            <div>
              <button
                type="button"
                className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 blue"
                onClick={onButtonClick}
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?
            <br />
            <Link to="/login" className="font-semibold leading-6 blue">
              Click here!
            </Link>
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);
};

export default Signup;
