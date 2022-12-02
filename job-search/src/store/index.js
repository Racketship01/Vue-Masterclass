import { createStore } from "vuex"; // createStore --references for global collection of data that Vuex storing for us

export const LOGIN_USER = "LOGIN_USER"; // strings that dynamically referencing to mutation method name to avoid typos in multiple component

export const state = () => {
  return {
    isLoggedIn: false,
  };
};

export const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true;
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
