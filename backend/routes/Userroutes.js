import bcrypt from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/Usermodel.js";

const route = express.Router();
const SECRET_KEY = "dhaya";

route.post("/register", async (req, res) => {
  try {
    if (!req.body.name || !req.body.email || !req.body.password) {
      return res.status(400).send("Please fill all the fields");
    }
    const existuser = await User.findOne({ Email: req.body.email });
    if (existuser) {
      return res.status(400).send("User already exists");
    }
    const hashedpassword = await bcrypt.hash(req.body.password, 10);
    const newuser = new User({
      Name: req.body.name,
      Email: req.body.email,
      Password: hashedpassword,
    });

    await newuser.save();
    return res.status(200).send({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    if (error.name === "ValidationError") {
      return res.status(400).send({ message: error.message });
    } else {
      return res.status(500).send({ message: "An unexpected error occurred" });
    }
  }
});

route.post("/login", async (req, res) => {
  try {
    if (!req.body.email || !req.body.password || !req.body.name) {
      return res.status(400).send("Please fill all the fields");
    }

    const user = await User.findOne({ Email: req.body.email });
    if (!user) {
      return res.status(400).send("User not found");
    }
    if (!(req.body.name === user.Name)) {
      return res.status(400).send("Name not found");
    }
    const validpassword = await bcrypt.compare(
      req.body.password,
      user.Password
    );
    if (!validpassword) {
      return res.status(400).send("Invalid password");
    }

    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: "1h" });
    return res.status(200).json({ message: "Login successful", token: token });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
});

export default route;
