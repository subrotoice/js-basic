function occurrenceOfChar(input) {
  let occurrence = {};

  input.split("").forEach((element) => {
    if (occurrence.hasOwnProperty(element)) occurrence[element]++;
    else occurrence[element] = 1;
  });

  return occurrence;
}

console.log(occurrenceOfChar("appleccd"));
