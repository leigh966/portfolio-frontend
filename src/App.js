import { useEffect, useState } from "react";
import Projects from "./Projects/Projects";
import ProjectPage from "./Project/ProjectPage";
import About from "./About/About";
import { BACKEND_URL } from "./WebConfig";
import PortfollioClient from "./api/PortfollioConnection";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

async function getProjects(setProjects) {
  const client = new PortfollioClient(BACKEND_URL);
  setProjects(await client.getProjects());
}

export default function App() {
  const [projects, setProjects] = useState([]);
  useEffect(() => getProjects(setProjects), []);
  const client = new PortfollioClient(BACKEND_URL);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="projects">
            <Route
              index
              element={<Projects projects={projects} client={client} />}
            />
            <Route path=":id" element={<ProjectPage projects={projects} />} />
          </Route>
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
