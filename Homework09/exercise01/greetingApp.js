$(document).ready(function () {
  $("#greetButton").click(function () {
    const name = $("#nameInput")[0].value;
    $("#greeting").text("Hello  " + name + "!");
  });
});
