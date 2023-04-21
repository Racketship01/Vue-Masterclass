import axios from "axios";
import { Degree } from "@/api/types";

const getDegrees = async () => {
  const baseURL = process.env.VUE_APP_API_URL;
  const response = await axios.get<Degree[]>(`${baseURL}/degrees`); // TS cannot make an API reqs and interfer what the shape of the response from endpoint going to look like, to solve? same as above enpoint declaring generic type annotation
  return response.data;
};

export default getDegrees;
