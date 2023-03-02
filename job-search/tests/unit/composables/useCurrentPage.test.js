import useCurrentPage from "@/composables/useCurrentPage";

import { useRoute } from "vue-router";
jest.mock("vue-router");

describe("useCurrentPage", () => {
  describe("when page include query params", () => {
    it("returns page number", () => {
      useRoute.mockReturnValue({ query: { page: "5" } });
      const result = useCurrentPage();
      expect(result.value).toBe(5);
    });
  });

  describe("when page exclude query params", () => {
    it("default to page number 1", () => {
      useRoute.mockReturnValue({ query: {} });
      const result = useCurrentPage();
      expect(result.value).toBe(1);
    });
  });
});
