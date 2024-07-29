var users = [
  { name: "Subroto", genter: "Male" },
  { name: "Kumar", genter: "Male" },
  { name: "Biswas", genter: "Male" },
  { name: "Sobita", genter: "Female" },
  { name: "Srabonee", genter: "Female" },
  { name: "Kanon", genter: "Male" },
];

var newUsers = users.filter((user) => user.genter == "Male");

console.log(newUsers);
