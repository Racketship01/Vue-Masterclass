import { computed } from "vue";
import { useStore } from "vuex";

import {
  FILTERED_JOBS,
  UNIQUE_JOB_TYPES,
  UNIQUE_ORGANIZATIONS,
  FETCH_JOBS,
  UNIQUE_DEGREES,
  FETCH_DEGREES,
} from "@/store/constants";

import { Job } from "@/api/types";

import { key } from "@/store";

/*  GETTERS */
export const useFilterJobs = () => {
  const store = useStore(key);
  return computed<Job[]>(() => store.getters[FILTERED_JOBS]); // <Job[]> --represents the array of types of the internal value of the reactive object as this return an array of filtered jobs
};

export const useUniqueJobTypes = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters[UNIQUE_JOB_TYPES]); // <Set<string>> --this generic is going to be a set consisting of string values or string types and then the computed function is going return a reactive object that is storing that set of string types
};

export const useUniqueOrganizations = () => {
  const store = useStore(key);
  return computed<Set<string>>(() => store.getters[UNIQUE_ORGANIZATIONS]);
};

export const useUniqueDegrees = () => {
  const store = useStore(key);
  return computed<string[]>(() => store.getters[UNIQUE_DEGREES]);
};

/*  ACTIONS */
export const useFetchJobsDispatch = async () => {
  const store = useStore(key);
  store.dispatch(FETCH_JOBS);
};

export const useFetchDegreesDispatch = async () => {
  const store = useStore(key);
  store.dispatch(FETCH_DEGREES);
};