import { InjectionKey } from "vue";
import { createStore, Store } from "vuex"; // createStore --references for global collection of data that Vuex storing for us

import state from "@/store/state";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import { GlobalState } from "./types";

export const key: InjectionKey<Store<GlobalState>> = Symbol(); // injectionkey accepts a generic type of Store as argument then Store also accepts generic type of GlobalState interface as argument

const store = createStore<GlobalState>({
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
