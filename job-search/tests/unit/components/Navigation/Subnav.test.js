import { mount } from "@vue/test-utils";

// import { useStore } from "vuex";
// jest.mock("vuex");
import { useFilterJobs } from "@/store/composables";
jest.mock("@/store/composables");

import Subnav from "@/components/Navigation/Subnav.vue";

// import { useRoute } from "vue";
// jest.mock("vue");
import { ref } from "vue";
import useConfirmRoute from "@/composables/useConfirmRoute";
jest.mock("@/composables/useConfirmRoute"); //instead of passing vu-router, link to the composables should be

describe("Subnav", () => {
  /*
  const createConfig = (routeName, $store = {}) => ({
    // global settings of the component
    global: {
      mocks: {
        $route: {
          name: routeName,
        },
        $store,
      },
      stubs: {
        FontAwesomeIcon: true,
      }, // keys or properties in stub object represents the components that we want to stub out to replace whenever test utils mounts a sub component then provide a value since stub is an object and set to true --boolean set up if we have multiple different components being rendered or replace
    },
  });
  */

  const createConfig = () => ({
    // global settings of the component
    global: {
      stubs: {
        FontAwesomeIcon: true,
      }, // keys or properties in stub object represents the components that we want to stub out to replace whenever test utils mounts a sub component then provide a value since stub is an object and set to true --boolean set up if we have multiple different components being rendered or replace
    },
  });

  describe("when user is on the job page", () => {
    it("display job count", () => {
      // const $store = {
      //   getters: {
      //     FILTERED_JOBS: [{ id: 1 }, { id: 2 }],
      //   },
      // };
      useConfirmRoute.mockReturnValue(ref(true)); // one way to have a reactive object that stores an internal value of a boolean is to use ref() function

      useFilterJobs.mockReturnValue(ref([{ id: 1 }, { id: 2 }]));

      const wrapper = mount(Subnav, createConfig());

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.text()).toEqual("2 jobs matched");
    });
  });

  describe("when user is not on the job page", () => {
    it("does NOT display the job count", () => {
      useConfirmRoute.mockReturnValue(ref(false));
      useFilterJobs.mockReturnValue(ref([]));

      const wrapper = mount(Subnav, createConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
