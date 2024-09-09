import { ddmmyyyySlashed } from "./datehandling";

export default class Employment {
  constructor({ job_title, employer, start_date, end_date }) {
    this.job_title = job_title;
    this.employer = employer;
    this.start_date = ddmmyyyySlashed(start_date);
    this.end_date = ddmmyyyySlashed(end_date);
  }
}
