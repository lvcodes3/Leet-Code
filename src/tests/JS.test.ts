import * as JS from "../JS";

describe("30 Days of JavaScript", () => {
  test("Create Hello World Function", () => {
    const fxn = JS.createHelloWorld();
    expect(fxn()).toBe("Hello World");
    expect(fxn()).toBe("Hello World");
  });

  test("Counter 1", () => {
    const counter = JS.createCounter1(10);
    expect(counter()).toBe(10);
    expect(counter()).toBe(11);
    expect(counter()).toBe(12);
    expect(counter()).toBe(13);
  });

  test("Counter 2", () => {
    const counter = JS.createCounter2(10);
    expect(counter.increment()).toBe(11);
    expect(counter.increment()).toBe(12);
    expect(counter.reset()).toBe(10);
    expect(counter.decrement()).toBe(9);
    expect(counter.decrement()).toBe(8);
  });

  test("To Be Or Not To Be", () => {
    expect(JS.expect(5).toBe(5)).toBeTruthy();
    expect(() => {
      JS.expect(5).toBe(6);
    }).toThrow("Not Equal");

    expect(JS.expect(5).notToBe(10)).toBeTruthy();
    expect(() => {
      JS.expect(5).notToBe(5);
    }).toThrow("Equal");
  });

  test("Filter Elements From Array", () => {
    function greaterThan10(n: number): boolean {
      return n > 10;
    }

    function even(n: number): boolean {
      return n % 2 === 0;
    }

    expect(JS.filter([1, 6, 10, 11, 25, 64], greaterThan10)).toEqual([
      11, 25, 64,
    ]);
    expect(
      [1, 6, 10, 11, 25, 64].filter((number) => greaterThan10(number))
    ).toEqual([11, 25, 64]);

    expect(JS.filter([1, 6, 10, 11, 25, 64], even)).toEqual([6, 10, 64]);
    expect([1, 6, 10, 11, 25, 64].filter((number) => even(number))).toEqual([
      6, 10, 64,
    ]);
  });

  test("Apply Transform Over Each Element in Array", () => {
    function add10(n: number): number {
      return (n += 10);
    }

    function mod2(n: number): number {
      return n % 2;
    }

    expect(JS.map([1, 6, 10, 11, 25, 64], add10)).toEqual([
      11, 16, 20, 21, 35, 74,
    ]);
    expect([1, 6, 10, 11, 25, 64].map((number) => add10(number))).toEqual([
      11, 16, 20, 21, 35, 74,
    ]);

    expect(JS.map([1, 6, 10, 11, 25, 64], mod2)).toEqual([1, 0, 0, 1, 1, 0]);
    expect([1, 6, 10, 11, 25, 64].map((number) => mod2(number))).toEqual([
      1, 0, 0, 1, 1, 0,
    ]);
  });

  test("Array Reduce Transformation", () => {
    function sum(accum: number, curr: number): number {
      return accum + curr;
    }

    expect(JS.reduce([1, 2, 3, 4], sum, 0)).toBe(10);
    expect(
      [1, 2, 3, 4].reduce(
        (accumulator, currentValue) => accumulator + currentValue
      )
    ).toBe(10);
  });

  test("Function Composition", () => {
    const fn = JS.compose([(x) => x + 1, (x) => 2 * x, (x) => 5 * x]);

    expect(fn(0)).toBe(1);

    expect(fn(5)).toBe(51);
  });

  test("Return Length of Arguments Passed", () => {
    expect(JS.argumentsLength(1, 2, 3)).toBe(3);

    expect(JS.argumentsLength({}, null, "3", [null, 3])).toBe(4);
  });
});
