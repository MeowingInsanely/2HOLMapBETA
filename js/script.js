///ᐠ・ᆽ・ᐟ \
// https://www.w3schools.com/html/html5_canvas.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial

// Get our cat-vase?
var cat = document.createElement("canvas"); //
cat = document.getElementById("cat-vas");

newtButt.addEventListener("click", generateRandomMap);
window.addEventListener("load", size);

function size() {
  cat.width = cat.clientWidth;
  cat.height = cat.clientHeight;

  generateRandomMap();
}

// Cat that draws stuff:
var catx = cat.getContext("2d");

// Drawing something always goes like this: vvv

// First, pick up our magical brush
catx.fillStyle = "#7F00FF"; //This here
catx.strokeStyle = "#000000";

//catx.strokeStyle = "#000000";

// A path (a bunch of circles & stuffz OwO)
//catx.beginPath();
//catx.arc(100, 100, 50, 40, 2 * Math.PI, true); //0 - 360, radians: 0 - 2*Pie (yay, double pie!)
//catx.closePath();
// And nao, draw it! ^w^
//catx.stroke();
//catx.fill();

//if <---Not a loop! A loop is something that is repeating OwO
//while
//for
var colorMap = {};
/*


var theTextWeAreGoingToSave = "";


var totallyNormalArray = Object.keys(colorMap);
"3x5", "1x8", "..."
colorMap[that value]

var i = 0;
while (i < array.length) {
  theTextWeAreGoingToSave = theTextWeAreGoingToSave + array[i];
  i = i + 1;
}

*/

function generateRandomMap() {
  /* Makes a new map */
  var isOKAI = confirm("Do you want a new cat?");
  if (isOKAI == true) {
    var x = -10;
    var y = -10;
    while (x < cat.width) {
      x = x + 10;
      while (y < cat.height) {
        y = y + 10;

        var color = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          10: "A",
          11: "B",
          12: "C",
          13: "D",
          14: "E",
          15: "F"
        };

        //A number between 0 - 15
        var redPart1 = Math.floor(Math.random() * 16);
        var redPart2 = Math.floor(Math.random() * 16);
        var greenPart1 = Math.floor(Math.random() * 16);
        var greenPart2 = Math.floor(Math.random() * 16);
        var bluePart1 = Math.floor(Math.random() * 16);
        var bluePart2 = Math.floor(Math.random() * 16);

        var pawsition = x + "," + y;
        colorMap[pawsition] =
          "#" +
          color[redPart1] +
          color[redPart2] +
          color[greenPart1] +
          color[greenPart2] +
          color[bluePart1] +
          color[bluePart2];
      }

      //Reset y
      y = -10;
    }
  }
} //Funciton ends here (I cat spell)

colorMap["0,0"] = "#000000";

var pawSitionX = 0;
var pawSitionY = 0;

function grid() {
  var x = -10;
  var y = -10;
  while (x < cat.width) {
    x = x + 10;

    while (y < cat.height) {
      y = y + 10;

      //RRGGBB (red-green-blue)

      var pawsition = x + "," + y;
      var color = colorMap[pawsition];
      catx.fillStyle = color;

      //Same codez, but in one line
      //catx.fillStyle = colorMap[x + "," + y];

      //x --> a number
      //pawSition --> the position
      //100, 110, 120, 130...
      catx.fillRect(x + pawSitionX, y + pawSitionY, 10, 10); //"Fills" a rectangle with a determined color
      // (0,0) --> (-10, 3)
      // (10, 10) --> (0, 13)
      // (20, 10) --> (10, 13)
      // Mousemove =
      // mousePosition = mouseDownPosition - currentMousePosition
      // (-10, 3)

      catx.strokeRect(x + pawSitionX, y + pawSitionY, 10, 10);
    }
    y = -10;
  }
  requestAnimationFrame(grid); //Slow loop, nu crashy ^w^
}
grid();

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmousemove_addeventlistener

//https://www.w3schools.com/jsref/dom_obj_event.asp
