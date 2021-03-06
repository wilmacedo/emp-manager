import Storage from "../storage";
import { DatabaseType, Gender, WorkArea } from "../types";
import Employee from "./Employee";

// GoF Builder pattern
class EmployeeBuilder {
  private employee: Employee;

  constructor() {
    this.employee = new Employee();
  }

  setFirstName(firstName: string): EmployeeBuilder {
    this.employee.firstName = firstName;
    return this;
  }

  setLastName(lastName: string): EmployeeBuilder {
    this.employee.lastName = lastName;
    return this;
  }

  setAge(age: number): EmployeeBuilder {
    this.employee.age = age;
    return this;
  }

  setGender(gender: Gender): EmployeeBuilder {
    this.employee.gender = gender;
    return this;
  }

  setWorkArea(workArea: WorkArea): EmployeeBuilder {
    this.employee.workArea = workArea;
    return this;
  }

  setInTime(inTime: number): EmployeeBuilder {
    this.employee.inTime = inTime;
    return this;
  }

  setOutTime(outTime: number): EmployeeBuilder {
    this.employee.outTime = outTime;
    return this;
  }

  build(): Employee {
    return this.employee;
  }
}

export default EmployeeBuilder;
