import "./Banner.css";

function PageButton({ page, setPage, currentPage }) {
  let classname = "banner-button";
  if (page == currentPage) {
    classname += " active-banner-button";
  }
  return (
    <p
      className={classname}
      onClick={() => {
        setPage(page);
      }}
    >
      {page}
    </p>
  );
}

export default function Banner({ setPage, currentPage }) {
  return (
    <>
      <div id="banner">
        <h1 id="name-header">Leigh Hurley</h1>
        <PageButton
          page="Projects"
          setPage={setPage}
          currentPage={currentPage}
        />
        <PageButton page="About" setPage={setPage} currentPage={currentPage} />
      </div>
    </>
  );
}
