const router = require("express").Router();
const toursCtrl = require("../controllers/toursCtrl");

router.route("/tours").get(toursCtrl.getTours).post(toursCtrl.createTour);

module.exports = router;
