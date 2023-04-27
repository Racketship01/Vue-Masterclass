import mutations from "@/store/mutations";
import { createState, createJob, createDegree } from "./utils";
import { RECEIVE_JOBS } from "@/store/constants";

/*
import state from "@/store/state";
import { GlobalState } from "@/store/types";
import { Job } from "@/api/types";
*/

describe("mutations", () => {
  /*
  const createState = (config: Partial<GlobalState> = {}): GlobalState => {
    const initialState = state();
    return { ...initialState, ...config };

    // NOTE: partial type config will validate if have the right properties then if has argument, it will override the initialState to focus only on a given argument
  };

  const createJob = (config: Partial<Job> = {}): Job => ({
    id: 1,
    title: "Angular Developer",
    organization: "Vue and Me",
    degree: "Master's",
    jobType: "Intern",
    locations: ["Lisbon"],
    minimumQualifications: [],
    preferredQualifications: [],
    description: [],
    dateAdded: "2021-07-04",
    ...config,
  });
*/
  // one describe test for each mutations
  describe("LOGIN_USER", () => {
    it("logs the user in", () => {
      /*
      const startingState = state();
      const state = { isLoggedIn: false } as GlobalState; // "as" --treat state object same as GlobalState
      */

      const startingState = createState({ isLoggedIn: false });
      mutations.LOGIN_USER(startingState); // no need to import a real life store (state) as we only testing a basic JS method
      expect(startingState.isLoggedIn).toBe(true);

      //expect(state).toEqual({ isLoggedIn: true });
      //NOTE: cannot use toBe matcher when using JS object
    });
  });

  describe("RECEIVE_JOBS", () => {
    it("receives jobs from API response", () => {
      // const state = { jobs: [] };

      const startingState = createState({ jobs: [] });
      const job1 = createJob();
      const job2 = createJob();

      mutations.RECEIVE_JOBS(startingState, [job1, job2]); //2nd argument --array of jobs that will be overwrite the jobs state(validating the receive_jobs mutations is correctly overwriting jobs property )
      expect(startingState.jobs).toEqual([job1, job2]);
    });
  });

  describe("RECEIVE_DEGREES", () => {
    it("receives degrees from API response", () => {
      const startingState = createState({ degrees: [] });
      const degree1 = createDegree();
      const degree2 = createDegree();
      mutations.RECEIVE_DEGREES(startingState, [degree1, degree2]);
      expect(startingState.degrees).toEqual([degree1, degree2]);
    });
  });

  describe("ADD_SELECTED_ORGANIZATIONS", () => {
    it("updates organizations that the user has chose to filter jobs by", () => {
      // const state = { selectedOrganizations: [] };
      const startingState = createState({ selectedOrganizations: [] });
      mutations.ADD_SELECTED_ORGANIZATIONS(startingState, ["Org1", "Org2"]);
      expect(startingState.selectedOrganizations).toEqual(["Org1", "Org2"]);
    });
  });

  describe("ADD_SELECTED_JOB_TYPES", () => {
    it("updates jobs types that the user has chose to filter jobs by", () => {
      // const state = { selectedJobTypes: [] };
      const startingState = createState({ selectedJobTypes: [] });
      mutations.ADD_SELECTED_JOB_TYPES(startingState, [
        "Full-time",
        "Part-time",
      ]);
      expect(startingState.selectedJobTypes).toEqual([
        "Full-time",
        "Part-time",
      ]);
    });
  });

  describe("ADD_SELECTED_DEGREES", () => {
    it("keeps track of which the user has chosen to filter jobs by", () => {
      const startingState = createState({ selectedDegrees: [] });
      mutations.ADD_SELECTED_DEGREES(startingState, ["Master's", "Bachelor's"]);
      expect(startingState.selectedDegrees).toEqual(["Master's", "Bachelor's"]);
    });
  });

  describe("CLEAR_USER_JOB_FILTER_SELECTIONS", () => {
    it("removes all job filters", () => {
      const startingState = createState({
        selectedOrganizations: ["Google"],
        selectedJobTypes: ["Full-time"],
        selectedDegrees: ["Master's"],
      });
      mutations.CLEAR_USER_JOB_FILTER_SELECTIONS(startingState);
      expect(startingState.selectedOrganizations).toEqual([]);
      expect(startingState.selectedJobTypes).toEqual([]);
      expect(startingState.selectedDegrees).toEqual([]);
    });
  });
});
