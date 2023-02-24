import { mount } from "@vue/test-utils";

import JobFilterSidebarCheckboxGroup from "@/components/JobResults/JobFilterSideBar/JobFilterSidebarCheckboxGroup.vue";

jest.mock("@/store/composables");
import { useStore } from "vuex";
jest.mock("vuex");
import { useRouter } from "vue-router";
jest.mock("vue-router");

describe("JobFilterSidebarCheckboxGroup", () => {
  const createConfig = (props = {}) => ({
    stubs: {
      FontAwesomeIcon: true,
    },
    props: {
      header: "Some Header",
      uniqueValues: new Set(["Value A", "Value B"]),
      mutation: "SOME_MUTATION",
      ...props,
    },
  });

  it("renders unique list of job types for filtering jobs ", async () => {
    const commit = jest.fn();
    useStore.mockReturnValue({ commit });

    const props = { uniqueValues: new Set(["Value A", "Value B"]) };
    const wrapper = mount(JobFilterSidebarCheckboxGroup, createConfig(props));

    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");

    const checkboxLabels = wrapper.findAll("[data-test='value']");

    const checkbox = checkboxLabels.map((node) => node.text());
    expect(checkbox).toEqual(["Value A", "Value B"]);
  });

  describe("when user clicks checkbox", () => {
    it("communicates that user has selected checkbox for job types", async () => {
      const commit = jest.fn();
      useStore.mockReturnValue({ commit });
      useRouter.mockReturnValue({ push: jest.fn() });

      const props = {
        uniqueValues: new Set(["Value A"]),
        mutation: "SOME_MUTATION",
      };
      const wrapper = mount(JobFilterSidebarCheckboxGroup, createConfig(props));

      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");

      const checkboxInput = wrapper.find("[data-test='Value A']"); // referencing dynamic data-test at the element in component -- :data-test=""
      await checkboxInput.setChecked(); // setChecked() --simulate a checkbox

      expect(commit).toHaveBeenCalledWith("SOME_MUTATION", ["Value A"]); // commit method will run and pass the name of the mutation as the first argument then afterwards pass any argument [here passing an array]
    });

    it("navigates user to job results page to see fresh batch of filters", async () => {
      useStore.mockReturnValue({ commit: jest.fn() });

      const push = jest.fn();
      useRouter.mockReturnValue({ name: "JobResults", push });

      const props = {
        uniqueValues: new Set(["Value A"]),
      };
      const wrapper = mount(JobFilterSidebarCheckboxGroup, createConfig(props));

      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");

      const checkboxInput = wrapper.find("[data-test='Value A']");
      await checkboxInput.setChecked();

      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });
});
