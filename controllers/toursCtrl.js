const Tours = require("../models/toursModel");

const toursCtrl = {
  getTours: async (req, res) => {
    try {
      const tours = await Tours.find();

      res.json(tours);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createTour: async (req, res) => {
    try {
      const {
        tours_id,
        title,
        price,
        description,
        content,
        includes,
        doesnotinclude,
        location,
        images,
        itinerary,
        category,
      } = req.body;

      const tour = await Tours.findOne({ tours_id });
      if (tour) {
        return res.status(400).json({ msg: "This tour already exists." });
      }

      const newTour = new Tours({
        tours_id,
        title: title.toLowerCase(),
        price,
        description,
        content,
        includes,
        doesnotinclude,
        location,
        images,
        itinerary,
        category,
      });
      await newTour.save();
      res.json({ msg: "Created a tour." });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = toursCtrl;
