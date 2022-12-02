import { state, mutations } from "@/store";

// dont need to incorporate all of the vuex store complexity inorder to test the state function and mutations object

// one describe test per property of vuex store
describe("state", () => {
  it("keeps track of whether user is logged in", () => {
    const startingState = state();
    expect(startingState.isLoggedIn).toBe(false);
  });
});

describe("mutations", () => {
  // one describe test for each mutations
  describe("LOGIN_USER", () => {
    it("logs the user in", () => {
      const state = { isLoggedIn: false };
      mutations.LOGIN_USER(state); // no need to import a real life store (state) as we only testing a basic JS method

      expect(state).toEqual({ isLoggedIn: true });
      //NOTE: cannot use toBe matcher when using JS object
    });
  });
});
