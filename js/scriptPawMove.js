//"mousemove", "mousedown", "mouseup" <---

//wobsite
//event listener --> does things when things happen!
document.addEventListener("mousemove", paw); //https://www.w3schools.com/jsref/obj_mouseevent.asp
document.addEventListener("mousedown", rPaw); //push it
document.addEventListener("mouseup", rupPaw); //relase it --> rupPaw gets called 📞 ✆
cat.addEventListener("contextmenu", event => event.preventDefault()); //Anti-right click

var pawIsDown = false;

// A piece of codez!
function paw(meow) {
  //meow is a variable inside the function
  var ourText = meow.pageX + "," + meow.pageY;
  //alert(ourText);
  textBelowCanvas.innerHTML = "Coords:" + ourText;

  if (pawIsDown == true) {
    //User is dragging
  }
}

function rPaw(meow) {
  //"mousedown"
  pawIsDown = true;
}
function rupPaw(meow) {
  //"mouseup"
  pawIsDown = false;
}

// Run the piece of codez!
//paw("mew");
//paw("cat noises");
