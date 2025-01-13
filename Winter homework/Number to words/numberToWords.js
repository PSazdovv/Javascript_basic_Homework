document.getElementById("convertBtn").addEventListener("click", function () {
  const input = document.getElementById("numberInput").value;
  const output = document.getElementById("output");

  if (!validateInput(input)) {
    output.textContent = "Please enter a whole number between 0 and 1,000,000.";
    return;
  }

  const n = parseInt(input, 10);
  output.textContent = numberToWords(n);
});

function validateInput(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] < "0" || input[i] > "9") return false;
  }

  const num = parseInt(input, 10);
  return num >= 0 && num <= 1000000;
}

function numberToWords(n) {
  if (n === 0) return "zero";
  if (n === 1000000) return "one million";

  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  function convertHundreds(num) {
    let words = "";
    if (num >= 100) {
      words += ones[(num / 100) | 0] + " hundred";
      num %= 100;
      if (num > 0) words += " ";
    }
    if (num >= 10 && num < 20) {
      words += teens[num - 10];
    } else {
      if (num >= 20) {
        words += tens[(num / 10) | 0];
        num %= 10;
        if (num > 0) words += " ";
      }
      if (num > 0) {
        words += ones[num];
      }
    }
    return words;
  }

  let result = "";
  if (n >= 1000) {
    result += convertHundreds((n / 1000) | 0) + " thousand";
    n %= 1000;
    if (n > 0) result += " ";
  }
  if (n > 0) {
    result += convertHundreds(n);
  }

  return result;
}
