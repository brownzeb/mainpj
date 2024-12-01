const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: ["Fullname must be provided"] },
    email: {
      type: String,
      unique: ["Email already exists."],
      required: ["Email must be provided."],
    },
    password: { type: String, required: ["Password must be provided"] },
    balance: { type: String, default: "00.00" },
    invested: { type: String, default: "00.00" },

    plan: { type: String, default: "None" },
    profit: { type: String, default: "00.00" },

    loss: { type: String, default: "00.00" },
    approveWithdrawal: { type: Boolean, default: false },
    declineWithdrawal: { type: Boolean, default: false },
    withdrawalReq: { type: Boolean, default: false },
    withdrawalAmount: { type: String, default: "00.00" },

    depositedAmount: { type: String, default: "00.00" },
    depositAlert: { type: Boolean, default: false },
    depositWalletAddr: { type: String, default: "" },
    withdrawalWalletAddr: { type: String, default: "" },

    depositWalletType: { type: String, default: "" },
    withdrawalWalletType: { type: String, default: "" },

    txnHistory: [{ type: Object }],
    isAdmin: { type: Boolean, default: false },
    btc: { type: String, default: "" },
    usdt: { type: String, default: "" },
    eth: { type: String, default: "" },
    secretQuestion: { type: String, default: "" },
    secretAnswer: { type: String, default: "" },
  },
  { timestamps: true }
);

const User =
  mongoose.models.harvestusers || mongoose.model("harvestusers", userSchema);

module.exports = { User };
