import { mount } from "@vue/test-utils";

import JobFilterSidebarJobType from "@/components/JobResults/JobFilterSideBar/JobFilterSidebarJobType.vue";

describe("JobFilterSidebarJobType", () => {
  const createConfig = ($store) => ({
    global: {
      mocks: {
        $store,
      },
    },
    stubs: {
      FontAwesomeIcon: true,
    },
  });

  it("renders unique list of job types for filtering jobs ", async () => {
    const $store = {
      getters: {
        UNIQUE_JOB_TYPES: new Set(["Full-time", "Part-time"]),
      },
    };
    const wrapper = mount(JobFilterSidebarJobType, createConfig($store));

    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");

    const jobTypeLabels = wrapper.findAll("[data-test='job-Type']");

    const jobType = jobTypeLabels.map((node) => node.text());
    expect(jobType).toEqual(["Full-time", "Part-time"]);
  });

  it("communicates that user has selected checkbox for job types", async () => {
    const commit = jest.fn();
    const $store = {
      getters: {
        UNIQUE_JOB_TYPES: new Set(["Full-time", "Part-time"]),
      },
      commit,
    };
    const wrapper = mount(JobFilterSidebarJobType, createConfig($store));

    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");

    const fullTimeInput = wrapper.find("[data-test='Full-time']"); // referencing dynamic data-test at the element in component -- :data-test=""
    await fullTimeInput.setChecked(); // setChecked() --simulate a checkbox

    expect(commit).toHaveBeenCalledWith("ADD_SELECTED_JOB_TYPES", [
      "Full-time",
    ]); // commit method will run tand pass the name of the mutation as the first argument then afterwards pass any argument [here passing an array]
  });
});
