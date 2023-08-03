const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { number, password } = req.body;
    if (!(number.length === 10)) {
      return res.status(422).json({ message: "Number must have 10 digits." });
    }
    if (!password) {
      return res
        .status(422)
        .json({ message: "Please enter password with min length of 5." });
    }
    const user = await User.findOne({ number });
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        const payload = {
          number: user.number,
          userId: user._id,
          name: user.name,
          privilege: user.privilege,
        };
        const token = await generateToken(payload);
        res.status(200).json(token);
      } else {
        return res
          .status(401)
          .json({ message: "Number and password doesn't match." });
      }
    } else {
      res
        .status(400)
        .json({ message: "Entered number doesn't have existing user." });
    }
  } catch (error) {
    res.status(401).json({ message: "Enter valid credentials" });
  }
};

const signin = async (req, res) => {
  try {
    const data = req.body;

    const existingUser = await User.findOne({ number: data.number });
    if (existingUser) {
      return res
        .status(401)
        .json({ message: "entered number already exists." });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(data.password, salt);
    data.password = hashPassword;
    const newUser = await User.create(data);
    const payload = {
      number: newUser.number,
      userId: newUser._id,
      name: newUser.name,
      privilege: newUser.privilege,
    };
    const token = await generateToken(payload);
    res.status(200).json(token);
  } catch (error) {
    res.status(400).send(error);
  }
};

const generateToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.SECRET_KEY,
      { expiresIn: "1h" },
      (error, token) => {
        if (error) {
          reject(error);
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = { login, signin, generateToken };
