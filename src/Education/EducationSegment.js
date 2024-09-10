import RangedSegment from "../RangedSegment";
export default function EducationSegment(props) {
  return (
    <RangedSegment
      className="edu-seg"
      title={props.course}
      subtitle={props.school}
      description={props.description || ""}
      start={props.start.split("T")[0]}
      end={props.end.split("T")[0]}
    />
  );
}
