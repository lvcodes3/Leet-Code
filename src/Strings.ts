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
export function strStr(haystack: string, needle: string): number {
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
export function isPalindrome1(s: string): boolean {
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
export function isPalindrome2(s: string): boolean {
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

/**
 * 151. Reverse Words In A String - Medium
 *
 * Given an input string s, reverse the order of the words. A word is defined as a sequence of non-space characters.
 * The words in s will be separated by at least one space. Return a string of the words in reverse order concatenated
 * by a single space. Note that s may contain leading or trailing spaces or multiple spaces between two words.
 * The returned string should only have a single space separating the words. Do not include any extra spaces.
 *
 * Ex: "the sky is blue" -> "blue is sky the"
 *     "a good   example" -> "example good a"
 *
 * Time Complexity: O(N)
 *
 * Space Complexity: O(N) - arrays created during split and reverse
 */
export function reverseWords(s: string): string {
  // trim() - trim leading and ending spaces in the string - O(N)
  // split(/\s+/) - regex splitting, splits the string by one or more spaces into an array - O(N)
  // reverse() - reverses the array - O(N)
  // join() - converts the array to a string joined by single spaces in between - O(N)
  return s.trim().split(/\s+/).reverse().join(" ");
}

/**
 * 14. Longest Common Prefix - Easy
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * Ex: strs = ["flower", "flow", "flight"] -> "fl"
 *
 * Time Complexity: O(N * M) | N = number of strings in the array | M is the length of the shortest string
 *
 * Space Complexity: O(1)
 */
export function longestCommonPrefix(strs: string[]): string {
  // base cases //
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    // shorten the prefix until it matches the start of strs[i] //
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1); // remove the last character from the prefix
      if (prefix === "") return ""; // no common prefix
    }
  }

  return prefix;
}
