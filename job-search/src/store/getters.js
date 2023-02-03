import {
  FILTERED_JOBS,
  UNIQUE_ORGANIZATIONS,
  UNIQUE_JOB_TYPES,
  INCLUDE_JOB_BY_ORGANIZATION,
  INCLUDE_JOB_BY_JOB_TYPE,
} from "@/store/constants.js";

const getters = {
  // ORGANIZATION
  [UNIQUE_ORGANIZATIONS](state) {
    const uniqueOrganizations = new Set();
    state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
    return uniqueOrganizations;
  },

  // JOB_TYPES
  [UNIQUE_JOB_TYPES](state) {
    const uniqueJobTypes = new Set();
    state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
    return uniqueJobTypes;
  },

  [INCLUDE_JOB_BY_ORGANIZATION]: (state) => (job) => {
    if (state.selectedOrganizations.length === 0) return true; // if user has not selected any organization, job must be included, so im going to return true

    return state.selectedOrganizations.includes(job.organization); // in the individual single job and look for its organization property then see if it will be found within the state selected organization, if found, job must be included

    // This getter will return  a true or false value, and thats the entire responsibility of this getter
  },
  [INCLUDE_JOB_BY_JOB_TYPE]: (state) => (job) => {
    if (state.selectedJobTypes.length === 0) return true;

    return state.selectedJobTypes.includes(job.jobType);
  },
  [FILTERED_JOBS](state, getters) {
    return state.jobs
      .filter(
        (job) => getters.INCLUDE_JOB_BY_ORGANIZATION(job)
        // invoking INCLUDE_JOB_BY_ORGANIZATION, vuex will automatically pass the state, then returning function in will now have access to the job(current job in iteration) being pass as the argument.
      )
      .filter((job) => getters.INCLUDE_JOB_BY_JOB_TYPE(job));

    /*
    const noSelectedOrganization = state.selectedOrganizations.length === 0;
    const noSelectedJobTypes = state.selectedJobTypes.length === 0;

    if (noSelectedOrganization && noSelectedJobTypes) return state.jobs;

    return state.jobs
      .filter((job) => {
        if (noSelectedOrganization) return true; // if the user has not selected an organization for this filter, I do always want to pass in this filter function all the job iterating over. Always going to return true, So all of our jobs will pass the filter test.

        return state.selectedOrganizations.includes(job.organization); // otherwise, if the user selected org, then well check whether they include the current jobs organization
      })
      .filter((job) => {
        if (noSelectedJobTypes) return true;
        return state.selectedJobTypes.includes(job.jobType);
      });

    // NOTE:
    // 1st filter: if have selected an org, return filtered org array 2nd filter: if have no selected job types, return filtered org array at first filtered operation

    // 1st filter: if have no selected org, return all jobs will pass then pass to next filter operation 2nd filter: if have selected job types, return filtered job types array

    // 1st filter: if have selected org, return filtered org array then pass to next filter operation 2nd filter: if have selected job types, return filtered job types array from filtered org array
    */
  },
}; // derived or computed data from store state (same logic as computed property in a component --vuex automatically rerun getter whenever theres a changes at store state)

export default getters;

/*

******DELETED TWO OLD GETTER
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

  [FILTERED_JOBS_BY_JOB_TYPES](state) {
    if (state.selectedJobTypes.length === 0) {
      return state.jobs;
    }

    return state.jobs.filter((job) =>
      state.selectedJobTypes.includes(job.jobType)
    );
  },
*/
