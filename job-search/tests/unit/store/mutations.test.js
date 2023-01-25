import mutations from "@/store/mutations";

describe("mutations", () => {
  // one describe test for each mutations
  describe("LOGIN_USER", () => {
    it("logs the user in", () => {
      const state = { isLoggedIn: false };
      mutations.LOGIN_USER(state); // no need to import a real life store (state) as we only testing a basic JS method

      expect(state).toEqual({ isLoggedIn: true });
      //NOTE: cannot use toBe matcher when using JS object
    });
  });

  describe("RECEIVE_JOBS", () => {
    it("receives jobs from API response", () => {
      const state = { jobs: [] };
      mutations.RECEIVE_JOBS(state, ["Job 1", "Job 2"]); //2nd argument --array of jobs that will be overwrite the jobs state(validating the receive_jobs mutations is correctly overwriting jobs property )
      expect(state).toEqual({ jobs: ["Job 1", "Job 2"] });
    });
  });

  describe("ADD_SELECTED_ORGANIZATIONS", () => {
    it("updates organizations that the user has chose to filter jobs by", () => {
      const state = { selectedOrganizations: [] };
      mutations.ADD_SELECTED_ORGANIZATIONS(state, ["Org1", "Org2"]);
      expect(state).toEqual({ selectedOrganizations: ["Org1", "Org2"] });
    });
  });
});
