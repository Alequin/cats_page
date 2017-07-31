
function addCat(){

  var cats = document.getElementsByClassName('cat');
  var lastCat = cats[cats.length-1];

  var unorderedList = document.createElement("ul");
  var listElements = [];
  listElements[0] = document.createElement("li");
  listElements[1] = document.createElement("li");
  listElements[2] = document.createElement("li");

  listElements[0].innerHTML = "Name: Billy";
  listElements[1].innerHTML = "Favourite Food: ice cream";

  var catImage = document.createElement("img");
  catImage.setAttribute("src", "https://www.petfinder.com/wp-content/uploads/2012/11/99233806-bringing-home-new-cat-632x475.jpg");
  catImage.setAttribute("width", "500");

  listElements[2].appendChild(catImage);

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
