import mongoose from "mongoose";

const EmployeeSchema = mongoose.Schema({
  name: { type: String, required: true },
  emp_id: { type: String, required: true },
  date_of_joining: { type: String, required: true },
  designation: { type: String, required: true },
  prev_emp_data: { type: Array, default: [] },
});

export const EmployeeModel = mongoose.model("employees", EmployeeSchema);

const prevEmplMent = mongoose.Schema({
  emp_id: { type: String, required: true },
  company_name: { type: String, required: true },
  designation: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  role: { type: String, required: true },
});

export const PrevEmpl = mongoose.model("prev_emp", prevEmplMent);
