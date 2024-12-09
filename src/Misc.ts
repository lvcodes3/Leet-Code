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
