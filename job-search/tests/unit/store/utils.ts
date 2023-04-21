import state from "@/store/state";
import { GlobalState } from "@/store/types";
import { Job, Degree } from "@/api/types";

export const createState = (config: Partial<GlobalState> = {}): GlobalState => {
  const initialState = state();
  return { ...initialState, ...config };

  // NOTE: partial type config will validate if have the right properties then if has argument, it will override the initialState to focus only on a given argument
};

export const createJob = (config: Partial<Job> = {}): Job => ({
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

export const createDegree = (config: Partial<Degree> = {}): Degree => ({
  id: 1,
  degree: "Associate",
  ...config,
});
