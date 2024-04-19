import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/books")
      .then((response) => {
        const result = response.data;
        console.log(Array.isArray(result.data));
        setBooks(result.data);
        console.log(Array.isArray(books));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-blue-700 to-red-600 ">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl text-black font-bold my-4 ">Books List</h1>
        <div className="flex justify-evenly items-center">
          <Link to="/books/create">
            <MdOutlineAddBox className="text-balck font-bold text-4xl m-4" />
          </Link>
          <Link
            className="bg-black text-white hover:bg-gray-400 hover:text-black p-2 m-4 rounded-xl"
            to="/"
          >
            Login
          </Link>
          <Link
            className="bg-black text-white hover:bg-gray-400 hover:text-black p-2 m-4 rounded-xl"
            to="/register"
          >
            SignIn
          </Link>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : books.length === 0 ? (
        <p>Books Not Found</p>
      ) : (
        <table className="w-full border-separate border-spacing-2 my-4">
          <thead>
            <tr>
              <th className="border border-black rounded-md">No</th>
              <th className="border border-black rounded-md">Title</th>
              <th className="border border-black rounded-md">Author</th>
              <th className="border border-black rounded-md">Publishyear</th>
              <th className="border border-black rounded-md">Operations</th>
            </tr>
          </thead>
          <tbody className="">
            {books.map((book, index) => {
              return (
                <tr key={book._id} className="h-8">
                  <td className="border border-slate-700 rounded-md text-center">
                    {index + 1}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {book.title}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {book.author}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {book.publishyear}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <div className="flex justify-center gap-x-4">
                      <Link to={`/books/details/${book._id}`}>
                        <BsInfoCircle className="text-green-800 text-2xl" />
                      </Link>
                      <Link
                        to={{
                          pathname: `/books/edit/${book._id}`,
                          state: { customprop: book },
                        }}
                      >
                        <AiOutlineEdit className="text-yellow-600 text-2xl" />
                      </Link>
                      <Link to={`/books/delete/${book._id}`}>
                        <MdOutlineDelete className="text-2xl text-red-600" />
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
