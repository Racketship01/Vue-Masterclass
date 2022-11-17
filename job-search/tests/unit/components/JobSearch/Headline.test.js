import { nextTick } from "vue"; // comes from the core vue library

import { mount } from "@vue/test-utils";

import Headline from "@/components/JobSearch/Headline.vue";

// jest mock function
describe("Headline", () => {
  beforeEach(() => {
    jest.useFakeTimers("legacy");
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("displays introductory action verb", () => {
    const wrapper = mount(Headline);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Build for everyone");

    /*
      jest.useFakeTimers("legacy"); // --same as jest mock fn --anything has to do with the passage of time or timing operations --automatically find any of time operationss and replace them with jest mock fn

      console.log(clearInterval); // replacing clear interval anywhere its being using in our test with a mock fn

      // prevent test pollution
      jest.useRealTimers(); // reset and gets things back to original implementation
      console.log(clearInterval);
      */
    /*
      const mockFunction = jest.fn(); // referencing top level jest library --available in this file as a global constant
      // console.log(mockFunction()); // undefined
      // mockFunction();
      // expect(mockFunction).toHaveBeenCalled(); // assertions on jest mock fn --track if mock fn have been called

      mockFunction(1, 2, 3);
      expect(mockFunction).toHaveBeenCalledWith(1, 2, 3); // assertions on jest mock fn --track if mock fn have been called with an argument
      */
  });

  // interaction between headline component and setInterval fn
  it("changes action verb at a consistent interval", () => {
    mount(Headline);
    expect(setInterval).toHaveBeenCalled();
  });

  it("swaps action verb after 1st interval", async () => {
    const wrapper = mount(Headline);
    jest.runOnlyPendingTimers(); //runOnlyPendingTimers() --after mounting need to simulate the idea of that interval(setInterval) after being replaced by mock fn --it runs the timer and simulate same ideas as actual setInterval fn

    // accessing action data property to see current value using vm
    console.log(wrapper.vm.action); // vm --can access to the actual nested component that the wrapper is wrapping around

    // after simulates setInterval fn(runOnlyPendingTimers) --there's a mismatch between the data that component is storing internally versus what is being rendered at the template, as the template has actually not been refreshed from test perspective(disconnect between jest test runner and the vue library(2 seperate software)). Solution? triggers component to refresh as there is no DOM(actual browser) in jest test by importing a vue function from vue library

    await nextTick(); // triggers refresh --(nextTick is async fn --as vue html takes time to render dynamic data from data property) --when we run the next tick function, what that does is it moves forward too, after Vue has successfully updated the HTML, the DOM equivalent of the component.

    const actionPhrase = wrapper.find("[data-test='action-phrase']");

    expect(actionPhrase.text()).toBe("Create for everyone");
  });

  it("removes interval when component disappears", () => {
    const wrapper = mount(Headline);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
  });
});
