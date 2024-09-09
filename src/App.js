import { useState } from "react";
import Projects from "./Projects/Projects";
import ProjectPage from "./Project/ProjectPage";
import About from "./About/About";
import { BACKEND_URL } from "./WebConfig";
import PortfollioClient from "./api/PortfollioConnection";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

export default function App() {
  const [projects, setProjects] = useState([]);

  const client = new PortfollioClient(BACKEND_URL);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="projects">
            <Route
              index
              element={
                <Projects
                  projects={projects}
                  client={client}
                  setProjects={setProjects}
                />
              }
            />
            <Route path=":id" element={<ProjectPage projects={projects} />} />
          </Route>
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
