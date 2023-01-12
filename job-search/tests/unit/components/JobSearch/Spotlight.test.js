import { flushPromises, mount } from "@vue/test-utils";
import axios from "axios";
jest.mock("axios");

import Spotlight from "@/components/JobSearch/Spotlight.vue";

describe("Spotlight", () => {
  const mockResponseData = (data = {}) => {
    axios.get.mockResolvedValue({
      data: [
        {
          img: "Some image",
          title: "Some title",
          description: "Some description",
          ...data,
        },
      ],
    });
  };

  it("provides img attribute to parent component", async () => {
    const data = { img: "Some image" };
    mockResponseData({ data });
    const wrapper = mount(Spotlight, {
      slots: {
        default: ` <template #default="slotProps"> 
          <h2>{{slotProps.img}}</h2>
        </template>`,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("Some image");
  });

  it("provides title attribute to parent component", async () => {
    const data = { title: "Some title" };
    mockResponseData({ data });
    const wrapper = mount(Spotlight, {
      slots: {
        default: ` <template #default="slotProps"> 
          <h2>{{slotProps.title}}</h2>
        </template>`,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("Some title");
  });

  it("provides description attribute to parent component", async () => {
    const data = { description: "Some description" };
    mockResponseData({ data });
    const wrapper = mount(Spotlight, {
      slots: {
        default: ` <template #default="slotProps"> 
          <h2>{{slotProps.description}}</h2>
        </template>`,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("Some description");
  });
});
