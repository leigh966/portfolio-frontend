import ProjectBannerImage from "../ProjectBannerImage";
import "./ProjectTab.css";

export default function ProjectTab({ data, onClick }) {
  return (
    <div className="project-tab" onClick={onClick}>
      <ProjectBannerImage
        className="project-tab-img"
        filename={data.image_filename}
      />
      <h3 className="project-tab-name">{data.name}</h3>
      <p className="project-tab-description">{data.tagline}</p>
      <p className="project-tab-update">
        Last Updated: {data.last_updated.substring(0, 10)}
      </p>
    </div>
  );
}
