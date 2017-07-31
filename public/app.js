
function Cat(name, favFood, imageLink){
  this.name = name;
  this.favFood = favFood;
  this.imageLink = imageLink;
}

var cats = [];
cats[0] = new Cat("Boba", "Sock fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");
cats[1] = new Cat("Barnaby", "Tuna", "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg");
cats[2] = new Cat("Max", "Whiskas Temptations", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg");
cats[3] = new Cat("Billy", "ice cream", "https://www.petfinder.com/wp-content/uploads/2012/11/99233806-bringing-home-new-cat-632x475.jpg");
cats[4] = new Cat("Sally", "chicken", "https://d2wq73xazpk036.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/41BAEDA0-30F8-43E5-A7C9998A9723A22C/thul-d2d9649f-d0ec-5211-a03d-735356e5c1b9.jpg?response-content-disposition=inline");

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
