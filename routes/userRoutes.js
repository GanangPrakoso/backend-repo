const controller = require("../controllers");
const router = require("express").Router();

router.get("/fetch-user-data", controller.getAll);

module.exports = router;
