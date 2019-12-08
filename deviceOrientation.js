var counter = 4;
var intervalCounter;
var intervalBall;
var maxY = screen.height
var maxX = screen.width
var dx=5;
var dy=5;
var x;
var y = 100;

function startGame() {
    document.getElementById("startGame").style.display = "none";
    intervalCounter = setInterval(timeIt, 1000);
}

function timeIt() {
    counter--;
    document.getElementById("counter").innerHTML = counter;
    if (counter == 0) {
        clearInterval(intervalCounter);
        test();
    }
}

function test() {
    var randomNumber = Math.random()
    var randomX = Math.floor( randomNumber * Math.floor(maxX));
    while(randomX == 0) {
        randomNumber = Math.random();
        randomX = randomNumber * maxX;
    }
    document.getElementById("bar").style.display = "inline";
    document.getElementById("counter").style.display = "none";
    var canvas = document.getElementById("gameCanvas");
    canvas.width = maxX;
    canvas.height = maxY;
    x = randomX;
    setInterval(drawBall, 10);
}

function drawBall() {
    var canvas = document.getElementById("gameCanvas");
    var context = canvas.getContext('2d');
    var bar = document.getElementById("bar");
    var rect = bar.getBoundingClientRect();
    var right = rect.right;
    var left = rect.left;
    var top = rect.top;
    var bottom = rect.bottom;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(x , y,10,0,Math.PI*2,true);
    context.closePath();
    context.fill();
    if(x < right) {
        dx=-dx
        dy=-dy;
    }
    x+=dx;
    y+=dy;
    if (x < 0 || x > maxX) dx=-dx
    if (y < 0 ) dy=-dy;
}

function handleOrientation(event) {
    var bar = document.getElementById("bar");
    var maxX = screen.width
    var maxY = screen.length
    var boundry = maxX - 64;
    var rotation = event.gamma;
    var pixels = ((rotation / 90) * maxX)
    var position = ((rotation / 90) * maxX) + (maxX / 2)
    if(position > 0 && (position) < boundry) {
        bar.style.left = position + "px";
    }
}

window.addEventListener("deviceorientation", handleOrientation, true);
