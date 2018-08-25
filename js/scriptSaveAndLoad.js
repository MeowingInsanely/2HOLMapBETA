/* TODO:
- Saving and loading (we haz 2 butt-ons already)
- Clicking on things to change the colorz
- generator 
- color picker
- Information: this color --> cats, that color --> trees, ...
- Change to confiarm thingy 
*/
safeButt.addEventListener("click", safe);
lordButt.addEventListener("click", lord);

function safe() {
  var isOKAI = confirm("Do you want a safe cat?");
  if (isOKAI == true) {
    var savedMap = "";
    var c = 0;
    var colorMapPawsitions = Object.keys(colorMap); //An array of pawsitions

    colorMap["3,5"] = "#ff0000";
    //Stef 1: Get array of names (the pawsitions)
    //Stef 2: Loop over it

    while (c < colorMapPawsitions.length) {
      var pawsition = colorMapPawsitions[c];
      var color = colorMap[pawsition];
      savedMap = savedMap + "||" + pawsition + ":" + color;
      c = c + 1;
    }
    alert(savedMap);

    localStorage["colorMap"] = savedMap;
  }
}

function lord() {
  var isOKAI = confirm("Do you want a lord cat?");
  if (isOKAI == true) {
    var whatWasDatTextAgain = localStorage["colorMap"];
    alert(whatWasDatTextAgain);
  }
}
