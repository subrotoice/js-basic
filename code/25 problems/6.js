function reverseNumber(num) {
  let reverseNumber = 0;

  while (num != 0) {
    reverseNumber = reverseNumber * 10 + (num % 10);
    num = parseInt(num / 10);
  }

  return reverseNumber;
}

console.log(reverseNumber(1236)); // 321
