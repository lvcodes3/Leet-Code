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

/**
 * 13. Roman to Integer - Easy
 *
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 *
 * For example, 2 is written as II in Roman numeral, just two ones added together.
 * 12 is written as XII, which is simply X + II.
 * The number 27 is written as XXVII, which is XX + V + II.
 *
 * Roman numerals are usually written largest to smallest from left to right.
 * However, the numeral for four is not IIII. Instead, the number four is written as IV.
 * Because the one is before the five we subtract it making four.
 * The same principle applies to the number nine, which is written as IX.
 *
 * There are six instances where subtraction is used:
 * I can be placed before V (5) and X (10) to make 4 and 9.
 * X can be placed before L (50) and C (100) to make 40 and 90.
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 * Given a roman numeral, convert it to an integer.
 *
 * Time Complexity: O(N)
 *
 * Space Complexity: O(1)
 */
export function romanToInt(s: string): number {
  const romanMap: Map<string, number> = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let intSum: number = 0;

  for (let i = 0; i < s.length; i++) {
    const current = romanMap.get(s[i]);
    const next = romanMap.get(s[i + 1]);

    // subtraction case //
    if (next && current && current < next) {
      intSum += next - current;
      i++;
    }
    // regular case //
    else {
      intSum += current ? current : 0;
    }
  }

  return intSum;
}

/**
 * 205. Isomorphic Strings - Easy
 *
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters.
 * No two characters may map to the same character, but a character may map to itself.
 *
 * Time Complexity: O(N)
 *
 * Space Complexity: O(N)
 */
export function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const mapST: { [key: string]: string } = {};
  const mapTS: { [key: string]: string } = {};

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (
      (mapST[charS] && mapST[charS] !== charT) ||
      (mapTS[charT] && mapTS[charT] !== charS)
    ) {
      return false;
    }

    mapST[charS] = charT;
    mapTS[charT] = charS;
  }

  return true;
}
