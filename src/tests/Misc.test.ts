import * as Misc from "../Misc";

describe("Misc Problems", () => {
  test("Finding Consecutive Substrings Of Alphabet Inside String", () => {
    expect(Misc.findConsecutiveGroups("abciOJxyZ")).toBe("abc;xyZ");

    expect(Misc.findConsecutiveGroups("abcDEFghI")).toBe("abcDEFghI");

    expect(Misc.findConsecutiveGroups("mnopQR")).toBe("mnopQR");

    expect(Misc.findConsecutiveGroups("xyzABC")).toBe("xyz;ABC");

    expect(() => Misc.findConsecutiveGroups("123abc")).toThrow(
      "Input must only contain alphabetic characters."
    );
  });

  test("Split And reverse MRI", () => {
    expect(Misc.splitAndReverseMRI("8126595674", [3, 2, 4, 1])).toBe(
      "674-95-1265-8"
    );

    expect(Misc.splitAndReverseMRI("1234567890", [2, 3, 3, 2])).toBe(
      "90-678-345-12"
    );
  });

  test("Deep Equals", () => {
    expect(Misc.deepEquals(1, 1)).toBeTruthy();
    expect(Misc.deepEquals("a", "a")).toBeTruthy();
    expect(Misc.deepEquals(NaN, NaN)).toBeTruthy();
    expect(Misc.deepEquals([], [])).toBeTruthy();
    expect(Misc.deepEquals([1], [1])).toBeTruthy();
    expect(
      Misc.deepEquals(
        [
          [1, 2],
          [3, 4],
        ],
        [
          [1, 2],
          [3, 4],
        ]
      )
    ).toBeTruthy();
    expect(Misc.deepEquals({}, {})).toBeTruthy();
    expect(Misc.deepEquals({ a: 1 }, { a: 1 })).toBeTruthy();
    expect(
      Misc.deepEquals({ a: 1, obj: { b: 2 } }, { a: 1, obj: { b: 2 } })
    ).toBeTruthy();
    expect(Misc.deepEquals(null, null)).toBeTruthy();
    expect(Misc.deepEquals(undefined, undefined)).toBeTruthy();

    expect(Misc.deepEquals(1, 0)).toBeFalsy();
    expect(Misc.deepEquals("a", "b")).toBeFalsy();
    expect(Misc.deepEquals(NaN, 10)).toBeFalsy();
    expect(Misc.deepEquals(NaN, "NaN")).toBeFalsy();
    expect(Misc.deepEquals([], [1])).toBeFalsy();
    expect(Misc.deepEquals([10], [1])).toBeFalsy();
    expect(
      Misc.deepEquals(
        [
          [1, 2, 3],
          [3, 4],
        ],
        [
          [1, 2],
          [3, 4],
        ]
      )
    ).toBeFalsy();
    expect(
      Misc.deepEquals(
        [
          [1, 2],
          ["3", 4],
        ],
        [
          [1, 2],
          [3, 4],
        ]
      )
    ).toBeFalsy();
    expect(Misc.deepEquals({}, { a: 1 })).toBeFalsy();
    expect(Misc.deepEquals({ a: 1 }, { a: 2 })).toBeFalsy();
    expect(
      Misc.deepEquals({ a: 1, obj: { b: 2 } }, { a: 1, obj: { b: 4 } })
    ).toBeFalsy();
    expect(Misc.deepEquals(null, undefined)).toBeFalsy();
    expect(Misc.deepEquals(undefined, {})).toBeFalsy();
  });

  test("Update Timer", () => {
    // use Jest's fake timers //
    jest.useFakeTimers();
    const mockNow = new Date("2025-06-02T00:00:00.000-07:00").getTime();
    jest.setSystemTime(mockNow); // mock the current time

    const dateString = "2025-06-02T00:00:00.000-07:00";

    const timerInfo: Misc.timerInfoInterface = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    // expected calculations //
    const date: Date = new Date(dateString);
    const timeTillDate = date.getTime() - mockNow;
    const seconds = Math.floor(timeTillDate / 1000) % 60;
    const minutes = Math.floor(timeTillDate / (1000 * 60)) % 60;
    const hours = Math.floor(timeTillDate / (1000 * 60 * 60));

    expect(Misc.updateTimer(dateString, timerInfo)).toEqual({
      hours,
      minutes,
      seconds,
    });

    // restore real timers //
    jest.useRealTimers();

    // // logging timer info periodically (for demonstration) //
    // Misc.updateTimer(dateString, timerInfo);
    // setInterval(() => console.log(timerInfo), 1000);
  });

  test("Mean And Sum", () => {
    expect(Misc.meanAndMode([1, 2, 7, 3, 2])).toBe("3 2");

    expect(Misc.meanAndMode([])).toBe("0 0");

    expect(Misc.meanAndMode([-5, 2, 8, 4, -2, 4])).toBe("1 4");
  });

  test("Jars", () => {
    expect(Misc.setOfJars([])).toBe(0);

    expect(Misc.setOfJars([5])).toBe(5);

    expect(Misc.setOfJars([5, 30, 99, 60, 5, 10])).toBe(114);

    expect(Misc.setOfJars([-10, 40, 10, 24, 45])).toBe(85);
  });

  test("Hop Skip Jump", () => {
    expect(
      Misc.hopSkipJump([
        [29, 8, 37],
        [15, 41, 3],
        [1, 10, 14],
      ])
    ).toBe(41);

    expect(
      Misc.hopSkipJump([
        [10, 8],
        [41, 3],
      ])
    ).toBe(8);
  });
});
