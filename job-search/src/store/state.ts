import { GlobalState } from "@/store/types";

const state = (): GlobalState => {
  return {
    isLoggedIn: false,
    jobs: [],
    selectedJobTypes: [],
    selectedOrganizations: [],
  };
};

export default state;
