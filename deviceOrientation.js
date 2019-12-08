

function handleOrientation(event) {


    var bar = document.getElementById("bar");
    var maxX = document.getElementsByTagName('body')[0].clientWidth
    var boundry = maxX - 64;
    var rotation = event.gamma;
    var pixels = ((rotation / 90) * maxX)
    var position = ((rotation / 90) * maxX) + (maxX / 2)
    document.getElementById("clientWidth").innerHTML = "clientWidth is: " + maxX;
    document.getElementById("testing-new-position").innerHTML = "new position is:" + position;
    document.getElementById("testing-rotation").innerHTML = "rotations are:" + rotation;
    document.getElementById("testing-pixels").innerHTML = "pixels are:" + pixels;
    if(position > 0 && (position) < boundry) {
        bar.style.left = position + "px";
    }
}


window.addEventListener("deviceorientation", handleOrientation, true);
