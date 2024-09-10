// stuff that helps us use the api effectively for our app
import { client } from "./client";

export async function getProjects(setProjects, setError) {
  try {
    setProjects(await client.getProjects());
  } catch (err) {
    setError(err);
  }
}

export async function fetchAsyncData(setData, setError, fetchingMethod) {
  try {
    const data = await fetchingMethod();
    setData(data);
  } catch (error) {
    setError(error);
  }
}
