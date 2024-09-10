import { useEffect, useState } from "react";
import { fetchAsyncData } from "../apiFixings";
import { client } from "../client";
import RangedSegment from "../RangedSegment";
import PortfollioErrorHandler from "../PortfollioErrorhandler";

export default function EducationPage() {
  const [education, setEducation] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchAsyncData(setEducation, setError, () => client.getEducation());
  }, []);
  if (error) {
    return <PortfollioErrorHandler error={error} />;
  }
  return (
    <>
      <h1>Education</h1>
      {education.map((elem, index) => (
        <div className="edu-emp-wrapper">
          <img
            className="edu-emp-icon"
            src="hat.svg"
            alt="Graduation Cap SVG"
          />
          <RangedSegment
            key={`education-${index}`} // Use index as a fallback key
            title={elem.course}
            subtitle={elem.school}
            description={elem.description || ""}
            start={elem.start_date.split("T")[0]}
            end={elem.end_date.split("T")[0]}
          />
        </div>
      ))}
    </>
  );
}
