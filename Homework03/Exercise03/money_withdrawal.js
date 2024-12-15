let accountBalance = 30000;

function moneyWithdrawal() {
  let withdrawalAmount = prompt("Enter the amount to withdraw:");
  let amountToWithdraw = parseInt(withdrawalAmount);

  if (amountToWithdraw > accountBalance) {
    alert("Not enough money");
  } else accountBalance -= amountToWithdraw;
  {
    alert(
      "You have withdrawn: " +
        amountToWithdraw +
        "\nRemaining balance:" +
        accountBalance
    );
  }
}

moneyWithdrawal();
