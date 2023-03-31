import { EmployeeModel } from "../model/Employee.model.js";

export const getEmployees = async (req, res, next) => {
  try {
    const employees = await EmployeeModel.find();
    res.send(employees);
  } catch (error) {
    console.log("Error while getting employees!\n", error);
    res.status(404).send("Something went wrong");
  }
};

export const addEmployee = async (req, res, next) => {
  const data = req.body;
  try {
    await EmployeeModel.insertMany([data]);
    res.status(200).send("Employee Added Successfully");
    console.log("Data successfully inserted");
  } catch (error) {
    console.log("Error while adding data!\n", error);
    res.status(404).send("Something wne");
  }
};

export const deleteEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    await EmployeeModel.findByIdAndDelete(id);
    res.send("Employee got deleted!");
  } catch (error) {
    console.log("Error while deleting employee", error);
    res.send("Something went wrong!");
  }
};
