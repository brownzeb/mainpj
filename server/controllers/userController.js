const { User } = require("../models/userModel.js");
bcrypt = require("bcrypt");
validator = require("email-validator");
// mongodb = require("mongodb");
// Grid = require("gridfs-stream");
dotenv = require("dotenv");
mongoose = require("mongoose");
const { dbConn } = require("../config/dbConn.js");
fs = require("fs");
const asyncHandler = require("express-async-handler");
const WAValidator = require("multicoin-address-validator");
// const asyncHandler = require("express-async-handler");

dotenv.config();

// UTILITY FUNCTION
const editor = (prev, rec) => {
  return prev === "" && rec === "None" ? prev : rec;
};

const register = async (req, res) => {
  const { email, fullName, password, secretQuestion, secretAnswer } = req.body;
  if (!email || !fullName || !password || !secretQuestion || !secretAnswer) {
    return res.status(400).json({ message: "All fields are required." });
  }

  if (fullName.length > 50) {
    return res.status(400).json({ message: "Invalid name." });
  }

  if (!validator.validate(email)) {
    return res.status(400).json({ message: "Invalid email address." });
  }

  const duplicateEmail = await User.findOne({ email })
    .collation({ locale: "en", strength: 2 })
    .lean()
    .exec();

  if (duplicateEmail) {
    return res.status(400).json({ message: "User exists already" });
  }

  const hashedPwd = await bcrypt.hash(password, 10);
  const trimedSecQuest = secretQuestion.trim().toLowerCase();
  const trimedSecAns = secretAnswer.trim().toLowerCase();

  const newUser = new User({
    fullName,
    email,
    secretAnswer: trimedSecAns,
    secretQuestion: trimedSecQuest,
    password: hashedPwd,
  });

  const savedUser = await newUser.save();

  if (!savedUser) {
    return res.status(400).json({ message: "Invalid user data recieved." });
  } else {
    return res.status(201).json({ message: "Success" });
  }
};

const profileSettings = async (req, res) => {
  const {
    stageName,
    country,
    instagramAccount,
    facebookAccount,
    twitterAccount,
    whatsappAccount,
  } = req.body;
  const id = req.user;

  if (!id) {
    return res.status(400).json({ message: "User id must be provided." });
  }

  try {
    const foundUser = await User.findById(id).exec();
    if (!foundUser) {
      return res.status(400).json({ message: "User not found" });
    }

    foundUser.instagram = editor(foundUser.instagram, instagramAccount);
    foundUser.facebook = editor(foundUser.facebook, facebookAccount);
    foundUser.whatsapp = editor(foundUser.whatsapp, whatsappAccount);
    foundUser.twitter = editor(foundUser.twitter, twitterAccount);
    foundUser.country = editor(foundUser.country, country);
    foundUser.stageName = editor(foundUser.stageName, stageName);

    const updatedUserData = await User.findByIdAndUpdate(
      { _id: foundUser._id },
      {
        instagram: foundUser.instagram,
        facebook: foundUser.facebook,
        twitter: foundUser.twitter,
        whatsapp: foundUser.whatsapp,
        stageName: foundUser.stageName,
        country: foundUser.country,
      }
    );

    if (updatedUserData) {
      return res.status(200).json({ message: "data updated successfully." });
    } else {
      return res.status(400).json({ message: "Invalid user data recieved." });
    }
  } catch (error) {
    throw new Error(error);
  }
};

// GET ALL USERS

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({}).lean().select("-password");
    if (!allUsers || allUsers.length === 0) {
      return res.status(400).json({ message: "No user found. " });
    } else {
      return res.status(200).json({ allUsers });
    }
  } catch (error) {
    return res.status(error?.statusCode).json({ error });
  }
};

// GET SINGLE USER
const getSingleUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // const userId = req.user;

  // console.log(userId);
  if (!id) {
    return res.status(400).json({ message: "userid must be provided." });
  }

  const foundUser = await User.findById(id);
  if (!foundUser) {
    return res.status(400).json({ messsage: "Invalid user" });
  }

  return res.status(200).json({ foundUser });
});

// APPROVE WITHDRAWAL REQUEST

const approveTxn = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (!id) {
    return res.status(400).json({ message: "user id must be provided." });
  }

  const foundUser = await User.findOne({ _id: id });
  if (!foundUser) {
    return res.status(400).json({ message: "Invalid user." });
  }

  if (
    foundUser?.withdrawalReq === true &&
    foundUser?.approveWithdrawal === false
  ) {
    // foundUser?.approveWithdrawal = true

    const edited = await User.findByIdAndUpdate(
      { _id: foundUser?._id },
      {
        approveWithdrawal: true,
        withdrawalReq: false,
        declineWthdrawal: false,
        withdrawalWalletAddr: "",
        withdrawalWalletType: "",
        withdrawalAmount: "",
      }
    );

    const savedField = edited.save();

    if (!savedField) {
      return res.status(400).json({ message: "Invalid user data recieved" });
    }

    return res
      .status(200)
      .json({ message: " Withdrawal approved successfully." });
  }

  return res.status(400).json({ message: "No active request." });
});

