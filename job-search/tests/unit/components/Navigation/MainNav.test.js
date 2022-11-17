import { shallowMount, RouterLinkStub } from "@vue/test-utils"; //allow us to bring up components outside of the browser environment
// mount or shallowMount --we're sort of simulating a browser like environment where we can bring up a component, but it's not actually a real visual environment(DOM), it's sort of a sandbox for us to plan.

import MainNav from "@/components/Navigation/MainNav.vue";

describe("MainNav", () => {
  /*beforeEach() --one to solve duplications
  let wrapper; //variable still the same but the reference that its storing stays different fot every test

  beforeEach(() => {
    wrapper = shallowMount(MainNav, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
    }); // variable that is declared let whose value is being assigned in the before each function that is running once before each test executes.
  });
  */

  // factory function
  const createConfig = () => ({
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("displays company name", () => {
    /*
    const wrapper = mount(MainNav, {
      data() {
        return {
          company: "Bobo Careers",
        };
      }, // optinal second argument
    });

    const wrapper = shallowMount(MainNav, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
    });
    mounts returns an object (that is a wrapper) around the vue component (MainNav) --wrap the MainNav with a bunch of extra funcitonality that Vue test utils library gives to utilize --component with some expanded functionality
    console.log(wrapper.text());
    */

    const wrapper = shallowMount(MainNav, createConfig());
    expect(wrapper.text()).toMatch("Bobo Careers"); //to Match --checks for string or regular expression in wrapper vue component
  }); //describing the value of this component to the user

  it("display menu items for navigation", () => {
    const wrapper = shallowMount(MainNav, createConfig());
    const navigationMenuItems = wrapper.findAll(
      "[data-set='main-nav-list-item']"
    );
    const navigationMenuText = navigationMenuItems.map((item) => {
      return item.text();
    });

    expect(navigationMenuText).toEqual([
      "Teams",
      "Locations",
      "Life at Bobo",
      "How we hire",
      "Students",
      "Jobs",
    ]);
    console.log(navigationMenuText);
  });

  describe("when user is logged out", () => {
    it("prompts user to sign in", () => {
      const wrapper = shallowMount(MainNav, createConfig());
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true); //gives a boolean(either true or false) that determines whether or not that element/component exists in the template --expect login button exist if user is logged out

      // const profileImage = wrapper.find("[data-test='profile-image']");
      //expect(profileImage.exists()).toBe(false); //expecting profileImage doesnt exist if user is logged out
    });
  });

  describe("when user logs in", () => {
    it("displays user profile picture", async () => {
      // setting up component
      const wrapper = shallowMount(MainNav, createConfig());
      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      // action or triggering some changes
      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click"); // trigger() --an async function --simulate an event just like a user event which in this case is a click

      // testing the changes from an action
      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);

      //expect(loginButton.exists()).toBe(false);
    });

    it("display subnavigation menu with additional information", async () => {
      const wrapper = shallowMount(MainNav, createConfig());
      let subnav = wrapper.find("[data-test = 'subnav']");
      expect(subnav.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test = 'login-button']");
      await loginButton.trigger("click");

      subnav = wrapper.find("[data-test = subnav]");
      expect(subnav.exists()).toBe(true);
    });
  });
});
