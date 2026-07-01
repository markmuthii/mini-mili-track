import { User } from "../db/Models/User.js";

export const getUsers = async (req, res) => {
  const users = await User.find().select("-password");

  return res.send({
    data: users,
  });
};
