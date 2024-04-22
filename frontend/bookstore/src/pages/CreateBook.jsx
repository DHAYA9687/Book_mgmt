import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Backbutton from "../components/Backbutton";
import Spinner from "../components/Spinner";
const Createbook = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishyear, setPublishyear] = useState("");
  const handleSavebook = () => {
    const data = {
      title,
      author,
      publishyear,
    };
    setLoading(true);
    axios
      .post("http://localhost:5000/books", data)
      .then((response) => {
        setLoading(false);
        alert("Book Created Successfully");
        navigate("/Home");
      })
      .catch((err) => {
        alert("An error Occured. Please check Console for more details");
        alert(err.response.data);
        console.log(err);
        setLoading(false);
      });
  };
  return (
    //   <div className="p-4">
    //     <Backbutton />
    //     <h1 className="text-3xl my-4 font-bold">Create Book</h1>
    //     {loading ? <Spinner /> : " "}
    //     <div className="flex flex-col border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
    //       <div className="my-4">
    //         <label htmlFor="Title" className="text-xl text-gray-600">
    //           Title
    //         </label>
    //         <input
    //           type="text"
    //           value={title}
    //           onChange={(e) => setTitle(e.target.value)}
    //           className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-sky-400"
    //         />
    //       </div>
    //       <div className="my-4">
    //         <label htmlFor="Author" className="text-xl text-gray-500">
    //           Author
    //         </label>
    //         <input
    //           type="text"
    //           value={author}
    //           onChange={(e) => setAuthor(e.target.value)}
    //           className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-sky-400"
    //         />
    //       </div>
    //       <div className="my-4">
    //         <label htmlFor="PublishYear" className="text-xl text-grey-500">
    //           Publishyear
    //         </label>
    //         <input
    //           type="text"
    //           value={publishyear}
    //           onChange={(e) => setPublishyear(e.target.value)}
    //           className="border-2 border-gray-400 rounded-md p-2 focus:outline-none focus:border-sky-400"
    //         />
    //       </div>
    //       <button className="p-2 bg-sky-300 m-8" onClick={handleSavebook}>
    //         save
    //       </button>
    //     </div>
    //   </div>
    <div className="p-10 ">
      <Backbutton />
      <div className="flex flex-col items-center border border-gray-300 rounded-xl max-w-md mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Create Book</h1>
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
          onClick={handleSavebook}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Createbook;
