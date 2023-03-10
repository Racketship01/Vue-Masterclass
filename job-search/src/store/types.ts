import { Job } from "@/api/types"; // interface for Job in API

export interface GlobalState {
  isLoggedIn: boolean;
  jobs: Job[];
  selectedJobTypes: string[];
  selectedOrganizations: string[];
}
