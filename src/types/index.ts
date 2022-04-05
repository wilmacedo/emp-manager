export interface IEmployee {
  fistName: string;
  lastName: string;
  age: number;
  gender: Gender;
  workArea: WorkArea;
  inTime: number;
  outTime: number;
}

export enum DatabaseType {
  Emplyoee = "employee",
  Journay = "journay",
}

export enum Gender {
  Male,
  Female,
}

export enum WorkArea {
  Development,
  Support,
  RH,
}
