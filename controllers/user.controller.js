const bc = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const secret = config.get("secret");

exports.register = async (req, res) => {
  const { name, email, phone, adress, password, registerDate, userRole } =
    req.body;
  const userExists = await User.findOne({ email });
  if (userExists) return res.status(409).json({ msg: "User already exists!" });
  try {
    const newUser = new User({
      name,
      email,
      password,
      phone,
      adress,
      registerDate,
      userRole,
    });
    let salt = await bc.genSalt(10);
    let hash = await bc.hash(password, salt);
    newUser.password = hash;
    await newUser.save();
    const payload = {
      id: newUser._id,
    };
    let token = jwt.sign(payload, secret);
    res.send({
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        adress: newUser.adress,
        registerDate: newUser.registerDate,
        userRole: newUser.userRole,
      },
    });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "User does not exist!" });
    const isMatch = await bc.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
    const payload = {
      id: user._id,
    };
    const token = await jwt.sign(payload, secret);
    res.send({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
    });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};
exports.auth = (req, res) => {
  res.send(req.user);
};
