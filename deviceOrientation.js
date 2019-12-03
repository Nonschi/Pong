
var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth,
    y = win.innerHeight|| docElem.clientHeight|| body.clientHeight



function handleOrientation(event) {
    var bar = document.getElementById("bar");
  var rotation = event.gamma;
  document.getElementById("testing").innerHTML = "values are: " + rotation.toString();
  bar.style.left = rotation/90  + "px";
}
window.addEventListener("deviceorientation", handleOrientation, true);
