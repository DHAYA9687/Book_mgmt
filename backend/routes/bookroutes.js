import express from "express";
import { Book } from "../models/bookschema.js";
const route = express.Router();
//route for add a book
route.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishyear) {
      return res.status(400).send({ message: "All fields are required" });
    }
    const newbook = new Book({
      title: req.body.title,
      author: req.body.author,
      publishyear: req.body.publishyear,
    });
    await newbook.save();
    return res.status(200).send({ message: "Book saved successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});
//route for get all books
route.get("/", async (req, res) => {
  try {
    const allbooks = await Book.find({});
    return res.status(200).json({
      count: allbooks.length,
      data: allbooks,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message,
    });
  }
});
//route for get only one book by id
route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json({ book });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});
//route for update a book
route.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishyear) {
      return res.status(400).send({ message: "All fields are required" });
    }
    const updatebook = req.body;
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, updatebook);
    if (!result) {
      return res.status(404).json({ message: "Book not Found" });
    }
    return res.status(200).send({ message: "Book Updated Successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});
//route for delete a book
route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Book Not Found" });
    }
    return res.status(200).send({ message: "Book Deleted Sucessfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "err.message" });
  }
});
export default route;
