const { User } = require("../models/userModel");

const isAdmin = async (req, res, next) => {
  try {
    const userId = req.user;

    console.log(userId);

    if (!userId) {
      return res.status(400).json({ message: "User data must be provided. " });
    }

    const foundUser = await User.findById(userId);
    if (!foundUser || foundUser?.isAdmin === false) {
      return res.status(400).json({ message: "Invalid user." });
    }

    // req.userId = foundUser._id;
    next();
    // console.log(data);
    // const foundUser = await musicArtists.findOne();
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = isAdmin;
