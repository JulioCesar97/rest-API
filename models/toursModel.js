const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
  {
    tours_id: {
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
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    includes: {
      type: String,
      required: true,
    },
    doesnotinclude: {
      type: String,
      required: true,
    },
    location: {
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tours", tourSchema);
