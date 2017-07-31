
function Cat(name, favFood, imageLink){
  this.name = name;
  this.favFood = favFood;
  this.imageLink = imageLink;
}

var cats = [];
cats[0] = new Cat("Billy", "ice cream", "https://www.petfinder.com/wp-content/uploads/2012/11/99233806-bringing-home-new-cat-632x475.jpg");
cats[1] = new Cat("Billy", "ice cream", "https://www.petfinder.com/wp-content/uploads/2012/11/99233806-bringing-home-new-cat-632x475.jpg");

function addCat(catUnorderedList){
  var catSection = document.getElementById('cats');
  catSection.appendChild(catUnorderedList);
}

function buildListCat(cat){

  var unorderedList = document.createElement("ul");

  var listElements = makeListElements(3);
  unorderedList.setAttribute("class", "cat")

  listElements[0].innerHTML = "Name: " + cat.name;
  listElements[1].innerHTML = "Favourite Food: " + cat.food;
  listElements[2].appendChild(makeCatImage(cat.imageLink));

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
  for(var cat of cats){
    var builtCat = buildListCat(cat);
    addCat(builtCat);
  }
}

window.onload = app;
