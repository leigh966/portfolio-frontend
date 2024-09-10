import { useEffect, useState } from "react";
import Projects from "./Projects/Projects";
import ProjectPage from "./Project/ProjectPage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { initClient } from "./client";
import Redirect from "./Redirect";
import EmploymentPage from "./Employment/EmploymentPage";
import EducationPage from "./Education/EducationPage";

export default function App() {
  const [projects, setProjects] = useState([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    initClient(setReady);
  }, []);
  if (!ready) {
    return <h1>Loading...</h1>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Redirect to="/projects" />} />
          <Route path="projects">
            <Route
              index
              element={
                <Projects projects={projects} setProjects={setProjects} />
              }
            />
            <Route
              path=":id"
              element={
                <ProjectPage projects={projects} setProjects={setProjects} />
              }
            />
          </Route>
          <Route path="employment" element={<EmploymentPage />} />
          <Route path="education" element={<EducationPage />} />
          <Route path="*" element={<Redirect to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
