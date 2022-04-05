import { Gender, IEmployee, WorkArea } from "../types";
import Person from "./Person";

class Employee extends Person {
  workArea: WorkArea;
  inTime: number;
  outTime: number;

  constructor(
    firstName: string = "",
    lastName: string = "",
    age: number = 0,
    gender: Gender = Gender.Male,
    workArea: WorkArea = WorkArea.Development,
    inTime: number = 0,
    outTime: number = 0
  ) {
    super(firstName, lastName, age, gender);
    this.workArea = workArea;
    this.inTime = inTime;
    this.outTime = outTime;
  }

  toJSON() {
    const employee: IEmployee = {
      fistName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      gender: this.gender,
      workArea: this.workArea,
      inTime: this.inTime,
      outTime: this.outTime,
    };

    return employee;
  }
}

export default Employee;
