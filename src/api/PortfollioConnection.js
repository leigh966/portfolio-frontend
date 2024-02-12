export default class PortfollioClient {
  constructor(URL) {
    this.url = URL;
    console.log("client created with url: " + URL);
  }

  async getImageUrl(filename) {
    console.log(filename);
    const resp = await fetch(this.url + "signed_url/" + filename);
    if (resp.status == 200) {
      return await resp.text();
    }
    throw Error("Failed to fetch: " + (await resp.text()));
  }
}
