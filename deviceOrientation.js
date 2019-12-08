

function handleOrientation(event) {
    var bar = document.getElementById("bar");
    var maxX = document.getElementsByTagName('body')[0].clientWidth
    var rotation = event.gamma;
    var pixels = (maxX * rotation / 180);
    var position = (maxX * rotation / 180)  + (maxX / 2)
    document.getElementById("clientWidth").innerHTML = "clientWidth is: " + maxX;
    document.getElementById("testing-new-position") = "new position is:" + position;
    document.getElementById("testing-rotation").innerHTML = "rotations are:" + rotation;
    document.getElementById("testing-pixels").innerHTML = "pixels are:" + pixels;
    if(pixels > 0 && pixels < maxX) {
        bar.style.left = position + "px";
    }
}
window.addEventListener("deviceorientation", handleOrientation, true);
