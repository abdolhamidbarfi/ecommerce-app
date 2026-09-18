const express = require("express");

const router = express.Router();

// Controllers
const adminController = require("../../../http/controllers/admin/adminController");

// Admin Routes
router.get("/", adminController.index);

module.exports = router;
