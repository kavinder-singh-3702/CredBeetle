const Customer = require("../models/customer.model");
const bcrypt = require("bcrypt");
const generateToken = require("../../utils/generateToken");

// Register a new customer
const registerCustomer = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const customerData = { name, email, password: hashedPassword };

    const customer = new Customer(customerData);
    await customer.save();

    res
      .status(201)
      .json({ message: "Customer registered successfully", customer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Customer login
const loginCustomer = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Fetch customer and include password field
    const customer = await Customer.findOne({ email }).select("+password");
    if (!customer) {
      console.log("Customer not found for email:", email);
      return res.status(404).json({ message: "Customer not found" });
    }
    console.log("Customer password retrieved from DB:", customer.password);

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, customer.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = generateToken(customer._id, "customer");

    res
      .status(200)
      .json({ message: "Login successful", token, expiresIn: "1h" });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

const dashboard = async (req, res) => {
  try {
    const customer = await Customer.findById(req.user._id).select("-password");
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json({ message: "Dashboard accessed", customer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerCustomer, loginCustomer, dashboard };
