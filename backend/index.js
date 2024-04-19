import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import Userroute from "./routes/Userroutes.js";
import bookroutes from "./routes/bookroutes.js";
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 5000;
//routes for book model
app.use("/books", bookroutes);
app.use("/user", Userroute);
//connect databases and localhost
app.listen(PORT, async () => {
  await mongoose
    .connect("mongodb+srv://dhaya123:Dhaya%40123@cluster0.amircbx.mongodb.net/")
    .then(() => {
      console.log(`Server is running on port ${PORT}`);
      console.log("connected to database!");
    })
    .catch((err) => {
      console.log(err);
    });
});
