
var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth,
    y = win.innerHeight|| docElem.clientHeight|| body.clientHeight


function handleOrientation(event) {
    var bar = document.getElementById("bar");
  var beta = event.beta;
  bar.style.left =(x*beta/180 - 40) + "px";
}
window.addEventListener("deviceorientation", handleOrientation, true);
