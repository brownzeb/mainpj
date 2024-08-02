const express = require("express");
const userController = require("../controllers/userController.js");
const userAuthController = require("../controllers/userAuthController.js");
const verifyJwt = require("../middlewares/verifyJwt.js");
// const verify = require("jsonwebtoken/verify.js");
// import upload from "../middlewares/upload.js";

const router = express.Router();

router.route("/register").post(userController.register);
router.route("/settings").patch(verifyJwt, userController.profileSettings);
router.route("/allartists").get(userController.getAllUsers);
// router
//   .route("/getsingleartistsongs/:userId")
//   .get(artistController.getSpecificArtistSong);

// router.route("/uploadimage").post(artistController.uploadImage);

// AUTHENTICATIONS => LOGIN | LOGOUT | REFRESH

router.route("/login").post(userAuthController.login);
router.route("/refresh").get(userAuthController.refresh);
router.route("/logout").get(userAuthController.logout);
router.route("/forgotpwd").post(userAuthController.forgotPassword);
router.route("/resetpwd").patch(userAuthController.resetPassowrd);

module.exports = router;
