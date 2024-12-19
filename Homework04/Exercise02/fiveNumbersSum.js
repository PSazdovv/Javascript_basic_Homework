function sumOfFiveNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

let numbers = [5, 7, 12, 14, 17];
let result = sumOfFiveNumbers(numbers);
console.log(`The result is: ${result}`);
