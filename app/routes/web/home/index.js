const express = require("express");

const router = express.Router();

// Controllers
const homeController = require("../../../http/controllers/homeController");

// Home Routes
router.get("/", homeController.index.bind(homeController));

module.exports = router;
