import { flushPromises, shallowMount, RouterLinkStub } from "@vue/test-utils";

/*
----no more needed of axios---API now at Vuex Store

import axios from "axios";
jest.mock("axios"); // loop through all of axios functionality then replaced that in its own mock function. We can now use functionality (e.g get) or invoke axios regularly here at test suite.
*/
import { ref } from "vue";
import { useFilterJobs, useFetchJobsDispatch } from "@/store/composables";
jest.mock("@/store/composables");
const useFilterJobsMock = useFilterJobs as jest.Mock;
const useFetchJobsDispatchMock = useFetchJobsDispatch as jest.Mock;

import useCurrentPage from "@/composables/useCurrentPage";
jest.mock("@/composables/useCurrentPage");
const useCurrentPageMock = useCurrentPage as jest.Mock;

import usePreviousAndNextPages from "@/composables/usePreviousAndNextPages";
jest.mock("@/composables/usePreviousAndNextPages");
const usePreviousAndNextPagesMock = usePreviousAndNextPages as jest.Mock;

import JobListings from "@/components/JobResults/JobListings.vue";

/*
import { useRoute } from "vue-router";
jest.mock("vue-router");
import { useStore } from "vuex";
jest.mock("vuex");
*/

describe("JobListings", () => {
  /*
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
  });

  afterEach(() => {
    axios.get.mockReset(); // return mock in its default implementation (not mean to its real axios.get function implementation but in its jest mock) --clearing our custom implementation we specified in every test of what the get method will resolve or return whenever it is invoked in our test suite component.
  });
  */

  /*
  const createRoute = (queryParams = {}) => ({
    query: {
      page: "5",
      ...queryParams,
    },
  });

  const createConfig = ($route, $store) => ({
    global: {
      mocks: {
        $route,
        $store,
      },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });
  */
  /*
  const createStore = (store = {}) => ({
    
    state: {
      jobs: Array(15).fill({}), // mocking store state of jobs with 15 object iteration
    },
    
    getters: {
      FILTERED_JOBS: [],
    },
    dispatch: jest.fn(), // jest mocking dispatch method in the store object invoking at the mounted lifecyle

    ...store,
  });
*/

  const createConfig = () => ({
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  describe("when component mounts", () => {
    it("makes call to fetch jobs from API", () => {
      useFilterJobsMock.mockReturnValue({ value: [] });
      useCurrentPageMock.mockReturnValue({ value: 2 });
      usePreviousAndNextPagesMock.mockReturnValue({
        previousPage: 1,
        nextPage: 3,
      });
      shallowMount(JobListings, createConfig());
      expect(useFetchJobsDispatch).toHaveBeenCalled();
    });
  });
  /*
  it("fetches jobs", () => {
    //axios.get.mockResolvedValue({ data: [] }); // simulation of async function that returns resolved value for response of data --we dont care of what is the response, just need some kind of async value that has a data property.

    const $route = createRoute();

    shallowMount(JobListings, createConfig($route)); // for the purpose of the test, we dont care some kind of $route, we just need it to exist here to avoid failure in fetching jobs test assertion

    expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/jobs"); // --for testing the axios.get method being called or invoke with the right argument. This will return an undefined value so we need to simulate a function that will returned a resolved value(shown above)
  });
  */

  it("creates a job listings for a maximum of 10 jobs", async () => {
    // axios.get.mockResolvedValue({ data: Array(15).fill({}) }); // simulation of async function that returns resolved value for an array response of data --Array(15) will create an array of a given length --fill({}) method that will provide a sample element and JS is going to emulate or copy that sample element 15 times(iteration). Doesnt care if real object or not pass as an argument, all care if the 15 items elements specified are being rendered to test the v-for functionality

    /*
    // The flushPromise function
    axios.get.mockResolvedValue({ data: Array(15).fill({}) }); // --request to an API outside of the scope of vue component --Vue test suite isnt registering the return resolve value of this axios.get, we simulated this API reqs and response of 15 objects but not registering/ updating with component as promise not fully completed --nextTick will not work as Vue doesnt know unresolved promise, Solution? use flush Promise fn to resolve promise immediately
    */

    useFilterJobsMock.mockReturnValue({ value: Array(15).fill({}) });
    useCurrentPageMock.mockReturnValue({ value: 1 });
    usePreviousAndNextPagesMock.mockReturnValue({
      previousPage: undefined,
      nextPage: 2,
    });

    const wrapper = shallowMount(JobListings, createConfig()); // page property will be needed in this "it" test as the page will specify what to  render the max of 10 jobs

    await flushPromises(); // resolves all outstanding promises immediately --shoot off that promise after we mounted our component as the axios reqs going to run in the mounted hook lifecycle --after finish up all resolve promises, then the component will be updated, we now have 15 job listings because we have a jobs array of 15 elements.

    useFilterJobs();
    const jobListings = wrapper.findAll("[data-test='job-listings'"); // findAll occurences of 15 arrays(declared at Array(15)) items being rendered

    // assertion to validate an array length --use .length()method or .toHaveLength() assertion matcher
    expect(jobListings).toHaveLength(10);
  });

  it("displays page number ", () => {
    /*
      const queryParams = { page: undefined }; //falsy value that will fall to 1 (this.$route.query.page || "1"
      useRoute.mockReturnValue({
        query: {
          page: undefined,
        },
      });
      useStore.mockReturnValue();
      */

    useFilterJobsMock.mockReturnValue({ value: [] });
    useCurrentPageMock.mockReturnValue(ref(1)); // when testing DOM interaction, plain value object will not be a reactive object(displayedJobs function needed a reactive currentPage value to render at template), we are not able to mock out the original reactive useCurrentPage. Solution? make it a reactive object using ref() function

    usePreviousAndNextPagesMock.mockReturnValue({
      previousPage: undefined,
      nextPage: 2,
    });
    const wrapper = shallowMount(JobListings, createConfig());
    expect(wrapper.text()).toMatch("Page 1");
  });

  describe("when user is on first page", () => {
    it("does not show link to previous page", () => {
      // const queryParams = { page: "1" };
      useFilterJobsMock.mockReturnValue({ value: [] });
      useCurrentPageMock.mockReturnValue(ref(1));
      usePreviousAndNextPagesMock.mockReturnValue({
        previousPage: undefined,
        nextPage: 2,
      });
      const wrapper = shallowMount(JobListings, createConfig());
      const previousPage = wrapper.find("[data-test = 'previous-page-link']");
      expect(previousPage.exists()).toBe(false);
    });

    it("show link to next page", async () => {
      // const queryParams = { page: "1" };
      useFilterJobsMock.mockReturnValue({ value: [] });
      useCurrentPageMock.mockReturnValue(ref(1));
      usePreviousAndNextPagesMock.mockReturnValue({
        previousPage: undefined,
        nextPage: 2,
      });
      const wrapper = shallowMount(JobListings, createConfig());
      await flushPromises();
      const nextPage = wrapper.find("[data-test = 'next-page-link']");
      expect(nextPage.exists()).toBe(true);
    });
  });

  describe("when user is on the last page of job results", () => {
    it("does not show link to next page", async () => {
      // const queryParams = { page: "2" };
      useFilterJobsMock.mockReturnValue({ value: [] });
      useCurrentPageMock.mockReturnValue(ref(2));
      usePreviousAndNextPagesMock.mockReturnValue({
        previousPage: 1,
        nextPage: undefined,
      });
      const wrapper = shallowMount(JobListings, createConfig());
      await flushPromises();
      const nextPage = wrapper.find("[data-test = 'next-page-link']");
      expect(nextPage.exists()).toBe(false);
    });

    it("show link to previous page", async () => {
      // const queryParams = { page: "2" };
      useFilterJobsMock.mockReturnValue({ value: [] });
      useCurrentPageMock.mockReturnValue(ref(2));
      usePreviousAndNextPagesMock.mockReturnValue({
        previousPage: 1,
        nextPage: undefined,
      });
      const wrapper = shallowMount(JobListings, createConfig());
      await flushPromises();
      const previousPage = wrapper.find("[data-test = 'previous-page-link']");
      expect(previousPage.exists()).toBe(true);
    });
  });
});
