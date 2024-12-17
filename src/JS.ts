/**
 * 2667. Create Hello World Function - Easy
 *
 * Write a function createHelloWorld, that should return a new function that always returns "Hello World".
 *
 * Time Complexity: O(1)
 *
 * Space Complexity: O(1)
 */
export function createHelloWorld(): () => string {
  return function (): string {
    return "Hello World";
  };
}

/**
 * 2620. Counter 1 - Easy
 *
 * Given an integer n, return a counter function.
 * This counter function initially returns n and then returns 1 more than the previous value every
 * subsequent time it is called (n, n + 1, n + 2, etc).
 *
 * Time Complexity: O(1)
 *
 * Space Complexity: O(1)
 */
export function createCounter1(n: number): () => number {
  return function (): number {
    return n++;
  };
}

/**
 * 2665. Counter 2 - Easy
 *
 * Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
 *
 * The three functions are:
 *
 * increment() increases the current value by 1 and then returns it.
 * decrement() reduces the current value by 1 and then returns it.
 * reset() sets the current value to init and then returns it.
 *
 * Time Complexity: O(1)
 *
 * Space Complexity: O(1)
 */
type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

export function createCounter2(init: number): Counter {
  let currentValue: number = init;

  return {
    increment(): number {
      return ++currentValue;
    },
    decrement(): number {
      return --currentValue;
    },
    reset(): number {
      return (currentValue = init);
    },
  };
}

/**
 * 2704. To Be Or Not To Be - Easy
 *
 * Write a function expect that helps developers test their code.
 * It should take in any value val and return an object with the following two functions.
 * toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
 * notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 *
 * Time Complexity: O(1)
 *
 * Space Complexity: O(1)
 */
type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

export function expect(val: any): ToBeOrNotToBe {
  return {
    toBe(val2) {
      if (val === val2) return true;
      else throw new Error("Not Equal");
    },
    notToBe(val2) {
      if (val !== val2) return true;
      else throw new Error("Equal");
    },
  };
}

/**
 * 2634. Filter Elements from Array - Easy
 *
 * Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
 *
 * The fn function takes one or two arguments:
 * arr[i] - number from the arr
 * i - index of arr[i]
 *
 * filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value.
 *
 * Time Complexity: O(N)
 *
 * Space Complexity: O(N) or O(1)
 */
export function filter(
  arr: number[],
  fn: (n: number, i: number) => any
): number[] {
  // // O(N) Space Solution //
  // const filteredArray: number[] = [];

  // for (let i = 0; i < arr.length; i++) {
  //   if (fn(arr[i], i)) {
  //     filteredArray.push(arr[i]);
  //   }
  // }

  // return filteredArray;

  // O(1) Space Solution //
  let filteredIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      if (i !== filteredIndex) {
        // swap //
        let temp = arr[i];
        arr[i] = arr[filteredIndex];
        arr[filteredIndex] = temp;
      }
      filteredIndex++;
    }
  }

  arr.length = filteredIndex;
  return arr;
}

/**
 * 2635. Apply Transform Over Each Element in Array - Easy
 *
 * Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
 *
 * The returned array should be created such that returnedArray[i] = fn(arr[i], i).
 *
 * Time Complexity: O(N)
 *
 * Space Complexity: O(1)
 */
export function map(
  arr: number[],
  fn: (n: number, i: number) => number
): number[] {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }
  return arr;
}

/**
 * 2626. Array Reduce Transformation - Easy
 *
 * Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by
 * executing the fn function on each element of the array, sequentially, passing in the return value from the
 * calculation on the preceding element.
 *
 * This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.
 *
 * If the length of the array is 0, the function should return init.
 *
 * Time Complexity: O(N)
 *
 * Space Complexity: O(1)
 */
export function reduce(
  nums: number[],
  fn: (accum: number, curr: number) => number,
  init: number
): number {
  let val: number = init;

  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]); // update accumulator with result of fn
  }

  return val;
}

/**
 * 2629. Function Compose - Easy
 *
 * Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
 *
 * The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
 *
 * The function composition of an empty list of functions is the identity function f(x) = x.
 *
 * You may assume each function in the array accepts one integer as input and returns one integer as output.
 *
 * Time Complexity: O(N)
 *
 * Space Complexity: O(1)
 */
type F = (x: number) => number;

export function compose(functions: F[]): F {
  return function (x) {
    let val: number = x;

    for (let i = functions.length - 1; i >= 0; i--) {
      val = functions[i](val);
    }

    return val;
  };
}

/**
 * 2703. Return Length of Arguments Passed - Easy
 *
 * Write a function argumentsLength that returns the count of arguments passed to it.
 *
 * Ex: args[{}, null, "3"]   ->   3
 *
 * Time Complexity: O(1)
 *
 * Space Complexity: O(1);
 */
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

export function argumentsLength(...args: JSONValue[]): number {
  return args.length;
}
