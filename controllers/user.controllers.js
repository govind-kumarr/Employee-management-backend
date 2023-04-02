import jwt from "jsonwebtoken";
import { config } from "dotenv";

import { UserModel } from "../model/User.model.js";

config();

export const userLogin = async (req, res, next) => {
  const credentials = req.body;
  try {
    const user = await UserModel.find(credentials);
    if (user.length >= 1) {
      const token = jwt.sign(credentials, process.env.secret);
      res.send({
        message: "Successfully Logged in!",
        token,
      });
    } else res.send({ message: "Login Failed" });
  } catch (error) {
    console.log("Error while retrieving user", error);
    res.send("Something went wrong!");
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await UserModel.find();
    res.send(users);
  } catch (error) {
    console.log("Error while fetching users", error);
    res.send("Something went wrong!");
  }
};
