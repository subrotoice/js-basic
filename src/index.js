let cities = [
  { name: "Los Angeles", population: 3792621 },
  { name: "New York", population: 8175133 },
  { name: "Chicago", population: 2695598 },
  { name: "Houston", population: 2099451 },
  { name: "Philadelphia", population: 1526006 },
];

cities = [1, 2, 3, 4];
let newCities = cities.reduce((a, c) => a + c);
console.log(newCities);
