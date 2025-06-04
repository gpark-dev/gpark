let textBase = " is a";
let repeatText = ["n illustrator", " web developer", " designer"];
let index = 0;
let i = -1; //because at 0 the initial HTML is empty (undefined) and skips a letter
let deleting = false;

function typeWrite() {
  // console.log("start");
  // console.log(i);
  var textJitter = Math.floor(Math.random() * (70 - 45) + 45);
  if (index > 2) {
    index = 0; 
  }
  //deleting
  if (deleting) {
    if ($("#typing-text").html().length > textBase.length) {
      $("#typing-text").html($("#typing-text").html().slice(0, -1));
      setTimeout(typeWrite, textJitter);
    } 
    else {
      index++; 
      deleting = false;
      setTimeout(typeWrite, 1000);
    }
  } 
  //typing
  else {
    if (i === (textBase + repeatText[index]).length) {
      i = textBase.length-1;
      deleting = true;
      setTimeout(typeWrite, 2500);
    } 
    else {
      $("#typing-text").html(
        $("#typing-text").html() + (textBase + repeatText[index]).charAt(i)
      );
      // console.log($("#typing-text").html());
      setTimeout(typeWrite, textJitter);
    }
    i++;
  }
}

//cursor blinking effect
var blink = true; 
setInterval(() => {
  if (blink){
    $("#cursor").css("opacity", "0");
    blink = false;
  }
  else {
    $("#cursor").css("opacity",  "1");
    blink = true; 
  }
}, 420);

typeWrite();