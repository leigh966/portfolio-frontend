import "./Banner.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function PageButton({ page, currentPage, label, setPage }) {
  let classname = "banner-button";
  if (page === currentPage) {
    classname += " active-banner-button";
  }
  return (
    <Link className={classname} to={page} onClick={() => setPage(page)}>
      {label}
    </Link>
  );
}

export default function Banner() {
  const [page, setPage] = useState(window.location.pathname);
  return (
    <div id="banner">
      <h1 id="name-header">Leigh Hurley</h1>
      <div id="banner-buttons">
        <PageButton
          page="/projects"
          label="Projects"
          currentPage={page}
          setPage={setPage}
        />
        <PageButton
          page="/about"
          label="About"
          currentPage={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}
