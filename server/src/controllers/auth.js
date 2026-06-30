import { hashSync } from "bcryptjs";
import { User } from "../db/Models/User.js";

export const loginController = (req, res) => {
  return res.send({
    message: "POST Login route",
  });
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
