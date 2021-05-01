const mongoose = require("mongoose");

const circuitSchema = new mongoose.Schema(
  {
    circuits_id: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    output: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    pax: {
      type: String,
      required: true,
    },
    destinations: {
      type: String,
      required: true,
    },
    images: {
      type: Object,
      required: true,
    },
    itinerary: {
      type: Object,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Circuits", circuitSchema);
