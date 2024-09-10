import { useNavigate } from "react-router-dom";
import ProjectTab from "./ProjectTab";
import "./Projects.css";
import { useEffect, useState } from "react";
import PortfollioErrorHandler from "../PortfollioErrorhandler";
import { getProjects } from "../apiFixings";

export default function Projects({ projects, setProjects }) {
  const [error, setError] = useState(null);
  useEffect(() => {
    getProjects(setProjects, setError);
  }, []);
  let tabs = [];
  const navigate = useNavigate();
  if (error) {
    return <PortfollioErrorHandler error={error} />;
  }
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
