import { flushPromises, shallowMount } from "@vue/test-utils";
import axios from "axios";
jest.mock("axios"); // loop through all of axios functionality then replaced that in its own mock function. We can now use functionality (e.g get) or invoke axios regularly here at test suite.

import JobListings from "@/components/JobResults/JobListings.vue";

describe("JobListings", () => {
  it("fetches jobs", () => {
    axios.get.mockResolvedValue({ data: [] }); // simulation of async function that returns resolved value for response of data --we dont care of what is the response, just need some kind of async value that has a data property.

    shallowMount(JobListings);
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs"); // --for testing the axios.get method being called or invoke with the right argument. This will return an undefined value so we need to simulate a function that will returned a resolved value(shown above)
  });

  it("creates a job listings for a maximum of 10 jobs", async () => {
    // axios.get.mockResolvedValue({ data: Array(15).fill({}) }); // simulation of async function that returns resolved value for an array response of data --Array(15) will create an array of a given length --fill({}) method that will provide a sample element and JS is going to emulate or copy that sample element 15 times(iteration). Doesnt care if real object or not pass as an argument, all care if the 15 items elements specified are being rendered to test the v-for functionality

    // The flushPromise function
    axios.get.mockResolvedValue({ data: Array(10).fill({}) }); // --request to an API outside of the scope of vue component --Vue test suite isnt registering the return resolve value of this axios.get, we simulated this API reqs and response of 15 objects but not registering/ updating with component --nextTick will not work as Vue doesnt know unresolved promise, Solution? use flush Promise fn to resolve promise immediately

    const wrapper = shallowMount(JobListings);
    await flushPromises(); // resolves all outstanding promises immediately --shoot off that promise after we mounted our component as the axios reqs going to run in the mounted hook lifecycle --after finish up all resolve promises, then the component will be updated, we now have 15 job listings because we have a jobs array of 15 elements.

    const jobListings = wrapper.findAll("[data-test='job-listings'"); // findAll occurences of 15 arrays(declared at Array(15)) items being rendered

    // assertion to validate an array length --use .length()method or .toHaveLength() assertion matcher
    expect(jobListings).toHaveLength(10);

    //
  });
});
