const { User } = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const validator = require("email-validator");
// mongodb = require("mongodb");
// Grid = require("gridfs-stream");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { dbConn } = require("../config/dbConn.js");
const fs = require("fs");
const asyncHandler = require("express-async-handler");
const WAValidator = require("multicoin-address-validator");
// const asyncHandler = require("express-async-handler");
const { setIntervalAsync, clearIntervalAsync } = require("set-interval-async");
// const { agenda } = require("../index.js");
const Agenda = require("agenda");
// const express = require("express");

// const { processEvery } = require("agenda/dist/agenda/process-every.js");
// const {
//   setShouldSaveResult,
// } = require("agenda/dist/job/set-shouldsaveresult.js");

// const app = express();

dotenv.config();

// const client = (async () => await dbConn())();

// console.log(client.then((dt) => dt));
// passing an existing mongodb-native MongoClient instance

// const db = mongoose.connection

// const datbs = db.collection()

// MAIN
// mongo: mongoose.connection.collection("harvestusers").conn.db,
const agenda = new Agenda({
  db: {
    address: process.env.DB_URI,
    collection: "harvestusers",
  },
});

// worked
// const agenda = new Agenda({
//   mongo: mongoose.connection.collection("harvestusers").conn.db,
// });

// var agenda = new Agenda();
// agenda.mongo(
//   mongoose.connection.collection("harvestusers").conn.db,
//   function (err) {
//     if (err) {
//       console.log({ errMsg: err });
//     }
//   }
// );

// const agenda = new Agenda();

// agenda.mongo(mongoose.connection.db, "harvestusers");
// processEvery: "5 seconds",
// const agenda = new Agenda();

// agenda.mongo(
//   mongoose.connection.collection("harvestusers").conn.db,
//   ["harvestusers"],
//   (err) => {
//     if (err) {
//       console.log(err);
//     }
//   }
// );

// const agenda = new Agenda(
//   mongoose.connection.collection("harvestusers").conn.db,
//   "harvestusers",
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("connected now");
//     }
//   }
// );
// const agenda = new Agenda({mongo: dbConn().})

// agenda.mongo(
//   mongoose.connection.collection("harvestusers").conn.db,
//   ["harvestusers"],
//   function (err) {
//     console.log(err);
//   }
// );

// UTILITY FUNCTION
const editor = (prev, rec) => {
  return prev === "" && rec === "None" ? prev : rec;
};

// const profitGenerator = (roi, inv, cls) => {
//   const daily = 1000 * 10;
//   let generatedProfit = 0;

//   const intervalId = setInterval(() => {
//     generatedProfit = (Number(inv) * Number(roi)) / 100;
//     console.log({ genprofit: generatedProfit });
//     if (cls == true) {
//       clearInterval(intervalId);
//       console.log("cleard");
//     }
//   }, daily);
// };

// END OF UTILITY FUNCTIONS

// MODIFY SINGLEUSERS DATA
const editUserData = asyncHandler(async (req, res) => {
  const { balance, genProfit, profit, plan, loss, invested, id } = req.body;

  console.log({ inv: invested, plan, genProfit });

  if (
    isNaN(balance) === true ||
    isNaN(invested) === true ||
    isNaN(profit) ||
    isNaN(loss)
  ) {
    return res.status(400).json({ message: "Please enter a digit." });
  }

  const foundUser = await User.findById(id);

  if (!foundUser) {
    return res.status(400).json({ message: "Invalid user" });
  }

  const profitGenerator = (recvPlan) => {
    let investedAmount = Number(invested);
    let standardPlanValue = (investedAmount * 6) / 100;
    let megaPlanValue = (investedAmount * 8) / 100;
    let deluxePlanValue = (investedAmount * 10) / 100;
    let vipPlanValue = (investedAmount * 15) / 100;

    let userPlan = recvPlan;
    let generatedProfit = 0;

    if (userPlan === "standard") {
      generatedProfit = standardPlanValue;
      // return { invPlan: recvPlan, value: standardPlanValue };
    }

    if (userPlan.toLowerCase() === "mega") {
      generatedProfit = megaPlanValue;
      // return { invPlan: recvPlan, value: megaPlanValue };
    }

    if (userPlan.toLowerCase() === "deluxe") {
      generatedProfit = deluxePlanValue;
      // return { invPlan: recvPlan, value: deluxePlanValue };
    }

    if (userPlan.toLowerCase() === "vip") {
      generatedProfit = vipPlanValue;
      // return { invPlan: recvPlan, value: vipPlanValue };
    }
    return generatedProfit;
  };

  const generatedProfit = profitGenerator(plan);

  console.log(generatedProfit);
  console.log({ expected: Number(profit) + Number(generatedProfit) });

  const saveToDb = async () => {
    console.log("saving...");
    const savedProfit = await User.findOneAndUpdate(
      { _id: foundUser?._id },
      {
        profit: Number(foundUser?.profit) + Number(newProfit),
      }
    );
    console.log(savedProfit);

    if (savedProfit) {
      console.log("done saving");
      return true;
    }
  };

  let finalProfit = 0;
  let newProfit = 0;
  let newBalance = 0;
  agenda.define("generate profit", async (job) => {
    // console.log("saving...");
    newProfit = newProfit + Number(generatedProfit);
    finalProfit = Number(foundUser?.profit) + Number(newProfit);
    newBalance = Number(foundUser?.invested) + Number(finalProfit);
    const savedProfit = await User.findOneAndUpdate(
      { _id: foundUser?._id },
      {
        profit: finalProfit,
        balance: newBalance,
      }
    );
    // job.repeatEvery("2 seconds", {
    //   skipImmediate: true,
    // });
    await job.save();
    console.log(newProfit);
    console.log(finalProfit);
    console.log("saved successfully");
  });
  // { setShouldSaveResult: true }'

  if (genProfit === true) {
    (async function () {
      console.log("starting");
      await agenda.start();
      await agenda.every("2 minutes", "generate profit");
    })();
  }

  if (genProfit === false) {
    (async function () {
      await agenda.stop();
    })();
  }

  // mainFunc();

  const updatedUser = await User.findOneAndUpdate(
    { _id: foundUser?._id },
    {
      invested: invested ?? "00.00",

      loss: loss ?? "00.00",
      plan: plan ?? "None",
    }
  );

  if (!updatedUser) {
    return res.status(400).json({ message: "Invalid user data recieved." });
  }

  // console.log(foundUser);

  return res.status(200).json({ message: "success" });
});

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

  console.log({ bal: Number(foundUser?.balance), withdrawalAmount });
  if (Number(foundUser?.balance) < Number(withdrawalAmount)) {
    return res.status(400).json({ message: "Insufficient funds." });
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
    message: ` Our system will confirm your deposit of ${depositedAmount} to our ${walletType} wallet very shortly and the deposited value will reflect on your dashbaord if confirmed.`,
  });
});

// SEEN ALERT FOR ADMIN

const home = (req, res) => {
  return res.status(200).send("<h1>Welcome home </h1>");
};

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
  // console.log(userId);
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
  home,
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
