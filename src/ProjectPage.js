import { BACKEND_URL } from "./WebConfig";

export function ProjectPage({ project }) {
  return (
    <>
      <img src={BACKEND_URL + "image/" + project.image_filename} />
      <h1>{project.name}</h1>
      <h3>{project.tagline}</h3>
      <p>{project.description}</p>
    </>
  );
}
