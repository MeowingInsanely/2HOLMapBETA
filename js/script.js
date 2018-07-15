///ᐠ・ᆽ・ᐟ \
// https://www.w3schools.com/html/html5_canvas.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial

// Get our cat-vase?
var cat = document.createElement("canvas");
cat = document.getElementById("cat-vas");

// Magical bit of code to stop the canvas stretching
cat.parentElement.style.width = "0px";
cat.width = cat.clientWidth;
cat.height = cat.clientHeight;

// Cat that draws stuff:
var catx = cat.getContext("2d");

// First, pick up our magical brush
catx.fillStyle = "#7F00FF";
catx.strokeStyle = "#7F00FF";

// A path (a bunch of circles & stuffz OwO)
catx.beginPath();
catx.arc(100, 100, 50, 40, 2 * Math.PI, true); //0 - 360, radians: 0 - 2*Pie (yay, double pie!)
catx.closePath();

// And nao, draw it! ^w^
catx.stroke();
catx.fill();

// https://www.w3schools.com/tags/ref_colornames.asp
// https://www.w3schools.com/graphics/canvas_drawing.asp
// https://en.wikipedia.org/wiki/Web_colors

// (Color names, but HTML doesn't like them: https://xkcd.com/color/rgb/)
