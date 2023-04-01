import { EmployeeModel } from "../model/Employee.model.js";

export const getEmployees = async (req, res) => {
  try {
    const employees = await EmployeeModel.find();
    res.send(employees);
  } catch (error) {
    console.log("Error while getting employees!\n", error);
    res.status(404).send("Something went wrong");
  }
};

export const getEmployee = async (req, res) => {
  const { emp_id } = req.params;
  try {
    const employee = await EmployeeModel.findOne({ emp_id });
    res.send(employee);
  } catch (error) {
    console.log("Error while fetching employee", error);
  }
};

export const addEmployee = async (req, res) => {
  const data = req.body;
  try {
    const flag = await doEmpExists(data.emp_id);
    if (flag != null) {
      res.send(`Employee exists with similar employee id -> ${data.emp_id}`);
      return;
    }
    await EmployeeModel.insertMany([data]);
    res.status(200).send("Employee Added Successfully");
    console.log("Data successfully inserted");
  } catch (error) {
    console.log("Error while adding data!\n", error);
    res.status(404).send("Something went wrong!");
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

export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    await EmployeeModel.findByIdAndUpdate(id, updateData);
    res.send("Successfully updated!");
  } catch (error) {
    console.log("Error updating employee\n", error);
    res.send("Something Went Wrong");
  }
};

export const doEmpExists = (emp_id) => EmployeeModel.exists({ emp_id });
