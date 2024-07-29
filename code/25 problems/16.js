function freq(input) {
  if (!Array.isArray(input)) return "Item not array";

  let tempObj = {};

  input.forEach(function (element) {
    if (tempObj.hasOwnProperty(element)) tempObj[element]++;
    else tempObj[element] = 1;
  });

  //   debugger;
  return Object.keys(tempObj).reduce((acc, curr) => {
    return tempObj[curr] > tempObj[acc] ? curr : acc;
  });
}

console.log(freq([1, 2, 3, 4, 5, 6, 2, 3, 2, 4, 2, 6, 7, 4, 4, 4, 4]));
