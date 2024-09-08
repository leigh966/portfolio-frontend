import ProjectBannerImage from "../ProjectBannerImage";
import "./ProjectPage.css";
import { useParams } from "react-router-dom";

export default function ProjectPage({ projects }) {
  const { id } = useParams();
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
