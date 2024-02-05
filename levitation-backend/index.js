const env = require("dotenv");
env.config();
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
const jwt = require("jsonwebtoken");

// const createUserModel = require("./models/createUser");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_COMPASS);
const User = require("./models/User");

// async function createUser() {
//   try {
//     const createdUser = await User.create({
//       name: "Adarsh",
//       email: "adarshsinghak001@gmail.com",
//       password: "Adarsh@2002",
//     });

//     console.log(createdUser);
//   } catch (error) {
//     console.log("User Already Exists");
//   }
// }
// createUser();

// async function updater() {
//   try {
//     const existingUser = await User.findOne({
//       email: "adarshsinghak001@gmail.com",
//     });
//     if (existingUser) {
//       existingUser.name = "Adarsh";
//       existingUser.save();
//     }

//     console.log(existingUser);
//   } catch (error) {
//     console.log(error);
//   }
// }
// updater();

// app.use("/", authRoutes);

app.post("/", async (req, res) => {
  // const { email, password } = req.body;

  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET
    );
    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }

  // if (!user || !user.comparePassword(password)) {
  //   return res.status(401).json({ message: "Invalid email or password" });
  // }

  // // Generate JWT Token
  // const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
  //   expiresIn: "1h",
  // });

  // return res.status(200).json({ token });
});

app.post("/register", async (req, res) => {
  try {
    //   const { name, email, password } = req.body;

    //   const existingUser = await User.findOne({ email });
    //   if (existingUser) {
    //     return res.status(400).json({ message: "Email is already registered" });
    //   }

    //   const newUser = new User({ name, email, password });
    //   await newUser.save();

    //   return res.status(200).json({ message: "User Registered" });
    // } catch (error) {
    //   console.error("Error registering user:", error);
    //   return res.status(500).json({ message: "Internal server error" });
    // }

    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (error) {
    console.log(req.body);
    console.log(error);
    console.error("Error registering user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server Connected");
});
