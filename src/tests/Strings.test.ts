import * as StringFunctions from "../Strings";

describe("Strings Leet Code Problems", () => {
  test("Index Of The First Occurence In A String", () => {
    expect(StringFunctions.strStr("sadbutsad", "sad")).toBe(0);

    expect(StringFunctions.strStr("sadbutsad", "sad")).toBe(0);

    expect(StringFunctions.strStr("leetcode", "leeto")).toBe(-1);

    expect(StringFunctions.strStr("butsad", "ad")).toBe(4);

    expect(StringFunctions.strStr("", "")).toBe(0);

    expect(StringFunctions.strStr("a", "a")).toBe(0);
  });

  test("Is A Palidrome - Sol 1", () => {
    expect(
      StringFunctions.isPalindrome1("A man, a plan, a canal: Panama")
    ).toBeTruthy();

    expect(StringFunctions.isPalindrome1("race a car")).toBeFalsy();

    expect(StringFunctions.isPalindrome1(" ")).toBeTruthy();
  });

  test("Is A Palidrome - Sol 2", () => {
    expect(
      StringFunctions.isPalindrome2("A man, a plan, a canal: Panama")
    ).toBeTruthy();

    expect(StringFunctions.isPalindrome2("race a car")).toBeFalsy();

    expect(StringFunctions.isPalindrome2(" ")).toBeTruthy();
  });
});
