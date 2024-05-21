const User = require("../model/userSchema");
const bcrypt = require("bcrypt");
const registrationController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //check you exits email
    const userExisit = await User.exists({ email });

    if (userExisit) {
      return res.status(409).send("E-mail- alrady Exisit. try a new email");
    }

    //encrypted password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // user create

    const user = await User.create({
      username: username,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    // create JWT Token
    const token = "Dammy JWT Token";

    res.status(201).send({
      userDetails: {
        token: token,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    return res.status(500).send("Error Occured. please try again");
  }
};

module.exports = registrationController;
