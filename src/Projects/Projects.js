import { useNavigate } from "react-router-dom";
import ProjectTab from "./ProjectTab";
import "./Projects.css";
export default function Projects({ projects, setPage }) {
  let tabs = [];
  const navigate = useNavigate();
  projects.forEach((element, index) => {
    tabs.push(
      <ProjectTab
        data={element}
        onClick={() => navigate("/projects/" + element.id)}
      />
    );
  });
  return <div className="project-tabs">{tabs}</div>;
}
