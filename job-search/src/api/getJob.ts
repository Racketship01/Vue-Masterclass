import axios from "axios";
import { Job } from "@/api/types";

const getJobs = async () => {
  const baseURL = process.env.VUE_APP_API_URL;
  const response = await axios.get<Job[]>(`${baseURL}/jobs`); // TS cannot make an API reqs and interfer what the shape of the response from endpoint going to look like, to solve? same as above enpoint declaring generic type annotation
  return response.data;
};

export default getJobs;
