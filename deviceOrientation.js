
var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth,


function handleOrientation(event) {
    var bar = document.getElementById("bar");
  var rotation = event.gamma;
  document.getElementById("testing-rotation").innerHTML = "rotation is: " + rotation.toString();
  bar.style.left =(x*rotation/90 - 40) + "px";
  var pixels = (x*rotation/90 - 40);
  document.getElementById("testing-pixels").innerHTML = "pixels are: " + pixels.toString();
}
window.addEventListener("deviceorientation", handleOrientation, true);
