function calculateAndDisplayArraySum(numbers) {
  let html = "";

  html += `<h1>Array and Sum</h1><ul>`;
  for (let i = 0; i < numbers.length; i++) {
    html += `<li>${numbers[i]}</li>`;
  }
  html += `</ul>`;

  let sum = 0;
  let equation = "";

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    equation += numbers[i];

    if (i < numbers.length - 1) {
      equation += " + ";
    }
  }

  equation += " = " + sum;

  html += `<p>Sum: ${sum}</p>`;
  html += `<p>${equation}</p>`;

  document.body.innerHTML = html;
}

let numbers = [2, 4, 5, 10, 3];
calculateAndDisplayArraySum(numbers);