// DECLINE WITHDRAW REQUEST
const declineTxn = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (!id) {
    return res.status(400).json({ message: "user id must be provided." });
  }

  const foundUser = await User.findOne({ _id: id });
  if (!foundUser) {
    return res.status(400).json({ message: "Invalid user." });
  }

  if (
    foundUser?.withdrawalReq === true &&
    foundUser?.approveWithdrawal === false
  ) {
    // foundUser?.approveWithdrawal = true

    const edited = await User.findByIdAndUpdate(
      { _id: foundUser?._id },
      {
        approveWithdrawal: false,
        withdrawalReq: false,
        declineWthdrawal: true,
        withdrawalWalletAddr: "",
        withdrawalWalletType: "",
        withdrawalAmount: "",
      }
    );

    const savedField = edited.save();

    if (!savedField) {
      return res.status(400).json({ message: "Invalid user data recieved" });
    }

    return res.status(200).json({ message: " Withdrawal declined." });
  }

  return res.status(400).json({ message: "No active request." });
});

// MODIFY SINGLEUSERS DATA
const editUserData = asyncHandler(async (req, res) => {
  const { balance, profit, plan, loss, id } = req.body;

  if (isNaN(balance) === true || isNaN(profit) || isNaN(loss)) {
    return res.status(400).json({ message: "Please enter a digit." });
  }

  const foundUser = await User.findById(id);
  if (!foundUser) {
    return res.status(400).json({ message: "Invalid user" });
  }
  const updatedUser = await User.findOneAndUpdate(
    { _id: foundUser?._id },
    {
      balance: balance ?? "00.00",
      profit: profit ?? "00.00",
      loss: loss ?? "00.00",
      plan: plan ?? "None",
    }
  );

  if (!updatedUser) {
    return res.status(400).json({ message: "Invalid user data recieved." });
  }

  return res.status(200).json({ message: "success" });
});

// WITHDRAW FUNDS

const withdrawFunds = asyncHandler(async (req, res) => {
  const { id, walletAddr, walletType, withdrawalAmount } = req.body;

  // console.log(id)
  if (!id || !walletType || !walletAddr || !withdrawalAmount) {
    return res.status(400).json({ message: "All field are required" });
  }

  const foundUser = await User.findById(id);
  if (!foundUser) {
    return res.status(400).json({ message: "User not found." });
  }

  if (WAValidator.validate(walletAddr, walletType) === false) {
    return res.status(400).json({ message: "Invalid wallet address" });
  }

  if (foundUser?.balance < withdrawalAmount) {
    return res.status(400).json({ message: "Insufficient fund." });
  }

  const newBalance = Number(foundUser?.balance) - Number(withdrawalAmount);
  // foundUser?.withdrawalReq = true
  // foundUser?.approveWithdrawal = false
  // foundUser?.declineWthdrawal  = false

  const updatedUser = await User.findOneAndUpdate(
    { _id: id },
    {
      balance: newBalance,
      withdrawalReq: true,
      approveWithdrawal: false,
      declineWthdrawal: false,
      withdrawalWalletAddr: walletAddr,
      withdrawalAmount,
      withdrawalWalletType: walletType,
      btc: walletType === "btc" ? walletAddr : "",
      usdt: walletType === "usdt" ? walletAddr : "",
      eth: walletType === "eth" ? walletAddr : "",
    }
  );

  const savedData = updatedUser.save();

  if (!savedData) {
    return res.status(400).json({ message: "Invalid user data." });
  }

  return res
    .status(200)
    .json({ message: "Withdrawal request sent successfully." });
});

// DEPOSIT FOR USER

const deposit = asyncHandler(async (req, res) => {
  const { id, walletType, walletAddr, depositedAmount } = req.body;

  console.log(req.body);

  if (!walletType || !walletAddr || !depositedAmount) {
    return res.status(400).json({
      message: "Please copy any wallet of your choice and deposit in it.",
    });
  }

  console.log(WAValidator.validate(walletAddr, walletType.toUpperCase()));

  if (WAValidator.validate(walletAddr, walletType) === false) {
    return res.status(400).json({ message: "Invalid wallet address" });
  }

  const foundUser = await User.findById(id);

  if (!foundUser) {
    return res.status(400).json({ message: "User not found" });
  }

  const updatedUser = await User.findOneAndUpdate(
    { _id: foundUser?.id },
    {
      depositedAmount,
      depositAlert: true,
      depositWalletAddr: walletAddr,
      depositWalletType: walletType,
    }
  );

  const savedUpdate = updatedUser.save();

  if (!savedUpdate) {
    return res.status(400).json({ message: "Invalid user data recieved" });
  }

  return res.status(200).json({
    message: ` Our system will confirm your deposit of ${depositedAmount} to our ${walletType} wallet very shortly and depoited value will reflect on your dashbaord if confirmed.`,
  });
});

