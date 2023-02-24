import { mount } from "@vue/test-utils"; // --not using a shallowMount(stubbing out child component) as accordion (child component) need to test its child elements (dynamic slot content)

import { useUniqueOrganizations } from "@/store/composables";
jest.mock("@/store/composables");
import { useStore } from "vuex";
jest.mock("vuex");
import { useRouter } from "vue-router";
jest.mock("vue-router");

import JobFilterSidebarOrganization from "@/components/JobResults/JobFilterSideBar/JobFilterSidebarOrganization.vue";

describe("JobFilterSidebarOrganization", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true, // need to stub font awesome icon component being rendered at accordion component
      },
    },
  });

  it("renders unique list of organization for filtering jobs", async () => {
    useUniqueOrganizations.mockReturnValue(new Set(["Google", "Amazon"]));
    const wrapper = mount(JobFilterSidebarOrganization, createConfig());

    const clickableArea = wrapper.find("[data-test='clickable-area']"); // need to test user action --accordion is a collapsable component that will renders if trigger a click action
    await clickableArea.trigger("click");

    const organizationLabels = wrapper.findAll("[data-test='organization'"); // find and findAll method will return an array of nodes that stores all the matches element found at the implementation
    const organizations = organizationLabels.map((node) => node.text()); // return a new array of two strings --give actual text that is rendering to the DOM to the browser

    expect(organizations).toEqual(["Google", "Amazon"]);
  });

  describe("when user clicks checkbox", () => {
    it("communicates that user has selected checkbox for organization", async () => {
      useUniqueOrganizations.mockReturnValue(new Set(["Google", "Amazon"]));
      const commit = jest.fn();
      useStore.mockReturnValue({ commit });
      useRouter.mockReturnValue({ push: jest.fn() });

      const wrapper = mount(JobFilterSidebarOrganization, createConfig());

      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");

      const googleInput = wrapper.find("[data-test='Google']"); // referencing dynamic data-test at the elemnt in component -- :data-test=""
      await googleInput.setChecked(); // setChecked() --simulate a checkbox

      expect(commit).toHaveBeenCalledWith("ADD_SELECTED_ORGANIZATIONS", [
        "Google",
      ]); // commit method will run tand pass the name of the mutation as the first argument then afterwards pass any argument [here passing an array]
    });

    it("navigates user to job results page to see fresh batch of filters", async () => {
      useUniqueOrganizations.mockReturnValue(new Set(["Google", "Amazon"]));

      useStore.mockReturnValue({ commit: jest.fn() });
      const push = jest.fn();
      useRouter.mockReturnValue({ push });
      const wrapper = mount(JobFilterSidebarOrganization, createConfig());

      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");

      const googleInput = wrapper.find("[data-test='Google']"); // referencing dynamic data-test at the elemnt in component -- :data-test=""
      await googleInput.setChecked(); // setChecked() --simulate a checkbox

      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });
});
