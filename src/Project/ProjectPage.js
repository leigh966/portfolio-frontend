import ProjectBannerImage from "../ProjectBannerImage";
import "./ProjectPage.css";
import { useParams } from "react-router-dom";
import { getProjects } from "../apiFixings";
import { useEffect, useState } from "react";
import PortfollioErrorHandler from "../PortfollioErrorhandler";

export default function ProjectPage({ projects, setProjects }) {
  const { id } = useParams();
  const [error, setError] = useState(null);
  useEffect(() => {
    getProjects(setProjects, setError);
  }, []);
  if (error) {
    return <PortfollioErrorHandler error={error} />;
  }
  if (projects.length === 0) return "Fetching projects";
  const project = projects.find((proj) => proj.id === id);
  return (
    <>
      <ProjectBannerImage
        filename={project.image_filename}
        className={"project-page-banner-img"}
      />
      <h1>{project.name}</h1>
      <h3>{project.tagline}</h3>
      <p>{project.description}</p>
    </>
  );
}
