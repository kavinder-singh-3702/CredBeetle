require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");

// const CustomerRoutes = require("./routes/auth.routes");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// MongoDB Connection
connectDB();

// app.use("/api/v1/customer", CustomerRoutes);

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
