const { User } = require("../../db");
require("dotenv").config();
const crypto = require("crypto");
const { SALT } = process.env;
const createAccount = async (firstName, lastName, email, password) => {
  const salt = SALT;
  const pass = crypto.createHash(salt).update(password).digest("hex");

  let newUser = await User.findOne({ where: { email: email } });
  if (!newUser) {
    newUser = await User.create({
      fullName: firstName + " " + lastName,
      email,
      password: pass,
    });

    return newUser;
  } else {
    return "Already exist";
  }
};

module.exports = createAccount;
