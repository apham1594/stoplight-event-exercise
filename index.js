(function() {
  'use strict';

  // YOUR CODE HERE
})();
//----part 1----//
//When a user clicks on the "Stop" button, toggle the stop bulb's color.
var stopButton = document.getElementById("stopButton");
var stopLight = document.getElementById("stopLight");

stopButton.addEventListener('click', function(){
    stopLight.classList.toggle('stop')
});

//hen a user clicks on the "Slow" button, toggle the slow bulb's color.
var slowButton = document.getElementById("slowButton");
var slowLight = document.getElementById("slowLight");

slowButton.addEventListener('click', function(){
    slowLight.classList.toggle('slow')
});

//When a user clicks on the "Go" button, toggle the go bulb's color.
var goButton = document.getElementById("goButton");
var goLight = document.getElementById("goLight");

goButton.addEventListener('click', function(){
    goLight.classList.toggle('go')
});


//----part 2----//
//When a user's mouse enters a button, log "Entered <textContent> button" to the console.
var mouseOver = function(event) {
    console.log('Entered ' + event.target.textContent + ' button');
};

stopButton.addEventListener('mouseover', mouseOver);
slowButton.addEventListener('mouseover', mouseOver);
goButton.addEventListener('mouseover', mouseOver);

//When a user's mouse leaves a button, log "Left <textContent> button" to the console.
var mouseOut = function(event) {
    console.log('Left ' + event.target.textContent + ' button');
};
stopButton.addEventListener('mouseout', mouseOut);
slowButton.addEventListener('mouseout', mouseOut);
goButton.addEventListener('mouseout', mouseOut);
