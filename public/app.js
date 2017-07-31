
function addCat(catUnorderedList){
  var catSection = document.getElementById('cats');
  catSection.appendChild(catUnorderedList);
}

function buildListCat(name, food, imageLink){

  var unorderedList = document.createElement("ul");

  var listElements = [];
  listElements[0] = document.createElement("li");
  listElements[1] = document.createElement("li");
  listElements[2] = document.createElement("li");

  listElements[0].innerHTML = "Name: " + name;
  listElements[1].innerHTML = "Favourite Food: " + food;

  var catImage = document.createElement("img");
  catImage.setAttribute("src", imageLink);
  catImage.setAttribute("width", "500");
  listElements[2].appendChild(catImage);

  for(var element of listElements){
    unorderedList.appendChild(element);
  }

  return unorderedList;
}

function app(){
  var cat1 = buildListCat("Billy", "ice cream", "https://www.petfinder.com/wp-content/uploads/2012/11/99233806-bringing-home-new-cat-632x475.jpg");
  addCat(cat1);
}

window.onload = app;
