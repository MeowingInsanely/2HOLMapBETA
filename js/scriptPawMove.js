//"mousemove", "mousedown", "mouseup" <---

//wobsite
//event listener --> does things when things happen!
document.addEventListener("mousemove", pawMove); //https://www.w3schools.com/jsref/obj_mouseevent.asp
document.addEventListener("mousedown", onPawDown); //push it
document.addEventListener("mouseup", onPawUp); //relase it --> rupPaw gets called 📞 ✆
cat.addEventListener("contextmenu", event => event.preventDefault()); //Anti-right click

var pawIsDown = false;
var startX = 0;
var startY = 0;

function onPawDown(meow) {
  //"mousedown"

  if (meow.button == 2) {
    pawIsDown = true;

    startX = meow.pageX + pawSitionX;
    startY = meow.pageY + pawSitionY;
  }
  //Here ish know X & Y --> we haz to store them =3
}

function pawMove(meow) {
  //Whenever the user moves the mouse a teeny tiny bit
  //meow is a variable inside the function
  var ourText = meow.pageX + "," + meow.pageY;
  textBelowCanvas.innerHTML = "Coords:" + ourText; //<--Coords text at the bottom

  if (pawIsDown == true) {
    pawSitionX = startX - meow.pageX;
    pawSitionY = startY - meow.pageY;
  }
}

function onPawUp(meow) {
  //"mouseup"
  pawIsDown = false;
}

// Run the piece of codez!
//paw("mew");
//paw("cat noises");
