import express from "express";
import passport from "passport";
import { getAdminUsers, logout, myProfile } from "../contollers/user.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

// render the authentication page
router.get(
  "/googlelogin",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

// after auth it will redirect to the corresponding page
router.get("/login", passport.authenticate("google"), (req, res, next) => {
  res.send("Logged In");
});

router.get("/me", isAuthenticated, myProfile);

router.get("/logout", logout);

// Admin routes
router.get("/admin/users", isAuthenticated, authorizeAdmin, getAdminUsers);

export default router;
