import { Router } from "express";
import {
  addEmployee,
  deleteEmployee,
  getEmployees,
} from "../controllers/employee.controller.js";

export const EmployeeRouter = Router();

EmployeeRouter.get("/", getEmployees);

EmployeeRouter.post("/", addEmployee);

EmployeeRouter.delete("/:id", deleteEmployee);
