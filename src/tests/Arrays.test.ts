import * as ArrayFunctions from "../Arrays";

describe("Array Leet Code Problems", () => {
  test("Should Merge 2 Sorted Arrays", () => {
    expect(
      ArrayFunctions.mergeSortedArrays([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
    ).toEqual([1, 2, 2, 3, 5, 6]);

    expect(ArrayFunctions.mergeSortedArrays([1], 1, [], 0)).toEqual([1]);

    expect(ArrayFunctions.mergeSortedArrays([0], 0, [1], 1)).toEqual([1]);
  });

  test("Should Remove Duplicates From A Sorted Array", () => {
    expect(
      ArrayFunctions.removeDuplicatesFromSortedArray([1, 1, 2, 2, 3, 3])
    ).toBe(3);

    expect(ArrayFunctions.removeDuplicatesFromSortedArray([])).toBe(0);

    expect(
      ArrayFunctions.removeDuplicatesFromSortedArray([1, 2, 2, 3, 3, 3, 4, 4])
    ).toBe(4);
  });

  test("Should Return The Majority Number In An Array - Sol 1", () => {
    expect(ArrayFunctions.majorityElement1([3, 2, 3])).toBe(3);

    expect(ArrayFunctions.majorityElement1([2, 2, 1, 1, 1, 2, 2])).toBe(2);

    expect(() => {
      ArrayFunctions.majorityElement1([1, 2, 1, 2]);
    }).toThrow("No majority element found.");
  });

  test("Should Return The Majority Number In An Array - Sol 2", () => {
    expect(ArrayFunctions.majorityElement2([3, 2, 3])).toBe(3);

    expect(ArrayFunctions.majorityElement2([2, 2, 1, 1, 1, 2, 2])).toBe(2);

    expect(() => {
      ArrayFunctions.majorityElement2([1, 2, 1, 2]);
    }).toThrow("No majority element found.");
  });

  test("Should Return The Rotated Array - Sol 1", () => {
    expect(ArrayFunctions.rotateArray1([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
      5, 6, 7, 1, 2, 3, 4,
    ]);

    expect(ArrayFunctions.rotateArray1([-1, -100, 3, 99], 2)).toEqual([
      3, 99, -1, -100,
    ]);
  });

  test("Should Return The Rotated Array - Sol 2", () => {
    expect(ArrayFunctions.rotateArray2([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
      5, 6, 7, 1, 2, 3, 4,
    ]);

    expect(ArrayFunctions.rotateArray2([-1, -100, 3, 99], 2)).toEqual([
      3, 99, -1, -100,
    ]);
  });
});
