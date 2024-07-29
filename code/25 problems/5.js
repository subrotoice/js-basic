let arr = [1, 2, 3, 4];

function duplicateArrayElement(arr) {
  return [...arr, ...arr];
}

function duplicateArrayElementWithConcat(arr) {
  return arr.concat(arr);
}

console.log(duplicateArrayElement(arr));
console.log(duplicateArrayElementWithConcat(arr));
