const router = require("express").Router();
const toursCtrl = require("../controllers/toursCtrl");

router.route("/tours").get(toursCtrl.getTours).post(toursCtrl.createTours);

router
  .route("/tours/:id")
  .delete(toursCtrl.deleteTours)
  .put(toursCtrl.updateTours);

module.exports = router;
