const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false, // Ensures password is not included in queries unless explicitly selected
    },
    coupons: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Coupon",
      },
    ],
  },
  { timestamps: true }
);

// Middleware to hash password before saving

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
