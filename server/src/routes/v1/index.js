import { Router } from "express";
import { authRouter } from "./auth.js";
import { helloController } from "../../controllers/index.js";
import { usersRouter } from "./users.js";

const v1Router = Router();

v1Router.use("/auth", authRouter);

v1Router.get("/hello", helloController);

v1Router.use("/users", usersRouter);

export { v1Router };
