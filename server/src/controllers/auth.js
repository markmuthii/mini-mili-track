import { compareSync, hashSync } from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../db/Models/User.js";

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if users exists with that email
    const user = await User.findOne({ email });

    if (!user) {
      throw Error("Invalid credentials");
    }

    if (!compareSync(password, user.password)) {
      throw Error("Invalid credentials");
    }

    // remove the password from the user object
    user.password = undefined;

    // Generate the auth JWT token
    const token = jwt.sign({ user }, process.env.JWT_SIGNATURE);

    // Set the token within the cookies
    res.cookie("auth_token", token, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    return res.send({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.log("Error logging in: ", error);

    return res.status(400).send({
      message: error.message || "Something went wrong. Please try again",
    });
  }
};

export const registerController = async (req, res) => {
  try {
    // Extract data from the body
    const {
      name: nameData,
      email: emailData,
      password: passwordData,
    } = req.body;

    // Perform some data validation
    if (!nameData || !emailData || !passwordData) {
      throw Error("All fields are required");
    }

    // Check if the email already exists
    const userExists = await User.findOne({
      email: emailData,
    });

    console.log(userExists);

    if (userExists) {
      throw Error("Email already exists");
    }

    // Hash the password
    const hashedPassword = hashSync(passwordData);

    // Create the user
    const newUser = await User.create({
      name: nameData,
      email: emailData,
      password: hashedPassword,
    });

    return res.send({
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    console.log("Error creating user: ", error);

    return res.status(400).send({
      message: error.message || "Something went wrong. Please try again",
    });
  }
};
