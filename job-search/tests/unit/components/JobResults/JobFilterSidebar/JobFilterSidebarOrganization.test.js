import { mount } from "@vue/test-utils"; // not stubbing out accordion child component --not using a shallowMount as accordion need to test its child element at accordion component and its dynamic slot content

import JobFilterSidebarOrganization from "@/components/JobResults/JobFilterSideBar/JobFilterSidebarOrganization.vue";

describe("JobFilterSidebarOrganization", () => {
  const createConfig = ($store) => ({
    global: {
      mocks: {
        $store,
      },
      stubs: {
        FontAwesomeIcon: true, // need to stub font awesome icon component being rendered at accordion component
      },
    },
  });

  it("renders unique list of organization for filtering jobs", async () => {
    const $store = {
      getters: {
        UNIQUE_ORGANIZATIONS: new Set(["Google", "Amazon"]),
      },
    };
    const wrapper = mount(JobFilterSidebarOrganization, createConfig($store));

    const clickableArea = wrapper.find("[data-test='clickable-area']"); // need to test user action --accordion is a collapsable component that will renders if trigger a click action
    await clickableArea.trigger("click");

    const organizationLabels = wrapper.findAll("[data-test='organization'"); // find and findAll method will return an array of nodes that stores all the matches element found at the implementation
    const organizations = organizationLabels.map((node) => node.text()); // return a new array of two strings --give actual text that is rendering to the DOM to the browser

    expect(organizations).toEqual(["Google", "Amazon"]);
  });

  it("renders unique list of organization for filtering jobs", async () => {
    const commit = jest.fn();
    const $store = {
      getters: {
        UNIQUE_ORGANIZATIONS: new Set(["Google", "Amazon"]),
      },
      commit,
    };
    const wrapper = mount(JobFilterSidebarOrganization, createConfig($store));

    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");

    const googleInput = wrapper.find("[data-test='Google']");
    await googleInput.setChecked(); // setChecked() --simulate a checkbox

    expect(commit).toHaveBeenCalledWith("ADD_SELECTED_ORGANIZATIONS", [
      "Google",
    ]); // commit method will run tand pass the name of the mutation as the first argument then afterwards pass any argument [here passing an array]
  });
});
