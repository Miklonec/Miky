// var player = document.getElementById("miky");
// player.playbackRate = 0.7;



var myZoom = document.getElementById('my-zoom');
var width = screen.width;

if (width == 1366) {
    myZoom.style.zoom = "80%";
}
if (width == 1280) {
    myZoom.style.zoom = "80%";
}
if (width == 1024) {
    myZoom.style.zoom = "75%";
}
if (width == 1920) {
    myZoom.style.zoom = "100%";
}

console.log(myZoom);

console.log(width);