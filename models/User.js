const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
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

    phone: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    // registerDate: {
    //   type: Date,
    //   default: Date.now,
    // },
    // isAdmin: {
    //   type: Boolean,
    //   required: true,
    //   default: false,
    // },
    userRole: {
      type: String,
      default: "User",
      roles: ["User", "Admin"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
