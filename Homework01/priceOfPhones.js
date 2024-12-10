let numberOfPhones = 30
let phonePriceInDollars = 119.95
let taxRateInPercentage = 5
let priceWithoutTax = numberOfPhones * phonePriceInDollars
let priceWithTax = taxRateInPercentage / 100 * priceWithoutTax
let overallPrice = priceWithoutTax + priceWithTax
console.log("The price for 30 phones with tax is $" + overallPrice)