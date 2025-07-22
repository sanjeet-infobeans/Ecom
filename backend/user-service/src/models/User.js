"use strtict";
const mongoose = require("mongoose");
const _ = require("lodash");
const bcrypt = require("bcryptjs");
const { bcryptConfig } = require("../config");

const userSchema = new mongoose.Schema(
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
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

//Indexs...
userSchema.index({ role: 1 });
userSchema.index({ createdAt: -1 });

//Presave middleware to save hashed password

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(bcryptConfig.hashRound);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.toJSON = function () {
  const user = this.toObject(); // Convert mongoose document to plan javascript
  return _.omit(user, ["password", "__v"]);
};

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
const User = mongoose.model("User", userSchema);

module.exports = User;
