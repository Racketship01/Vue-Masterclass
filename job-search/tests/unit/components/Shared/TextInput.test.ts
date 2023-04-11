import { mount } from "@vue/test-utils";
import TextInput from "@/components/Shared/TextInput.vue";

describe("TextInput", () => {
  it("communicates that user has entered character", () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: "",
      },
    });
    const input = wrapper.find("input");
    input.setValue("N");
    input.setValue("NY");
    input.setValue("NYC");
    const message = wrapper.emitted()["update:modelValue"]; // square brackey --normal syntax for JS to access property that has unique because of colon
    expect(message).toEqual([["N"], ["NY"], ["NYC"]]); // compare emitted event from component is equal to emitted array from emitted method --toEqual compare
  });
});
