
function addCat(){

  var cats = document.getElementsByClassName('cat');
  var lastCat = cats[cats.length-1];

  var unorderedList = document.createElement("ul");
  var element = document.createElement("li");
  var element1 = document.createElement("li");

  unorderedList.appendChild(element);
  unorderedList.appendChild(element1);

  var catSection = document.getElementById('cats');
  catSection.appendChild(unorderedList);
}

function app(){
  addCat();
}

window.onload = app;
