import { mount } from "@vue/test-utils";

import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";

describe("JobSearchForm", () => {
  describe("when user submits form", () => {
    it("directs user to job results page with users search parameters", async () => {
      const push = jest.fn(); // mock function for this.$router.push()
      const $router = { push }; // router set to plain JS object with push method (mock function)

      const wrapper = mount(JobSearchForm, {
        attachTo: document.body,
        global: {
          mocks: {
            $router,
          },
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
