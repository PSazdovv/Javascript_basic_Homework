function Book(title, author, readingStatus) {
  this.title = title;
  this.author = author;
  this.readingStatus = readingStatus;

  this.displayStatus = function () {
    if (this.readingStatus) {
      return `Already read '${this.title}' by ${this.author}.`;
    } else {
      return `You still need to read '${this.title}' by ${this.author}.`;
    }
  };
}

let title = prompt("Enter the title of the book:");
let author = prompt("Enter the author of the book:");
let readingStatusInput = prompt("Have you read the book? (yes/no):");

let readingStatus = readingStatusInput.toLowerCase() === "yes";

let myBook = new Book(title, author, readingStatus);

alert(myBook.displayStatus());
