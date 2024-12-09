/**
 * Finding consecutive substrings of alphabet inside input string.
 *
 */
const findConsecutiveGroups = (input: string) => {
  // validate input to be string and only contain alphabetic characters //
  if (typeof input !== "string") {
    throw new Error("Input must be of type string.");
  }
  if (!/^[a-zA-Z]+$/.test(input)) {
    throw new Error("Input must only contain alphabetic characters.");
  }

  // main process ///
  let result: string[] = [];
  let currentGroup: string = input[0];

  for (let i = 1; i < input.length; i++) {
    const prevCharCode = input.charCodeAt(i - 1);
    const currentCharCode = input.charCodeAt(i);

    // previous and current character are in sequence AND matches the same case //
    if (
      (currentCharCode === prevCharCode + 1 &&
        /[a-z]/.test(input[i - 1]) &&
        /[a-z]/.test(input[i])) ||
      (/[A-Z]/.test(input[i - 1]) && /[A-Z]/.test(input[i]))
    ) {
      currentGroup += input[i];
    }
    // not in sequence //
    else {
      // if long enough, extract current group sequence //
      if (currentGroup.length >= 3) {
        result.push(currentGroup);
      }
      // reset group //
      currentGroup = input[i];
    }
  }

  // check the last group //
  if (currentGroup.length >= 3) {
    result.push(currentGroup);
  }

  // join the groups with a semicolon //
  return result.join(";");
};

// Example usage
const input = "abciOJxyZ";
console.log(findConsecutiveGroups(input)); // Output: "abc;xyZ"

// function splitAndReverseMRI(mri, arr) {
//   // Step 1: Reverse the entire string
//   const reversedMRI = mri.split("").reverse().join("");
//   let chunks: any[] = [];
//   let startIndex = 0;

//   // Step 2: Split the reversed string into chunks
//   for (let length of arr) {
//     let chunk = reversedMRI.slice(startIndex, startIndex + length);
//     // Reverse the chunk and add it to the chunks array
//     chunks.push(chunk.split("").reverse().join(""));
//     startIndex += length;
//   }

//   // Step 3: Join the reversed chunks with "-" and return
//   return chunks.join("-");
// }

// // Example usage
// const mri = "8126595674";
// const array = [3, 2, 4, 1];
// console.log(splitAndReverseMRI(mri, array)); // Output: "674-95-1265-8"

// function transposeTransform(start, target) {
//   // Validation: Check if strings are the same length and anagrams
//   if (
//     start.length !== target.length ||
//     [...start].sort().join("") !== [...target].sort().join("")
//   ) {
//     throw new Error("Input strings must be anagrams and of the same length.");
//   }

//   let steps: any[] = [];
//   let current: any[] = start.split(""); // Convert start string to an array

//   // Process each character in the target
//   for (let i = 0; i < target.length; i++) {
//     // Find the position of the target character in the current string
//     let targetIndex = current.indexOf(target[i]);

//     // Swap adjacent characters to bring the target character to the correct position
//     while (targetIndex > i) {
//       // Perform the swap
//       [current[targetIndex], current[targetIndex - 1]] = [
//         current[targetIndex - 1],
//         current[targetIndex],
//       ];
//       steps.push(current.join("")); // Record the intermediate result
//       targetIndex--; // Update the target index
//     }
//   }

//   return steps;
// }

// // Example usage
// const start = "MUG";
// const target = "GUM";
// console.log(transposeTransform(start, target));
// // Output: [ 'UMG', 'UGM', 'GUM' ]

// const findConsecutiveGroups = (input: string) => {
//   // validate input to be string and only contain alphabetic characters //
//   if (typeof input !== "string") {
//     throw new Error("Input must be of type string.");
//   }
//   if (!/^[a-zA-Z]+$/.test(input)) {
//     throw new Error("Input must only contain alphabetic characters.");
//   }

//   // main process ///
//   let result: string[] = [];
//   let currentGroup: string = input[0];

//   for (let i = 1; i < input.length; i++) {
//     const prevCharCode = input.charCodeAt(i - 1);
//     const currentCharCode = input.charCodeAt(i);

//     // check if the current character is the next in sequence AND matches the same case //
//     if (
//       currentCharCode === prevCharCode + 1 &&
//       ((/[a-z]/.test(input[i - 1]) && /[a-z]/.test(input[i])) ||
//         (/[A-Z]/.test(input[i - 1]) && /[A-Z]/.test(input[i])))
//     ) {
//       currentGroup += input[i];
//     } else {
//       // Break in sequence, check if the group is long enough
//       if (currentGroup.length >= 3) {
//         result.push(currentGroup);
//       }
//       // Start a new group
//       currentGroup = input[i];
//     }
//   }

//   // Check the last group
//   if (currentGroup.length >= 3) {
//     result.push(currentGroup);
//   }

//   // Join the groups with a semicolon
//   return result.join(";");
// };

// // problem 1 //
// const promiseAll = (promises: Promise<any>[]): Promise<any> => {
//   const outputs: any[] = [];
//   let settledPromiseCounter = 0;

//   return new Promise((resolve, reject) => {
//     promises.forEach((promise, i) => {
//       promise
//         .then((value) => {
//           outputs[i] = value;

