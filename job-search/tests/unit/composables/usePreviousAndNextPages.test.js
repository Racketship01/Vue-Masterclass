import usePreviousAndNextPages from "@/composables/usePreviousAndNextPages";

describe("usePreviousAndNextPages", () => {
  it("calculates page before current one", () => {
    const currentPage = { value: 8 };
    const maxPage = { value: 10 };
    const { previousPage } = usePreviousAndNextPages(currentPage, maxPage);
    expect(previousPage.value).toBe(7);
  });

  describe("when current page is the first page", () => {
    it("does not provide previous page", () => {
      const currentPage = { value: 1 };
      const maxPage = { value: 1 };
      const { previousPage } = usePreviousAndNextPages(currentPage, maxPage);
      expect(previousPage.value).toBeUndefined(); // use to match with undefined values
    });
  });

  it("calculates page after current one", () => {
    const currentPage = { value: 7 };
    const maxPage = { value: 10 };
    const { nextPage } = usePreviousAndNextPages(currentPage, maxPage);
    usePreviousAndNextPages(currentPage, maxPage);
    expect(nextPage.value).toBe(8);
  });

  describe("when current page is in the last page", () => {
    it("does not provide next page", () => {
      const currentPage = { value: 10 };
      const maxPage = { value: 10 };
      const { nextPage } = usePreviousAndNextPages(currentPage, maxPage);
      expect(nextPage.value).toBeUndefined(); // use to match with undefined values
    });
  });
});
