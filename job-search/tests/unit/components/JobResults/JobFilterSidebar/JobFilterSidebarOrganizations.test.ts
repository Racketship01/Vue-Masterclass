import { shallowMount } from "@vue/test-utils";
import JobFilterSidebarOrganizations from "@/components/JobResults/JobFilterSideBar/JobFilterSidebarOrganizations.vue";

import { useUniqueOrganizations } from "@/store/composables";
jest.mock("@/store/composables");
const useUniqueOrganizationsMock = useUniqueOrganizations as jest.Mock;

describe("JobFilterSidebarDegrees", () => {
  it("allow user to filter jobs by degrees", () => {
    useUniqueOrganizationsMock.mockReturnValue(new Set(["Google", "Amazon"]));

    const wrapper = shallowMount(JobFilterSidebarOrganizations);
    const organizationsFilter = wrapper.findComponent({
      name: "JobFilterSidebarCheckboxGroup",
    }); // since we are stubbing out the child component of job-filter-sidebar-checkbox-group, we can still find the component, instead of the data-test attribute to destruture the props

    // @ts-ignore
    const { uniqueValues, mutation } = organizationsFilter.props(); // props() method --return the complete props object from the component

    expect(uniqueValues).toEqual(new Set(["Google", "Amazon"]));
    expect(mutation).toBe("ADD_SELECTED_ORGANIZATIONS");
  });
});
