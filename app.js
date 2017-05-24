'use strict'

// global variables
var picArray = []; // displays pics
var shownPics = []; // declares variables for the elements to show in html
var picOne = document.getElementById('pic-one');
var picTwo = document.getElementById('pic-two');
var picThree = document.getElementById('pic-three');



// object constructor
function picOption(name, path) {
  this.name=name; // dynamic properties
  this.path=path;
  this.clickCount= 0;
  this.displayCount=0;
  picArray.push(this);
}

var bag = new  ('bag', 'img/bag.jpg');
var banana = new  ('banana', 'img/banana.jpg');
var bathroom = new  ('bathroom', 'img/bathroom.jpg');
var boots = new  ('boots', 'img/boots.jpg');
var breakfast = new  ('breakfast', 'img/breakfast.jpg');
var gum = new  ('gum', 'img/bubblegum.jpg');
var chair = new  ('chair', 'img/chair.jpg');
var cthulhu = new  ('cthulhu', 'img/cthulhu.jpg');
var dogduck = new  ('dogduck', 'img/dog-duck.jpg');
var dragon = new  ('dragon', 'img/dragon.jpg');
var pen = new  ('pen', 'img/pen.jpg');
var petsweep = new  ('petsweep', 'img/pet-sweep.jpg');
var scissors = new  ('scissors', 'img/scissors.jpg');
var shark = new  ('shark', 'img/shark.jpg');
var sweep = new  ('sweep', 'img/sweep.png');
var tauntaun = new  ('tauntaun', 'img/tauntaun.jpg');
var unicorn = new  ('unicorn', 'img/unicorn.jpg');
var usb = new  ('usb', 'img/usb.gif');
var watercan = new  ('watercan', 'img/water-can.jpg');
var wine = new  ('wine', 'img/wine-glass.jpg');


// function that generates 3 random images
// function randomImageGen(max){
//   for (var i =0; i<3; i++)
//     shownPics.push(picArray[Math.floor(Math.random() * max)]);
// }
// while(shownPics[0] === lastShown[0] || shownPics[0] === lastShown[1] || shownPics[0] === lastShown[2] || shownPics[0] === shownPics[1] || shownPics[0] === shownPics[2]){
//     displayedImages.splice(0, 1, imagesArray[Math.floor(Math.random() * max)]);

























// generates array of rando imagesm
function randomImages(max){
  for (var i =0; i<3; i++)
  displayedImages.push(imagesArray[Math.floor(Math.random() * max)]);
}
// compares current array[i] to last shown array, and to the other two positions in the current array,
