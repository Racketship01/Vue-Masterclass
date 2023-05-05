import getters from "@/store/getters";
import { createState, createJob, createDegree } from "./utils";

describe("getters", () => {
  // ORGANIZATIONS
  describe("UNIQUE_ORGANIZATION", () => {
    it("finds unique organizations from list of jobs", () => {
      const jobs = [
        createJob({ organization: "Google" }),
        createJob({ organization: "Amazon" }),
        createJob({ organization: "Google" }),
      ];
      const state = createState({ jobs });

      const results = getters.UNIQUE_ORGANIZATIONS(state);
      expect(results).toEqual(new Set(["Google", "Amazon"]));
    });
  });

  // JOB TYPES
  describe("UNIQUE_JOB_TYPES", () => {
    it("finds unique job type from list of jobs", () => {
      const jobs = [
        createJob({ jobType: "Full-time" }),
        createJob({ jobType: "Full-time" }),
        createJob({ jobType: "Intern" }),
      ];
      const state = createState({
        jobs,
      });
      const result = getters.UNIQUE_JOB_TYPES(state);
      expect(result).toEqual(new Set(["Intern", "Full-time"]));
    });
  });

  // DEGREES
  describe("UNIQUE_DEGREES", () => {
    it("extract unique degrees values ", () => {
      const degrees = [
        createDegree({ degree: "Master's" }),
        createDegree({ degree: "Bachelor's" }),
      ];
      const state = createState({
        degrees,
      });
      const result = getters.UNIQUE_DEGREES(state);
      expect(result).toEqual(["Master's", "Bachelor's"]);
    });
  });

  describe("INCLUDE_JOB_BY_ORGANIZATION", () => {
    describe("when the user has not selected any organization", () => {
      it("includes job", () => {
        const state = createState({
          selectedOrganizations: [],
        });
        const job = createJob({
          organization: "Google",
        });
        const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);
        expect(includeJob).toBe(true);
      });

      it("identifies if job is associated with given organizations", () => {
        const state = createState({
          selectedOrganizations: ["Google", "Microsoft"],
        });
        const job = createJob({
          organization: "Google",
        });
        const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job); // INCLUDE_BY_ORGANIZATION getter method automatically pass state as first argument and returns a function that accepts a job parameter. We can directly invoke in line by passing a pair of parenthesis the exact same way that we invoke any other function in JS (closures)
        expect(includeJob).toBe(true);
      });
    });
  });

  describe("INCLUDE_JOB_BY_JOB_TYPE", () => {
    describe("when the user has not selected any organization", () => {
      it("includes job", () => {
        const state = createState({
          selectedJobTypes: [],
        });
        const job = createJob({
          jobType: "Full-time",
        });
        const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);
        expect(includeJob).toBe(true);
      });

      it("identifies if job is associated woth given organizations", () => {
        const state = createState({
          selectedJobTypes: ["Full-time", "Part-time"],
        });
        const job = createJob({
          jobType: "Part-time",
        });
        const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);
        expect(includeJob).toBe(true);
      });
    });
  });

  describe("INCLUDE_JOB_BY_DEGREE", () => {
    describe("when the user has not selected any degree", () => {
      it("includes job", () => {
        const state = createState({
          selectedDegrees: [],
        });
        const job = createJob({
          degree: "Master's",
        });
        const includeJob = getters.INCLUDE_JOB_BY_DEGREE(state)(job);
        expect(includeJob).toBe(true);
      });

      it("identifies if job is associated with given degrees", () => {
        const state = createState({
          selectedDegrees: ["Master's", "Bachelor's"],
        });
        const job = createJob({
          degree: "Master's",
        });
        const includeJob = getters.INCLUDE_JOB_BY_DEGREE(state)(job);
        expect(includeJob).toBe(true);
      });
    });
  });

  describe("INCLUDE_JOB_BY_SKILLS", () => {
    it("identifies if job matcher users skills", () => {
      const state = createState({ skillsSearch: "Vue" });
      const job = createJob({ title: "Vue Developer" });
      const includeSkills = getters.INCLUDE_JOB_BY_SKILLS(state)(job);
      expect(includeSkills).toBe(true);
    });
    it("handles inconsistent character casing", () => {
      const state = createState({ skillsSearch: "vUe" });
      const job = createJob({ title: "Vue Developer" });
      const includeSkills = getters.INCLUDE_JOB_BY_SKILLS(state)(job);
      expect(includeSkills).toBe(true);
    });

    describe("when the user has not entered anu skill", () => {
      it("includes job", () => {
        const state = createState({ skillsSearch: "" });
        const job = createJob({ title: "Vue Developer" });
        const includeSkills = getters.INCLUDE_JOB_BY_SKILLS(state)(job);
        expect(includeSkills).toBe(true);
      });
    });
  });

  describe("FILTERED_JOBS", () => {
    it("filter jobs by organization, job type ,degree and skills", () => {
      const INCLUDE_JOB_BY_ORGANIZATION = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_JOB_TYPE = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_DEGREE = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_SKILLS = jest.fn().mockReturnValue(true);
      // jest.fn() just mock the fn and return a value of undefined, thats not going to work with filter as filter needs a true or false. Solution? invoking mock return value and passing in the return value we want (mockResolvedValue() ---for async) (mockReturnValue() ----sync)

      const mockGetters = {
        INCLUDE_JOB_BY_ORGANIZATION,
        INCLUDE_JOB_BY_JOB_TYPE,
        INCLUDE_JOB_BY_DEGREE,
        INCLUDE_JOB_BY_SKILLS,
      };

      const job = createJob({ id: 1, title: "Best Job Ever" });

      const state = createState({
        jobs: [job],
      });

      const result = getters.FILTERED_JOBS(state, mockGetters); // from the filter job getter perspective, all it need is a method called include job organization thats going to return a boolean. Why boolean? because the filter method depends on having a function that returns a true or false
      expect(result).toEqual([job]);
      expect(INCLUDE_JOB_BY_ORGANIZATION).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_JOB_TYPE).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_DEGREE).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_SKILLS).toHaveBeenCalledWith(job);
    });
  });
});

