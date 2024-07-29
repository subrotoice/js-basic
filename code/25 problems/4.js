function checkInt(input) {
  return typeof input == "string";
}

function checkIntWithNumberClass(input) {
  return Number.isInteger(input);
}

function checkIntWithLogic(input) {
  if (input % 1 == 0) return "Integer";

  return "Not Integer";
}

console.log(checkInt(33));
console.log(checkIntWithLogic("ds"));
console.log(checkIntWithNumberClass(55));
