import {
  UNIQUE_ORGANIZATIONS,
  FILTERED_JOBS_BY_ORGANIZATIONS,
} from "@/store/constants.js";

const getters = {
  [UNIQUE_ORGANIZATIONS](state) {
    const uniqueOrganizations = new Set();
    state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
    return uniqueOrganizations;
  },
  [FILTERED_JOBS_BY_ORGANIZATIONS](state) {
    if (state.selectedOrganizations.length === 0) {
      return state.jobs;
    }
    // else {
    //   return state.jobs.filter((job) =>
    //     state.selectedOrganizations.includes(job.organization)
    //   );
    // }
    return state.jobs.filter((job) =>
      state.selectedOrganizations.includes(job.organization)
    );
  },
}; // derived or computed data from store state (same logic as computed property in a component --vuex automatically rerun getter whenever theres a changes at store state)

export default getters;
