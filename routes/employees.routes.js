import { Router } from "express";
import {
  addEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
} from "../controllers/employee.controller.js";

export const EmployeeRouter = Router();

EmployeeRouter.get("/", getEmployees);

EmployeeRouter.get("/:emp_id", getEmployee);

EmployeeRouter.patch("/:id", updateEmployee);

EmployeeRouter.post("/", addEmployee);

EmployeeRouter.delete("/:id", deleteEmployee);
