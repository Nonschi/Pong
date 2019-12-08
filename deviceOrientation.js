

function handleOrientation(event) {
    var bar = document.getElementById("bar");
    var maxX = document.getElementsByTagName('body')[0].clientWidth
    var rotation = event.gamma;
    var pixels = (maxX * rotation / 180);
    var position = (maxX * rotation / 180)  + (maxX / 2)
    if(pixles > 0 && pixels < maxX) {
        bar.style.left = position + "px";
    }
}
window.addEventListener("deviceorientation", handleOrientation, true);
