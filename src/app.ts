import { Gender, WorkArea } from "./model/Employee";
import EmployeeBuilder from "./model/EmployeeBuilder";
import Storage, { DatabaseType } from "./storage";
import { IEmployee } from "./types";

const storage = new Storage(DatabaseType.Emplyoee);

// Create
const builder = new EmployeeBuilder();
builder.setFirstName("Wil").setLastName("Macedo");
builder.setAge(22);
builder.setGender(Gender.Male);
builder.setWorkArea(WorkArea.Development);
builder.setInTime(new Date().getTime()).setOutTime(new Date().getTime());

const employee = builder.build();
console.log("Employee created: ", employee);

// Read
const employeeList = JSON.parse(storage.getData());
console.log("Employee list: ", employeeList);

// Update
const newData = [employee];
storage.setData(newData);
console.log("New data: ", newData);

// Delete
const dbData: IEmployee[] = JSON.parse(storage.getData());
const removedData = dbData.filter((employee) => employee.age !== 22);
storage.setData(removedData);
console.log("Removed data: ", removedData);
