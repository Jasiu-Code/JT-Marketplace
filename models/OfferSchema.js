import mongoose from "mongoose";
const { Schema } = mongoose;

const offerSchema = new Schema({
  userID: Number,
  title: String,
  description: String,
  hourlyRate: Number,
  date: { type: Date, default: Date.now },
});

const Offer = mongoose.model("Offer", offerSchema);
