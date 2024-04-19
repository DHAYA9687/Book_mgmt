import React from "react";
import { Route, Routes } from "react-router-dom";
import Createbook from "./pages/CreateBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ShowBook from "./pages/ShowBook";
const App = () => {
  const isauthenticated = localStorage.getItem("token");
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="/books/create" element={<Createbook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
