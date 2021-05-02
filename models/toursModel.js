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
    content: {
      type: String,
      required: true,
    },
    placetovisit: {
      type: String,
      required: true,
    },
    languageshandled: {
      type: String,
      required: true,
    },
    availability: {
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
    images: {
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

module.exports = mongoose.model("Tours", tourSchema);
