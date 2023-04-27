import { shallowMount } from "@vue/test-utils";
import JobFilterSidebarJobTypes from "@/components/JobResults/JobFilterSideBar/JobFilterSidebarJobTypes.vue";

import { useUniqueJobTypes } from "@/store/composables";
jest.mock("@/store/composables");
const useUniqueJobTypesMock = useUniqueJobTypes as jest.Mock;

describe("JobFilterSidebarJobTypes", () => {
  it("allow user to filter jobs by degrees", () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));

    const wrapper = shallowMount(JobFilterSidebarJobTypes);
    const jobTypesFilter = wrapper.findComponent({
      name: "JobFilterSidebarCheckboxGroup",
    }); // since we are stubbing out the child component of job-filter-sidebar-checkbox-group, we can still find the component, instead of the data-test attribute to destruture the props

    // @ts-ignore
    const { uniqueValues, mutation } = jobTypesFilter.props(); // props() method --return the complete props object from the component

    expect(uniqueValues).toEqual(new Set(["Full-time", "Part-time"]));
    expect(mutation).toBe("ADD_SELECTED_JOB_TYPES");
  });
});
