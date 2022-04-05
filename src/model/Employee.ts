import { IEmployee } from "../types";

export enum Gender {
  Male,
  Female,
}

export enum WorkArea {
  Development,
  Support,
  RH,
}

class Employee {
  firstName: string;
  lastName: string;
  age: number;
  gender: Gender;
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
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
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
