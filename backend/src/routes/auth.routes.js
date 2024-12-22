const express = require("express");
const CustomerController = require("../controllers/auth.controller");
const protect = require("../middleware/auth");

const router = express.Router();

router.post("/register", CustomerController.registerCustomer);
router.post("/login", CustomerController.loginCustomer);

router.get("/dashboard", protect, CustomerController.dashboard);

module.exports = router;
