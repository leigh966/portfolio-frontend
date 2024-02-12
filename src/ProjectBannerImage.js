import { useEffect, useState } from "react";
import { BACKEND_URL } from "./WebConfig";
import PortfollioClient from "./api/PortfollioConnection";
export default function ProjectBannerImage({ filename, className }) {
  const [imageUrl, setImageUrl] = useState(
    "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg"
  );

  const client = new PortfollioClient(BACKEND_URL);
  useEffect(() => {
    if (!filename) return;
    client.getImageUrl(filename).then(setImageUrl);
  }, []);
  console.log(imageUrl);
  return <img className={className} src={imageUrl} />;
}
