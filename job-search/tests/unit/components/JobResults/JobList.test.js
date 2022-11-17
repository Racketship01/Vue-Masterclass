import { mount, RouterLinkStub } from "@vue/test-utils";

import JobList from "@/components/JobResults/JobList.vue";

describe("JobList", () => {
  const createJobProps = (jobProps = {}) => ({
    title: "Vue Developer",
    organization: "Bobo Corp",
    locations: ["Vancouver"],
    minimumQualifications: ["Code", "Develop"],
    id: 15,
    ...jobProps, // when passes different argument value for e.g in title or in organization or any additional properties, by using destructuring(...jobProps) --going to overwrite the value of the existing propertie/s (allow each test to pass in which properties they care about to substitute)
  });

  const createConfig = (jobProps) => ({
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
    props: {
      job: {
        ...jobProps,
      },
    },
  });
  it("renders job title", () => {
    const props = createJobProps({ title: "Vue Programmer" });

    const wrapper = mount(JobList, createConfig(props));
    expect(wrapper.text()).toMatch("Vue Programmer");
  });

  it("renders job oganization", () => {
    const props = createJobProps({ organization: "Bobo Corp" });
    const wrapper = mount(JobList, createConfig(props));
    expect(wrapper.text()).toMatch("Bobo Corp");
  });

  it("renders job locations", () => {
    const props = createJobProps({ locations: ["Orlando", "Ohio"] });
    const wrapper = mount(JobList, createConfig(props));
    expect(wrapper.text()).toMatch("Orlando");
    expect(wrapper.text()).toMatch("Ohio");
  });

  it("renders job qualifications", () => {
    const props = createJobProps({
      minimumQualifications: ["Code", "Develop"],
    });
    const wrapper = mount(JobList, createConfig(props));
    expect(wrapper.text()).toMatch("Code");
    expect(wrapper.text()).toMatch("Develop");
  });

  it("links to individual page", () => {
    const props = createJobProps({ id: 15 });
    const wrapper = mount(JobList, createConfig(props));
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    // NOTE: data-test implementation doesnt work as find method returns a native HTML DOM element(close to the final HTML  that we are going to see in our browser), its not actually identifying the concept of a component. We need to tell our test to find a specific component, solution? instead of using data-test, use a method that is available directly on any wrapper and that is the findComponent() then pass the component were looking for as an argument. And because that is a component, "to" props at props() method will now be available

    const toProp = jobPageLink.props("to"); // props() --give us access to component props including the "to" props
    expect(toProp).toBe("/jobs/results/15");
  });
});