// SEEN ALERT FOR ADMIN

// SAVE HISTORY

const saveHistory = asyncHandler(async (req, res) => {
  const { id, date, amount, txnType } = req.body;
  if (!id) return res.status(400).json({ message: "Credentials required." });

  const foundUser = await User.findById(id);
  if (!foundUser) return res.status(400).json({ message: "Invalid user." });

  const historyObj = { date, amount, txnType };
  // const savedData = await User.findOneAndUpdate(
  //   { _id: foundUser._id },
  //   { txnHistory: historyObj }
  // );
  foundUser.txnHistory.push(historyObj);

  const savedHistory = await foundUser.save();

  if (!savedHistory)
    return res.status(400).json({ message: "Invalid data recieved." });

  return res.status(200).json({ message: "success" });
});

// DELETE HISTORY

const deleteHistory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userId = req.user;
  console.log(userId);
  if (!id) return res.status(400).json({ message: "Credentials required." });

  const foundUser = await User.findById(id);
  if (!foundUser) return res.status(400).json({ message: "Invalid user." });

  // const historyObj = { date, amount, txnType };
  const savedHistory = await User.updateOne(
    { _id: foundUser._id },
    { $set: { txnHistory: [] } }
  );
  // foundUser.txnHistory.pull();

  // const savedHistory = await foundUser.save();

  if (!savedHistory)
    return res.status(400).json({ message: "Invalid data recieved." });

  return res.status(200).json({ message: "history cleard" });
});

const seenAlert = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ message: "Id must be provided." });

  const foundUser = await User.findById(id);
  if (!foundUser) {
    return res.status(400).json({ message: "User not found." });
  }

  if (foundUser?.depositAlert === true) {
    const updatedUser = await User.findOneAndUpdate(
      { _id: foundUser?._id },
      {
        depositAlert: false,
        depositedAmount: "00.00",
        depositWalletType: "",
      }
    );

    const savedUpdatedUser = updatedUser.save();
    if (!savedUpdatedUser) {
      return res.status(400).json({ message: "Invalid user data recieved." });
    }
  }

  return res.status(200).json({ message: "Alert cleard." });
});

// DELETE USER
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Credentials required" });
  }

  const foundUser = await User.findById(id);
  if (!foundUser) {
    return res.status(400).json({ message: "Invalid user." });
  }

  const deletedUser = await User.findOneAndDelete({ _id: foundUser._id });
  if (!deletedUser) {
    return res.status(400).json({ message: "Invalid operation" });
  }

  return res.status(200).json({ message: "success" });
});

// const getSpecificArtistSong = asyncHandler(async (req, res) => {
//   return res.send(req.params);
// const data = req.params;

// if (!data) {
//   return res.status(400).json({ message: "User id must be provided." });
// }

// return res.status(200).json({ data });

// const foundUser = await musicArtists.findOne({ _id: id });
// if (!foundUser) return res.status(400).json({ message: "User not found." });

// const userId = foundUser._id;

// const allSongFile = await GridFile.find({});

// if (allSongFile.length === 0) {
//   return res.status(400).json({ message: "Empty song list." });
// }
// const songs = songFilter(allSongFile, userId);

// if (songs.length === 0) {
//   return res.status(400).json({ message: "Empty song list." });
// }

// return res.status(200).json({ songs });
// throw new Error(error);
// return res.status(500).json({ err: error });
// });

// const uploadImage = async (req, res) => {};

module.exports = {
  register,
  profileSettings,
  getAllUsers,
  getSingleUser,
  approveTxn,
  declineTxn,
  withdrawFunds,
  seenAlert,
  editUserData,
  deposit,
  deleteUser,
  saveHistory,
  deleteHistory,
};
// getSpecificArtistSong,

// const Recipient = require("mailersend").Recipient;
// const EmailParams = require("mailersend").EmailParams;
// const MailerSend = require("mailersend");

// const mailersend = new MailerSend({
//     apiKey: "key",
// });

// const recipients = [new Recipient("recipient@email.com", "Recipient")];

// const emailParams = new EmailParams()
//     .set(require("info@domain.com")
//     .setNrequire(ame("Your Name")
//     .setRecipients(recipients)
//     .setSubject("Subject")
//     .setHtml("Greetings  require(the team, you got this message through MailerSend.")
//     .setText("Greetings  require(the team, you got this message through MailerSend.");

// mailersend.send(emailParams);
