import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Backbutton from "../components/Backbutton";
import Spinner from "../components/Spinner";
const EditBook = () => {
  const navigate = useNavigate();
  // const location = useLocation(); //uselocation hook to access
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishyear, setPublishyear] = useState("");
  // const datavalue = location.state && location.state.customprop;
  // setTitle(datavalue.title || " ");
  // setAuthor(datavalue.author || " ");
  // setPublishyear(datavalue.publishyear || " ");
  const handleEditbook = () => {
    const data = {
      title,
      author,
      publishyear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5000/books/${id}`, data)
      .then((response) => {
        setLoading(false);
        alert("Book Updated Successfully");
        navigate("/Home");
      })
      .catch((err) => {
        alert("An error Occured. Please check Console for more details");
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <div className="p-10">
      <Backbutton />
      <div className="flex flex-col items-center border border-gray-300 rounded-xl max-w-md mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Edit Book</h1>
        {loading && <Spinner />}
        <div className="w-full">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-sky-400"
            placeholder="Enter title"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="author"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Author
          </label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-sky-400"
            placeholder="Enter author"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="publishyear"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Publish Year
          </label>
          <input
            id="publishyear"
            type="text"
            value={publishyear}
            onChange={(e) => setPublishyear(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-sky-400"
            placeholder="Enter publish year"
          />
        </div>
        <button
          className="w-full bg-sky-400 text-white font-bold py-2 px-4 rounded-md hover:bg-sky-500 transition duration-300"
          onClick={handleEditbook}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook;
