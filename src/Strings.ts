/**
 * 28. Find the Index of the First Occurence in a String - Easy
 *
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
 * or -1 if needle is not part of haystack.
 *
 * Time Complexity: O(m x n) where m is the length of the haystack and n is the length of the needle.
 *
 * Space Complexity: O(1), no extra space needed.
 */
/*
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

// testing //
console.log(strStr("sadbutsad", "sad")); // 0
console.log(strStr("leetcode", "leeto")); // -1
console.log(strStr("butsad", "ad")); // 4
console.log(strStr("aaaaa", "bba")); // -1
console.log(strStr("", "")); // 0
console.log(strStr("a", "a")); // 0
*/

/**
 * 125. Valid Palindrome - Easy
 *
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and
 * removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric
 * characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */

/**
 * Less Efficient Solution:
 *
 * Time Complexity: O(N), where N is the number of characters in the string.
 *
 * Space Complexity: O(1), transformed string stored in s, no additional data structures created.
 */
function isPalindrome1(s: string): boolean {
  // convert all uppercase alpha characters to lowercase - O(N) //
  s = s.toLowerCase();

  // remove all non-alphanumeric characters - O(N) //
  s = s.replace(/[^a-z0-9]/g, "");

  let leftPointer = 0;
  let rightPointer = s.length - 1;

  while (leftPointer < rightPointer) {
    if (s[leftPointer] !== s[rightPointer]) {
      return false;
    }

    leftPointer++;
    rightPointer--;
  }

  return true;
}

/**
 * More Efficient Solution:
 *
 * Instead of performing more work on the input string, we skip non-alphanumeric characters and only
 * perform lowercase on alphanumeric characters.
 *
 * Time Complexity: O(N), where N is the number of characters in the string.
 *
 * Space Complexity: O(1), transformed string stored in s, no additional data structures created.
 */
function isPalindrome2(s: string): boolean {
  // helper function //
  function isAlphaNumeric(c: string): boolean {
    // match a single alphanumeric character //
    return /^[a-zA-Z0-9]$/.test(c);
  }

  let leftPointer = 0;
  let rightPointer = s.length - 1;

  while (leftPointer < rightPointer) {
    // skip non-alphanumeric characters for left pointer //
    while (leftPointer < rightPointer && !isAlphaNumeric(s[leftPointer])) {
      leftPointer++;
    }

    // skip non-alphanumeric characters for right pointer //
    while (leftPointer < rightPointer && !isAlphaNumeric(s[rightPointer])) {
      rightPointer--;
    }

    // compare characters //
    if (s[leftPointer].toLowerCase() !== s[rightPointer].toLowerCase()) {
      return false;
    }

    leftPointer++;
    rightPointer--;
  }

  return true;
}

// testing //
console.log(isPalindrome1("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome1("race a car")); // false
console.log(isPalindrome1(" ")); // true

console.log(isPalindrome2("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome2("race a car")); // false
console.log(isPalindrome2(" ")); // true
