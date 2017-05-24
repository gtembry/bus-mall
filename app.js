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
// instantiations of picOption Obj
var bag = new picOption('bag', 'img/bag.jpg');
var banana = new picOption('banana', 'img/banana.jpg');
var bathroom = new picOption('bathroom', 'img/bathroom.jpg');
var boots = new picOption('boots', 'img/boots.jpg');
var breakfast = new picOption('breakfast', 'img/breakfast.jpg');
var gum = new picOption('gum', 'img/bubblegum.jpg');
var chair = new picOption('chair', 'img/chair.jpg');
var cthulhu = new picOption('cthulhu', 'img/cthulhu.jpg');
var dogduck = new picOption('dogduck', 'img/dog-duck.jpg');
var dragon = new picOption('dragon', 'img/dragon.jpg');
var pen = new picOption('pen', 'img/pen.jpg');
var petsweep = new picOption('petsweep', 'img/pet-sweep.jpg');
var scissors = new picOption('scissors', 'img/scissors.jpg');
var shark = new picOption('shark', 'img/shark.jpg');
var sweep = new picOption('sweep', 'img/sweep.png');
var tauntaun = new picOption('tauntaun', 'img/tauntaun.jpg');
var unicorn = new picOption('unicorn', 'img/unicorn.jpg');
var usb = new  picOption('usb', 'img/usb.gif');
var watercan = new picOption('watercan', 'img/water-can.jpg');
var wine = new picOption('wine', 'img/wine-glass.jpg');

function renderPics(){ // function that displays img on html
  var picOnetag = document.createElement('img'); // var for first img place
  var picTwotag = document.createElement('img'); // var for second img place
  var picThreetag = document.createElement ('img'); // var for third img place
  picOnetag.src = bag.path; // attaches file path from Obj to createElement('img')
  picOne.appendChild(picOnetag);
  picTwotag.src = gum.path;
  picTwo.appendChild(picOnetag);
  picThreetag.src = usb.path;
  picThree.appendChild(picOnetag);
}
renderPics();
















// generates array of rando imagesm
function randomImages(max){
  for (var i =0; i<3; i++)
  displayedImages.push(imagesArray[Math.floor(Math.random() * max)]);
}
// compares current array[i] to last shown array, and to the other two positions in the current array,
