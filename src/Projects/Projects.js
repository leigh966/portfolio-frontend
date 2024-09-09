import { useNavigate } from "react-router-dom";
import ProjectTab from "./ProjectTab";
import "./Projects.css";
import { useEffect, useState } from "react";
import PortfollioErrorHandler from "../PortfollioErrorhandler";
import { client } from "../client";

async function getProjects(client, setProjects, setError) {
  try {
    setProjects(await client.getProjects());
  } catch (err) {
    setError(err);
  }
}

export default function Projects({ projects, setProjects }) {
  const [error, setError] = useState(null);
  useEffect(() => {
    getProjects(client, setProjects, setError);
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
