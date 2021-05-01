const Circuits = require("../models/circuitsModel");

const circuitsCtrl = {
  getCircuits: async (req, res) => {
    try {
      const circuits = await Circuits.find();

      res.json(circuits);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createCircuits: async (req, res) => {
    try {
      const {
        circuits_id,
        title,
        price,
        output,
        service,
        pax,
        destinations,
        images,
        itinerary,
        category,
      } = req.body;

      const circuit = await Circuits.findOne({ circuits_id });
      if (circuit) {
        return res.status(400).json({ msg: "This circuit already exists." });
      }

      const newCircuit = new Circuits({
        circuits_id,
        title: title.toLowerCase(),
        price,
        output,
        service,
        pax,
        destinations,
        images,
        itinerary,
        category,
      });

      await newCircuit.save();
      res.json({ msg: "Created a circuit." });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteCircuits: async (req, res) => {
    try {
      await Circuits.findByIdAndDelete(req.params.id);

      res.json({ msg: "Deleted a Circuit" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateCircuits: async (req, res) => {
    try {
      const {
        title,
        price,
        output,
        service,
        pax,
        destinations,
        images,
        itinerary,
        category,
      } = req.body;

      await Circuits.findOneAndUpdate(
        { _id: req.params.id },
        {
          title: title.toLowerCase(),
          price,
          output,
          service,
          pax,
          destinations,
          images,
          itinerary,
          category,
        }
      );

      res.json({ msg: "Updated a Circuit." });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = circuitsCtrl;
