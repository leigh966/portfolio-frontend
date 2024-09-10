import ProjectBannerImage from "../ProjectBannerImage";
import "./ProjectTab.css";
import { useState, useEffect } from "react";
import { client } from "../client";

export default function ProjectTab({ data, onClick }) {
  const [imageUrl, setImageUrl] = useState(
    "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg"
  );
  useEffect(() => {
    if (!data.image_filename) return;
    client.getImageUrl(data.image_filename).then(setImageUrl);
  }, []);
  return (
    <div
      className="project-tab"
      onClick={onClick}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="project-card-text-container">
        <h3 className="project-tab-name">{data.name}</h3>
        <p className="project-tab-description">{data.tagline}</p>
        <p className="project-tab-update">
          Last Updated: {data.last_updated.substring(0, 10)}
        </p>
      </div>
    </div>
  );
}
