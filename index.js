// Write your code here!

const elements = document.getElementById("main");
const newHeader = document.createElement("h1");

elements.remove();
//new Header to victory
newHeader.textContent = "YOUR-NAME is the champion";
newHeader.setAttribute('id', 'victory');