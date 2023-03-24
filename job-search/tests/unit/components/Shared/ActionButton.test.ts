import { mount } from "@vue/test-utils";

import ActionButton from "@/components/Shared/ActionButton.vue";

//rendering text to generic btn
describe("ActionButton", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Im so clickable", //str is something output of the btn
        type: "primary",
      }, //it's okay because this is how our action is designed to work in the real world. A parent component will pass in these two pieces of information and the action, but needs them in order to work.  --providing this component what it needs in order to operate even before we build the action button component as we follow TDD it would be a fair assumption to make that if we're going to have a generic button, that we're going to need some kind of text to give it in order to render.
    });
    expect(wrapper.text()).toMatch("Im so clickable");
  });

  //applying the right css class --type of primary is going to apply to the btn
  it("applies one of several styles to button", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Im so clickable",
        type: "primary",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true); //classes method --provide a string of a class that expect to find // true --if primary class exists among the buttons class
    //toBe --for strict equality and totally okay to use with a boolean
    //Find that button view test utils. Check the kind of css classes that it has applied to it and make sure that primary is in that list of classes
    // NOTE: In props: even you change the value of type in the actual component e.g (from parent to child) when run test here result is still passed coz in the config obj of mount function props type value is same in the assertions(expect)
  });
});
