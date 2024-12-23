function Animal(name, kind) {
  this.name = name;
  this.kind = kind;
  this.speak = function (message) {
    console.log(
      " The " + this.kind + " named " + this.name + " says: " + message + " "
    );
  };
}

let animalName = prompt("Enter the animal's name:");
let animalKind = prompt("Enter the animal's kind :");

let animal = new Animal(animalName, animalKind);

let message = prompt("What do you want the animal to say?");
animal.speak(message);
