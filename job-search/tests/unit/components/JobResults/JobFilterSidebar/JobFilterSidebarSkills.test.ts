import { shallowMount } from "@vue/test-utils";

import { useStore } from "vuex";
jest.mock("vuex");
const useStoreMock = useStore as jest.Mock;

import JobFilterSidebarSkills from "@/components/JobResults/JobFilterSideBar/JobFilterSidebarSkills.vue";

describe("JobFilterSidebarSkills", () => {
  it("populates search input from store", () => {
    useStoreMock.mockReturnValue({
      state: {
        skillsSearch: "Programmer",
      },
      commit: jest.fn(),
    });
    const wrapper = shallowMount(JobFilterSidebarSkills);
    const skillsSearchInput = wrapper.find("[data-test='skills-search-input']");
    const inputElement = skillsSearchInput.element as HTMLInputElement; // represent DOM wrapper for input element from vue test utils
    expect(inputElement.value).toBe("Programmer"); // value --represent the user input type
  });
  it("tells store that the user has entered skills search ", async () => {
    const commit = jest.fn();
    useStoreMock.mockReturnValue({
      state: {
        skillsSearch: "",
      },
      commit,
    });

    const wrapper = shallowMount(JobFilterSidebarSkills);
    const skillsSearchInput = wrapper.find("[data-test='skills-search-input']");
    await skillsSearchInput.setValue("Vue Developer"); // setValue() method is use to populate input element with a value --it is asynchronous needed to await
    expect(commit).toHaveBeenCalledWith("ADD_INPUT_SKILLS", "Vue Developer");
  });

  it("removes whitespace from user input ", async () => {
    const commit = jest.fn();
    useStoreMock.mockReturnValue({
      state: {
        skillsSearch: "",
      },
      commit,
    });

    const wrapper = shallowMount(JobFilterSidebarSkills);
    const skillsSearchInput = wrapper.find("[data-test='skills-search-input']");
    await skillsSearchInput.setValue("   Vue Developer   ");
    expect(commit).toHaveBeenCalledWith("ADD_INPUT_SKILLS", "Vue Developer");
  });
});
