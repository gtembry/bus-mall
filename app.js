'use strict'

// global variables
var picArray = []; // displays pics
var shownPics = []; // declares variables for the elements to show in html
var picOne = document.getElementById('pic-one');
var picTwo = document.getElementById('pic-two');
var picThree = document.getElementById('pic-three');
//
picOne.addEventListener('click', function(){
  selectPics();
});

picTwo.addEventListener('click', function(){
  selectPics();
});

picThree.addEventListener('click', function(){
  selectPics();
});


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
var usb = new picOption('usb', 'img/usb.gif');
var watercan = new picOption('watercan', 'img/water-can.jpg');
var wine = new picOption('wine', 'img/wine-glass.jpg');

function renderPics(randomIndex1, randomIndex2, randomIndex3, imgOne, imgTwo, imgThree){ // function that displays img on html
  var picOnetag = document.createElement('img'); // var for first img place
  var picTwotag = document.createElement('img'); // var for second img place
  var picThreetag = document.createElement ('img'); // var for third img place
  picOnetag.src = imgOne.path; // attaches file path from Obj to createElement('img')
  picOne.appendChild(picOnetag);
  picTwotag.src = imgTwo.path;
  picTwo.appendChild(picTwotag);
  picThreetag.src = imgThree.path;
  picThree.appendChild(picThreetag);
//places random image into array
  shownPics.push(picArray[randomIndex1]);
  shownPics.push(picArray[randomIndex2]);
  shownPics.push(picArray[randomIndex3]);

  picArray.splice(randomIndex1, 1);
  picArray.splice(randomIndex2, 1);
  picArray.splice(randomIndex3, 1);


}
// renderPics();

// Generates random number
function randomNumberGen() {
  return Math.floor(Math.random() * (picArray.length - 0 + 1)) + 0;
}
// function that selects random pics
function selectPics() {
  var randomIndex1 = randomNumberGen();
  // console.log('randomIndex is ', randomIndex);
  var imgOne = picArray[randomIndex1];
  var randomIndex2 = randomNumberGen();
  var imgTwo = picArray[randomIndex2];
  var randomIndex3 = randomNumberGen();
  var imgThree = picArray[randomIndex3];
  // console.log('imgOne is ', imgOne );
  renderPics(randomIndex1, randomIndex2, randomIndex3, imgOne, imgTwo, imgThree);

}
selectPics();











// generates array of rando imagesm
// function randomImages(max){
//   for (var i =0; i<3; i++)
//   displayedImages.push(imagesArray[Math.floor(Math.random() * max)]);
// compares current array[i] to last shown array, and to the other two positions in the current array,
