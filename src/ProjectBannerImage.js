import { BACKEND_URL } from "./WebConfig";
export default function ProjectBannerImage({ filename, className }) {
  if (filename) {
    return (
      <img className={className} src={BACKEND_URL + "image/" + filename} />
    );
  }
  return (
    <img
      className={className}
      src="https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg"
    />
  );
}
