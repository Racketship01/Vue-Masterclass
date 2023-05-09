import { shallowMount } from "@vue/test-utils";
import JobFilterSidebar from "@/components/JobResults/JobFilterSideBar/JobFilterSidebar.vue";

import { useStore } from "vuex";
jest.mock("vuex"); //simply mocking our vuex including useStore with a jest mock function by default and return undefined but tortally fine because the only use case of useStore is to call the commit method for clearUseJobFilterSelections method
const useStoreMock = useStore as jest.Mock;

import { useRoute } from "vue-router";
import { ADD_INPUT_SKILLS } from "@/store/constants";
jest.mock("vue-router");
const useRouteMock = useRoute as jest.Mock;

/*
import {
  useUniqueJobTypes,
  useUniqueOrganizations,
  useUniqueDegrees,
} from "@/store/composables";
jest.mock("@/store/composables");

const useUniqueJobTypesMock = useUniqueJobTypes as jest.Mock;
const useUniqueOrganizationsMock = useUniqueOrganizations as jest.Mock;
const useUniqueDegreesMock = useUniqueDegrees as jest.Mock;
*/

describe("JobFilterSidebar", () => {
  it("sets up panel for user to filter jobs by one or more criteria", () => {
    useRouteMock.mockReturnValue({
      query: {},
    });

    useStoreMock.mockReturnValue({
      commit: jest.fn(),
    });
    const wrapper = shallowMount(JobFilterSidebar);
    expect(wrapper.exists()).toBe(true);
  });
  it("reads query params to filter initial job skills", () => {
    useRouteMock.mockReturnValue({
      query: {
        role: "Vue Developer",
      },
    });

    const commit = jest.fn();
    useStoreMock.mockReturnValue({
      commit,
    });
    shallowMount(JobFilterSidebar);
    expect(commit).toHaveBeenCalledWith("ADD_INPUT_SKILLS", "Vue Developer");
  });

  /*
  it("allow user to filter jobs by organization", () => {
    useUniqueOrganizationsMock.mockReturnValue(new Set(["Google", "Amazon"]));
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
    useUniqueDegreesMock.mockReturnValue(["Master's", "Bachelor's"]);

    const wrapper = shallowMount(JobFilterSidebar);
    const organizationFilter = wrapper.findComponent(
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
    useUniqueDegreesMock.mockReturnValue(["Master's", "Bachelor's"]);

    const wrapper = shallowMount(JobFilterSidebar);
    const jobTypeFilter = wrapper.findComponent(
      "[data-test='filter-jobTypes']"
    );

    // @ts-ignore
    const { header, uniqueValues, mutation } = jobTypeFilter.props(); // props() method --return the complete props object from the component
    expect(header).toBe("Job Types");
    expect(uniqueValues).toEqual(new Set(["Full-time", "Part-time"]));
    expect(mutation).toBe("ADD_SELECTED_JOB_TYPES");
  });

  it("allow user to filter jobs by degrees", () => {
    useUniqueOrganizationsMock.mockReturnValue(new Set(["Google", "Amazon"]));
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
    useUniqueDegreesMock.mockReturnValue(["Master's", "Bachelor's"]);

    const wrapper = shallowMount(JobFilterSidebar);
    const degreesFilter = wrapper.findComponent("[data-test='filter-degrees']");

    // @ts-ignore
    const { header, uniqueValues, mutation } = degreesFilter.props(); // props() method --return the complete props object from the component
    expect(header).toBe("Degrees");
    expect(uniqueValues).toEqual(["Master's", "Bachelor's"]);
    expect(mutation).toBe("ADD_SELECTED_DEGREES");
  });
*/
});
9;
