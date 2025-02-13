const controller = require("../controllers");
const router = require("express").Router();

router.get("/fetch-user-data", controller.getUsers);
router.post("/create-user-data", controller.createUser);
router.put("/update-user-data/:id", controller.updateUser);

module.exports = router;
