import { useRoute } from "vue-router";
jest.mock("vue-router");

import useConfirmRoute from "@/composables/useConfirmRoute";

const useRouteMock = useRoute as jest.Mock;

describe("useConfirmRoute", () => {
  it("determines if page route matches specified route", () => {
    useRouteMock.mockReturnValue({ name: "JobResults" });
    const routeName = "JobResults";
    const route = useConfirmRoute(routeName);
    expect(route.value).toBe(true); // accessing the value property of useConfirmRoute
  });
});
