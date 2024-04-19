import mongoose from "mongoose";
const Userschema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const User = mongoose.model("User", Userschema);
