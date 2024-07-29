// console.log("first");
let sentence = "Bangladesh is a beautiful Country";
let words = sentence.split(" "); // hsedalgnaB si a lufituaeb yrtnuoC

let newReverseWords = words.map((word) => word.split("").reverse().join(""));
// ['hsedalgnaB', 'si', 'a', 'lufituaeb', 'yrtnuoC']

console.log(newReverseWords.join(" ")); // hsedalgnaB si a lufituaeb yrtnuoC
