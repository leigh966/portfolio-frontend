import { useEffect, useState } from "react";
import { fetchAsyncData } from "../apiFixings";
import { client } from "../client";
import PortfollioErrorHandler from "../PortfollioErrorhandler";
import RangedSegment from "../RangedSegment";

export default function EmploymentPage() {
  const [employment, setEmployment] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchAsyncData(setEmployment, setError, () => client.getEmployment());
  }, []);
  if (error) {
    return <PortfollioErrorHandler error={error} />;
  }
  return (
    <>
      <h1>Work History</h1>
      {employment.map((elem, index) => (
        <RangedSegment
          key={`employment-${index}`} // Use index as a fallback key
          title={elem.job_title}
          subtitle={elem.employer}
          description={elem.description || ""}
          start={elem.start_date.split("T")[0]}
          end={elem.end_date.split("T")[0]}
        />
      ))}
    </>
  );
}
