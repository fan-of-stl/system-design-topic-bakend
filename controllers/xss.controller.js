const User = require("../models/users.model");
const xss = require("xss");

const login = async (req, res) => {
  try {
    const username = req.body.username
    const password = req.body.password
    const sanitizedUsername = xss(username);
    const sanitizedPassword = xss(password);

    // Check if sanitization was necessary, implying potential malicious input
    if (sanitizedUsername !== username || sanitizedPassword !== password) {
      return res.status(400).json({
        message:
          "Input contains potentially harmful data. Please remove any HTML/JavaScript content.",
      });
    }

    const login = new User({ sanitizedUsername, sanitizedPassword });

    const data = await login.save();

    res.status(200).json({ message: "login success:", data: data._id });
  } catch (error) {
    console.error("error in saving", error);
  }
};

module.exports = login;
