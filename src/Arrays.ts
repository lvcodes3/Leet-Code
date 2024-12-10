/**
 * 88. Merge Sorted Arrays - Easy
 *
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
 * representing the number of elements in nums1 and nums2 respectively.
 *
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 *
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
 * To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should
 * be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 *
 * Time Complexity: O(N)
 *
 * Space Complexity: O(1)
 */
export function mergeSortedArrays(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): number[] | null {
  // pointer for last valid index of nums1 //
  let p1 = m - 1;
  // pointer for last index of nums2 //
  let p2 = n - 1;
  // pointer for last index of nums1 //
  let p = m + n - 1;

  // start merging from the end of nums1 //
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  // copy any remaining elements from nums2 //
  // num1's elements are already in place //
  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }

  return nums1;
}

/**
 * 26. Remove Duplicates From Sorted Array - Easy
 *
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each
 * unique element appears only once. The relative order of the elements should be kept the same. Then return
 * the number of unique elements in nums.
 *
 * Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
 * Change the array nums such that the first k elements of nums contain the unique elements in the order they
 * were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
 * Return k.
 *
 * Time Complexity: O(N)
 *
 * Space Complexity: O(1)
 */
export function removeDuplicatesFromSortedArray(nums: number[]): number {
  if (nums.length === 0) return 0;

  let uniqueIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[uniqueIndex] !== nums[i]) {
      uniqueIndex++; // move the unique index forward
      nums[uniqueIndex] = nums[i]; // place the unique element in the correct position
    }
  }

  return uniqueIndex + 1; // count of unique elements
}

/**
 * 169. Majority Element - Easy
 *
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than (n / 2) times.
 * You may assume that the majority element always exists in the array.
 */

/**
 * Hash Map / Iterative Approach:
 *
 * Time Complexity: O(N) - Iterating through the array is O(N). However, we also iterate over the hash map entries
 * which adds an additional O(K), where K is the number of unique elements. Since K <= N this remains O(N) linear.
 *
 * Space Complexity: O(N) - We use a hash map to count occurences of each number in the array. This consumes extra
 * space proportional to the number of unique elements in the array, O(N).
 */
export function majorityElement1(nums: number[]): number {
  // count unique numbers //
  const hashMap: { [key: number]: number } = {};

  for (const num of nums) {
    if (!hashMap[num]) {
      hashMap[num] = 1;
    } else {
      hashMap[num]++;
    }
  }

  // return majority number //
  for (const [key, value] of Object.entries(hashMap)) {
    if (value > Math.floor(nums.length / 2)) {
      return parseInt(key);
    }
  }

  throw new Error("No majority element found.");
}

/**
 * Optimized Solution: Boyer-Moore Voting Algorithm:
 *
 * Time Complexity: O(N) - We traverse through the nums array twice: once to find the candidate and optionally
 * to confirm it.
 *
 * Space Complexity: O(1) - We use a fixed number of variables (candidate and count) regardless of input size,
 * no hash maps or arrays.
 */
export function majorityElement2(nums: number[]): number {
  let candidate = 0;
  let count = 0;

  // phase 1: find the candidate //
  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  // phase 2: confirm the candidate (optional for this problem) //
  // this step can be skipped bc the problem guarantees a majority element //
  let majorityCount = 0;

  for (const num of nums) {
    if (num === candidate) {
      majorityCount++;
    }
  }

  if (majorityCount > Math.floor(nums.length / 2)) {
    return candidate;
  }

  throw new Error("No majority element found.");
}

/**
 * 189. Rotate Array - Medium
 *
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 */

/**
 * Utilizing pop() and unshift().
 *
 * Time Complexity: O(K * N).
 *
 * Space Complexity: O(1).
 */
export function rotateArray1(nums: number[], k: number): number[] {
  for (let i = 0; i < k; i++) {
    let poppedNumber = nums.pop()!; // O(1) //
    nums.unshift(poppedNumber); // O(N) //
  }

  return nums;
}

/**
 * Utilizing more memory.
 *
 * Time Complexity: O(N) - loop iterated over all N elements once.
 *
 * Space Complexity: O(N) - created a new array to store rotated elements.
 */
export function rotateArray2(nums: number[], k: number): number[] {
  const rotatedNums: number[] = [];

  // handle cases where k > n //
  k = k % nums.length;

  // fill new array with rotated elements //
  for (let i = 0; i < nums.length; i++) {
    rotatedNums[(i + k) % nums.length] = nums[i];
  }

  return rotatedNums;
}
