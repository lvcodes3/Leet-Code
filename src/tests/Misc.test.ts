import * as MiscFunctions from "../Misc";

describe("Misc Problems", () => {
  test("Finding Consecutive Substrings Of Alphabet Inside String", () => {
    expect(MiscFunctions.findConsecutiveGroups("abciOJxyZ")).toBe("abc;xyZ");

    expect(MiscFunctions.findConsecutiveGroups("abcDEFghI")).toBe("abcDEFghI");

    expect(MiscFunctions.findConsecutiveGroups("mnopQR")).toBe("mnopQR");

    expect(MiscFunctions.findConsecutiveGroups("xyzABC")).toBe("xyz;ABC");

    expect(() => MiscFunctions.findConsecutiveGroups("123abc")).toThrow(
      "Input must only contain alphabetic characters."
    );
  });
});
