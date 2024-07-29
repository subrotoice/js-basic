let arr = [1, 2, 3];

// Method 1
arr = [];

// Method 2
arr.length = 0;

// Method 3
arr.splice(0, arr.length);

console.log(arr);
