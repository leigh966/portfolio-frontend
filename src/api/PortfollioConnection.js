import PortfollioConnectionError from "./PortfollioConnectionError";
import Education from "./Education";
import Employment from "./Employment";
import Project from "./Project";

export default class PortfollioClient {
  constructor(URL) {
    this.url = URL;
    console.log("client created with url: " + URL);
  }

  jsonToObj(cls, json) {
    return json.map((val) => new cls(val));
  }

  async get(endpoint) {
    const resp = await fetch(this.url + endpoint);
    if (resp.status == 200) {
      return resp;
    }
    throw new PortfollioConnectionError(resp);
  }

  async getImageUrl(filename) {
    return await (await this.get("image_url/" + filename)).text();
  }

  async getProjects() {
    return this.jsonToObj(Project, await (await this.get("projects")).json());
  }

  async getEmployment() {
    return this.jsonToObj(
      Employment,
      await (await this.get("employment")).json()
    );
  }

  async getEducation() {
    return this.jsonToObj(
      Education,
      await (await this.get("education")).json()
    );
  }
}
