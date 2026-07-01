import { User } from "../db/Models/User.js";

export const helloController = (req, res) => {
  res.send({
    text: "Hello John Wick",
  });
};
