import { Gender } from "../types";

// GRASP Polymorphism pattern
abstract class Person {
  firstName: string;
  lastName: string;
  age: number;
  gender: Gender;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    gender: Gender
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  abstract toJSON(): any;
}

export default Person;
