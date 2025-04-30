const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);
const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random image from picsum.");
document.body.appendChild(newImage);
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");

const newHeader = document.createElement("h2");
newHeader.innerText = "DOM Basics";
document.body.appendChild(newHeader);
const newP = document.createElement("p");
newP.innerText = "This was added through JavaScript.";
newSection.appendChild(newP);
const newH1 = document.createElement("h1");
newH1.innerText = "Ammon Horton";
newSection.appendChild(newH1);

document.body.appendChild(newSection);