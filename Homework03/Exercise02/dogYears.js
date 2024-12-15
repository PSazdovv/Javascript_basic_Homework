console.log("=====Dog to human years=====");
function convertDogToHumanyears(dogAge) {
  let dogYears = dogAge * 7;
  return dogYears;
}
console.log("The dog's age converted in human years is: " + convertDogToHumanyears(10));

console.log("=====Human to dog years=====");
function convertHumanToDogYears(humanAge) {
  let humanYears = humanAge / 7;
  return humanYears;
}
console.log("The human's age converted in dog years is: " + convertHumanToDogYears(37));
