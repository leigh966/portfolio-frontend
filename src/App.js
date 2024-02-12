import { useEffect, useState } from "react";
import Projects from "./Projects";
import Banner from "./Banner";
import About from "./About";
import { BACKEND_URL } from "./WebConfig";
import { ProjectPage } from "./ProjectPage";
import PortfollioClient from "./api/PortfollioConnection";

async function getProjects(setProjects) {
  const client = new PortfollioClient(BACKEND_URL);
  setProjects(await client.getProjects());
}

export default function App() {
  const [page, setPage] = useState("Projects");
  const [projects, setProjects] = useState([]);
  useEffect(() => getProjects(setProjects), []);
  const client = new PortfollioClient(BACKEND_URL);
  return (
    <>
      <Banner setPage={setPage} />
      {page == "Projects" && (
        <Projects projects={projects} setPage={setPage} client={client} />
      )}
      {page == "About" && <About />}
      {page.split(":")[0] == "project" && (
        <ProjectPage project={projects[page.split(":")[1]]} client={client} />
      )}
    </>
  );
}
