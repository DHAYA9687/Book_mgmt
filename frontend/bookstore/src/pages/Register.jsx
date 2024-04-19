// SignUp.js
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };
    // try {
    //   const response = await fetch("http://localhost:5000/user/register", {
    //     method: "POST",
    //     headers: {
    //       "content-Type": "application/json",
    //     },
    //     bode: JSON.stringify({
    //       name,
    //       email,
    //       password,
    //     }),
    //   });
    //   if (!response.ok) {
    //     throw new Error("Failed to send data");
    //   }
    //   const responseData = await response.json(); // Parse response data as JSON
    //   console.log(responseData);
    // } catch (err) {
    //   console.log(err);
    // }
    axios
      .post("http://localhost:5000/user/register", data)
      .then((response) => {
        alert("Register successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data || "Something went wrong!");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-600 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-xl w-96">
        <h2 className="text-3xl font-semibold text-center mb-4">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              id="name"
              onChange={(e) => setName(e.target.value)}
              autoComplete="username"
              className="w-full px-3 py-2 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              id="email"
              autoComplete="username"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="w-full px-3 py-2 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Sign Up
          </button>
          <div className="flex justify-between my-2">
            <h2>Already a User</h2>
            <Link className="hover:text-blue-700" to="/">
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
