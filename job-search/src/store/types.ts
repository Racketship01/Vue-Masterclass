import { Job, Degree } from "@/api/types"; // interface for Job in API

export interface GlobalState {
  isLoggedIn: boolean;
  jobs: Job[];
  degrees: Degree[];
  selectedJobTypes: string[];
  selectedOrganizations: string[];
  selectedDegrees: string[];
}
