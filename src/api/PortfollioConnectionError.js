export default class PortfollioConnectionError extends Error {
  constructor(response) {
    super("Failed to fetch");
    this.response = response;
  }
}
