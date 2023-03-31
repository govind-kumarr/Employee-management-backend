import { Router } from "express";
import { getUsers, userLogin } from "../controllers/user.controllers.js";

export const UserRouter = Router();

UserRouter.post("/login", userLogin);

UserRouter.get("/", getUsers);
