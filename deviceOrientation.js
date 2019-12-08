

function handleOrientation(event) {


    var bar = document.getElementById("bar");
    var maxX = document.getElementsByTagName('body')[0].clientWidth
    var rotation = event.gamma;
    var pixels = (maxX * rotation / 90);
    var position = (maxX * rotation) / 90) - 40;
    document.getElementById("clientWidth").innerHTML = "clientWidth is: " + maxX;
    document.getElementById("testing-new-position").innerHTML = "new position is:" + position;
    document.getElementById("testing-rotation").innerHTML = "rotations are:" + rotation;
    document.getElementById("testing-pixels").innerHTML = "pixels are:" + pixels;
    if(position > 0 && (position + 80) < maxX) {
        bar.style.left = position + "px";
    }
}


window.addEventListener("deviceorientation", handleOrientation, true);
