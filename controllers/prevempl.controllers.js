import { isValidDate } from "../functions/isValidDate.js";
import { PrevEmpl } from "../model/Employee.model.js";
import { doEmpExists } from "./employee.controller.js";

export const postEmploymentData = async (req, res) => {
  const { emp_id } = req.params;
  const data = req.body;
  let flag = await doEmpExists(emp_id);
  let validDate = isValidDate(data?.from, data?.to);
  if (!flag._id || !validDate) return res.send("Invalid data");
  try {
    await PrevEmpl.insertMany([data]);
    res.send("Successfully inserted data!");
  } catch (error) {
    console.log("Error inserting data\n", error);
    res.send("Something went wrong!");
  }
};

export const getEmploymentData = async (req, res, next) => {
  const { emp_id } = req.params;
  try {
    const data = await PrevEmpl.find({ emp_id });
    res.send(data);
  } catch (err) {
    console.log("Error occurred: while fetching prev employment data", err);
    res.send("Something went wrong!");
  }
};

export const deleteEmploymentData = async (req, res) => {
  const { id } = req.params;
  try {
    await PrevEmpl.findByIdAndDelete(id);
    res.send("Deleted Data Successfully!");
  } catch (err) {
    console.log("Error occurred: while deleting prev employment data", err);
    res.send("Something went wrong!");
  }
};
