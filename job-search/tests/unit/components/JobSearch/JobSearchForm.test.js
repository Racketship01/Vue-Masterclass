import { mount } from "@vue/test-utils";
import { useRouter } from "vue-router";
jest.mock("vue-router"); // same as axios, mock out everything in vue router library --includes useRouter then replace with a jest mock

import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";

describe("JobSearchForm", () => {
  describe("when user submits form", () => {
    it("directs user to job results page with users search parameters", async () => {
      // const $router = { push }; // router set to plain JS object with push method (mock function)

      const push = jest.fn(); // mock function for this.$router.push()
      useRouter.mockReturnValue({ push }); //NOTE: invoking mock function will return undefined, we need mockReturnValue to return a push method then mock it

      const wrapper = mount(JobSearchForm, {
        attachTo: document.body,
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });
      const roleInput = wrapper.find("[data-test='role-input']");
      await roleInput.setValue("Vue Developer");

      const locationInput = wrapper.find("[data-test='location-input']");
      await locationInput.setValue("Ohio");

      const submitButton = wrapper.find("[data-test='form-submit-button']");
      await submitButton.trigger("click");

      // able to test component interaction with vue router w/o actually involving a vue router and by walking through the component in a way that a typical will user interact
      expect(push).toBeCalledWith({
        name: "JobResults",
        query: {
          role: "Vue Developer",
          location: "Ohio",
        },
      }); //asserting if the push method has been invoked with an object
    });
  });
});
