function capitalized(str) {
  let strArr = str.split(" ");
  let capitalizedStr = strArr.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  );
  return capitalizedStr;
}

console.log(capitalized("My name is subroto BisWas"));
