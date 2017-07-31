
function addCat(catUnorderedList){
  var catSection = document.getElementById('cats');
  catSection.appendChild(catUnorderedList);
}

function buildListCat(name, food, imageLink){

  var unorderedList = document.createElement("ul");

  var listElements = makeListElements(3);

  listElements[0].innerHTML = "Name: " + name;
  listElements[1].innerHTML = "Favourite Food: " + food;
  listElements[2].appendChild(makeCatImage(imageLink));

  for(var element of listElements){
    unorderedList.appendChild(element);
  }

  return unorderedList;
}

function makeListElements(count){
  var listElements = [];
  for(var j=0; j<count; j++){
    listElements[j] = document.createElement("li");
  }
  return listElements;
}

function makeCatImage(imageLink){
  var catImage = document.createElement("img");
  catImage.setAttribute("src", imageLink);
  catImage.setAttribute("width", "500");
  return catImage;
}

function app(){
  var cat1 = buildListCat("Billy", "ice cream", "https://www.petfinder.com/wp-content/uploads/2012/11/99233806-bringing-home-new-cat-632x475.jpg");
  addCat(cat1);

  var cat2 = buildListCat("Sally", "chicken", "https://d2wq73xazpk036.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/41BAEDA0-30F8-43E5-A7C9998A9723A22C/thul-d2d9649f-d0ec-5211-a03d-735356e5c1b9.jpg?response-content-disposition=inline")
  addCat(cat2);
}

window.onload = app;
