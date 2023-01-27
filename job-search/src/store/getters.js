import {
  UNIQUE_ORGANIZATIONS,
  FILTERED_JOBS_BY_ORGANIZATIONS,
  UNIQUE_JOB_TYPES,
  FILTERED_JOBS_BY_JOB_TYPES,
} from "@/store/constants.js";

const getters = {
  // ORGANIZATION
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

  // JOB_TYPES
  [UNIQUE_JOB_TYPES](state) {
    const uniqueJobTypes = new Set();
    state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
    return uniqueJobTypes;
  },
  [FILTERED_JOBS_BY_JOB_TYPES](state) {
    if (state.selectedJobTypes.length === 0) {
      return state.jobs;
    }

    return state.jobs.filter((job) =>
      state.selectedJobTypes.includes(job.jobType)
    );
  },
}; // derived or computed data from store state (same logic as computed property in a component --vuex automatically rerun getter whenever theres a changes at store state)

export default getters;
