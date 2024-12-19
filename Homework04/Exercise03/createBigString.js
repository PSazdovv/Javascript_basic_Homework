function createBigString(array) {
  let result = "";

  for (let i = 0; i < array.length; i++) {
    result += array[i];
    if (i < array.length - 1) {
      result += " ";
    }
  }

  return result;
}

let result = createBigString([
  "Hello", "there", "students", "of Qinshift", "Academy", "!",
]);
console.log(result);
