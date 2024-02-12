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
    throw Error("Failed to fetch: " + (await resp.text()));
  }

  async getImageUrl(filename) {
    return await (await this.get("signed_url/" + filename)).text();
  }

  async getProjects() {
    return await (await this.get("projects")).json();
  }
}
