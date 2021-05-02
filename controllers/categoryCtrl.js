const Category = require("../models/categoryModel");

const categoryCtrl = {
  getCategories: async (req, res) => {
    try {
      const categories = await Category.find();

      res.json(categories);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createCategories: async (req, res) => {
    try {
      //if user have role = 1 --> admin
      //only admin can CRUD (create,read,update and delete) category
      const { name } = req.body;
      const category = await Category.findOne({ name });
      if (category)
        return res.status(400).json({ msg: "This category already exists." });

      const newCategory = new Category({ name });

      await newCategory.save();

      res.json({ msg: "Create a category" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteCategories: async (req, res) => {
    try {
      await Category.findByIdAndDelete(req.params.id);
      res.json({ msg: "Category removed successfully." });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateCategories: async (req, res) => {
    try {
      const { name } = req.body;
      await Category.findOneAndUpdate({ _id: req.params.id }, { name });
      res.json({ msg: "Category updated successfully." });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = categoryCtrl;
