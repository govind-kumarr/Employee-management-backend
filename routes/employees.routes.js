import { Router } from "express";
import {
  addEmployee,
  deleteEmployee,
  getEmployees,
  updateEmployee,
} from "../controllers/employee.controller.js";

export const EmployeeRouter = Router();

EmployeeRouter.get("/", getEmployees);

EmployeeRouter.patch("/:id", updateEmployee);

EmployeeRouter.post("/", addEmployee);

EmployeeRouter.delete("/:id", deleteEmployee);
