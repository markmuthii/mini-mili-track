import { User } from "../db/Models/User.js";

export const helloController = (req, res) => {
  res.send({
    text: "Hello John Wick",
  });
};

export const usersController = async (req, res) => {
  const users = await User.find();

  return res.send({
    data: users,
  });
};