//           settledPromiseCounter++;

//           if (settledPromiseCounter === promises.length) {
//             resolve(outputs);
//           }
//         })
//         .catch(reject);
//     });
//   });
// };

// // problem 1 testing //
// const slowPromise = new Promise((res) => {
//   setTimeout(() => res("done"), 100);
// });
// const promises = [
//   Promise.resolve(2),
//   Promise.resolve("resolve"),
//   slowPromise,
//   Promise.resolve(5),
//   Promise.resolve(true),
// ]; // Promise.reject("error")
// promiseAll(promises).then(console.log);

// // problem 2 - deep comparing (type and value) two variables of any type //
// const deepEquals = (valueOne: any, valueTwo: any) => {
//   // variables not of the same type //
//   if (typeof valueOne !== typeof valueTwo) return false;

//   // primitive types //
//   if (typeof valueOne !== "object" && typeof valueTwo !== "object") {
//     // handling NaN (not a number) type //
//     const isValueOneNaN =
//       Number.isNaN(valueOne) && typeof valueOne === "number";
//     const isValueTwoNaN =
//       Number.isNaN(valueTwo) && typeof valueTwo === "number";
//     if (isValueOneNaN && isValueTwoNaN) return true;

//     return valueOne === valueTwo;
//   }

//   // nulls //
//   if (valueOne === null && valueTwo === null) return true;
//   if (valueOne === null || valueTwo === null) return false;

//   if (valueOne === valueTwo) return true;

//   // arrays //
//   if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
//     if (valueOne.length !== valueTwo.length) return false;
//     for (let i = 0; i < valueOne.length; i++) {
//       if (!deepEquals(valueOne[i], valueTwo[i])) return false;
//     }
//     return true;
//   }

//   if (Array.isArray(valueOne) || Array.isArray(valueTwo)) return false;

//   // objects //
//   const valueOneKeys = Object.keys(valueOne);
//   const valueTwoKeys = Object.keys(valueTwo);

//   if (valueOneKeys.length !== valueTwoKeys.length) return false;

//   if (!deepEquals(valueOneKeys, valueTwoKeys)) return false;

//   for (let i = 0; i < valueOneKeys.length; i++) {
//     const key = valueOneKeys[i];
//     const valueOneValue = valueOne[key];
//     const valueTwoValue = valueTwo[key];
//     if (!deepEquals(valueOneValue, valueTwoValue)) return false;
//   }

//   return true;
// };

// // problem 2 testing //
// // true //
// console.log("TRUE:");
// console.log(deepEquals(1, 1));
// console.log(deepEquals("a", "a"));
// console.log(deepEquals(NaN, NaN));
// console.log(deepEquals([], []));
// console.log(deepEquals([1], [1]));
// console.log(
//   deepEquals(
//     [
//       [1, 2],
//       [3, 4],
//     ],
//     [
//       [1, 2],
//       [3, 4],
//     ]
//   )
// );
// console.log(deepEquals({}, {}));
// console.log(deepEquals({ a: 1 }, { a: 1 }));
// console.log(deepEquals({ a: 1, obj: { b: 2 } }, { a: 1, obj: { b: 2 } }));
// console.log(deepEquals(null, null));
// console.log(deepEquals(undefined, undefined));
// // false //
// console.log("FALSE:");
// console.log(deepEquals(1, 0));
// console.log(deepEquals("a", "b"));
// console.log(deepEquals(NaN, 10));
// console.log(deepEquals(NaN, "NaN"));
// console.log(deepEquals([], [1]));
// console.log(deepEquals([10], [1]));
// console.log(
//   deepEquals(
//     [
//       [1, 2, 3],
//       [3, 4],
//     ],
//     [
//       [1, 2],
//       [3, 4],
//     ]
//   )
// );
// console.log(
//   deepEquals(
//     [
//       [1, 2],
//       ["3", 4],
//     ],
//     [
//       [1, 2],
//       [3, 4],
//     ]
//   )
// );
// console.log(deepEquals({}, { a: 1 }));
// console.log(deepEquals({ a: 1 }, { a: 2 }));
// console.log(deepEquals({ a: 1, obj: { b: 2 } }, { a: 1, obj: { b: 4 } }));
// console.log(deepEquals(null, undefined));
// console.log(deepEquals(undefined, {}));

// problem 3 //
// input string in ISODateFormat - "2022-06-02T00:00:00.000-07-00" //
// should return an object { hours: number, minutes: number, seconds: number } //
interface timerInfoInterface {
  hours: number;
  minutes: number;
  seconds: number;
}

const updateTimer = (
  dateString: string,
  timerInfo: timerInfoInterface
): void => {
  const date: Date = new Date(dateString);

  // update timer every half a second //
  setInterval(() => {
    const timeTillDate = date.getTime() - Date.now();

    const seconds = Math.floor(timeTillDate / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    timerInfo.hours = hours;
    timerInfo.minutes = minutes % 60;
    timerInfo.seconds = seconds % 60;
  }, 500);
};

// problem 3 testing //
const dateString = "2025-06-02T00:00:00.000-07:00";
const timerInfo = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

updateTimer(dateString, timerInfo);

// logging timer info periodically (for demonstration) //
setInterval(() => console.log(timerInfo), 1000);
