import { createStore } from "vuex"; // createStore --references for global collection of data that Vuex storing for us

import getJobs from "@/api/getJob";

export const LOGIN_USER = "LOGIN_USER"; // dynamically referencing to mutation method name whenever we are committing these mutations to the vuex store to ensure that we have no chance of typos in multiple components
export const RECEIVE_JOBS = "RECEIVE_JOBS";
export const FETCH_JOBS = "FETCH_JOBS";

export const UNIQUE_ORGANIZATIONS = "UNIQUE_ORGANIZATIONS";

export const state = () => {
  return {
    isLoggedIn: false,
    jobs: [],
  };
};

export const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true;
  },
  [RECEIVE_JOBS](state, jobs) {
    state.jobs = jobs;
  }, // 1st parameter: state || 2nd parameter:  data that will overwrite a state property (new array of jobs that will overwrite empty jobs array in state)
};

export const getters = {
  [UNIQUE_ORGANIZATIONS](state) {
    const uniqueOrganizations = new Set();
    state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
    return uniqueOrganizations;
  },
}; // derived or computed data from store state (same logic as computed property in a component --vuex automatically rerun getter whenever theres a changes at store state)

export const actions = {
  [FETCH_JOBS]: async (context) => {
    const jobListings = await getJobs();
    context.commit(RECEIVE_JOBS, jobListings); // RECEIVE_JOBS(state, jobListings) --run an existing mutations to pass jobListings data fetch in API
  },
};

const store = createStore({
  // state() {
  //   return {
  //     isLoggedin: false,
  //   };
  // }, // same as data property in a component that changes overtime --has same syntax to data method within a component

  // mutations: {
  //   LOGIN_USER(state) {
  //     state.isLoggedin = true;
  //   },
  // }, // same as method property within a  component

  state,
  mutations,
  getters,
  actions,
  strict: process.env.NODE_ENV !== "production", // a lot more strict for making sure dont have any place where accidentally modifying the store state outside of mutation. --using this makes helpful during developement mode but not in production as this will slow down the app and consume more storage
  // NOTE: process -> global node object || env. -> receive environment variable defined on .env file || NODE_ENV --> predefined environment variable on env object defined by node or vue team --the variable name (with a string value) of the development environment we are running
});

/*
// COMMIT METHOD 

console.log(store.state.isLoggedin); // false
store.commit("LOGIN_USER"); // use to invoke mutation
console.log(store.state.isLoggedin); // true after commit invoke mutation
*/

export default store;
