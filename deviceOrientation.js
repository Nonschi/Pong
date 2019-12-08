

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

function startGame() {
    var maxX = document.getElementsByTagName('body')[0].clientWidth
    var maxY = document.getElementsByTagName('body')[0].clientLength
    var randomX = Math.random() * maxX;
    while(randomX == 0) {
        randomX = Math.random() * maxX;
    }
    document.getElementById("ball").style.left = randomX + "px";
    document.getElementById("startGame").style.display = "none";
}

window.addEventListener("deviceorientation", handleOrientation, true);
