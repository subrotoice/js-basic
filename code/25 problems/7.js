function isPalindrome(str) {
  let strRev = str.split("").reverse().join("");
  return str === strRev;
}

console.log(isPalindrome("abcba")); // 321
console.log(isPalindrome("abcba1")); // 321
