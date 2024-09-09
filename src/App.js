import { useEffect, useState } from "react";
import Projects from "./Projects/Projects";
import ProjectPage from "./Project/ProjectPage";
import About from "./About/About";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { initClient } from "./client";

export default function App() {
  const [projects, setProjects] = useState([]);
  useEffect(() => initClient(), []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="projects">
            <Route
              index
              element={
                <Projects projects={projects} setProjects={setProjects} />
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
