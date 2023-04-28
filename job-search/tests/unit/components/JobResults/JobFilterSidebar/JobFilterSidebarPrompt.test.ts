import { mount } from "@vue/test-utils";

import { useStore } from "vuex";
jest.mock("vuex");
const useStoreMock = useStore as jest.Mock;

import JobFilterSidebarPrompt from "@/components/JobResults/JobFilterSideBar/JobFilterSidebarPrompt.vue";

describe("JobFilterSidebarPrompt", () => {
  describe("when user clicks clear filter button", () => {
    it("sends message to clear all of users job search filters", async () => {
      const commit = jest.fn();
      useStoreMock.mockReturnValue({ commit });
      const wrapper = mount(JobFilterSidebarPrompt);
      const button = wrapper.find("[data-test='clear-user-job-filters']");
      await button.trigger("click");
      expect(commit).toHaveBeenLastCalledWith(
        "CLEAR_USER_JOB_FILTER_SELECTIONS"
      );
    });
  });
});
