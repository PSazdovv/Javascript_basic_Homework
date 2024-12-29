$(document).ready(function () {
  const generateButton = $("#generateBtn");
  const errorMessage = $("#errorMessage");
  const newHeader = $("#newHeader");
  const headerTextInput = $("#headerText");
  const headerColorInput = $("#headerColor");

  generateButton.click(function () {
    const headerText = headerTextInput[0].value;
    const headerColor = headerColorInput[0].value;

    errorMessage.text("");

    if (headerText === "") {
      errorMessage.text("Enter text");
      return;
    }

    const colorChecker = $("<div></div>");
    colorChecker.css("color", headerColor);
    if (colorChecker.css("color") === "" && headerColor !== "") {
      errorMessage.text("Enter a valid color");
      return;
    }

    newHeader.html(`<h1 style="color: ${headerColor};">${headerText}</h1>`);
  });
});
