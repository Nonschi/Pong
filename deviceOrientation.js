

function handleOrientation(event) {
    var maxX = document.getElementsByTagName('body')[0].clientWidth
    var bar = document.getElementById("bar");
    var rotation = event.gamma;
    var pixels = (maxX * rotation / 180);
    document.getElementById("clientWidth").innerHTML = "clientWidth is: " + maxX;
    document.getElementById("testing-rotation").innerHTML = "rotations are:" + rotation;
    document.getElementById("testing-pixels").innerHTML = "pixels are:" + pixels;

    bar.style.left = (maxX * rotation / 180) + "px";
}
window.addEventListener("deviceorientation", handleOrientation, true);
