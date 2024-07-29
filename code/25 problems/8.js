function isPalindrome(str) {
  let strRev = str.split("").sort().join("");
  return strRev;
  //   return str.split("").sort().join("");
}

console.log(isPalindrome("abcba"));
