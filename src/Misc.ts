/**
 * Finding consecutive substrings of alphabet inside string.
 *
 * Time Complexity: O(N)
 *
 * Space Complexity: O(N)
 */
export const findConsecutiveGroups = (input: string): string => {
  // string must only contain alphabetic characters //
  if (!/^[a-zA-Z]+$/.test(input)) {
    /*
      regex explained:
      ^        - anchors the pattern to the start of the string
      [a-zA-Z] - character class that matches any single character in the range a-z or A-Z
      +        - quantifier specifies that the previous pattern must appear one or more times
      $        - anchors the pattern to the end of the string
    */
    throw new Error("Input must only contain alphabetic characters.");
  }

  let result: string[] = [];
  let currentGroup: string = input[0];

  for (let i = 1; i < input.length; i++) {
    const prevCharCode = input[i - 1].toLowerCase().charCodeAt(0);
    const currentCharCode = input[i].toLowerCase().charCodeAt(0);

    // characters are alphabetically consecutive //
    if (currentCharCode === prevCharCode + 1) {
      // append to the current group //
      currentGroup += input[i];
    }
    //  characters are not alphabetically consecutive //
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

/**
 * Split and Reverse MRI String.
 *
 * Ex: "8126595674", [3, 2, 4, 1] -> "674-95-1265-8"
 *
 * Time Complexity:
 * split() -> O(N) | reverse() -> O(N) | join() -> O(N) | N = number of characters in MRI string
 * for loop -> O(M) | M = length of arr | total work -> O(N) sum of all chunk lengths in arr
 *    slice() -> O(L) | L = chunk length
 *    split(), reverse(), join() -> O(L)
 * join() -> O(M + N) | M = number of chunks and N = total length of the chunks
 * Since M <= N, the total is O(N)
 *
 * Space Complexity:
 * O(N) space for converting the MRI string to an array, then reversing
 * O(N) space for chunks array
 * O(N) space for temporary chunk storage
 * O(N) total
 */
export function splitAndReverseMRI(MRI: string, arr: number[]): string {
  // convert the string to an array, reverse the array, convert back to string //
  MRI = MRI.split("").reverse().join("");

  // split the reversed string into chunks //
  let startIndex = 0;
  const chunks: string[] = [];

  for (const chunkLength of arr) {
    // get the chunk //
    let chunk = MRI.slice(startIndex, startIndex + chunkLength);

    // convert the chunk string to an array //
    // reverse the chunk array //
    // convert chunk array back to string //
    // push into chunks array //
    chunks.push(chunk.split("").reverse().join(""));

    // update start index //
    startIndex += chunkLength;
  }

  // convert the chunks array into a string joined by - and return //
  return chunks.join("-");
}

/**
 * Deep comparing (type and value) two variables of any type.
 */
export function deepEquals(valueOne: any, valueTwo: any): boolean {
  // variables not of the same type //
  if (typeof valueOne !== typeof valueTwo) return false;

  // primitive types //
  if (typeof valueOne !== "object" && typeof valueTwo !== "object") {
    // handling NaN (not a number) type //
    const isValueOneNaN =
      Number.isNaN(valueOne) && typeof valueOne === "number";
    const isValueTwoNaN =
      Number.isNaN(valueTwo) && typeof valueTwo === "number";
    if (isValueOneNaN && isValueTwoNaN) return true;

    return valueOne === valueTwo;
  }

  // nulls //
  if (valueOne === null && valueTwo === null) return true;
  if (valueOne === null || valueTwo === null) return false;

  if (valueOne === valueTwo) return true;

  // arrays //
  if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
    if (valueOne.length !== valueTwo.length) return false;
    for (let i = 0; i < valueOne.length; i++) {
      if (!deepEquals(valueOne[i], valueTwo[i])) return false;
    }
    return true;
  }

  if (Array.isArray(valueOne) || Array.isArray(valueTwo)) return false;

  // objects //
  const valueOneKeys = Object.keys(valueOne);
  const valueTwoKeys = Object.keys(valueTwo);

  if (valueOneKeys.length !== valueTwoKeys.length) return false;

  if (!deepEquals(valueOneKeys, valueTwoKeys)) return false;

  for (let i = 0; i < valueOneKeys.length; i++) {
    const key = valueOneKeys[i];
    const valueOneValue = valueOne[key];
    const valueTwoValue = valueTwo[key];
    if (!deepEquals(valueOneValue, valueTwoValue)) return false;
  }

  return true;
}

/**
 * Update Timer
 *
 * input string in ISODateFormat - "2022-06-02T00:00:00.000-07-00"
 *
 * should return an object { hours: number, minutes: number, seconds: number }
 */
export interface timerInfoInterface {
  hours: number;
  minutes: number;
  seconds: number;
}

export function updateTimer(
  dateString: string,
  timerInfo: timerInfoInterface
): timerInfoInterface {
  const date: Date = new Date(dateString);

  const timeTillDate = date.getTime() - Date.now();

  const seconds = Math.floor(timeTillDate / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  timerInfo.hours = hours;
  timerInfo.minutes = minutes % 60;
  timerInfo.seconds = seconds % 60;

  return timerInfo;

  // // update timer every half a second //
  // setInterval(() => {
  //   const timeTillDate = date.getTime() - Date.now();

  //   const seconds = Math.floor(timeTillDate / 1000);
  //   const minutes = Math.floor(seconds / 60);
  //   const hours = Math.floor(minutes / 60);

  //   timerInfo.hours = hours;
  //   timerInfo.minutes = minutes % 60;
  //   timerInfo.seconds = seconds % 60;
  // }, 500);
}

/**
 * Arithmetic Mean & Mode
 *
 * Time Complexity: O(N), where N is the number of integers.
 *
 * Space Complexity: O(N), due to the frequency map.
 */
export function meanAndMode(integers: number[]): string {
  // empty case //
  if (integers.length === 0) return "0 0";

  // calculate the mean //
  const sum: number = integers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const mean: number = Math.floor(sum / integers.length);

  // calculate the mode //
  const frequencyMap: Map<number, number> = new Map<number, number>();

  for (const integer of integers) {
    frequencyMap.set(integer, (frequencyMap.get(integer) || 0) + 1);
  }

  let mode: number = integers[0];
  let maxFrequency: number = frequencyMap.get(mode) || 0;

  for (const [key, value] of frequencyMap) {
    if (value > maxFrequency) {
      mode = key;
      maxFrequency = value;
    }
  }

  return `${mean} ${mode}`;
}

/**
 * Jars (Dynamic Programming)
 *
 * Time Complexity:
 *
 * Space Complexity:
 */
export function setOfJars(jars: number[]): number {
  const numJars = jars.length;

  if (numJars === 0) return 0;
  if (numJars === 1) return jars[0];

  // initialize the array //
  const arr: number[] = new Array(numJars).fill(0);

  // base cases //
  arr[0] = jars[0];
  arr[1] = Math.max(jars[0], jars[1]);

  // fill the array //
  for (let i = 2; i < numJars; i++) {
    arr[i] = Math.max(arr[i - 1], jars[i] + arr[i - 2]);
  }

  // return the last element in the array holding the max number //
  return arr[numJars - 1];
}

/**
 * Hop Skip Jump
 *
 * Find the last cell, going counter-clockwise in an array, skipping 1 cell in between moves.
 *
 * Time Complexity: O(N * M), where N is the nuber of rows and M is the number of columns
 *
 * Space Complexity: O(N * M), due to the visited matrix
 */
export function hopSkipJump(matrix: number[][]): number {
  // matrix dimensions //
  const rows = matrix.length;
  const cols = matrix[0].length;

  // anti-clockwise directions: down, left, up, right //
  const directions: number[][] = [
    [1, 0],
    [0, -1],
    [-1, 0],
    [0, 1],
  ];

  // visited matrix to keep track of visited cells //
  const visited: boolean[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(false)
  );

  // starting position //
  let x = 0,
    y = 0;
  visited[x][y] = true;

  // initial direction //
  let directionIndex = 0;
  let cellsVisited = 1;

  while (cellsVisited < rows * cols) {
    // attemp to move two steps //
    let steps: number = 0;

    while (steps < 2) {
      let newX = x + directions[directionIndex][0];
      let newY = y + directions[directionIndex][1];

      // new position is in bounds and not visited //
      if (
        newX >= 0 &&
        newX < rows &&
        newY >= 0 &&
        newY < cols &&
        !visited[newX][newY]
      ) {
        x = newX;
        y = newY;
        visited[x][y] = true;
        cellsVisited++;
        steps++;
      }
      // unable to move in this direction //
      else {
        break;
      }
    }

    // change direction after attempting to move 2 steps //
    directionIndex = (directionIndex + 1) % 4;
  }

  // return the last visited cell //
  return matrix[x][y];
}

/**
 * MISC
 */
/*
// problem 1 //
const promiseAll = (promises: Promise<any>[]): Promise<any> => {
  const outputs: any[] = [];
  let settledPromiseCounter = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, i) => {
      promise
        .then((value) => {
          outputs[i] = value;

          settledPromiseCounter++;

          if (settledPromiseCounter === promises.length) {
            resolve(outputs);
          }
        })
        .catch(reject);
    });
  });
};

// problem 1 testing //
const slowPromise = new Promise((res) => {
  setTimeout(() => res("done"), 100);
});
const promises = [
  Promise.resolve(2),
  Promise.resolve("resolve"),
  slowPromise,
  Promise.resolve(5),
  Promise.resolve(true),
]; // Promise.reject("error")
promiseAll(promises).then(console.log);
*/
