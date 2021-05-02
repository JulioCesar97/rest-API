const router = require("express").Router();
const categoryCtrl = require("../controllers/categoryCtrl");

router
  .route("/category")
  .get(categoryCtrl.getCategories)
  .post(categoryCtrl.createCategories);

router
  .route("/category/:id")
  .delete(categoryCtrl.deleteCategories)
  .put(categoryCtrl.updateCategories);

module.exports = router;
