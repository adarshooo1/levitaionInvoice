// Importing mongoose library for MongoDB schema creation and manipulation.
const mongoose = require("mongoose");

// Defining the schema structure for the 'User' collection in the MongoDB database.
const userSchema = new mongoose.Schema(
  {
    // Name field for the user, must be a string and is required.
    name: {
      type: String,
      required: true,
    },
    // Email field for the user, must be a string, required, and unique.
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // Password field for the user, must be a string and is required.
    password: {
      type: String,
      required: true,
    },
    createdAt: Date,
    updatedAt: Date,
  },
  { timestamps: true }
);

// Creating a model based on the defined schema. This model will interact with the 'User' collection in the MongoDB database.
const User = mongoose.model("users", userSchema);

// Exporting the userModel so that it can be used elsewhere in the application.
module.exports = User;
