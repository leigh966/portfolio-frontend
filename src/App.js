import { useEffect, useState } from "react";
import Projects from "./Projects";
import Banner from "./Banner";
import About from "./About";

async function getProjects(setProjects) {
  try {
    const response = await fetch(
      "https://portfollio-backend-568be0e4fc29.herokuapp.com/projects"
    );
    if (response.status == 200) {
      const json = await response.json();
      setProjects(json);
    } else {
      const text = await response.text();
      console.log(text);
    }
  } catch (err) {
    console.log(err);
  }
}

export default function App() {
  const [page, setPage] = useState("Projects");
  const [projects, setProjects] = useState([]);
  useEffect(() => getProjects(setProjects), []);

  return (
    <>
      <Banner setPage={setPage} />
      {page == "Projects" && <Projects projects={projects} />}
      {page == "About" && <About />}
    </>
  );
}
