const router = require("express").Router();
const circuitsCtrl = require("../controllers/circuitsCtrl");

router
  .route("/circuits")
  .get(circuitsCtrl.getCircuits)
  .post(circuitsCtrl.createCircuits);

router
  .route("/circuits/:id")
  .delete(circuitsCtrl.deleteCircuits)
  .put(circuitsCtrl.updateCircuits);

module.exports = router;
