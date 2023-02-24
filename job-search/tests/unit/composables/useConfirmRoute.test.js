import { useRoute } from "vue-router";
jest.mock("vue-router");

import useConfirmRoute from "@/composables/useConfirmRoute";

describe("useConfirmRoute", () => {
  it("determines if page route matches specified route", () => {
    useRoute.mockReturnValue({ name: "JobResults" });
    const routeName = "JobResults";
    const route = useConfirmRoute(routeName);
    expect(route.value).toBe(true); // accessing the value property of useConfirmRoute
  });
});
