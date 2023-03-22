import { useStore } from "vuex";
jest.mock("vuex");

const useStoreMock = useStore as jest.Mock;

import {
  useFilterJobs,
  useUniqueJobTypes,
  useUniqueOrganizations,
  useFetchJobsDispatch,
} from "@/store/composables";

describe("Composables", () => {
  describe("useFilterJobs", () => {
    it("retrieves filtered jobs from store", () => {
      useStoreMock.mockReturnValue({
        getters: {
          FILTERED_JOBS: [{ id: 1 }],
        },
      });
      const result = useFilterJobs();
      expect(result.value).toEqual([{ id: 1 }]);
    });
  });

  describe("useUniqueJobTypes", () => {
    it("retrieves unique job types from store", () => {
      useStoreMock.mockReturnValue({
        getters: {
          UNIQUE_JOB_TYPES: ["Full-time"],
        },
      });
      const result = useUniqueJobTypes();
      expect(result.value).toEqual(["Full-time"]);
    });
  });

  describe("useUniqueOrganizations", () => {
    it("retrieves unique job types from store", () => {
      useStoreMock.mockReturnValue({
        getters: {
          UNIQUE_ORGANIZATIONS: ["Apple"],
        },
      });
      const result = useUniqueOrganizations();
      expect(result.value).toEqual(["Apple"]);
    });
  });

  describe("useFetchJobDispatch", () => {
    it("calls fetch job at action API", () => {
      const dispatch = jest.fn();
      useStoreMock.mockReturnValue({
        dispatch,
      });
      useFetchJobsDispatch();
      expect(dispatch).toHaveBeenCalledWith("FETCH_JOBS");
    });
  });
});
