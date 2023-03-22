import { computed } from "vue";
import { useStore } from "vuex";

import {
  FILTERED_JOBS,
  UNIQUE_JOB_TYPES,
  UNIQUE_ORGANIZATIONS,
  FETCH_JOBS,
} from "@/store/constants";

import { Job } from "@/api/types";

/*  GETTERS */
export const useFilterJobs = () => {
  const store = useStore();
  return computed<Job[]>(() => store.getters[FILTERED_JOBS]); // <Job[]> --represents the array of types of the internal value of the reactive object as this return an array of filtered jobs
};

export const useUniqueJobTypes = () => {
  const store = useStore();
  return computed<Set<string>>(() => store.getters[UNIQUE_JOB_TYPES]); // <Set<string>> --this generic is going to be a set consisting of string values or string types and then the computed function is going return a reactive object that is storing that set of string types
};

export const useUniqueOrganizations = () => {
  const store = useStore();
  return computed<Set<string>>(() => store.getters[UNIQUE_ORGANIZATIONS]);
};

/*  ACTIONS */
export const useFetchJobsDispatch = async () => {
  const store = useStore();
  store.dispatch(FETCH_JOBS);
};
