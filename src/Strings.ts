/**
 * 28. Find the Index of the First Occurence in a String
 * Easy
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
 * or -1 if needle is not part of haystack.
 * Time Complexity: O(m x n) where m is the length of the haystack and n is the length of the needle.
 */
function strStr(haystack: string, needle: string): number {
  if (needle.length === 0) return 0;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let isMatch = true;

    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        isMatch = false;
        break;
      }
    }

    if (isMatch) return i;
  }

  return -1;
}

console.log(strStr("sadbutsad", "sad")); // Output: 0
console.log(strStr("leetcode", "leeto")); // Output: -1
console.log(strStr("butsad", "ad")); // Output: 4
console.log(strStr("aaaaa", "bba")); // Output: -1
console.log(strStr("", "")); // Output: 0
console.log(strStr("a", "a")); // Output: 0
