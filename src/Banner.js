import "./Banner.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function PageButton({ page, currentPage, label, setPage, cancelRefresh }) {
  let classname = "banner-button";
  if (page === currentPage) {
    classname += " active-banner-button";
    cancelRefresh();
  }
  return (
    <Link className={classname} to={page} onClick={() => setPage(page)}>
      {label}
    </Link>
  );
}
let refresh;
export default function Banner() {
  const [page, setPage] = useState(window.location.pathname);
  useEffect(() => {
    refresh = setInterval(() => {
      console.log("refreshing banner");
      setPage(window.location.pathname);
    }, 1000);
  }, []);

  return (
    <div id="banner">
      <h1 id="name-header">Leigh Hurley</h1>
      <div id="banner-buttons">
        <PageButton
          page="/projects"
          label="Projects"
          currentPage={page}
          setPage={setPage}
          cancelRefresh={() => clearInterval(refresh)}
        />
        <PageButton
          page="/employment"
          label="Work History"
          currentPage={page}
          setPage={setPage}
          cancelRefresh={() => clearInterval(refresh)}
        />
        <PageButton
          page="/education"
          label="Education"
          currentPage={page}
          setPage={setPage}
          cancelRefresh={() => clearInterval(refresh)}
        />
      </div>
    </div>
  );
}
