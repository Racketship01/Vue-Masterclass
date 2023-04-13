// do not need mount function as not dealing with any vue components
// but need to import nextElementList
import nextElementList from "@/utils/nextElementList";

describe("nextElementList", () => {
  it("locates element in list and returns the next element in list", () => {
    const list = ["A", "B", "C", "D", "E"];
    const value = "C";
    const result = nextElementList<string>(list, value);
    expect(result).toBe("D");
  });

  // edge cases
  describe("when element is at the end of the list", () => {
    it("locates next element at start of list", () => {
      const list = ["A", "B", "C", "D", "E"];
      const value = "E";
      const result = nextElementList<string>(list, value);
      expect(result).toBe("A");
    });
  });
});
