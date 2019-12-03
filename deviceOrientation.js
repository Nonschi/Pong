
var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth,
    y = win.innerHeight|| docElem.clientHeight|| body.clientHeight


function handleOrientation(event) {
    var bar = document.getElementById("bar");
  var rotation = event.gamma;
  document.getElementById("testing").innerHTML = "values are: hehehe " + rotation.toString();
  bar.style.left =(x*rotation/180 - 40) + "px";
}
window.addEventListener("deviceorientation", handleOrientation, true);
