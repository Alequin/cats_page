
function addCat(){

  var cats = document.getElementsByClassName('cat');
  var lastCat = cats[cats.length-1];

  var unorderedList = document.createElement("ul");
  var listElements = [];
  listElements[0] = document.createElement("li");
  listElements[1] = document.createElement("li");
  listElements[2] = document.createElement("li");

  for(var element of listElements){
    unorderedList.appendChild(element);
  }

  var catSection = document.getElementById('cats');
  catSection.appendChild(unorderedList);
}

function app(){
  addCat();
}

window.onload = app;
