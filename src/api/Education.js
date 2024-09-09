import { ddmmyyyySlashed } from "./datehandling";

export default class Education {
  constructor({ course, school, start_date, end_date }) {
    this.course = course;
    this.school = school;
    this.start_date = ddmmyyyySlashed(start_date);
    this.end_date = ddmmyyyySlashed(end_date);
  }
}
