import "./Banner.css";

function PageButton({ page, setPage }) {
  return (
    <p
      class="banner-button"
      onClick={() => {
        setPage(page);
      }}
    >
      {page}
    </p>
  );
}

export default function Banner({ setPage }) {
  return (
    <div id="banner">
      <h1 id="name-header">Leigh Hurley</h1>
      <PageButton page="Projects" setPage={setPage} />
      <PageButton page="About" setPage={setPage} />
    </div>
  );
}
