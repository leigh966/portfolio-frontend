import { useState, useEffect } from "react";
import PortfollioClient from "./api/PortfollioConnection";
import { BACKEND_URL } from "./WebConfig";
import "./About.css";

async function getEmployment(setEmployment) {
  let client = new PortfollioClient(BACKEND_URL);
  setEmployment(await client.getEmployment());
}

function EmploymentSegment({ title, employer, description, start, end }) {
  return (
    <div className="employ-seg">
      <h2 className="employ-seg-title">{title}</h2>
      <h3 className="employ-seg-employer">{employer}</h3>
      <p className="employ-seg-desc">{description}</p>
      <p className="employ-seg-range">
        {start} - {end}
      </p>
    </div>
  );
}

export default function About() {
  const [employment, setEmployment] = useState([]);
  useEffect(() => getEmployment(setEmployment), []);
  console.log(employment);
  let employmentOutput = [];
  employment.forEach((elem) => {
    employmentOutput.push(
      <EmploymentSegment
        title={elem.job_title}
        employer={elem.employer}
        description=""
        start={elem.start_date.split("T")[0]}
        end={elem.end_date.split("T")[0]}
      />
    );
  });
  return (
    <>
      <h1>Employment</h1>
      {employmentOutput}
      <h2>Education</h2>
      <h3>University Of Central Lancashire</h3>
      <h3>Blackpool Sixth Form College</h3>
    </>
  );
}
