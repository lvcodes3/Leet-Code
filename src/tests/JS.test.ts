import * as JS from "../JS";

describe("30 Days of JavaScript", () => {
  describe("Closures", () => {
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
  });

  describe("Arrays", () => {
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
  });

  describe("Functions", () => {
    test("Function Composition", () => {
      const fn = JS.compose([(x) => x + 1, (x) => 2 * x, (x) => 5 * x]);

      expect(fn(0)).toBe(1);

      expect(fn(5)).toBe(51);
    });

    test("Return Length of Arguments Passed", () => {
      expect(JS.argumentsLength(1, 2, 3)).toBe(3);

      expect(JS.argumentsLength({}, null, "3", [null, 3])).toBe(4);
    });

    test("Allow One Function Call", () => {
      const fn = (a: number, b: number, c: number) => a + b + c;
      const onceFn = JS.once(fn);

      expect(onceFn(1, 2, 3)).toBe(6);
      expect(onceFn(2, 3, 4)).toBeUndefined();
    });

    test("Memoize", () => {
      let callCount: number = 0;

      function memoizeSum(a: number, b: number): number {
        callCount++;

        return a + b;
      }

      function memoizeFibonacci(n: number): number {
        callCount++;

        if (n <= 1) return 1;

        return memoizeFibonacci(n - 1) + memoizeFibonacci(n + 2);
      }

      function memoizeFactorial(n: number): number {
        callCount++;

        if (n <= 1) return 1;

        return memoizeFactorial(n - 1) * n;
      }

      const memoizedSumFn = JS.memoize(memoizeSum);
      expect(memoizedSumFn(2, 3)).toBe(5);
      expect(memoizedSumFn(2, 3)).toBe(5);
      expect(callCount).toBe(1);

      const memoizedFibFn = JS.memoize(memoizeFibonacci);
      expect(memoizedFibFn(1)).toBe(1);

      const memoizedFactFn = JS.memoize(memoizeFactorial);
      expect(memoizedFactFn(1)).toBe(1);
    });
  });

  describe("JSON", () => {
    test("Is Object Empty", () => {
      expect(JS.isObjEmpty({})).toBeTruthy();
      expect(JS.isObjEmpty([])).toBeTruthy();

      expect(JS.isObjEmpty({ a: 1 })).toBeFalsy();
      expect(JS.isObjEmpty([1, 2, 3])).toBeFalsy();
    });

    test("Chunk Array", () => {
      expect(JS.chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);

      expect(JS.chunkArray([1, 2, 3, 4, 5], 1)).toEqual([
        [1],
        [2],
        [3],
        [4],
        [5],
      ]);

      expect(JS.chunkArray([1, 2, 3], 5)).toEqual([[1, 2, 3]]);

      expect(JS.chunkArray([], 3)).toEqual([]);
    });
  });

  describe("Classes", () => {
    test("Calculator Class", () => {
      const calculator = new JS.Calculator(10);

      expect(calculator.getResult()).toBe(10);

      expect(calculator.add(10).subtract(5).multiply(2).getResult()).toBe(30);

      expect(() => {
        calculator.divide(0);
      }).toThrow("Division by zero is not allowed");

      expect(calculator.divide(2).power(3).getResult()).toBe(3375);
    });

    test("Array Wrapper Class", () => {
      const arrayWrapper1 = new JS.ArrayWrapper([1, 2]);
      const arrayWrapper2 = new JS.ArrayWrapper([3, 4]);

      expect(arrayWrapper1.toString()).toBe("[1,2]");
      expect(arrayWrapper2.toString()).toBe("[3,4]");

      expect(arrayWrapper1.valueOf()).toBe(3);
      expect(arrayWrapper2.valueOf()).toBe(7);
      expect(arrayWrapper1.valueOf() + arrayWrapper2.valueOf()).toBe(10);
    });
  });

  describe("Promises & Time", () => {
    test("Add Two Promises", () => {
      JS.addTwoPromises(Promise.resolve(2), Promise.resolve(4))
        .then((sum) => {
          expect(sum).toBe(6);
        })
        .catch((error) => {
          console.error(error);
        });
    });

    test("Sleep", () => {
      JS.sleep(100)
        .then(() => {
          // console.log("success");
        })
        .catch((error) => {
          console.error(error);
        });
    });
  });
});
