var counter = 4;
var interval;
function timeIt() {
    counter--;
    console.log(counter);
    document.getElementById("counter").innerHTML = counter;
    if (counter == 0) {
        clearInterval(interval);
        test();
    }
}

function startGame() {


    document.getElementById("startGame").style.display = "none";
    interval = setInterval(timeIt, 1000);
}

function test() {
    var maxX = document.getElementsByTagName('body')[0].clientWidth
    var maxY = document.getElementsByTagName('body')[0].clientLength
    var randomX = Math.random() * maxX;
    while(randomX == 0) {
        randomX = Math.random() * maxX;
    }
    document.getElementById("ball").style.left = randomX + "px";
    document.getElementById("bar").style.display = "inline";
    document.getElementById("ball").style.display = "inline";
    document.getElementById("counter").style.display = "none";
}


function handleOrientation(event) {
    var bar = document.getElementById("bar");
    var maxX = document.getElementsByTagName('body')[0].clientWidth
    var maxY = document.getElementsByTagName('body')[0].clientLength
    var boundry = maxX - 64;
    var rotation = event.gamma;
    var pixels = ((rotation / 90) * maxX)
    var position = ((rotation / 90) * maxX) + (maxX / 2)
    if(position > 0 && (position) < boundry) {
        bar.style.left = position + "px";
    }
}


window.addEventListener("deviceorientation", handleOrientation, true);