/*
 describe("FILTERED_JOBS_BY_ORGANIZATIONS", () => {
    it("identifies jobs that are associated with the given organizations", () => {
      const state = {
        jobs: [
          { organization: "Google" },
          { organization: "Amazon" },
          { organization: "Microsoft" },
        ],
        selectedOrganizations: ["Google", "Microsoft"],
      };

      const filteredJobs = getters.FILTERED_JOBS_BY_ORGANIZATIONS(state);
      expect(filteredJobs).toEqual([
        { organization: "Google" },
        { organization: "Microsoft" },
      ]);
    });

    describe("when the user has not selected any organizations", () => {
      it("renders all jobs", () => {
        const state = {
          jobs: [
            { organization: "Google" },
            { organization: "Amazon" },
            { organization: "Microsoft" },
          ],
          selectedOrganizations: [],
        };

        const filteredJobs = getters.FILTERED_JOBS_BY_ORGANIZATIONS(state);
        expect(filteredJobs).toEqual([
          { organization: "Google" },
          { organization: "Amazon" },
          { organization: "Microsoft" },
        ]);
      });
    });
  });


  describe("FILTERED_JOBS_BY_JOB_TYPES", () => {
    it("identifies jobs that are associated with the given job types", () => {
      const state = {
        jobs: [
          { jobType: "Full-time" },
          { jobType: "Part-time" },
          { jobType: "Intern" },
        ],
        selectedJobTypes: ["Full-time", "Intern"],
      };

      const filteredJobs = getters.FILTERED_JOBS_BY_JOB_TYPES(state);
      expect(filteredJobs).toEqual([
        { jobType: "Full-time" },
        { jobType: "Intern" },
      ]);
    });

    describe("when the user has not selected any organizations", () => {
      it("returns all jobs", () => {
        const state = {
          jobs: [
            { jobType: "Full-time" },
            { jobType: "Part-time" },
            { jobType: "Intern" },
          ],
          selectedJobTypes: [],
        };

        const filteredJobs = getters.FILTERED_JOBS_BY_JOB_TYPES(state);
        expect(filteredJobs).toEqual([
          { jobType: "Full-time" },
          { jobType: "Part-time" },
          { jobType: "Intern" },
        ]);
      });
    });
  });
*/
