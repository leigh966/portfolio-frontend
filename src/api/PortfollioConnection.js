import PortfollioConnectionError from "./PortfollioConnectionError";
export default class PortfollioClient {
  constructor(URL) {
    this.url = URL;
    console.log("client created with url: " + URL);
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
    return await (await this.get("projects")).json();
  }

  async getEmployment() {
    return await (await this.get("employment")).json();
  }

  async getEducation() {
    return await (await this.get("education")).json();
  }
}
