function union(arr1, arr2) {
  return [...new Set(arr1.concat(arr2))];
}

console.log(union([1, 2, 6, 3], [4, 5, 3]));
