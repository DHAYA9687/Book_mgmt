import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Backbutton from "../components/Backbutton";
import Spinner from "../components/Spinner";
const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        //const result = response.data;
        setBook(response.data.book);
        console.log("helo dhy");
        setLoading(false);
        console.log(response.data.book);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);
  return (
    <div className="p-4">
      <Backbutton />
      <h1 className="text-3xl my-4 font-bold">Book Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500">Id</span>
            <span>{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500">Title</span>
            <span>{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500">Author</span>
            <span>{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500">Publishyear</span>
            <span>{book.publishyear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500">Create Time</span>
            <span>{new Date(book.createAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500">Update Time</span>
            <span>{new Date(book.updateAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
