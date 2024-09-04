import { useState, useEffect } from "react";
import PortfollioClient from "./api/PortfollioConnection";
import { BACKEND_URL } from "./WebConfig";
import "./About.css";
import AboutSegment from "./AboutSegment";

const client = new PortfollioClient(BACKEND_URL);

async function fetchData(type, setData) {
  try {
    const data =
      type === "employment"
        ? await client.getEmployment()
        : await client.getEducation();
    setData(data);
  } catch (error) {
    console.error(`Failed to fetch ${type}`, error);
  }
}

function EmploymentSegment(props) {
  return (
    <AboutSegment
      className="employ-seg"
      title={props.job_title}
      subtitle={props.employer}
      description={props.description || ""}
      start={props.start.split("T")[0]}
      end={props.end.split("T")[0]}
    />
  );
}

function EducationSegment(props) {
  return (
    <AboutSegment
      className="edu-seg"
      title={props.course}
      subtitle={props.school}
      description={props.description || ""}
      start={props.start.split("T")[0]}
      end={props.end.split("T")[0]}
    />
  );
}

export default function About() {
  const [employment, setEmployment] = useState([]);
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetchData("employment", setEmployment);
    fetchData("education", setEducation);
  }, []);

  return (
    <>
      <h1>Employment</h1>
      {employment.map((elem, index) => (
        <EmploymentSegment
          key={`employment-${index}`} // Use index as a fallback key
          title={elem.job_title}
          employer={elem.employer}
          description={elem.description || ""}
          start={elem.start_date.split("T")[0]}
          end={elem.end_date.split("T")[0]}
        />
      ))}
      <h2>Education</h2>
      {education.map((elem, index) => (
        <EducationSegment
          key={`education-${index}`} // Use index as a fallback key
          course={elem.course}
          school={elem.school}
          description={elem.description || ""}
          start={elem.start_date.split("T")[0]}
          end={elem.end_date.split("T")[0]}
        />
      ))}
    </>
  );
}
