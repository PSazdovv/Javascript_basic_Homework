let birthYear = prompt("Enter the year of birth");
let yearOfBirth = parseInt(birthYear);
let finalResult = (yearOfBirth-4)%12;
if (finalResult == 0) { 
   console.log("Your chinese zodiac sign is RAT");
} else if(finalResult == 1) {
   console.log("Your chinese zodiac sign is OX");
} else if(finalResult == 2) {
   console.log("Your chinese zodiac sign is Tiger");
} else if(finalResult == 3) {
   console.log("Your chinese zodiac sign is RABBIT");
} else if(finalResult == 4) {
   console.log("Your chinese zodiac sign is DRAGON");
} else if(finalResult == 5) {
   console.log("Your chinese zodiac sign is SNAKE");
} else if(finalResult == 6) {
   console.log("Your chinese zodiac sign is HORSE");
} else if(finalResult == 7) {
   console.log("Your chinese zodiac sign is GOAT");
} else if(finalResult == 8) {
   console.log("Your chinese zodiac sign is MONKEY");
} else if(finalResult == 9) {
   console.log("Your chinese zodiac sign is ROOSTER");
} else if(finalResult == 10) {
   console.log("Your chinese zodiac sign is DOG");
} else if(finalResult == 11) {
   console.log("Your chinese zodiac sign is PIG");
}
