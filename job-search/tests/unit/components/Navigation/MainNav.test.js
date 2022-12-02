import { shallowMount, RouterLinkStub } from "@vue/test-utils"; //allow us to bring up components outside of the browser environment
// mount or shallowMount --we're sort of simulating a browser like environment where we can bring up a component, but it's not actually a real visual environment(DOM), it's sort of a sandbox for us to plan.

//import { createStore } from "vuex"; // importing real life vuex store - createStore function

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
  const createConfig = ($store) => ({
    global: {
      mocks: {
        $store,
      },
      // plugins: [store], // this extension from library can store a real life library like vuex store
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

    const $store = {
      state: {
        isLoggedIn: false,
      },
    };
    const wrapper = shallowMount(MainNav, createConfig($store));
    expect(wrapper.text()).toMatch("Bobo Careers"); //to Match --checks for string or regular expression in wrapper vue component
  }); //describing the value of this component to the user

  it("display menu items for navigation", () => {
    const $store = {
      state: {
        isLoggedIn: false,
      },
    };
    const wrapper = shallowMount(MainNav, createConfig($store));
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
      const $store = {
        state: {
          isLoggedIn: false,
        },
      };
      const wrapper = shallowMount(MainNav, createConfig($store));
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true); //gives a boolean(either true or false) that determines whether or not that element/component exists in the template --expect login button exist if user is logged out

      // const profileImage = wrapper.find("[data-test='profile-image']");
      //expect(profileImage.exists()).toBe(false); //expecting profileImage doesnt exist if user is logged out
    });
    it("issues a call to Vuex to login user", async () => {
      const commit = jest.fn();
      const $store = {
        state: {
          isLoggedIn: false,
        },
        commit,
      };
      // store.commit = commit; //mock commit function
      const wrapper = shallowMount(MainNav, createConfig($store));
      const loginButton = wrapper.find("[data-test='login-button']");

      await loginButton.trigger("click");

      expect(commit).toHaveBeenCalledWith("LOGIN_USER");
    });
  });

  describe("when users logged in", () => {
    it("displays user profile picture", () => {
      // setting up component
      const $store = {
        state: {
          isLoggedIn: true,
        },
      };
      const wrapper = shallowMount(MainNav, createConfig($store));
      const profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);

      /*
      // action or triggering some changes
      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click"); // trigger() --an async function --simulate an event just like a user event which in this case is a click

      // testing the changes from an action
      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
      */
    });

    it("display subnavigation menu with additional information", () => {
      const $store = {
        state: {
          isLoggedIn: true,
        },
      };
      const wrapper = shallowMount(MainNav, createConfig($store));
      const subnav = wrapper.find("[data-test = 'subnav']");
      expect(subnav.exists()).toBe(true);

      /*
      const loginButton = wrapper.find("[data-test = 'login-button']");
      await loginButton.trigger("click");

      subnav = wrapper.find("[data-test = subnav]");
      expect(subnav.exists()).toBe(true);
      */
    });
  });
});
