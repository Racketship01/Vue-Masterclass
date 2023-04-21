import actions from "@/store/actions";
import getJobs from "@/api/getJob";
jest.mock("@/api/getJob");
const getJobsMock = getJobs as jest.Mock; // treat getJobs as a jest mock function which indeed has mockResolvedvalue() method on it

import getDegrees from "@/api/getDegrees";
jest.mock("@/api/getDegrees");
const getDegreesMock = getDegrees as jest.Mock;

describe("actions", () => {
  describe("FETCH_JOBS", () => {
    beforeEach(() => {
      getJobsMock.mockResolvedValue([
        {
          id: 1,
          title: "Software Developer",
        },
      ]);
    });

    it("makes request to  fetches job", async () => {
      const context = { commit: jest.fn() };

      await actions.FETCH_JOBS(context);
      expect(getJobs).toHaveBeenCalled();
    });

    it("sends message to save received jobs in store", async () => {
      const commit = jest.fn();
      const context = { commit };
      await actions.FETCH_JOBS(context);
      expect(commit).toHaveBeenCalledWith("RECEIVE_JOBS", [
        {
          id: 1,
          title: "Software Developer",
        },
      ]);
    });
  });

  describe("FETCH_DEGRESS", () => {
    beforeEach(() => {
      getDegreesMock.mockResolvedValue([
        {
          id: 1,
          dgrees: "Master's",
        },
      ]);
    });

    it("makes request to  fetches degree", async () => {
      const context = { commit: jest.fn() };

      await actions.FETCH_DEGREES(context);
      expect(getDegrees).toHaveBeenCalled();
    });

    it("sends message to save received degree in store", async () => {
      const commit = jest.fn();
      const context = { commit };
      await actions.FETCH_DEGREES(context);
      expect(commit).toHaveBeenCalledWith("RECEIVE_DEGREES", [
        {
          id: 1,
          dgrees: "Master's",
        },
      ]);
    });
  });
});
