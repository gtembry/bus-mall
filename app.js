'use strict';

// global variables
var picArray = []; // displays pics
var shownPics = []; // declares variables for the elements to show in html
var resultsArray = [];
var picOne = document.getElementById('pic-one');
var picTwo = document.getElementById('pic-two');
var picThree = document.getElementById('pic-three');
var totalClicks = 0;

var clickEvent = function(){
  var imgID = event.target.id;
  for(var i = 0; i < picArray.length; i++){
    if (picArray[i].name === imgID) {
      picArray[i].clickCount++;
    }
  }
  selectPics();
  totalClicks++;
  saved();
  if (totalClicks >= 25) {
    picOne.removeEventListener('click', clickEvent);
    picTwo.removeEventListener('click', clickEvent);
    picThree.removeEventListener('click', clickEvent);
    results();
  }
  console.log('totalClicks =', totalClicks);
};

picOne.addEventListener('click', clickEvent);
picTwo.addEventListener('click', clickEvent);
picThree.addEventListener('click', clickEvent);

function saved(){
  localStorage.totalClicks = JSON.stringify(totalClicks);
  localStorage.picArray = JSON.stringify(picArray);
}
// object constructor
function picOption(name, path) {
  this.name=name; // dynamic properties
  this.path=path;
  this.clickCount= 0;
  this.displayCount=0;
  picArray.push(this);
}

if (localStorage.totalClicks){
  totalClicks = JSON.parse(localStorage.totalClicks);
  picArray = JSON.parse(localStorage.picArray);
  console.log('loaded totalClicks: ', totalClicks);
  console.log('loaded picArray: ', picArray);
} else {

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

}

function renderPics(randomIndex1, randomIndex2, randomIndex3, imgOne, imgTwo, imgThree) { // function that displays img on html
  console.log('imgOne is', imgOne);
  picOne.setAttribute('src', imgOne.path);
  picOne.setAttribute('id', imgOne.name);

  console.log('imgTwo is', imgTwo);
  picTwo.setAttribute('src', imgTwo.path);
  picTwo.setAttribute('id', imgTwo.name);

  console.log('imgThree is', imgThree);
  picThree.setAttribute('src', imgThree.path);
  picThree.setAttribute('id', imgThree.name);

  shownPics.push(picArray[randomIndex1]);
  shownPics.push(picArray[randomIndex2]);
  shownPics.push(picArray[randomIndex3]);
}

function results() {
  console.log('results ran');
  var list = document.getElementById('results');
  var item = document.createElement('ul');
  for (var i = 0; i < picArray.length; i++) {
    resultsArray.push('<li> name: ' + picArray[i].name + 'Clicks: ' + picArray[i].clickCount + ' times shown: ' + picArray[i].displayCount + '</li>');
  }
  resultsArray = resultsArray.join('');
  item.innerHTML = resultsArray;
  list.appendChild(item);
  createChart();
}

function createChart() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var nameArr = [];
  var clicksArr = [];
  var shownArr = [];

  for(var i = 0; i < picArray.length; i++){
    nameArr.push(picArray[i].name);
    clicksArr.push(picArray[i].clickCount);
    shownArr.push(picArray[i].displayCount);
  }
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: nameArr,
      datasets: [
        {
          label: '# of clicks',
          data: clicksArr,
          backgroundColor: '#5442B2'
        },
        {
          label: '# of times shown',
          data: shownArr,
          backgroundColor: '#B2A85F'
        }
      ]
    },
    options: {
      responsive: false
    }
  });
}

// Generates random number
function randomNumberGen() {
  return Math.floor(Math.random() * (picArray.length));
}
// function that selects random pics
function selectPics() {
  var randomIndex1 = randomNumberGen();
  var imgOne = picArray[randomIndex1];

  var randomIndex2 = randomNumberGen();
  while(randomIndex2 === randomIndex1) {
    randomIndex2 = randomNumberGen();
  }
  var imgTwo = picArray[randomIndex2];

  var randomIndex3 = randomNumberGen();
  while (randomIndex3 === randomIndex1 || randomIndex3 === randomIndex2){
    randomIndex3 = randomNumberGen();
  }
  var imgThree = picArray[randomIndex3];
  // console.log('imgOne is ', imgOne );
  imgOne.displayCount++;
  imgTwo.displayCount++;
  imgThree.displayCount++;
  renderPics(randomIndex1, randomIndex2, randomIndex3, imgOne, imgTwo, imgThree);

}
selectPics();
