function itemType(element) {
  if (Array.isArray(element)) return "array";
  return typeof element;
}

console.log(itemType([]));
console.log(itemType({}));
console.log(itemType(22));
console.log(itemType("stringOk"));
console.log(itemType(true));
console.log(itemType(undefined));
console.log(itemType(function () {}));
