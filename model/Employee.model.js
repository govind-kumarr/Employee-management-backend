import mongoose from "mongoose";

const EmployeeSchema = mongoose.Schema({
  name: { type: String, required: true },
  emp_id: { type: String, required: true },
  date_of_joining: { type: String, required: true },
  designation: { type: String, required: true },
});

export const EmployeeModel = mongoose.model("employees", EmployeeSchema);


