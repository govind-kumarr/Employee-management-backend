import { config } from "dotenv";
import express from "express";
import cors from "cors";
import { makeConnection } from "./db/db.js";
import { EmployeeRouter } from "./routes/employees.routes.js";
import { UserRouter } from "./routes/user.routes.js";

config();
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res, next) => {
  res.send("App is running");
});
app.use("/users", UserRouter);
app.use("/employees", EmployeeRouter);

makeConnection(() => {
  app.listen(process.env.port);
  console.log(`App is running at port ${process.env.port}`);
});
