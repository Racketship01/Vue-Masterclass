import { flushPromises, shallowMount, RouterLinkStub } from "@vue/test-utils";
import axios from "axios";
jest.mock("axios"); // loop through all of axios functionality then replaced that in its own mock function. We can now use functionality (e.g get) or invoke axios regularly here at test suite.

import JobListings from "@/components/JobResults/JobListings.vue";

describe("JobListings", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
  });

  afterEach(() => {
    axios.get.mockReset(); // return mock in its default implementation (not mean to its real axios.get function implementation but in its jest mock) --clearing our custom implementation we specified in every test of what the get method will resolve or return whenever it is invoked in our test suite component.
  });

  const createRoute = (queryParams = {}) => ({
    query: {
      page: "5",
      ...queryParams,
    },
  });

  const createConfig = ($route) => ({
    global: {
      mocks: {
        $route,
      },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("fetches jobs", () => {
    //axios.get.mockResolvedValue({ data: [] }); // simulation of async function that returns resolved value for response of data --we dont care of what is the response, just need some kind of async value that has a data property.

    const $route = createRoute();

    shallowMount(JobListings, createConfig($route)); // for the purpose of the test, we dont care some kind of $route, we just need it to exist here to avoid failure in fetching jobs test assertion

    expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/jobs"); // --for testing the axios.get method being called or invoke with the right argument. This will return an undefined value so we need to simulate a function that will returned a resolved value(shown above)
  });

  it("creates a job listings for a maximum of 10 jobs", async () => {
    // axios.get.mockResolvedValue({ data: Array(15).fill({}) }); // simulation of async function that returns resolved value for an array response of data --Array(15) will create an array of a given length --fill({}) method that will provide a sample element and JS is going to emulate or copy that sample element 15 times(iteration). Doesnt care if real object or not pass as an argument, all care if the 15 items elements specified are being rendered to test the v-for functionality

    // The flushPromise function
    axios.get.mockResolvedValue({ data: Array(15).fill({}) }); // --request to an API outside of the scope of vue component --Vue test suite isnt registering the return resolve value of this axios.get, we simulated this API reqs and response of 15 objects but not registering/ updating with component as promise not fully completed --nextTick will not work as Vue doesnt know unresolved promise, Solution? use flush Promise fn to resolve promise immediately

    const queryParams = {
      page: 1,
    };
    const $route = createRoute(queryParams);
    const wrapper = shallowMount(JobListings, createConfig($route)); // page property will be needed in this "it" test as the page will specify what to   render the max of 10 jobs

    await flushPromises(); // resolves all outstanding promises immediately --shoot off that promise after we mounted our component as the axios reqs going to run in the mounted hook lifecycle --after finish up all resolve promises, then the component will be updated, we now have 15 job listings because we have a jobs array of 15 elements.

    const jobListings = wrapper.findAll("[data-test='job-listings'"); // findAll occurences of 15 arrays(declared at Array(15)) items being rendered

    // assertion to validate an array length --use .length()method or .toHaveLength() assertion matcher
    expect(jobListings).toHaveLength(10);
  });

  describe("when query params exclude page number", () => {
    it("displays page number 1", () => {
      const queryParams = { page: undefined }; //falsy value that will fall to 1 (this.$route.query.page || "1")

      const $route = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($route));
      expect(wrapper.text()).toMatch("Page 1");
    });
  });

  describe("when query params include page number", () => {
    it("displays page numbers", () => {
      const queryParams = { page: "3" };

      const $route = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($route));
      expect(wrapper.text()).toMatch("Page 3");
    });
  });

  describe("when user is on first page", () => {
    it("does not show link to previous page", () => {
      const queryParams = { page: "1" };
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($route));
      const previousPage = wrapper.find("[data-test = 'previous-page-link']");
      expect(previousPage.exists()).toBe(false);
    });

    it("show link to next page", async () => {
      const queryParams = { page: "1" };
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($route));
      await flushPromises();
      const nextPage = wrapper.find("[data-test = 'next-page-link']");
      expect(nextPage.exists()).toBe(true);
    });
  });

  describe("when user is on the last page", () => {
    it("does not show link to next page", async () => {
      const queryParams = { page: "2" };
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($route));
      await flushPromises();
      const nextPage = wrapper.find("[data-test = 'next-page-link']");
      expect(nextPage.exists()).toBe(false);
    });

    it("show link to previous page", async () => {
      const queryParams = { page: "2" };
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($route));
      await flushPromises();
      const previousPage = wrapper.find("[data-test = 'previous-page-link']");
      expect(previousPage.exists()).toBe(true);
    });
  });
});
