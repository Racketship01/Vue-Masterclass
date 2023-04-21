import { Commit } from "vuex"; // Commit --interface that is available from the Vue library
import getJobs from "@/api/getJob";
import getDegrees from "@/api/getDegrees";
import {
  FETCH_JOBS,
  RECEIVE_JOBS,
  FETCH_DEGREES,
  RECEIVE_DEGREES,
} from "@/store/constants";

interface Context {
  commit: Commit; // Commit --interface that define specific function that takes a specific parameters with specific types and return a specific value rather than using ActionContext interface at Vuex Library that will be useful if we have many properties and method in the context object
} // this context object will have a commit methiod that has the Commit interface

const actions = {
  [FETCH_JOBS]: async (context: Context) => {
    const jobListings = await getJobs();
    context.commit(RECEIVE_JOBS, jobListings); // RECEIVE_JOBS(state, jobListings) --mutation name followed by the data that will be override in the state  --run an existing mutations to pass jobListings data fetch in API
  },
  [FETCH_DEGREES]: async (context: Context) => {
    const degree = await getDegrees();
    context.commit(RECEIVE_DEGREES, degree);
  },
};

export default actions;
