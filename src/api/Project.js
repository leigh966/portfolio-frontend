import { ddmmyyyySlashed } from "./datehandling";

export default class Project {
  constructor({
    id,
    name,
    tagline,
    description,
    last_updated,
    image_filename,
  }) {
    this.id = id;
    this.name = name;
    this.tagline = tagline;
    this.description = description;
    this.last_updated = ddmmyyyySlashed(last_updated);
    this.image_filename = image_filename;
  }
}
