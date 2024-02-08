import ProjectTab from "./ProjectTab";
import "./Projects.css";
export default function Projects({ projects, setPage }) {
  let tabs = [];
  projects.forEach((element, index) => {
    tabs.push(
      <ProjectTab data={element} onClick={() => setPage("project:" + index)} />
    );
  });
  return (
    <>
      <h1>Projects</h1>
      <div className="project-tabs">{tabs}</div>
    </>
  );
}
