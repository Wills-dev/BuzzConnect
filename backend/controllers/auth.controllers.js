import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { firstName, lastName, userName, password, confirmPassword, gender } =
      req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password don't match" });
    }

    const user = await User.findOne({ userName });

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    //HASH PASSWORD HERE
    const salt = await bcrypt.genSalt(10);
    const hanshedPassword = await bcrypt.hash(password, salt);
    //https://avatar-placeholder.iran.liara.run/

    const boyProfilePic = `https://avatar-placeholder.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar-placeholder.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
      firstName,
      lastName,
      userName,
      password: hanshedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      // Generate JWT token  here
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        message: "Sign up successful!",
        data: {
          id: newUser._id,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          userName: newUser.userName,
          gender: newUser.gender,
          profilePic: newUser.profilePic,
        },
      });
    } else {
      return res.status(400).json({ error: "Invalid User data" });
    }
  } catch (error) {
    console.log("error in sing up controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      message: "Login successfull",
      data: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        profilePic: user.profilePic,
      },
    });
  } catch (error) {
    console.log("error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfull" });
  } catch (error) {
    console.log("error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
