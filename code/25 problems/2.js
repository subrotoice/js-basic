let arr = [1, 2, 3];
checkArray([]);
checkArray({});
checkArray(arr);

function checkArray(input) {
  console.log(Array.isArray(input));
}
