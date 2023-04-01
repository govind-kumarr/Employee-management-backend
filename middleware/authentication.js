import { config } from "dotenv";
import jwt from "jsonwebtoken";

config();

export const authenticate = async (req, res, next) => {
  const { token } = req.headers;
  try {
    const decoded = jwt.verify(token, process.env.secret);
    // console.log(decoded, "decoded token");
    if (decoded) next();
    else {
      res.send("You are not authorized to access this resource");
    }
  } catch (error) {
    console.log("You are not authenticated", token);
    res.send("You are not authorized to access this resource");
  }
};
