import ProjectBannerImage from "../ProjectBannerImage";
import "./ProjectPage.css";

export function ProjectPage({ project }) {
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
