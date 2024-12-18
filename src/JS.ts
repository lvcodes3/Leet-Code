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
type Counter2665 = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

export function createCounter2(init: number): Counter2665 {
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
type ToBeOrNotToBe2704 = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

export function expect(val: any): ToBeOrNotToBe2704 {
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
type Function2629 = (x: number) => number;

export function compose(functions: Function2629[]): Function2629 {
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
type JSONValue2703 =
  | null
  | boolean
  | number
  | string
  | JSONValue2703[]
  | { [key: string]: JSONValue2703 };

export function argumentsLength(...args: JSONValue2703[]): number {
  return args.length;
}

/**
 * 2666. Allow One Function Call - Easy
 *
 * Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
 * The first time the returned function is called, it should return the same result as fn.
 * Every subsequent time it is called, it should return undefined.
 *
 * Time Complexity: O(1)
 *
 * Space Complexity: O(1)
 */
type JSONValue2666 =
  | null
  | boolean
  | number
  | string
  | JSONValue2666[]
  | { [key: string]: JSONValue2666 };

type OnceFn2666 = (...args: JSONValue2666[]) => JSONValue2666 | undefined;

export function once(fn: Function): OnceFn2666 {
  let hasBeenCalled = false;

  return function (...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      return fn(...args);
    } else {
      return undefined;
    }
  };
}

/**
 * 2623. Memoize - Medium
 *
 * Given a function fn, return a memoized version of that function.
 * A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
 *
 * You can assume there are 3 possible input functions: sum, fib, and factorial.
 * sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments
 * (b, a) where a != b, it cannot be used for the arguments (a, b).
 * For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
 * fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
 * factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 *
 * Time Complexity: O(1) // TODO: check
 *
 * Space Complexity: O(N) // TODO: check
 */
type Function2623 = (...params: number[]) => number;

export function memoize(fn: Function2623): Function2623 {
  const cache: { [key: string]: number } = {};

  return function (...args): number {
    const key = JSON.stringify(args);

    // memoized //
    if (key in cache) {
      return cache[key];
    }

    // not memoized //
    const result = fn(...args);
    cache[key] = result;

    return result;
  };
}

/**
 * 2727. Is Object Empty - Easy
 *
 * Given an object or an array, return if it is empty.
 * An empty object contains no key-value pairs.
 * An empty array contains no elements.
 *
 * Time Complexity:
 *
 * Space Complexity:
 */
type JSONValue2727 =
  | null
  | boolean
  | number
  | string
  | JSONValue2727[]
  | { [key: string]: JSONValue2727 };

type Obj2727 = Record<string, JSONValue2727> | JSONValue2727[];

export function isObjEmpty(obj: Obj2727): boolean {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }

  return Object.keys(obj).length === 0;
}

/**
 * 2677. Chunk Array - Easy
 *
 * Given an array arr and a chunk size size, return a chunked array.
 * A chunked array contains the original elements in arr, but consists of subarrays each of length size.
 * The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
 *
 * Ex: arr = [1, 2, 3, 4, 5], size = 1
 *     [[1], [2], [3], [4], [5]]
 *
 * Time Complexity: O(N), where N is the length of the input array. O(K) for slice where K = size.
 *
 * Space Complexity: O(N), because of chunkedArray.
 */
type JSONValue2677 =
  | null
  | boolean
  | number
  | string
  | JSONValue2677[]
  | { [key: string]: JSONValue2677 };

// type Obj2677 = Record<string, JSONValue2677> | Array<JSONValue2677>;
type Obj2677 = JSONValue2677;

export function chunkArray(arr: Obj2677[], size: number): Obj2677[][] {
  const chunkedArray: Obj2677[][] = [];

  for (let i = 0; i < arr.length; i += size) {
    chunkedArray.push(arr.slice(i, i + size));
  }

  return chunkedArray;
}

/**
 * 2619. Array Prototype Last - Easy
 *
 * Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element.
 * If there are no elements in the array, it should return -1.
 *
 * Time Complexity: O(1)
 *
 * Space Complexity: O(1)
 */
// extend the Array interface //
declare global {
  interface Array<T> {
    last(): T | -1;
  }
}

Array.prototype.last = function () {
  if (this.length === 0) return -1;
  return this[this.length - 1];
};

/**
 * 2724. Sort By - Easy
 *
 * Given an array arr and a function fn, return a sorted array sortedArr.
 * You can assume fn only returns numbers and those numbers determine the sort order of sortedArr.
 * sortedArr must be sorted in ascending order by fn output.
 * You may assume that fn will never duplicate numbers for a given array.
 *
 * Time Complexity:
 *
 * Space Complexity:
 */
type JSONValue2724 =
  | null
  | boolean
  | number
  | string
  | JSONValue2724[]
  | { [key: string]: JSONValue2724 };

type Fn2724 = (value: JSONValue2724) => number;

export function sortBy(arr: JSONValue2724[], fn: Fn2724): JSONValue2724[] {
  return arr.sort((a, b) => fn(a) - fn(b));
}
