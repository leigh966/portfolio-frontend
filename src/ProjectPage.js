import ProjectBannerImage from "./ProjectBannerImage";
import { BACKEND_URL } from "./WebConfig";

export function ProjectPage({ project }) {
  return (
    <>
      <ProjectBannerImage filename={project.image_filename} />
      <h1>{project.name}</h1>
      <h3>{project.tagline}</h3>
      <p>{project.description}</p>
    </>
  );
}
