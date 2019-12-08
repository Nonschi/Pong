function handleOrientation(event) {
    var bar = document.getElementById("bar");
    var rotation = event.gamma;
    var pixels = (x * rotation / 90);
    document.getElementById("testing-rotation").innerHTML = "rotations are:" + rotation;
    document.getElementById("testing-pixels").innerHTML = "pixels are:" + pixels;
    if (doc.getElementsByTagName('body')[0].clientWidth > (x * rotation / 18 a0) && (x * rotation / 180) > 0)
        bar.style.left = (x * rotation / 180) + "px";
}
window.addEventListener("deviceorientation", handleOrientation, true);
