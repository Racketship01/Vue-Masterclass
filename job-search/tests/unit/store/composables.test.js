import { useStore } from "vuex";
jest.mock("vuex");

import {
  useFilterJobs,
  useUniqueJobTypes,
  useUniqueOrganizations,
} from "@/store/composables";

describe("Composables", () => {
  describe("useFilterJobs", () => {
    it("retrieves filtered jobs from store", () => {
      useStore.mockReturnValue({
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
      useStore.mockReturnValue({
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
      useStore.mockReturnValue({
        getters: {
          UNIQUE_ORGANIZATIONS: ["Apple"],
        },
      });
      const result = useUniqueOrganizations();
      expect(result.value).toEqual(["Apple"]);
    });
  });
});