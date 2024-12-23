let headersOne = document.getElementsByTagName("h1");
for (let i = 0; i < headersOne.length; i++) {
  headersOne[i].textContent = "Header 1";
}

let firstParagraph = document.querySelector(".aDiv .paragraph");
firstParagraph.textContent = "paragraph 1";

let secondParagraph = document.querySelector(".anotherDiv, .paragraph second");
secondParagraph.textContent = "paragraph 2";

let headerThree = document.querySelector("div h3");
headerThree.textContent = "Header 3";
