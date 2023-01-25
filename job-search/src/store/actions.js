import getJobs from "@/api/getJob";
import { FETCH_JOBS, RECEIVE_JOBS } from "@/store/constants.js";

const actions = {
  [FETCH_JOBS]: async (context) => {
    const jobListings = await getJobs();
    context.commit(RECEIVE_JOBS, jobListings); // RECEIVE_JOBS(state, jobListings) --run an existing mutations to pass jobListings data fetch in API
  },
};

export default actions;
