import { useState, useEffect } from "react";
import "./About.css";
import AboutSegment from "./AboutSegment.js";
import { client } from "../client.js";

async function fetchData(type, setData, setError) {
  try {
    const data =
      type === "employment"
        ? await client.getEmployment()
        : await client.getEducation();
    setData(data);
  } catch (error) {
    setError(error);
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
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData("employment", setEmployment, setError);
    fetchData("education", setEducation, setError);
  }, []);

  if (error) {
    // In future add handling for specific objects so the page can render as much as possible if one thing can be fetched but another can't
    return <div className="about">{error.message}</div>;
  }

  return (
    <div className="about">
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
    </div>
  );
}
