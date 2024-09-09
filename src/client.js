import PortfollioClient from "./api/PortfollioConnection";
import { BACKEND_URL } from "./WebConfig";

export var client;

export function initClient() {
  client = new PortfollioClient(BACKEND_URL);
}
