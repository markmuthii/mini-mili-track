import { Router } from "express";
import { authRouter } from "./auth.js";
import { helloController, usersController } from "../../controllers/index.js";

const v1Router = Router();

v1Router.use("/auth", authRouter);

v1Router.get("/hello", helloController);

v1Router.get("/users", usersController);

export { v1Router };
