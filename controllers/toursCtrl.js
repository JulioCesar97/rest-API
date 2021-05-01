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
  createTours: async (req, res) => {
    try {
      const {
        tours_id,
        title,
        price,
        content,
        placetovisit,
        languageshandled,
        availability,
        includes,
        doesnotinclude,
        images,
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
        content,
        placetovisit,
        languageshandled,
        availability,
        includes,
        doesnotinclude,
        images,
        category,
      });
      await newTour.save();
      res.json({ msg: "Created a tour." });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteTours: async (req, res) => {
    try {
      await Tours.findByIdAndDelete(req.params.id);
      res.json({ msg: "Deleted a Tour" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateTours: async (req, res) => {
    try {
      const {
        title,
        price,
        content,
        placetovisit,
        languageshandled,
        availability,
        includes,
        doesnotinclude,
        images,
        category,
      } = req.body;

      await Tours.findOneAndUpdate(
        { _id: req.params.id },
        {
          title: title.toLowerCase(),
          price,
          content,
          placetovisit,
          languageshandled,
          availability,
          includes,
          doesnotinclude,
          images,
          category,
        }
      );
      res.json({ msg: "Updated a Tour." });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = toursCtrl;
