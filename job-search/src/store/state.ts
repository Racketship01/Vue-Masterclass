import { GlobalState } from "@/store/types";

const state = (): GlobalState => {
  return {
    isLoggedIn: false,
    jobs: [],
    degrees: [],
    skillsSearch: "",
    selectedJobTypes: [],
    selectedOrganizations: [],
    selectedDegrees: [],
  };
};

export default state;
