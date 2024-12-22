const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["free", "paid"],
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    eligibilityCriteria: {
      type: String,
      required: true,
    },
    couponCode: {
      type: String,
      required: true,
      unique: true,
    },
    couponPrice: {
      type: Number,
      required: function () {
        return this.type === "paid";
      },
      default: null,
    },
  },
  { timestamps: true }
);

const Coupon = mongoose.model("Coupon", couponSchema);

module.exports = Coupon;
