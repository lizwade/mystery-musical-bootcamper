import express from "express";
import bcrypt from "bcryptjs";
import { pool } from "../db/index.js";
import passport from "../config/passportConfig.js";

const router = express.Router();

//DON'T THINK WE NEED THE BELOW SINCE WE ARE NOT LETTING USERS REGISTER

// router.post("/register", async (req, res) => {
//   const { username, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);

//   try {
//     await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
//       username,
//       hashedPassword,
//     ]);
//     res.redirect("/login");
//   } catch (err) {
//     res.status(500).send("Error registering new user");
//   }
// });

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/submit", //i changed this from dashboard
    failureRedirect: "/login",
    failureFlash: true,
  })
);

export default router;
