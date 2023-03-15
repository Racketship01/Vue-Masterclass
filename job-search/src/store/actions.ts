import { Commit } from "vuex"; // Commit --interface that is available from the Vue library
import getJobs from "@/api/getJob";
import { FETCH_JOBS, RECEIVE_JOBS } from "@/store/constants";

interface Context {
  commit: Commit; // interface that define specific function that takes a specific parameters with specific types and return a specific value rather than using ActionContext interface at Vuex Library
} // this context object will have a commit methiod that has the Commit interface

const actions = {
  [FETCH_JOBS]: async (context: Context) => {
    const jobListings = await getJobs();
    context.commit(RECEIVE_JOBS, jobListings); // RECEIVE_JOBS(state, jobListings) --run an existing mutations to pass jobListings data fetch in API
  },
};

export default actions;
