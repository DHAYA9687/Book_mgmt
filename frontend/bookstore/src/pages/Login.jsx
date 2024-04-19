// Login.js

import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };
    axios
      .post("http://localhost:5000/user/login", data)
      .then((res) => {
        alert("login success");
        localStorage.setItem("token", res.data.token);
        navigate("/Home");
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data || "Something went wrong!");
        console.log("something went wrong");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-600 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-xl w-96">
        <h2 className="text-3xl font-semibold text-center mb-4">
          Welcome Back!
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              id="name"
              autoComplete="name"
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              id="email"
              autoComplete="email"
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
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Log In
          </button>
          <div className="flex justify-between p-1">
            <h1> Not a user ? </h1>
            <Link className="hover:text-blue-700" to="/register">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
