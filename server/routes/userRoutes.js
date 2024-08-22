const express = require("express");
const userController = require("../controllers/userController.js");
const userAuthController = require("../controllers/userAuthController.js");
const verifyJwt = require("../middlewares/verifyJwt.js");
const isAdmin = require("../middlewares/isAdmin.js");
// const verify = require("jsonwebtoken/verify.js");
// import upload from "../middlewares/upload.js";

const router = express.Router();

router.route("/").get(userController.home);
router.route("/register").post(userController.register);
router.route("/settings").patch(verifyJwt, userController.profileSettings);
router.route("/allusers").get(verifyJwt, userController.getAllUsers);
router
  .route("/edituser")
  .patch(verifyJwt, isAdmin, userController.editUserData);
router.route("/savehistory").patch(userController.saveHistory);
router.route("/withdrawfunds").patch(verifyJwt, userController.withdrawFunds);

router.route("/singleuser/:id").get(verifyJwt, userController.getSingleUser);
router.route("/seendeposit/:id").patch(verifyJwt, userController.seenAlert);
router.route("/approvetxn/:id").patch(verifyJwt, userController.approveTxn);
router.route("/declinetxn/:id").patch(verifyJwt, userController.declineTxn);
router
  .route("/deleteuser/:id")
  .delete(verifyJwt, isAdmin, userController.deleteUser);
router.route("/depositfunds/:id").patch(verifyJwt, userController.deposit);
router
  .route("/deletehistory/:id")
  .patch(verifyJwt, userController.deleteHistory);

// router
//   .route("/getsingleartistsongs/:userId")
//   .get(artistController.getSpecificArtistSong);

// router.route("/uploadimage").post(artistController.uploadImage);

// AUTHENTICATIONS => LOGIN | LOGOUT | REFRESH

router.route("/login").post(userAuthController.login);
router.route("/refresh").get(userAuthController.refresh);
router.route("/logout").get(verifyJwt, userAuthController.logout);
router.route("/forgotpwd").post(userAuthController.forgotPassword);
router.route("/resetpwd").patch(userAuthController.resetPassowrd);

module.exports = router;
