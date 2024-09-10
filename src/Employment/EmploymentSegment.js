import RangedSegment from "../RangedSegment";

export default function EmploymentSegment(props) {
  return (
    <RangedSegment
      className="employ-seg"
      title={props.jobTitle}
      subtitle={props.employer}
      description={props.description || ""}
      start={props.start.split("T")[0]}
      end={props.end.split("T")[0]}
    />
  );
}
