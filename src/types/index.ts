import { Gender, WorkArea } from "../model/Employee";

export interface IEmployee {
  fistName: string;
  lastName: string;
  age: number;
  gender: Gender;
  workArea: WorkArea;
  inTime: number;
  outTime: number;
}
