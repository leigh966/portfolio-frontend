import PortfollioClient from "./api/PortfollioConnection";
import { BACKEND_URL } from "./WebConfig";

export var client = null;

export function initClient(setReady) {
  client = new PortfollioClient(BACKEND_URL);
  setReady(true);
}
