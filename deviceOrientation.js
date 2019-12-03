
var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth


function handleOrientation(event) {
  var bar = document.getElementById("bar");
  var rotation = event.gamma;
  var pixels = (x*rotation/90 - 40);
  document.getElementById("testing-rotation").innerHTML = "rotations are:" + rotation.toString();
  document.getElementById("testing-pixels").innerHTML = "pixels are:" + pixels.toString();
  bar.style.left =(x*rotation/90 - 40) + "px";
}
window.addEventListener("deviceorientation", handleOrientation, true);
