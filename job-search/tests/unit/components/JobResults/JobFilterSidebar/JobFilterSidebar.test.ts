import { shallowMount } from "@vue/test-utils";
import JobFilterSidebar from "@/components/JobResults/JobFilterSideBar/JobFilterSidebar.vue";

import { useUniqueJobTypes, useUniqueOrganizations } from "@/store/composables";
jest.mock("@/store/composables");

const useUniqueJobTypesMock = useUniqueJobTypes as jest.Mock;
const useUniqueOrganizationsMock = useUniqueOrganizations as jest.Mock;

describe("JobFilterSidebar", () => {
  it("allow user to filter jobs by organization", () => {
    useUniqueOrganizationsMock.mockReturnValue(new Set(["Google", "Amazon"]));
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
    const wrapper = shallowMount(JobFilterSidebar);
    const organizationFilter: any = wrapper.findComponent(
      "[data-test='filter-organizations']"
    );

    // @ts-ignore
    const { header, uniqueValues, mutation } = organizationFilter.props(); // return complete props object from the component
    expect(header).toBe("Organization");
    expect(uniqueValues).toEqual(new Set(["Google", "Amazon"]));
    expect(mutation).toBe("ADD_SELECTED_ORGANIZATIONS");
  });

  it("allow user to filter jobs by job types", () => {
    useUniqueOrganizationsMock.mockReturnValue(new Set(["Google", "Amazon"]));
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
    const wrapper = shallowMount(JobFilterSidebar);
    const jobTypeFilter: any = wrapper.findComponent(
      "[data-test='filter-jobTypes']"
    );

    // @ts-ignore
    const { header, uniqueValues, mutation } = jobTypeFilter.props(); // return complete props object from the component
    expect(header).toBe("Job Types");
    expect(uniqueValues).toEqual(new Set(["Full-time", "Part-time"]));
    expect(mutation).toBe("ADD_SELECTED_JOB_TYPES");
  });
});
