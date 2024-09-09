import { useEffect, useState } from "react";
import { client } from "./client";

export default function ProjectBannerImage({ filename, className }) {
  const [imageUrl, setImageUrl] = useState(
    "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg"
  );
  useEffect(() => {
    if (!filename) return;
    client.getImageUrl(filename).then(setImageUrl);
  }, []);
  console.log(imageUrl);
  return <img className={className} src={imageUrl} />;
}
