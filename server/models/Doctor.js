import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    specialty: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Doctor", userSchema);