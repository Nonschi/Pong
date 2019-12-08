

function handleOrientation(event) {
    var maxX = doc.getElementsByTagName('body')[0].clientWidth
    var bar = document.getElementById("bar");
    var rotation = event.gamma;
    var pixels = (maxx * rotation / 180);
    document.getElementById("testing-rotation").innerHTML = "rotations are:" + rotation;
    document.getElementById("testing-pixels").innerHTML = "pixels are:" + pixels;

    bar.style.left = (maxX * rotation / 180) + "px";
}
window.addEventListener("deviceorientation", handleOrientation, true);
