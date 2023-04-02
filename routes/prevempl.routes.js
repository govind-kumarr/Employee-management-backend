import { Router } from "express";
import {
  getEmploymentData,
  postEmploymentData,
} from "../controllers/prevempl.controllers.js";

export const PrevEmplRouter = Router();

PrevEmplRouter.post("/:emp_id", postEmploymentData);

PrevEmplRouter.get("/:emp_id", getEmploymentData);
