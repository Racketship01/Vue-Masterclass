import { shallowMount } from "@vue/test-utils";
import JobFilterSidebarDegrees from "@/components/JobResults/JobFilterSideBar/JobFilterSidebarDegrees.vue";

import { useUniqueDegrees } from "@/store/composables";
jest.mock("@/store/composables");
const useUniqueDegreesMock = useUniqueDegrees as jest.Mock;

describe("JobFilterSidebarDegrees", () => {
  it("allow user to filter jobs by degrees", () => {
    useUniqueDegreesMock.mockReturnValue(["Master's", "Bachelor's"]);

    const wrapper = shallowMount(JobFilterSidebarDegrees);
    const degreesFilter = wrapper.findComponent({
      name: "JobFilterSidebarCheckboxGroup",
    }); // since we are stubbing out the child component of job-filter-sidebar-checkbox-group, we can still find the component, instead of the data-test attribute to destruture the props

    // @ts-ignore
    const { uniqueValues, mutation } = degreesFilter.props(); // props() method --return the complete props object from the component

    expect(uniqueValues).toEqual(["Master's", "Bachelor's"]);
    expect(mutation).toBe("ADD_SELECTED_DEGREES");
  });
});
